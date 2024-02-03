import Slider from 'react-slick';
import Styles from './Carousel.module.css'

function Carousel({ children })
{
    const settings = {
        dots: false,
        infinite: false,
        speed: 300,
        centerMode: false,
        variableWidth:true,
        AdaptiveHeight:true,
        // slidesToShow: 3,
        slidesToScroll: 1
    };    
    
    return(
       <div className={Styles.carousel}>
            <Slider {...settings}>
                { children }
            </Slider>
       </div>
    )
}
export default Carousel
