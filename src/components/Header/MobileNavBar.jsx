
const MobileNavBar = (props) => {
    return (
        <>
            <section className="mobile-menu">
            <svg xmlns="http://www.w3.org/2000/svg" width="145" height="90" fill="none" viewBox="0 0 92 37" class="indexstyled__Logo-sc-nziy01-2 lnRSzs"><title>DIO Logo</title><path fill="url(#paint0_linear)" d="M63.102 36.11c8.685 0 15.726-7.04 15.726-15.725 0-8.685-7.04-15.725-15.726-15.725S47.375 11.7 47.375 20.385c0 8.685 7.041 15.725 15.727 15.725z"></path><path fill="url(#paint1_linear)" d="M39.413 12.425c3.325 0 6.02-2.781 6.02-6.213 0-3.43-2.696-6.212-6.02-6.212-3.324 0-6.018 2.781-6.018 6.212 0 3.432 2.694 6.213 6.018 6.213z"></path><path fill="#F34C5D" d="M85.432 36.102c3.431 0 6.213-2.695 6.213-6.019 0-3.324-2.782-6.018-6.213-6.018-3.432 0-6.213 2.694-6.213 6.018s2.781 6.019 6.213 6.019z"></path><path fill="url(#paint2_linear)" d="M31.453.387c-4.02 0-7.48 2.326-9.133 5.713a15.58 15.58 0 00-6.61-1.453C7.034 4.647 0 11.691 0 20.378c0 8.687 7.034 15.731 15.71 15.731 8.676 0 15.71-7.044 15.71-15.731l.033-19.99z"></path><path fill="url(#paint3_linear)" d="M39.369 12.425a5.976 5.976 0 00-5.974 5.974v18.1c6.651 0 12.037-5.386 12.037-12.037v-5.974a6.07 6.07 0 00-6.063-6.063z"></path><defs><linearGradient id="paint0_linear" x1="47.367" x2="78.829" y1="20.386" y2="20.386" gradientUnits="userSpaceOnUse"><stop stop-color="#6948D0"></stop><stop offset="1" stop-color="#DF4D68"></stop></linearGradient><linearGradient id="paint1_linear" x1="33.395" x2="45.428" y1="6.216" y2="6.216" gradientUnits="userSpaceOnUse"><stop stop-color="#4E67DE"></stop><stop offset="1" stop-color="#6948D0"></stop></linearGradient><linearGradient id="paint2_linear" x1="-0.008" x2="31.454" y1="18.25" y2="18.25" gradientUnits="userSpaceOnUse"><stop stop-color="#18B0F4"></stop><stop offset="1" stop-color="#4E67DE"></stop></linearGradient><linearGradient id="paint3_linear" x1="33.39" x2="45.427" y1="24.465" y2="24.465" gradientUnits="userSpaceOnUse"><stop stop-color="#4E67DE"></stop><stop offset="1" stop-color="#6948D0"></stop></linearGradient></defs></svg>
                    <ul >
                    <li className="menu-list" onClick={() => props.isMobile && props.closeMobileMenu()}>
                        <button className="home"><a href="/">Home</a></button>
                    </li>
                    <li className="menu-list" onClick={() => props.isMobile && props.closeMobileMenu()}>
                        <button className="home"><a href="/">Para Empresas</a></button>
                    </li>
                    <div className="buttons">
                        <li className="menu-list" onClick={() => props.isMobile && props.closeMobileMenu()}>
                            <button className="cadastrar"><a href="/">Cadastrar</a></button>
                        </li>

                        <li className="menu-list" onClick={() => props.isMobile && props.closeMobileMenu()}>
                            <button className="entrar"><a href="/">Entrar</a></button>
                        </li>
                    </div>
                </ul>
            </section>
        </>
    )
}

export default MobileNavBar