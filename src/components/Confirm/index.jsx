import { Box, Button, Modal } from "@mui/material"
import { GiCancel, GiConfirmed } from "react-icons/gi";
import styles from "./styles.module.scss"


function Confirm({ open, closeModal, children, confirmFunction }) {
    return (
        <Modal
            open={open}
            onClose={closeModal}
            className={styles.modal}
        >
            <Box className={styles.box}>
                {children}
                <div>
                    <Button variant="contained" color="success" onClick={confirmFunction}>
                        Confirmar
                    </Button>
                    <Button variant="contained" color="error" onClick={closeModal}>
                        Cancelar
                    </Button>
                </div>
            </Box>
        </Modal>
    )
}

export default Confirm