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

                </div>
            </Container>
            <Footer />      
        </section>
    )
}
export default Home