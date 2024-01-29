import Header from '../../components/Header'
import Container from '../../components/Container'
import Footer from '../../components/Footer'
import Styles from './Home.module.css'

function Home()
{
    return(
        <section>
            <Header />    
            <Container>
                <div className={Styles.home}>
                    <div className={Styles.areaTextos}>
                        <h1>Renovadora renoclean</h1>
                        <h2>A número um em limpeza de sofás carpetes e cortinas</h2>
                        <p>Preocupada com a sustentabilidade, a Renovadora introduziu um conceito inovador na limpeza e higienização de sofás, carpetes e cortinas com produtos de qualidade que não agridem o meio ambiente. Quer conhecer?</p>                        
                    </div>
                    <div className={Styles.areaBotoes}>
                        <button className={Styles.btnBlue}>Sobre Nós</button>
                        <button className={Styles.btnWhite}>Contato</button>
                    </div>                    
                </div>
            </Container>
            <Footer />      
        </section>
    )
}
export default Home