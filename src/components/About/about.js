import './about.css'

import Pixel from './about-image/pixels.jpg'

const About = () => (
    <section id='about'>
        <div className='about-container'>
            <div>
                <img className='pixel' src={Pixel} alt='Pixel-jpg' /> 
            </div>
            <div className='about-text'>
                <div>
                    <h1 className='about-h1'>ABOUT</h1>
                    <h2 className='about-h2'>HYDRA VR</h2>
                </div>
                <div>
                    <p className='about-p'>
                        Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus mattis rhoncus <br/>
                        urna neque viverra justo. Vivamus at augue eget arcu dictum. Ultrices gravida <br/>
                        dictum fusce ut placerat orci. Aenean et tortor at risus viverra adipiscing at in. <br/>
                        Mattis aliquam faucibus purus in massa. Est placerat in egestas erat imperdiet <br/>
                        sed. Consequat semper viverra nam libero justo laoreet sit amet. Aliquam <br/>
                        etiam erat velit scelerisque in dictum non consectetur a. Laoreet sit amet <br/>
                        cursus sit amet. Vel eros donec ac odio tempor orci dapibus. Sem nulla pha <br/>
                        retra diam sit amet nisl suscipit adipiscing bibendum. Leo a diam sollicitudi
                        n tempor.
                    </p>
                </div>
                <div>
                    <button className="hero-button">LET'S GET IN TOUCH</button>
                </div>
            </div>
        </div>
    </section>
)

export default About