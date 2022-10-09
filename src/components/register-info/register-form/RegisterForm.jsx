import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEnvelope, faPhone, faLock } from '@fortawesome/free-solid-svg-icons'

const RegisterForm = () => {
    return (
        <>
        <div className="form-input-container">
            <section className="form">
                <section className="form-title">
                    <div className="gradient-detail"></div>
                    <strong>Comece agora grátis</strong>
                    <p>Crie sua conta e make the change._</p>
                </section>

                <form action="" className="form-info">
                    <FontAwesomeIcon icon={faUser} className="icon-user"></FontAwesomeIcon>
                    <input type="text" className="name" placeholder="Nome Completo" />
                    <FontAwesomeIcon icon={faEnvelope} className="icon-email"></FontAwesomeIcon>
                    <input type="email" className="email" placeholder="Seu melhor @email" />
                    <FontAwesomeIcon icon={faPhone} className="icon-phone"></FontAwesomeIcon>
                    <input type="tel" className="telefone" placeholder="Celular ex: (11) 96123-4567" pattern="[0-9]{(2)} [0-9]{5}-[0-9]{4}" />
                    <FontAwesomeIcon icon={faLock} className="icon-lock"></FontAwesomeIcon>
                    <input type="password" className="senha" placeholder="Senha" />
                </form>

                <button className="create-account-button"><a href="/">CRIAR MINHA CONTA GRÁTIS</a></button>

            </section>
            <section className="account-politics">
                <span className='politics'>
                    Ao clicar em "criar minha conta grátis",<br />
                    declaro que aceito as Políticas de Privacidade<br />
                    e os Termos de Uso da DIO.
                </span>
                <div className='login-option'>
                    <p>Já tenho conta.</p>
                    <button>Fazer login</button>
                </div>
            </section>
        </div>
        </>
    )
}

export default RegisterForm