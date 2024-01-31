import Header from '../../components/Header'
import Container from '../../components/Container'
import Footer from '../../components/Footer'
import Styles from './Home.module.css'
import { Link } from 'react-router-dom'

function Home()
{
    return(
        <section>
            <Header />   
                <div className={Styles.home}>
                    <div className={Styles.areaTextos}>
                        <h1>Renovadora renoclean</h1>
                        <h2>A número um em limpeza de sofás carpetes e cortinas</h2>
                        <p>Preocupada com a sustentabilidade, a Renovadora introduziu um conceito inovador na limpeza e higienização de sofás, carpetes e cortinas com produtos de qualidade que não agridem o meio ambiente. Quer conhecer?</p>                        
                    </div>
                    <div className={Styles.areaBotoes}>
                    <Link to="/empresa"><button className={Styles.btnBlue}>Sobre Nós</button></Link>
                    <Link to="/contato"><button className={Styles.btnWhite}>Contato</button></Link> 
                    </div>                    
                </div>            
            <Footer />      
        </section>
    )
}
export default Home