import Header from '../../components/Header'
import Container from '../../components/Container'
import Footer from '../../components/Footer'
import Styles from './Servicos.module.css'
import Titulo from '../../components/Titulo'

function Servicos() {
  return (
    <>
      <Header />

      <div className={Styles.servicos}>

        <Container>
            <div className={Styles.content}>

              <div className={Styles.textos}>
                <Titulo title='nossos serviços' />
                <p>
                  Precisando de limpeza e higienização especializada para estofados, cortinas, poltronas, sofás,
                  cadeiras, colchões, carpetes, tapetes, divisórias e veículos com excelência na qualidade do
                  serviço, segurança e responsabilidade de quem esta no ramo a mais de 10 anos? Você esta no
                  lugar certo... conheça aqui um pouco mais da Renovadora Fast Clean. Executamos tudo no local,
                  sendo assim você pode acompanhar todo o procedimento de limpeza. Nossos equipamentos são de
                  uso exclusivo e passam por rigorosos testes antes de qualquer demanda.
                </p>
              </div>

              <div className={Styles.cards}>
                <div className={Styles.card}>
                  {/* <img src={Servico1} alt="Serviço1" className={Styles.imagem} /> */}
                  <h2>Sofás</h2>
                  <p>Tratamento de primeira qualidade para sofás e estofados, clean e sem ácaros.
                    Todos os serviços são executados no local.
                  </p>
                </div>

                <div className={Styles.card}>
                  {/* <img src={Servico1} alt="Serviço1" className={Styles.imagem} /> */}
                  <h2>Colchões</h2>
                  <p>Qualidade de vida com um sono renovador livre de impurezas, ácaros e fungos. Todos os nossos serviços são executados no local.
                  </p>
                </div>

                <div className={Styles.card}>
                  {/* <img src={Servico1} alt="Serviço1" className={Styles.imagem} /> */}
                  <h2>Carpetes</h2>
                  <p> Método inovador para remoção de ácaros limpeza de tapetes com total segurança. Todos os serviços são executados no local.
                  </p>
                </div>

                <div className={Styles.card}>
                  {/* <img src={Servico1} alt="Serviço1" className={Styles.imagem} /> */}
                  <h2>Cortinas</h2>
                  <p>Suas cortinas impecáveis com a cor natural sem manchas ou avarias.Todos os nossos serviços são executados no local.
                  </p>
                </div>
              </div>
            </div>
        </Container>

      </div>
      <Footer />
    </>
  )
}
export default Servicos