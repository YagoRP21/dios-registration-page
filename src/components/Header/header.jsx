import { useState } from "react"
import { List, X } from 'phosphor-react'
import DesktopNavBar from "./DesktopNavBar"
import MobileNavBar from "./MobileNavBar"

const Header = () => {

    const [ open, setOpen ] = useState(false)

    const hamburguerIcon = <span className='hamburguer-icon'
                            onClick={() => setOpen(!open)} >
                                <List size={32}  /> 
                           </span>

    const closeIcon = <span className='close-icon'
                      onClick={() => setOpen(!open)} >
                        <X size={32} />
                      </span>

    const showHeaderIcon = <a href="/"><img src="../../../public/logo-dio.png" alt="logo-dio"
                           className=" logo-dio" />
                           </a>

    const hiddenHeaderIcon = <a href="/"><img src="../../../public/logo-dio.png" alt="logo-dio"
                             className="hidden logo-dio" />
                             </a>


    const closeMobileMenu = () => setOpen(false);

    return (
        <>
        <header>
            {open ?  hiddenHeaderIcon : showHeaderIcon}
            {open ? closeIcon : hamburguerIcon}

            <DesktopNavBar />
            {open && <MobileNavBar isMobile={true} closeMobileMenu={closeMobileMenu} />}
        </header>
        </>
    )
}

export default Header