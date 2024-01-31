import Styles from './Titulo.module.css'

function Titulo(props)
{
    return(
        <div>
            <h2 className={Styles.titulo}>{props.title}</h2>
        </div>
    )
}

export default Titulo