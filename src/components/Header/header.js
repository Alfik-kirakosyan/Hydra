import React, { useState } from "react"
import { HashLink as Link } from 'react-router-hash-link'
 
import "./header.css"

import Vector from './header-images/Vector.png'
import Frame from './header-images/Frame.png'
import menuIcon from './header-images/Hamburger-Button.png'

const navigation = [
    {
        id: "1",
        title: "ABOUT",
        to: "#about"
    },
    {
        id: "2",
        title: "SERVICES",
        to: "#services"
    },
    {
        id: "3",
        title: "TECHNOLOGIES",
        to: "#technologies"
    },
    {
        id: "4",
        title: "HOW TO",
        to: "#how-to"
    },
]

const Header = () => {

    const [isClicked, setIsClicked] = useState(null)
    const open = Boolean(isClicked)
    const [isOdd, setIsOdd] = useState(0)


    const handleClick = (event) => {
        setIsOdd(isOdd + 1)
        
        if(isOdd % 2 === 0){
            setIsClicked(true)
        } else {
            setIsClicked(false)
        }
    }

    return (
        <header className='header-container'>
            <div className='vector-container'>
                <img className='vector' src={Vector} alt='vector-logo' />
                <img className='frame' src={Frame} alt='frame-logo' />
            </div>
            <div className={open ? "header-menu" : "header-menu-close"}>
                <nav className="nav-container">
                    <ul className="nav">
                        {
                            navigation.map(({id, title, to}) => (
                                <Link
                                    to={to}
                                    key={id}
                                    className="nav-li"
                                >
                                    {title}
                                </Link>
                            ))
                        }
                    </ul>
                </nav>
                <div className="button-container">
                    <Link to='#contact-us'>
                        <button 
                            className="contact-button"
                        >CONTACT US</button>
                    </Link>
                    <Link to='#join-hydra'>
                        <button className="join-button">JOIN HYDRA</button>
                    </Link>
                </div>
            </div>
            
            <div className="menu">
                <img 
                    className='menu-icon' 
                    src={menuIcon} 
                    alt='menuIcon' 
                    onClick={handleClick}
                />
            </div>
        </header>
    )
}




export default Header