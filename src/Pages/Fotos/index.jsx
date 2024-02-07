import Styles from './Fotos.module.css'
import Header from '../../components/Header'
import Container from '../../components/Container'
import Footer from '../../components/Footer'
import Titulo from '../../components/Titulo'
import Carousel from '../../components/Carousel'

import Foto1 from     './img/foto1.jpg'
import Foto2 from     './img/foto2.jpg'
import Foto3 from     './img/foto3.jpg'
import Foto4 from     './img/foto4.jpg'
import Foto5 from     './img/foto5.jpg'
import Foto6 from     './img/foto6.jpg'
import Foto7 from     './img/foto7.jpg'
import Foto8 from     './img/foto8.jpg'
import Foto9 from     './img/foto9.jpg'
import Foto10 from   './img/foto10.jpg'
import Foto11 from   './img/foto11.jpg'
import Foto12 from   './img/foto12.jpg'
import Foto13 from   './img/foto13.jpg'
import Foto14 from   './img/foto14.jpg'
import Foto15 from   './img/foto15.jpg'
import Foto16 from   './img/foto16.jpg'
import Foto17 from   './img/foto17.jpg'
import Foto18 from   './img/foto18.jpg'
import Foto19 from   './img/foto19.jpg'
import Foto20 from   './img/foto20.jpg'
import Foto21 from   './img/foto21.jpg'
import Foto22 from   './img/foto22.jpg'
import Foto23 from   './img/foto23.jpg'
import Foto24 from   './img/foto24.jpg'
import Foto25 from   './img/foto25.jpg'
import Foto26 from   './img/foto26.jpg'
import Foto27 from   './img/foto27.jpg'
import Foto28 from   './img/foto28.jpg'

const imgFotos = [ Foto1, Foto2, Foto3, Foto4, Foto5, Foto6, 
                   Foto7, Foto8, Foto9, Foto10, Foto11, Foto12, 
                   Foto13, Foto14,Foto15, Foto16, Foto17, Foto18, 
                   Foto19, Foto20, Foto21, Foto22, Foto23, Foto24, 
                   Foto25, Foto26, Foto27, Foto28
                 ]

function Fotos()
{ 
    return(
      <>
        <Header />    
          <section className={Styles.fotos}>
            <Container>
                <div className={Styles.content}>
                  <div className={Styles.areaFotos}>
                    
                      <Titulo title='Galeria de Fotos'/>
                      <div className={Styles.carousel}>                                                     
                          <Carousel>
                              {imgFotos.map( (item, index) => (                                  
                                    <img 
                                        src={item} 
                                        alt={item} 
                                        key={index}
                                    />                                  
                              ))}
                          </Carousel>                          
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