import './services.css'

import { CARDS } from "../../Constants/constants"
import Line from '../../Constants/images/line.png'
import ArrowLeft from './services-image/arrow-left.png'
import ArrowRight from './services-image/arrow-right.png'


const Services = () => (
    <section className='services-container-all' id='services'>
        <div 
            className="services-container"
        >
        {
                CARDS.map(({img, h1, text, alt}) => (
                    <>
                    
                    <div className="card-container" id={alt}  key={alt}>
                        <div className='arrows'>
                            <img className='ArrowLeft' src={ArrowLeft} alt="ArrowLeft" />
                        </div>
                        <div className='card-style'>
                            <img className='card-img' src={img} alt={alt} />
                            <h4>{h1}</h4>
                            <img className='card-line' src={Line} alt='card-line' />
                            <br/>
                            <p className='card-text'>{text}</p>
                            <button className="join-button">TRY IT NOW</button>
                        </div>
                        <div className='arrows'>
                            <img className='ArrowRight' src={ArrowRight} alt="ArrowRight" />
                        </div>
                    </div>
                    
                    </> 
                ))
        }
        </div>
    </section>
)

export default Services