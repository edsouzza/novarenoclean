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
                              <Titulo title="redes sociais"/>                              
                              <p className={Styles.textoRedes}><a href="http://www.facebook.com/edsouzza" target="_blank" rel="noreferrer noopener"><BsFacebook className={Styles.icone}/></a> Acompanhe-nos pela nossa rede social para mais informações.</p>                              
                              
                              <Titulo title="telefones"/>
                              <p className={Styles.textoRedes}><BsTelephone className={Styles.icone}  />(011) 3921-3996 | (011) 95425-4706</p>
                              
                              <Titulo title="e-mail"/>
                              <p className={Styles.textoRedes}><BsEnvelope className={Styles.icone}/>renovadorarenoclean@gmail.com</p>
                              
                              <h3 className={Styles.textoDesenv}>Desenvolvido pela Edsof Informática</h3>
                              
                              <h4 className={Styles.textoDesenv}>edsouzza@hotmail.com | (011) 99475-6517</h4>
                              
                              <h4 className={Styles.textoDesenv}>® Todos os direitos reservados</h4>
                          </div>
                          
                          <div className={Styles.boxRight}>
                              <Titulo title="fale conosco" className={Styles.titleFaleConosco}/>
                              <p className={Styles.textoFaleConosco}>Dúvidas, criticas ou sugestões? Fale conosco!</p>
                              
                              <form className={Styles.formulario}>
                                                                  
                                  <input type="text" name='nome' placeholder='Seu nome' required />                                 
                                  <input type="email" name='email' placeholder='Seu e-mail' required />                                  
                                  <input type="text" name='assunto' placeholder='Assunto' required />
                                  <textarea name="mensagem" cols="30" rows="6" placeholder='Mensagem max.50 caracteres' style={{resize: "none"}}  ></textarea>
                                  <div className={Styles.areaButton}>
                                      <button type='submit' className={Styles.btnEnviar}>Enviar</button>
                                  </div>
                                
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