import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaTasks } from "react-icons/fa";
import { authContext } from "../../context/Auth";
import styles from "./styles.module.scss";
import Card from "../../components/Card";
import FloatingButton from "../../components/FloatingButton";
import FormModalChecklist from "../../components/FormModalChecklist";
import { toast } from "react-toastify";

function Home() {
    const { api, user } = useContext(authContext)
    const [openModal, setOpenModal] = useState(false)
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

    const createChecklist = async () => {
        const formData = new FormData()
        formData.append('icon', checklistData.icon);
        formData.append('name', checklistData.name);
        formData.append('description', checklistData.description);
        formData.append('priority', checklistData.priority);
        formData.append('author', user._id);

        const response = await api.post("/checklist", formData)
        setChecklists(prevState => ([...prevState, response.data.checklist]))

        for(let data in checklistData) {
            checklistData[data] = ""
        }

        toast.success(`A checklist ${response.data.checklist.name} foi criada com sucesso!`)
    }

    const checklistFilter = checklists.filter(checklist => checklist.author._id === user._id)

    return (
        <main>
            <div className={styles.checklistsContainer}>
                {checklistFilter.map(checklist => (
                    <Link to={`checklist/${checklist._id}`} key={checklist._id} >
                        <Card checklist={checklist} image={checklist.icon} avatar={checklist.author.avatar} />
                    </Link>
                ))}
            </div>
            <FloatingButton onClick={() => setOpenModal(true)} />

            <FormModalChecklist
                openModal={openModal}
                closeModal={() => setOpenModal(false)}
                checklistData={checklistData}
                setChecklistData={setChecklistData}
                submitFunction={createChecklist}
            >
                <h2 style={{ display: "flex", alignItems: "center", gap: "1rem" }}> <FaTasks /> Criar Checklist</h2>
            </FormModalChecklist>
        </main>
    )
}

export default Home