import { Box, Button, Modal } from "@mui/material"
import { GiCancel, GiConfirmed } from "react-icons/gi";
import styles from "./styles.module.scss"
import { MdWarning } from "react-icons/md";


function Confirm({ open, closeModal, children, confirmFunction }) {
    return (
        <Modal
            open={open}
            onClose={closeModal}
            className={styles.modal}
        >
            <Box className={styles.box}>
                <div className={styles.headerBox}>
                    <h2><MdWarning /> CONFIRME</h2>
                </div>
                <div className={styles.bodyBox}>
                    {children}
                    <div>
                        <Button variant="contained" color="success" onClick={confirmFunction}>
                            Confirmar
                        </Button>
                        <Button variant="contained" color="error" onClick={closeModal}>
                            Cancelar
                        </Button>
                    </div>
                </div>
            </Box>
        </Modal>
    )
}

export default Confirm