import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material"
import { LoadingButton } from "@mui/lab"
import styles from "../../styles/settingsLayout.module.scss"
import useAccountInformation from "../../hooks/useAccountInformation"


function Settings() {
    const { userInfo, loading, handleSubmit, setUserInfo } = useAccountInformation()

    return (
        <main>
            <div className={styles.inputsContaienr}>
                <form className={styles.inputs} onSubmit={handleSubmit}>
                    <h3>Informações da Conta</h3>
                    <TextField fullWidth variant="filled" label="Nome" value={userInfo.name} onChange={ev => setUserInfo(oldValue => ({ ...oldValue, name: ev.target.value }))} />
                    <TextField type="email" fullWidth variant="filled" label="Email" value={userInfo.email} onChange={ev => setUserInfo(oldValue => ({ ...oldValue, email: ev.target.value }))} />
                    <TextField fullWidth variant="filled" label="Usuário" value={userInfo.username} onChange={ev => setUserInfo(oldValue => ({ ...oldValue, username: ev.target.value }))} />

                    <div className={styles.inlineInputs}>
                        <TextField type="date" variant="filled" fullWidth label="Data de Nascimento" value={userInfo.dateOfBirth ?? "yyyy-MM-dd"} onChange={ev => setUserInfo(oldValue => ({ ...oldValue, dateOfBirth: ev.target.value }))} />
                        <FormControl variant="filled" fullWidth>
                            <InputLabel id="select">Gênero</InputLabel>
                            <Select
                                label="Gênero"
                                labelId="select"
                                value={userInfo.gender}
                                onChange={ev => setUserInfo(oldValue => ({ ...oldValue, gender: ev.target.value }))}
                                sx={{
                                    color: "#fff",
                                    backgroundColor: "#131B5A",
                                    "& .MuiSelect-icon": {
                                        fill: "#fff"
                                    }
                                }}
                            >
                                <MenuItem value={"male"}>Homem</MenuItem>
                                <MenuItem value={"female"}>Mulher</MenuItem>
                                <MenuItem value={"other"}>Outro</MenuItem>
                            </Select>
                        </FormControl>
                    </div>


                    <LoadingButton loading={loading} type="submit" color="success" variant="contained">
                        Salvar
                    </LoadingButton>
                </form>
            </div >
        </main >
    )
}

export default Settings