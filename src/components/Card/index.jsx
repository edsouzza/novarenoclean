import Styles from './Card.module.css'

function Card({imagem,clickmodal,titulo,descricao})
{
    return(
        <section className={Styles.areacards}> 
        
            <div className={Styles.card}>
                <img src={imagem} alt="Serviços" className={Styles.imagem} onClick={clickmodal} />
                <div className={Styles.areatextos}>
                    <h2>{titulo}</h2>
                    <p>{descricao}</p>
                </div>                
            </div>
                   
        </section>
    )
}
export default Card