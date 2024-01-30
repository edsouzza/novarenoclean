import imgLogo from "./img/logo.png"
import styles from "./Logo.module.css"
import { Link } from 'react-router-dom'

function Logo(){
    return(
        <>
            <Link to="/">
                <img src={imgLogo} className={styles.logo} alt="logo" />
            </Link>
        </>
    )
}
export default Logo