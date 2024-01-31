import Header from '../../components/Header'
import Container from '../../components/Container'
import Footer from '../../components/Footer'
import Styles from './Empresa.module.css'
import { FaCouch,FaChartColumn,FaPeopleGroup } from "react-icons/fa6";
import Foto from './img/Foto.png'

function Empresa()
{
    return(
        <>
        <Header />    
          <Container>
            <div className={Styles.empresa}>

                <div className={Styles.bio}>

                  <figure className={Styles.areafoto}>
                    <img src={Foto} alt="Foto" className={Styles.foto} />
                    <h3 className={Styles.titulo}>Erik</h3>
                  </figure>

                  <div className={Styles.textos}>
                      <h2 className={Styles.titulo}>A Empresa</h2>
                      <p>
                        A Renovadora Renoclean é uma empresa especializada em limpeza, impermeabilização e 
                        higienização profunda de sofás, cadeiras, colchões, poltronas, carpetes e tapetes. 
                        Atendemos empresas, clínicas, consultórios e residências em São Paulo e região. 
                        Nossos profissionais são altamente qualificados e atuam no mercado há mais de 10 anos,
                        garantindo a qualidade dos nossos serviços. Nos últimos anos, a Renovadora Renocleann 
                        consolidou-se como uma das mais eficientes empresas do seu segmento, sendo amplamente 
                        reconhecida pela relação custo x benefício, qualidade dos seus produtos biodegradáveis,
                        por seu compromisso com o meio ambiente e a satisfação dos seus clientes. Nosso maior 
                        objetivo é cuidar do bem-estar e saúde dos nossos clientes. Aqui na Renovadora Renoclean,
                        você pode obter este serviço com rapidez e eficiência. Sabemos como é importante sentir-se
                        confiante e sem preocupações na hora de contratar este tipo de serviço. Com uma equipe 
                        altamente preparada para investir tempo e energia em um atendimento personalizado 
                        aguardamos você para conhecermos sua necessidade. Seja bem-vindo estamos anciosos 
                        para atendê-lo e superar suas expectativas, aguardamos seu contato.<br />

                        Sou <strong>Erik Pereira de Souza</strong>, gerente e dono da Renovadora Renoclean.
                      </p>
                  </div>
                </div> {/* Bio */}
              
                <div className={Styles.missao_visao_valores}>

                    <div className={Styles.card}>
                      <FaCouch  className={Styles.icone}/>
                      <h2>Missão</h2>
                      <p>Prover a higienização de móveis garantindo a nossos clientes o bem-estar em ambientes clean, 
                          destacando sempre a beleza e durabilidade dos objetos tratados.
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
                        <li>Priorizar a qualidade do atendimento.</li>
                      </ul>
                    </div>

                </div>{/* missao_visao_valores */}
              
            </div>{/* empresa */}

          </Container>
        <Footer />      
      </>
    )
}
export default Empresa