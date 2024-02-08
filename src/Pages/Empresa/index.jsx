import Header from '../../components/Header'
import Container from '../../components/Container'
import Footer from '../../components/Footer'
import Titulo from '../../components/Titulo'
import Styles from './Empresa.module.css'
import { FaCouch,FaChartColumn,FaPeopleGroup } from "react-icons/fa6";
import Foto from './img/Foto.png'

function Empresa()
{
    return(
        <>
        <Header />         
            <section className={Styles.empresa}>
               <Container>                
                  <div className={Styles.content}>
                         
                      <div className={Styles.areafototextos}>

                            <figure className={Styles.areafoto}>
                              <img src={Foto} alt="Foto" className={Styles.foto} />
                              <h3 className={Styles.titulo}>Erik</h3>
                            </figure>

                            <div className={Styles.areatextos}>
                                <Titulo title='a empresa' className={Styles.titleempresa} />
                                <p>
                                  A Renovadora Renoclean é uma empresa especializada em limpeza, impermeabilização e 
                                  higienização profunda de sofás, cadeiras, colchões, poltronas, carpetes e tapetes. 
                                  Atendemos empresas, clínicas, consultórios e residências em São Paulo e região. 
                                  Nossos profissionais são altamente qualificados onde atuamos no mercado há mais de 10 anos,
                                  garantindo a qualidade dos nossos serviços. 
                                  Nos últimos anos, a Renovadora Renoclean consolidou-se como uma das mais eficientes empresas 
                                  do seu segmento, sendo amplamente reconhecida pela relação custo x benefício. 
                                  A qualidade dos produtos biodegradáveis utilizados em nossos frontes de trabalho, são um de 
                                  nossos diferenciais, destacando assim nosso compromisso com o meio ambiente. 
                                  Nosso maior objetivo é cuidar do bem-estar e saúde dos nossos clientes. 
                                  Aqui na Renovadora Renoclean, as demandas são executadas com rapidez e eficiência. 
                                  Sabemos como é importante sentir-se confiante e sem preocupações na hora de contratar este tipo de serviço. 
                                  Com uma equipe altamente preparada para investir tempo e energia em um atendimento personalizado 
                                  aguardamos você para conhecermos suas necessidades. 
                                  Não perca tempo estamos anciosos para conhecê-lo, atendê-lo e superar suas expectativas, 
                                  aguardamos seu contato o mais breve. <br />

                                  Sou <strong>Erik Pereira de Souza</strong>, gerente e dono da Renovadora Renoclean.
                                </p>
                            </div>
                        </div>
                                           

                      <div className={Styles.missao_visao_valores}>

                          <div className={Styles.card}>
                            <FaCouch  className={Styles.icone}/>
                            <h2>Missão</h2>
                            <p>Prover a higienização de móveis garantindo a nossos clientes o bem-estar em ambientes clean, 
                                destacando sempre a beleza e durabilidade dos objetos tratados sem transtornos de degradação. 
                            </p>
                          </div>              

                          <div className={Styles.card}>
                            <FaChartColumn  className={Styles.icone}/>
                            <h2>Visão</h2>
                            <p>Tornar-se uma referência no cenário estadual dos serviços prestados, buscando e desenvolvendo 
                              métodos e técnicas que agregam valores aos desejos de nosso clientes.
                            </p>
                          </div>

                          <div className={Styles.card}>
                            <FaPeopleGroup  className={Styles.icone}/>
                            <h2>Valores</h2>
                            <ul className={Styles.lista}>
                              <li>Agir com ética frente aos clientes e colaboradores</li>
                              <li>Ambientes saudáveis com móveis limpos e higienizados</li>
                              <li>Priorizar a qualidade do atendimento para nós é de suma importaância.</li>
                            </ul>
                          </div>

                       </div>                                        
                  </div> 
                </Container>
            </section>       
        <Footer />      
      </>
    )
}
export default Empresa