import './process.css'
import { PROCESS } from "../../Constants/constants"
import ArrowRight from '../../Constants/images/arrow-right.png'
import ButtonLeft from '../Services/services-image/arrow-left.png'
import ButtonRight from '../Services/services-image/arrow-right.png'


const Process = () => (
    <section>
        <div className="process-container">
            {
              PROCESS.map(({header, text, id}) => (
                <div className="process-card" id={id} key={header}>
                    <div className='button-left'>
                        <img className='ButtonLeft' src={ButtonLeft} alt='ButtonLeft' />
                    </div>
                    <div>
                        <h1 className="process-number">{header}</h1>
                        <div className='process-text'>
                            <img className='' src={ArrowRight} alt='ArrowRight' />
                            <p className='process-p'>{text}</p>
                        </div>
                    </div>   
                    <div className='button-right'>
                        <img className='ButtonRight' src={ButtonRight} alt='ButtonRight' />
                    </div>
                </div>
              ))
            }
        </div>
    </section>
)

export default Process