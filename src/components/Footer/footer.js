import './footer.css'

import { HashLink as Link } from 'react-router-hash-link'

import VectorLogo from '../../Constants/images/Vector-logo.png'
import Vector20 from '../../Constants/images/Vector20.png'
import Facebook from '../../Constants/images/facebook.png'
import Twitter from '../../Constants/images/twitter.png'
import Linkedin from '../../Constants/images/linkedin.png'
import Youtube from '../../Constants/images/youtube.png'
import Instagram from '../../Constants/images/instagram.png'
import Pinterest from '../../Constants/images/pinterest.png'
import Vector17 from'../../Constants/images/Vector17.png'

const Footer = () => (
    <footer className='footer-coontainer-all'>
        <div className='footer-container'>
            <div>
                <img className='vector-logo-main-footer' src={VectorLogo} alt='VectorLogo' /> 
            </div>
            <img className='vector-logo' src={Vector20} alt='Vector20' /> 
            <div className='footer-text'>
                <Link className='footer-word' to='#about'>
                    <h6>ABOUT</h6>
                </Link>
                <Link className='footer-word' to='#services'>
                    <h6>SERVICES</h6>
                </Link>
                <Link className='footer-word' to='#technologies'>
                    <h6>TECHNOLOGIES</h6>
                </Link>
                <Link className='footer-word' to='#how-to'>
                    <h6>HOW TO</h6>
                </Link>
                <Link className='footer-word' to='#join-hydra'>
                    <h6>JOIN HYDRA</h6>
                </Link>
            </div>
            <img className='vector-logo' src={Vector20} alt='Vector20' /> 
            <div className='footer-text'>
                <h6>F.A.Q</h6>
                <h6>SITEMAP</h6>
                <h6>CONDITIONS</h6>
                <h6>LICENSES</h6>
            </div>
            <img className='vector-logo' src={Vector20} alt='Vector20' /> 
            <div className='footer-socialize'>
                <h6>SOCIALIZE WITH HYDRA</h6>
                <div className='footer-socialize-logo'>
                    <a href='https://www.facebook.com/'>
                        <img className='vector-logo' src={Facebook} alt='facebook' /> 
                    </a>
                    <a href='https://twitter.com/'>
                        <img className='vector-logo' src={Twitter} alt='twitter' /> 
                    </a>
                    <a href='https://www.linkedin.com/'>
                        <img className='vector-logo' src={Linkedin} alt='linkedin' /> 
                    </a>
                    <a href='https://www.youtube.com/'>
                        <img className='vector-logo' src={Youtube} alt='youtube' /> 
                    </a>
                    <a href='https://www.instagram.com/'>
                        <img className='vector-logo' src={Instagram} alt='instagram' /> 
                    </a>
                    <a href='https://www.pinterest.com/'>
                        <img className='vector-logo' src={Pinterest} alt='pinterest' /> 
                    </a>
                </div>
                <button type="submit" className="hero-button-footer">BUILD YOUR WORLD</button>
            </div>
        </div>
        <img className='footer-line' src={Vector17} alt='Vector17' /> 
        <div className='footer-h5-container'>
            <h5 className='footer-h5'>2023 © HYDRA LANDING PAGE - BY ZINE. E. FALOUTI - ALL RIGHTS RESERVED </h5>
        </div>
    </footer>
)

export default Footer