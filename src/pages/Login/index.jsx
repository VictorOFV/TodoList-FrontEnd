import styles from "./styles.module.scss"
import { Link, Navigate, redirect } from "react-router-dom";
import FormLoginAndRegister from "../../components/FormLoginAndRegister";
import HeaderForm from "../../components/FormLoginAndRegister/HeaderForm";
import FooterForm from "../../components/FormLoginAndRegister/FooterForm";
import BodyForm from "../../components/FormLoginAndRegister/BodyForm";
import useLogin from "../../hooks/useLogin";
import { Button, TextField } from "@mui/material";

function Login() {
    const { email, password, setEmail, setPassword, handleSubmit } = useLogin()

    if (localStorage.getItem("@user") || localStorage.getItem("@token")) {
        return <Navigate to={"/"} />
    }

    return (
        <main className={styles.login}>
            <FormLoginAndRegister>
                <HeaderForm>
                    <h3><span style={{ color: "gray" }}>Todo</span> List</h3>
                    <p>Bem vindo de volta!</p>
                    <p>Faça o login na sua conta.</p>
                </HeaderForm>
                <BodyForm>
                    <TextField onChange={ev => setEmail(ev.target.value)} value={email} type="email" name="email" size="medium" color="secondary" variant="standard" label="Email" />
                    <TextField onChange={ev => setPassword(ev.target.value)} value={password} type="password" name="current-password" size="medium" color="secondary" variant="standard" label="Senha" />
                    <Button onClick={handleSubmit} type="submit" variant="contained" color="secondary">Entrar</Button>
                </BodyForm>
                <FooterForm>
                    <p>Ainda não tem conta? <Link to={"/register"}>Cadastre-se</Link></p>
                </FooterForm>
            </FormLoginAndRegister>
        </main>
    );
}

export default Login;
