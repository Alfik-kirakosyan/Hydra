import './hero.css'

import { HashLink as Link } from 'react-router-hash-link'

import Shape from './hero-image/shape.png'
import HeroImg from './hero-image/hero.jpg'


const Hero = () => (
    <section>
        <div className="hero-container">
            <div className="hero-text">
                <div>
                    <h1 className='hero-h1'><span className='mark-h1'>Dive</span> &nbsp; Into The Depths</h1>
                    <h1 className='hero-h1'>Of <span className='mark-h1'>&nbsp; Virtual Reality</span></h1>          
                </div>
                 <p>
                    Lorem Ipsum is simply dummy text of the printing and 
                    typesetting industry. Lorem Ipsum has been the industry's 
                    standard dummy text ever since the 1500s, when an unknown
                </p>
                <div className='hero-button-div'>
                    <Link to='#how-build'>
                        <button className="hero-button">BUILD YOUR WORLD</button>
                    </Link>
                    <img className='shape' src={Shape} alt='shape-logo' /> 
                </div>
            </div>
            <div className='hero-img'>
                <img className='hero' src={HeroImg} alt='hero-img' />
            </div>
        </div>
    </section>
)

export default Hero