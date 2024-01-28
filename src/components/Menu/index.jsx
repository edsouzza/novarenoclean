import styles from'./Menu.module.css'
import { BsFillHouseFill, BsStripe , BsBuilding, BsCameraFill, BsCameraVideoFill, BsEnvelopeAtFill , BsPersonVcardFill  } from "react-icons/bs";

function Menu(){

   return(       
        <nav className={styles.navbar}>        
            <ul>
                <li><a href="#"><BsFillHouseFill   className={styles.icone}/>Home</a></li>
                <li><a href="#"><BsBuilding    className={styles.icone}/>Empresa</a></li>
                <li><a href="#"><BsStripe   className={styles.icone}/>Serviços</a></li>
                <li><a href="#"><BsCameraFill   className={styles.icone}/>Fotos</a></li>
                <li><a href="#"><BsCameraVideoFill className={styles.icone}/>Vídeos</a></li>
                <li><a href="#"><BsEnvelopeAtFill   className={styles.icone}/>Contato</a></li>
                <li><a href="#"><BsPersonVcardFill   className={styles.icone}/>Políticas</a></li>
            </ul>  
        </nav>           
   )

}
export default Menu