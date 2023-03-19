
import './headerContact.css'
import CombainedShape from './header-contact-image/Combined-Shape.png'
import Shape from './header-contact-image/message.png'
import Call from './header-contact-image/call.png'
import Shape1 from './header-contact-image/shape-1.png'
import Shape2 from './header-contact-image/shape-2.png'


const HeaderContact = () => (
    <section className="headerContact-container-all" id="contact-us">
        <div className="headerContact-container">
            
            <div className='headerContact'>
                <div className='headerContact-arrows'>
                    <img className='Shape2' src={Shape2} alt='Shape2-img' />
                </div>
                <img className='CombainedShape' src={CombainedShape} alt='CpmbainedShape-img' />
                <div>
                    <h2>Pay Us a Visit</h2>
                    <p>Union St, Seattle, WA 98101, United States</p>
                </div>
                <div className='headerContact-arrows'>
                    <img className='Shape1' src={Shape1} alt='Shape1-img' />
                </div>
            </div>
            <div className='headerContact-call' id='header-1'>
                <img className='CombainedShape' src={Call} alt='Shape-img' />
                <div>
                    <h2>Give Us a Call</h2>
                    <p>(111) 111 011</p>
                </div>
            </div>
            <div className='headerContact' id='header-2'>
                <img className='CombainedShape' src={Shape} alt='Shape2-img' />
                <div>
                    <h2>Send As a Message</h2>
                    <p>Contact@hydraVTech.com</p>
                </div>
            </div>
        </div>
    </section>
)

export default HeaderContact