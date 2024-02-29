import { Modal, Box, TextField, Button } from "@mui/material"
import styles from "./styles.module.scss"

function FormModalTask({ open, handleClose, createTask, children, stateChecklist, setStateChecklist }) {
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className={styles.modal}
        >
            <Box className={styles.box}>
                {children}

                <div className={styles.inputs}>
                    <TextField
                        onChange={ev => setStateChecklist(prevState => ({ ...prevState, name: ev.target.value }))}
                        value={stateChecklist.name}
                        name="TaskName"
                        label="Nome"
                        variant="filled"
                        helperText=""
                        error={false}
                        required sx={
                            {
                                backgroundColor: "#00000030"
                            }
                        } />
                    <TextField
                        onChange={ev => setStateChecklist(prevState => ({ ...prevState, description: ev.target.value }))}
                        value={stateChecklist.description}
                        name="TaskDescription"
                        label="Descrição"
                        variant="filled"
                        helperText=""
                        error={false}
                        multiline
                        rows={5}
                        required
                        sx={
                            {
                                backgroundColor: "#00000030"
                            }
                        }
                    />
                </div>
                <div>
                    <Button variant="contained" color="success" onClick={createTask}>
                        Salvar
                    </Button>
                    <Button variant="contained" color="error" onClick={handleClose}>
                        Cancelar
                    </Button>
                </div>
            </Box>
        </Modal>
    )
}

export default FormModalTask