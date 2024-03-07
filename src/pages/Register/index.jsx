import { Link, Navigate } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import styles from "./styles.module.scss"
import FormLoginAndRegister from "../../components/FormLoginAndRegister";
import HeaderForm from "../../components/FormLoginAndRegister/HeaderForm";
import FooterForm from "../../components/FormLoginAndRegister/FooterForm";
import BodyForm from "../../components/FormLoginAndRegister/BodyForm";
import useRegisterAccount from "../../hooks/useRegisterAccount";

function Register() {
    const { name, email, username, password, confirmPassword, setName, setEmail, setUsername, setPassword, setConfirmPassword, handleSubmit } = useRegisterAccount()

    if (localStorage.getItem("@user") || localStorage.getItem("@token")) {
        return <Navigate to={"/"} />
    }

    return (
        <main className={styles.register}>
            <FormLoginAndRegister>
                <HeaderForm>
                    <h3><span style={{ color: "gray" }}>Todo</span> List</h3>
                    <p>Registre-se e comece</p>
                    <p>a criar suas próprias listas.</p>
                </HeaderForm>
                <BodyForm>
                    <TextField onChange={ev => setName(ev.target.value)} value={name} name="fullname" size="medium" color="secondary" variant="standard" label="Nome" />
                    <TextField onChange={ev => setEmail(ev.target.value)} value={email} type="email" name="email" size="medium" color="secondary" variant="standard" label="Email" />
                    <TextField onChange={ev => setUsername(ev.target.value)} value={username} name="username" size="medium" color="secondary" variant="standard" label="Username" />
                    <TextField onChange={ev => setPassword(ev.target.value)} value={password} name="current-password" size="medium" color="secondary" variant="standard" label="Senha" autoComplete="off" />
                    <TextField onChange={ev => setConfirmPassword(ev.target.value)} value={confirmPassword} name="confirm-current-password" size="medium" color="secondary" variant="standard" label="Confirme sua Senha" autoComplete="off" />

                    <Button onClick={handleSubmit} type="submit" variant="contained" color="secondary">Cadastrar</Button>
                </BodyForm>
                <FooterForm>
                    <p>Já possui conta? Faça <Link to={"/login"}>login</Link></p>
                </FooterForm>
            </FormLoginAndRegister>
        </main>
    )
}

export default Register