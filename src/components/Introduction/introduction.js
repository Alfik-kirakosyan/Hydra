import './introduction.css'
import Vector11 from './introduction-image/Vector 11.png'
import Vector12 from '../Hero/hero-image/shape.png'
import { TEXTSECTION } from '../../Constants/constants'

const Introduction = () => (
    <section className='introduction-section'>
        <div className="introduction-container">
            <div className='introduction-header-container'>
                <div className='introduction-header'>
                    <h1 className='introduction-h1'>{TEXTSECTION[0].h1}</h1>
                    <h2 className='introduction-h2'>{TEXTSECTION[0].h2}</h2>         
                </div>
                <div className='introduction-vector'>
                    <img className='Vector-11' src={Vector11} alt='vector11-logo' /> 
                    <img className='Vector-12' src={Vector12} alt='Vector12-logo' /> 
                </div>
            </div>
            <p className='introduction-p'>
            {TEXTSECTION[0].p}
            </p>
        </div>
    </section>
)

export default Introduction