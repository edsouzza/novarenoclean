import Styles from './Modal.module.css'
import { useState } from 'react'

function Modal({isOpen, children})
{
    const [ Open, setOpen ] = useState(false)
    if(isOpen){
        return(           
            <section className={Styles.bgModal}>
                <div className={Styles.modal} >
                     {children}                    
                </div>
            </section>
        )
    }
    return null
}
export default Modal