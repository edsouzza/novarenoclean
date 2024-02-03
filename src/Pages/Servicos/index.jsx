import Header from '../../components/Header'
import Container from '../../components/Container'
import Footer from '../../components/Footer'
import Styles from './Servicos.module.css'
import Titulo from '../../components/Titulo'
import Card from '../../components/Card'
import Modal from '../../components/Modal'
import Servico1 from './img/servico1.png'
import Servico2 from './img/servico2.png'
import Servico3 from './img/servico3.png'
import Servico4 from './img/servico4.png'
import { useState } from 'react'

function Servicos() {
  const [ openModal, setOpenModal ] = useState(false)
  const [ urlModal,  setUrlModal  ] = useState("")
 
  const handleClick =()=>{      
      setOpenModal(true)
      setUrlModal(Servico4)
  }

  const closeModal = () =>{
    // fechar o Modal
    setOpenModal(false)
  } 
     
  return (
    <>
      <Header />
 
      <div className={Styles.servicos}>

        <Container>
            <div className={Styles.content}>

                {/* area dos textos */}
                <div className={Styles.areatextos}>
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

                {/* area dos cards */}
                <div className={Styles.cards}>
                  
                    <Card 
                      imagem    ={Servico1} 
                      titulo    ="Sofás"
                      descricao ="Tratamento de primeira qualidade para sofás e estofados ficarem 
                                  clean e sem ácaros. Todos os serviços são executados no local."
                      clickmodal={handleClick}               
                    />
                    <Card 
                      imagem    ={Servico2} 
                      titulo    ="Colchões"
                      descricao ="Qualidade de vida com um sono renovador livre de impurezas, ácaros
                                  e fungos. Todos os nossos serviços são executados no local."
                      clickmodal={handleClick}
                    />
                    <Card 
                      imagem    ={Servico3} 
                      titulo    ="Carpetes"
                      descricao ="Método inovador para remoção de ácaros, limpeza de tapetes com total segurança. 
                                  Todos os serviços são executados no local."
                      clickmodal={handleClick}            
                    />
                    <Card 
                      imagem    ={Servico4} 
                      titulo    ="Cortinas"
                      descricao ="Suas cortinas impecáveis com a cor natural sem manchas ou avarias.Todos os 
                                  nossos serviços são executados no local."
                      clickmodal={handleClick}
                    />
                    
                </div>
                
            </div>
        </Container>

      </div>
      <Footer />

      <Modal isOpen={openModal} >          
          <img src={urlModal} onClick={closeModal} alt="Serviço selecionado" style={{borderRadius:'1rem'}}/>
      </Modal>     
       {/* FALTA ENVIAR DINAMICAMENTE A IMAGEM DO SERVIÇO SELECIONADO O SERVICO ACIMA  */}
       {/* FALTA ACAO DE CLICAR NA IMAGEM DO MODAL PARA FECHA-LO */}

    </>
  )
}
export default Servicos