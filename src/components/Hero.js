import React from 'react'
import Bertin from './images/cvpic.jpg'
import { Link } from 'react-router-dom'
import {FaGithub, FaLinkedin, FaTwitterSquare, FaInstagram, FaCodepen, FaFacebookF, FaNpm} from 'react-icons/fa'
import './Hero.css'

const Hero = () => {
    return (
        <div className='hero' id='hero'>
            <div className='content'>
                <div className='hero-image'>
                    <Link to="#" className=''>
                        <img className="image" src={Bertin} alt=""/>
                    </Link>
                </div>
                <h2>Bertin Mwambuka</h2>
                <h3>Software Engineer</h3>
                <div className='btn-container'>
                    <a href='#contact' className='btn btn-hire'>Reach out</a>
                    <a href='https://drive.google.com/file/d/1KhgP8KBQPfOG_HXs9dFxxOZPtI2tx0Zz/view?usp=sharing' target="_blank" className='btn btn-resume'>Resume</a>
                </div>
                <div className='social-medias'>
                    <a href="https://github.com/Mwambuka" target="_blank" className='icons'>
                        <FaGithub  className='icon'/>
                    </a>
                    <a href='https://www.linkedin.com/in/bertin-mwambuka-9a645b201/' target="_blank" className='icons'>
                        <FaLinkedin className='icon' />
                    </a>
                    <a href="https://twitter.com/bertinmwambuka" target="_blank" className='icons'>
                        <FaTwitterSquare  className='icon'/>
                    </a>
                    <a href="https://www.instagram.com/bertinmwambuka/" target="_blank" className='icons'>
                        <FaInstagram className='icon' />
                    </a>
                    <a href="https://www.facebook.com/bertin.nicholas.7" target="_blank" className='icons'>
                        <FaFacebookF className='icon' />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Hero
