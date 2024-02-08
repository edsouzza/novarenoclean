import Header from '../../components/Header'
import Container from '../../components/Container'
import Footer from '../../components/Footer'
import Titulo from '../../components/Titulo'
import Styles from './Videos.module.css'
import PlayVideo from '../../components/PlayVideo'

import Video1    from './filmes/video1.mp4'
import Video2    from './filmes/video2.mp4'
import Video3    from './filmes/video3.mp4'
import Video4    from './filmes/video4.mp4'
import Video5    from './filmes/video5.mp4'
import Video6    from './filmes/video6.mp4'
import Video7    from './filmes/video7.mp4'
import Video8    from './filmes/video8.mp4'
import Video9    from './filmes/video9.mp4'

  function Videos()
  {
    return(
        <>
          <Header />    
          <section className={Styles.videos}>
              <Container>
                  <div className={Styles.content}>                    
                          
                          <div className={Styles.areaDosVideos}>

                             <dir className={Styles.video}>
                                 <PlayVideo pathVideo = {Video1} />  
                             </dir>
                             <dir className={Styles.video}>
                                 <PlayVideo pathVideo = {Video2} />  
                             </dir>
                             <dir className={Styles.video}>
                                 <PlayVideo pathVideo = {Video3} />  
                             </dir>
                             <dir className={Styles.video}>
                                 <PlayVideo pathVideo = {Video4} />  
                             </dir>
                             <dir className={Styles.video}>
                                 <PlayVideo pathVideo = {Video5} />  
                             </dir>
                             <dir className={Styles.video}>
                                 <PlayVideo pathVideo = {Video6} />  
                             </dir>
                             <dir className={Styles.video}>
                                 <PlayVideo pathVideo = {Video7} />  
                             </dir>
                             <dir className={Styles.video}>
                                 <PlayVideo pathVideo = {Video8} />  
                             </dir>                                                  
                             <dir className={Styles.video}>
                                 <PlayVideo pathVideo = {Video9} />  
                             </dir>               

                          </div>
                  </div>
              </Container>
          </section>
          <Footer />      
      </>
    )
}
export default Videos