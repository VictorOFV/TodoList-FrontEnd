import { Box, Button, FormControl, InputLabel, MenuItem, Modal, Select, TextField } from "@mui/material"
import styles from "./styles.module.scss"
import { useCallback, useState } from "react"
import { useDropzone } from "react-dropzone"
import { LoadingButton } from "@mui/lab"

function FormModalChecklist({ children, openModal, closeModal, checklistData, setChecklistData, submitFunction, buttonLoading }) {
    const onDrop = useCallback((file) => {
        const fileUrl = URL.createObjectURL(file[0])
        setChecklistData(prevState => ({ ...prevState, icon: file[0], imageURL: fileUrl }))
    }, [])

    const { getRootProps, getInputProps } = useDropzone({ onDrop, multiple: false });

    const handleSubmit = (ev) => {
        ev.preventDefault()
        submitFunction()
    }

    return (
        <Modal
            open={openModal}
            onClose={closeModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className={styles.modal}
        >
            <form onSubmit={handleSubmit}>
                <Box className={styles.box}>
                    <div className={styles.modalHeader}>
                        {children}
                    </div>
                    <div className={styles.modalBody}>
                        <div className={styles.inputs}>
                            <div className={styles.dropzoneContainer}>
                                <div {...getRootProps()} className={styles.dropzone}>
                                    <input {...getInputProps()} />
                                    {checklistData.imageURL ? (
                                        <img src={checklistData.imageURL} className={styles.previewImage} />
                                    ) : (
                                        <p>Arraste e solte sua imagem aqui, ou clique para selecionar a imagem.</p>
                                    )}
                                </div>
                            </div>

                            <TextField
                                onChange={ev => setChecklistData(prevState => ({ ...prevState, name: ev.target.value }))}
                                name="checklist-name"
                                label="Nome"
                                variant="filled"
                                value={checklistData.name}
                                helperText=""
                                error={false}
                                required sx={
                                    {
                                        backgroundColor: "#00000030"
                                    }
                                } />
                            <FormControl variant="filled" fullWidth>
                                <InputLabel id="select">Prioridade *</InputLabel>
                                <Select
                                    name="priority"
                                    required
                                    label="Prioridade"
                                    labelId="select"
                                    value={checklistData.priority}
                                    onChange={ev => setChecklistData(prevState => ({ ...prevState, priority: ev.target.value }))}
                                    sx={{
                                        color: "#fff",
                                        backgroundColor: "#02022B",
                                        "& .MuiSelect-icon": {
                                            fill: "#fff"
                                        },
                                        "&:hover": {
                                            backgroundColor: "#02022B"
                                        }
                                    }}
                                >
                                    <MenuItem value={"low"}>Baixa</MenuItem>
                                    <MenuItem value={"medium"}>Media</MenuItem>
                                    <MenuItem value={"high"}>Alta</MenuItem>
                                </Select>
                            </FormControl>
                            <TextField
                                onChange={ev => setChecklistData(prevState => ({ ...prevState, description: ev.target.value }))}
                                value={checklistData.description}
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
                    </div>
                    <div className={styles.modalFooter}>
                        <div>
                            <LoadingButton
                                loading={buttonLoading}
                                variant="contained"
                                color="success"
                                type="submit"
                                onClick={submitFunction}
                                sx={{
                                    ".MuiCircularProgress-svg": {
                                        color: "#fff"
                                    }
                                }}
                            >
                                Salvar
                            </LoadingButton>
                            <Button variant="contained" color="error" onClick={closeModal}>
                                Cancelar
                            </Button>
                        </div>
                    </div>
                </Box>
            </form>
        </Modal>
    )
}

export default FormModalChecklist