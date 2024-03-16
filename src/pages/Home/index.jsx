import { FaTasks } from "react-icons/fa";
import { Zoom } from "@mui/material";
import styles from "./styles.module.scss";
import Card from "../../components/Card";
import FloatingButton from "../../components/FloatingButton";
import FormModalChecklist from "../../components/FormModalChecklist";
import useChecklist from "../../hooks/useChecklist";

function Home() {
    const checklistState = useChecklist()
    let timeDelay = 300

    return (
        <main>
            <div className={styles.checklistsContainer}>
                {checklistState.checklistsUserFilter.map(checklist => (
                    <Zoom key={checklist._id} in={true} style={{ transitionDelay: timeDelay = timeDelay + 100 }}>
                        <div>
                            <Card
                                checklist={checklist}
                                deleteChecklist={checklistState.deleteChecklist}
                                updateChecklist={checklistState.updateChecklist}
                                checklistData={checklistState.checklistData}
                                setChecklistData={checklistState.setChecklistData}
                                handleCloseModal={checklistState.handleCloseModal}
                                cleanInputs={checklistState.cleanInputs}
                                buttonLoading={checklistState.buttonLoading}
                            />
                        </div>
                    </Zoom>
                ))}
            </div>
            <FloatingButton onClick={() => checklistState.setOpenModal(true)} />

            <FormModalChecklist
                openModal={checklistState.openModal}
                closeModal={checklistState.handleCloseModal}
                checklistData={checklistState.checklistData}
                setChecklistData={checklistState.setChecklistData}
                submitFunction={checklistState.createChecklist}
                buttonLoading={checklistState.buttonLoading}
                modalTitle={"Criar Checklist"}
            />
        </main>
    )
}

export default Home