import Logo from "../Logo"
import Menu from "../Menu/"
import styles from "./Header.module.css"


function Header()
{
    return(
        <section className={styles.header}>
            <nav className={styles.navbar}>
                <Logo />     
                <Menu />                    
            </nav>
        </section>
    )
}
export default Header