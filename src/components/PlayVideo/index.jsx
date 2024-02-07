import Styles from './PlayVideo.module.css'

import React from 'react'
import { DefaultPlayer as Video } from 'react-html5video'
import 'react-html5video/dist/styles.css'
import Capa from './img/capa.png'

const PlayVideo = ({ pathVideo }) => {
    return(
        <section className={Styles.playvideos}>         
            <Video className={Styles.videoplay} poster={Capa} onCanPlayThrough={()=>{console.log('video play')}} controls={false}>            
                <source src={ pathVideo } type="video/webm"/>
            </Video>                 
        </section>
    )
}
export default PlayVideo