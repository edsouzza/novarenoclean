import imgLogo from "./img/logo.png"
import styles from "./Logo.module.css"

function Logo(){
    return(
        <>
            <a href="/">
                <img src={imgLogo} className={styles.logo} alt="logo" />
            </a>
        </>
    )
}
export default Logo