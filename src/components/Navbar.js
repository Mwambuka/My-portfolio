import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import './navbar.css'

const Navbar = () => {
    const [click, setClick] = useState(false)
    const [color, setColor] = useState(false)

    const handleClick = () => setClick(!click)
    const closeMenu = () => setClick(false)

    useEffect(() => {
        const changeColor = () => {
            setColor(window.scrollY >= 72)
        }
        window.addEventListener('scroll', changeColor)
        return () => window.removeEventListener('scroll', changeColor)
    }, [])

    return (
        <div className={color ? 'header header-bg' : 'header'}>
            <nav className='navbar'>
                <a href='/' className='logo'>
                    <div className='logo-mark'>BM</div>
                    <span className='logo-text'>Bertin Mwambuka</span>
                </a>
                <div className='hamburger' onClick={handleClick} aria-label="Toggle menu">
                    {click
                        ? <FaTimes size={22} style={{ color: '#ffffff' }} />
                        : <FaBars size={22} style={{ color: '#ffffff' }} />
                    }
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'><a href='/' onClick={closeMenu}>Home</a></li>
                    <li className='nav-item'><a href='#about' onClick={closeMenu}>About</a></li>
                    <li className='nav-item'><a href='#education' onClick={closeMenu}>Education</a></li>
                    <li className='nav-item'><a href='#projects' onClick={closeMenu}>Projects</a></li>
                    <li className='nav-item'><a href='#skills' onClick={closeMenu}>Skills</a></li>
                    <li className='nav-item'><a href='#contact' onClick={closeMenu}>Contact</a></li>
                    <li className='nav-item'>
                        <a
                            href='https://drive.google.com/file/d/1QUot2Se5C-Nv-MQrCuTbSqr9L_w_w1kB/view?usp=sharing'
                            target="_blank"
                            rel="noopener noreferrer"
                            className='nav-resume-btn'
                            onClick={closeMenu}
                        >
                            Resume ↗
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
