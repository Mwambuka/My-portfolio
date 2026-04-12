import React from 'react'
import Bertin from './images/Photo.jpg'
import { Link } from 'react-router-dom'
import { FaGithub, FaLinkedin, FaTwitterSquare, FaInstagram, FaFacebookF } from 'react-icons/fa'
import './Hero.css'

const Hero = () => {
    return (
        <div className='hero' id='hero'>
            <div className='content'>
                <div className='hero-badge'>
                    <span className='hero-badge-dot'></span>
                    Open to opportunities
                </div>

                <div className='hero-image'>
                    <Link to="#" aria-label="Bertin Mwambuka">
                        <img className="image" src={Bertin} alt="Bertin Mwambuka" />
                    </Link>
                </div>

                <h2>Bertin Mwambuka</h2>
                <h3>
                    <span>Software Engineer</span> · Digital Public Infrastructure · AI and ML for Public Good · Cloud & Security
                </h3>

                <div className='btn-container'>
                    <a href='#contact' className='btn btn-hire'>Get In Touch</a>
                    <a
                        href='https://drive.google.com/file/d/1mnV4K0AtEeyqJUixDm7pW42QvBs8vQBv/view?usp=sharing'
                        target="_blank"
                        rel="noopener noreferrer"
                        className='btn btn-resume'
                    >
                        View Resume ↗
                    </a>
                </div>

                <div className='social-medias'>
                    <a href="https://github.com/Mwambuka" target="_blank" rel="noopener noreferrer" className='icons' aria-label="GitHub">
                        <FaGithub className='icon' />
                    </a>
                    <a href='https://www.linkedin.com/in/bertinmwambuka/' target="_blank" rel="noopener noreferrer" className='icons' aria-label="LinkedIn">
                        <FaLinkedin className='icon' />
                    </a>
                    <a href="https://twitter.com/bertinmwambuka" target="_blank" rel="noopener noreferrer" className='icons' aria-label="Twitter">
                        <FaTwitterSquare className='icon' />
                    </a>
                    <a href="https://www.instagram.com/bertinmwambuka/" target="_blank" rel="noopener noreferrer" className='icons' aria-label="Instagram">
                        <FaInstagram className='icon' />
                    </a>
                    <a href="https://www.facebook.com/bertin.nicholas.7" target="_blank" rel="noopener noreferrer" className='icons' aria-label="Facebook">
                        <FaFacebookF className='icon' />
                    </a>
                </div>
            </div>

            <a href='#about' className='scroll-indicator' aria-label="Scroll down">
                <div className='scroll-line'></div>
                <span>Scroll</span>
            </a>
        </div>
    )
}

export default Hero
