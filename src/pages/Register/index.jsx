import { Link, Navigate } from "react-router-dom";
import styles from "./styles.module.scss"
import FormLoginAndRegister from "../../components/FormLoginAndRegister";
import HeaderForm from "../../components/FormLoginAndRegister/HeaderForm";
import FooterForm from "../../components/FormLoginAndRegister/FooterForm";
import BodyForm from "../../components/FormLoginAndRegister/BodyForm";
import useRegisterAccount from "../../hooks/useRegisterAccount";

function Register() {
    const { name, email, password, confirmPassword, setName, setEmail, setPassword, setConfirmPassword, handleSubmit } = useRegisterAccount()

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
                    <input onChange={ev => setName(ev.target.value)} type="text" name="name" placeholder="Nome" value={name} required />
                    <input onChange={ev => setEmail(ev.target.value)} type="email" name="email" placeholder="Email" value={email} required />
                    <input onChange={ev => setPassword(ev.target.value)} type="password" name="current-password" placeholder="Senha" autoComplete="off" value={password} required />
                    <input onChange={ev => setConfirmPassword(ev.target.value)} type="password" name="confirmPassword" placeholder="Confirme sua senha" value={confirmPassword} autoComplete="off" required />
                    <button onClick={handleSubmit} type="submit">Cadastrar</button>
                </BodyForm>
                <FooterForm>
                    <p>Já possui conta? Faça <Link to={"/login"}>login</Link></p>
                </FooterForm>
            </FormLoginAndRegister>
        </main>
    )
}

export default Register