import { TextField } from "@mui/material"
import { LoadingButton } from "@mui/lab"
import styles from "../../styles/settingsLayout.module.scss"
import useChangePassword from "../../hooks/useChangePassword"

function ChangePassword() {
    const { passwords, loading, handleSubmit, setPasswords } = useChangePassword()
    
    return (
        <main>
            <div className={styles.inputsContaienr}>
                <form className={styles.inputs} onSubmit={handleSubmit}>
                    <h3>Trocar Senha</h3>

                    <TextField
                        fullWidth
                        name="current-password"
                        type="password"
                        variant="filled"
                        label="Senha Atual"
                        value={passwords.oldPassword}
                        onChange={ev => setPasswords(oldValue => ({ ...oldValue, oldPassword: ev.target.value }))}
                    />
                    <div className={styles.inlineInputs}>
                        <TextField
                            fullWidth
                            name="new-password"
                            type="password"
                            variant="filled"
                            label="Nova Senha"
                            value={passwords.newPassword}
                            onChange={ev => setPasswords(oldValue => ({ ...oldValue, newPassword: ev.target.value }))}
                        />
                        <TextField
                            fullWidth
                            name="confirm-new-password"
                            type="password"
                            variant="filled"
                            label="Confirme a nova senha"
                            value={passwords.confirmNewPassword}
                            onChange={ev => setPasswords(oldValue => ({ ...oldValue, confirmNewPassword: ev.target.value }))} />
                    </div>

                    <LoadingButton
                        loading={loading}
                        type="submit"
                        color="success"
                        variant="contained"
                        sx={{
                            '& .MuiCircularProgress-root': {
                                color: '#fff',
                            }
                        }}
                    >
                        Salvar
                    </LoadingButton>
                </form>
            </div>
        </main>
    )
}

export default ChangePassword