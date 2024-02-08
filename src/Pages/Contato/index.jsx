import Styles from './Contato.module.css'
import Header from '../../components/Header'
import Container from '../../components/Container'
import Footer from '../../components/Footer'
import Titulo from '../../components/Titulo'

function Contato()
{ 
    return(
      <>
        <Header />    
          <section className={Styles.contato}>
            <Container>
                <div className={Styles.content}>
                  <div className={Styles.areaConteudo}>
                    
                      <Titulo title='Contato' className={Styles.title}/>
                                            
                  </div>
                </div>
            </Container>
          </section>
        <Footer />      
      </>
    )
}
export default Contato