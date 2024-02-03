import Header from '../../components/Header'
import Container from '../../components/Container'
import Footer from '../../components/Footer'

function TemplateBase()
{
    return(
      <>
        <Header />    
          <section className={Styles.template}>
            <Container>
                <div className={Styles.content}>
                  <div className={Styles.areaConteudo}>
                  </div>
                </div>
            </Container>
          </section>
        <Footer />      
      </>
    )
}
export default TemplateBase