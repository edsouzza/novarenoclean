import Styles from './Contato.module.css'
import Header from '../../components/Header'
import Container from '../../components/Container'
import Footer from '../../components/Footer'
import Titulo from '../../components/Titulo'
import { BsFacebook, BsEnvelope, BsTelephone   } from "react-icons/bs";

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
                      <div className={Styles.areaBox}>
                          <div className={Styles.boxLeft}>
                              <h2>redes sociais</h2>
                              <p><a href="http://www.facebook.com/edsouzza" target="_blank" rel="noreferrer noopener"><BsFacebook className={Styles.icone}/></a> Acompanhe-nos pela nossa rede social para mais informações.</p>                              
                              <h2>telefones</h2>
                              <p><BsTelephone  className={Styles.icone}/> (011) 3921-3996 | (011) 95425-4706</p>
                              <p><BsEnvelope   className={Styles.icone}/> renovadorarenoclean@gmail.com</p>
                              <h2>Desenvolvido pela Edsof Informática</h2>
                              <h3>® Todos os direitos reservados</h3>
                              <h4>edsouzza@hotmail.com | (011) 99475-6517</h4>
                          </div>
                          <div className={Styles.boxRight}>
                              <h2>fale conosco</h2>
                              <p>Dúvidas, criticas ou sugestões? Entre em contato conosco seu feedback é muito importante para nós!</p>
                              <form action="">
                                <input type="text" name='nome' placeholder='Seu nome'/>
                                <input type="email" name='email' placeholder='Seu e-mail'/>
                                <input type="text" name='assunto' placeholder='Assunto'/>
                                <textarea name="mensagem" cols="30" rows="10" placeholder='Mensagem max.50 caracteres'></textarea>
                                <button type='submit'>Enviar</button>
                              </form>
                          </div>
                      </div>                                            
                  </div>
                </div>
            </Container>
          </section>
        <Footer />      
      </>
    )
}
export default Contato