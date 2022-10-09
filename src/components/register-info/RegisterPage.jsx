import RegisterForm from "./register-form/RegisterForm"

const RegisterPage = () => {
    return (
        <>
        <section className="form-container">
            <div className="text">
                <div className="gradient-detail"></div>
                <strong>A plataforma para você aprender com experts,
                        dominar as principais tecnologias e entrar mais
                        rápido nas empresas mais desejadas.
                </strong>
                <button className="voltar">VOLTAR PARA LOGIN</button>
            </div>

            <RegisterForm />
        </section>
        </>
    )
}

export default RegisterPage