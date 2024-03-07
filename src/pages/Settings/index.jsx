import { Button, FormControl, InputLabel, MenuItem, Select, TextField, styled } from "@mui/material"
import { useContext } from "react"
import { authContext } from "../../context/Auth"
import styles from "./styles.module.scss"

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

function Settings() {
    const { user } = useContext(authContext)
    return (
        <main>
            <h1>Configuração</h1>

            <div className={styles.inputsContaienr}>
                <FormControl className={styles.inputs}>
                    <h3>Informações do usuário</h3>
                    <TextField fullWidth variant="filled" label="Nome" value={user.name} />
                    <TextField type="email" fullWidth variant="filled" label="Email" value={user.email} />
                    <TextField fullWidth variant="filled" label="Usuário" />

                    <div className={styles.inlineInputs}>
                        <TextField type="date" variant="filled" fullWidth label="Data de Nascimento" value={"2002-08-20"} />
                        <FormControl variant="filled" fullWidth>
                            <InputLabel id="select">Genero</InputLabel>
                            <Select
                                label="Genero"
                                labelId="select"
                                value={"men"}
                                sx={{
                                    color: "#fff",
                                    backgroundColor: "#131B5A",
                                    "& .MuiSelect-icon": {
                                        fill: "#fff"
                                    }
                                }}
                            >
                                <MenuItem value={"men"}>Homem</MenuItem>
                                <MenuItem value={"woman"}>Mulher</MenuItem>
                                <MenuItem value={"other"}>Outro</MenuItem>
                            </Select>
                        </FormControl>
                    </div>

                    <TextField fullWidth multiline rows={5} variant="filled" label="Biografia"
                        InputProps={{
                            style: {
                                color: "#fff",
                            },
                        }}
                        sx={{
                            backgroundColor: "#131B5A",
                        }}
                    />

                    <div className={styles.inlineInputs}>
                        <TextField type="password" fullWidth variant="filled" label="Senha Atual" />
                        <TextField type="password" fullWidth variant="filled" label="Nova Senha" />
                    </div>

                    <Button color="success" variant="contained">
                        Salvar
                    </Button>
                </FormControl>

            </div >
        </main >
    )
}

export default Settings