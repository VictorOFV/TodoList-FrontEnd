import styles from "./styles.module.scss"
import { Link, Navigate, redirect } from "react-router-dom";
import FormLoginAndRegister from "../../components/FormLoginAndRegister";
import HeaderForm from "../../components/FormLoginAndRegister/HeaderForm";
import FooterForm from "../../components/FormLoginAndRegister/FooterForm";
import BodyForm from "../../components/FormLoginAndRegister/BodyForm";
import useLogin from "../../hooks/useLogin";

function Login() {
    const { email, password, setEmail, setPassword, handleSubmit } = useLogin()

    if(localStorage.getItem("@user") || localStorage.getItem("@token")) {
        return <Navigate to={"/"}/>
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
                    <input type="email" name="email" placeholder="Email" onChange={ev => setEmail(ev.target.value)} value={email} required />
                    <input type="password" name="current-password" autoComplete="off" onChange={ev => setPassword(ev.target.value)} value={password} placeholder="Senha" required />
                    <button onClick={handleSubmit} type="submit">Login</button>
                </BodyForm>
                <FooterForm>
                    <p>Ainda não tem conta? <Link to={"/register"}>Cadastre-se</Link></p>
                </FooterForm>
            </FormLoginAndRegister>
        </main>
    );
}

export default Login;
