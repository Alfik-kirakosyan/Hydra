import './technologies.css'

import TechnologiesImg from '../../Constants/images/technologies.jpg'
import ArrowDown from '../../Constants/images/arrow-down.png'
import HydraTech1 from '../../Constants/images/Hydra-Tech1.png'
import HydraTech2 from '../../Constants/images/Hydra-Tech2.png'
import HydraTech3 from '../../Constants/images/Hydra-Tech3.png'
import HydraTech4 from '../../Constants/images/Hydra-Tech4.png'
import ArrowLeft from '../Services/services-image/arrow-left.png'
import ArrowRight from '../Services/services-image/arrow-right.png'

const Technologies = () => (
    <section className='technologies-section' id='technologies'>
        <div className='technologies-container'>
            <div className='technologies-img' style={{ backgroundImage: `url(${TechnologiesImg})` }}>
                <h2 className='technologies-h1-first'>TECHNOLOGIES & HARDWARE</h2>
                <h2 className='technologies-h1'>USED BY HYDRA VR.</h2>
            </div>
            <div className='arrow-container'>
                    <div className='arrow-button-container'>
                        <img className='arrow-down' src={ArrowDown} alt='ArrowDown' /> 
                    </div>
            </div>
            <div className='technologies-logo-container'>
                <div className='technologies-logo-main'>
                    <div>
                        <img className='ArrowLeft'  src={ArrowLeft} alt='ArrowLeft' /> 
                    </div>
                    <img   src={HydraTech1} alt='HydraTech1' /> 
                    <div>
                        <img className='ArrowRight'  src={ArrowRight} alt='ArrowRight' /> 
                    </div>
                </div>
                <div className='technologies-logo'>
                    <img src={HydraTech2} alt='HydraTech2' /> 
                </div>
                <div className='technologies-logo'>
                    <img  src={HydraTech3} alt='HydraTech3' /> 
                </div>
                <div className='technologies-logo'>
                    <img  src={HydraTech4} alt='HydraTech4' /> 
                </div>
            </div>
        </div>
    </section>
)

export default Technologies