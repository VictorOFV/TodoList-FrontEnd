import { Button, FormControl, TextField } from "@mui/material"
import styles from "../../styles/settingsLayout.module.scss"

function ChangePassword() {
    return (
        <main>
            <div className={styles.inputsContaienr}>
                <FormControl className={styles.inputs}>
                    <h3>Trocar Senha</h3>

                    <TextField fullWidth variant="filled" label="Senha Atual" />
                    <div className={styles.inlineInputs}>
                        <TextField fullWidth variant="filled" label="Nova Senha" />
                        <TextField fullWidth variant="filled" label="Confirme a nova senha" />
                    </div>

                    <Button color="success" variant="contained">
                        Salvar
                    </Button>
                </FormControl>
            </div>
        </main>
    )
}

export default ChangePassword