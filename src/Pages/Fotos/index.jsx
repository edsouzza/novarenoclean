import Header from '../../components/Header'
import Container from '../../components/Container'
import Footer from '../../components/Footer'
import Titulo from '../../components/Titulo'
import Styles from './Fotos.module.css'
import Carousel from '../../components/Carousel'

function Fotos()
{
    return(
      <>
        <Header />    
          <section className={Styles.fotos}>
            <Container>
                <div className={Styles.content}>
                  <div className={Styles.areaFotos}>
                      <Titulo title='Galeria de Fotos' />
                      <div className={Styles.carousel}>
                          <Carousel />
                      </div>
                      
                  </div>
                </div>
            </Container>
          </section>
        <Footer />      
      </>
    )
}
export default Fotos