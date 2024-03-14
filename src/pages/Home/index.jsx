import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaTasks } from "react-icons/fa";
import { authContext } from "../../context/Auth";
import styles from "./styles.module.scss";
import Card from "../../components/Card";
import FloatingButton from "../../components/FloatingButton";
import FormModalChecklist from "../../components/FormModalChecklist";
import { toast } from "react-toastify";
import { Zoom } from "@mui/material";

function Home() {
    const { api, user } = useContext(authContext)
    const [openModal, setOpenModal] = useState(false)
    const [buttonLoading, setButtonLoading] = useState(false)
    const [checklists, setChecklists] = useState([])
    const [checklistData, setChecklistData] = useState({
        name: "",
        description: "",
        priority: "",
        icon: "",
        imageURL: ""
    })

    useEffect(() => {
        const getChecklists = async () => {
            const response = await api.get("/checklist")
            setChecklists(response.data.checklists)
        }
        getChecklists()
    }, [])

    let valueDelay = 300

    const createChecklist = async () => {
        setButtonLoading(true)
        try {
            const formData = new FormData()
            formData.append('icon', checklistData.icon);
            formData.append('name', checklistData.name);
            formData.append('description', checklistData.description);
            formData.append('priority', checklistData.priority);
            formData.append('author', user._id);

            const response = await api.post("/checklist", formData)
            cleanInputs()
            setChecklists(prevState => ([...prevState, response.data.checklist]))

            toast.success(`A checklist ${response.data.checklist.name} foi criada com sucesso!`)
        } catch (error) {
            console.error(error)
        } finally {
            setButtonLoading(false)
        }
    }

    const handleCloseModal = () => {
        setOpenModal(false)
        cleanInputs()
    }

    const cleanInputs = () => {
        for (let data in checklistData) {
            checklistData[data] = ""
        }
    }

    const checklistFilter = checklists.filter(checklist => checklist.author._id === user._id)

    return (
        <main>
            <div className={styles.checklistsContainer}>
                {checklistFilter.map(checklist => (
                    <Zoom in={true} style={{ transitionDelay: valueDelay = valueDelay + 100 }}>
                        <Link to={`checklist/${checklist._id}`} key={checklist._id} >
                            <Card checklist={checklist} image={checklist.icon} avatar={checklist.author.avatar} />
                        </Link>
                    </Zoom>
                ))}
            </div>
            <FloatingButton onClick={() => setOpenModal(true)} />

            <FormModalChecklist
                openModal={openModal}
                closeModal={handleCloseModal}
                checklistData={checklistData}
                setChecklistData={setChecklistData}
                submitFunction={createChecklist}
                buttonLoading={buttonLoading}
            >
                <h2 style={{ display: "flex", alignItems: "center", gap: "1rem" }}> <FaTasks /> Criar Checklist</h2>
            </FormModalChecklist>
        </main>
    )
}

export default Home