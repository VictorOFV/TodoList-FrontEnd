import { useContext } from "react";
import { FaTasks } from "react-icons/fa";
import { Zoom } from "@mui/material";
import { authContext } from "../../context/Auth";
import styles from "./styles.module.scss";
import Card from "../../components/Card";
import FloatingButton from "../../components/FloatingButton";
import FormModalChecklist from "../../components/FormModalChecklist";
import useChecklist from "../../hooks/useChecklist";

function Home() {
    const { user } = useContext(authContext)
    const {
        buttonLoading, checklistData, checklists, cleanInputs,
        createChecklist, deleteChecklist, handleCloseModal,
        openModal, setChecklistData, updateChecklist, setOpenModal
    } = useChecklist()
    const checklistFilter = checklists.filter(checklist => checklist.author._id === user._id)
    let valueDelay = 300

    return (
        <main>
            <div className={styles.checklistsContainer}>
                {checklistFilter.map(checklist => (
                    <Zoom in={true} style={{ transitionDelay: valueDelay = valueDelay + 100 }}>
                        <div>
                            <Card
                                checklist={checklist}
                                deleteChecklist={deleteChecklist}
                                updateChecklist={updateChecklist}
                                checklistData={checklistData}
                                setChecklistData={setChecklistData}
                                handleCloseModal={handleCloseModal}
                                cleanInputs={cleanInputs}
                                buttonLoading={buttonLoading}
                            />
                        </div>
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