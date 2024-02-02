import Styles from './Card.module.css'

function Card(props)
{
    return(
        <section className={Styles.areacards}> 
        
            <div className={Styles.card}>
                <img src={props.imagem} alt="Serviços" className={Styles.imagem} onClick={props.clickmodal} />
                <div className={Styles.areatextos}>
                    <h2>{props.titulo}</h2>
                    <p>{props.descricao}</p>
                </div>                
            </div>
                   
        </section>
    )
}
export default Card