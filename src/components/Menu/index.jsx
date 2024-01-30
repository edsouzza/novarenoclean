import { Link } from 'react-router-dom';
import styles from './Menu.module.css'
import { BsFillHouseFill, BsStripe , BsBuilding, BsCameraFill, BsCameraVideoFill, BsEnvelopeAtFill , BsPersonVcardFill  } from "react-icons/bs";

function Menu(){

   return(       
        <nav className={styles.navbar}>        
            <ul>
                <li><Link to="/"><BsFillHouseFill            className={styles.icone}/>Home</Link></li>
                <li><Link to="/empresa"><BsBuilding          className={styles.icone}/>Empresa</Link></li>
                <li><Link to="/servicos"><BsStripe           className={styles.icone}/>Serviços</Link></li>
                <li><Link to="/fotos"><BsCameraFill          className={styles.icone}/>Fotos</Link></li>
                <li><Link to="/videos"><BsCameraVideoFill    className={styles.icone}/>Vídeos</Link></li>
                <li><Link to="/contato"><BsEnvelopeAtFill    className={styles.icone}/>Contato</Link></li>
                <li><a href="../../assets/Politica-de-Cookies.pdf" target="_blank" rel="noreferrer noopener"><BsPersonVcardFill  className={styles.icone}/>Políticas</a></li>
            </ul>  
        </nav>           
   )

}
export default Menu