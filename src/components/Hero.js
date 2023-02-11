import React from 'react'
import Bertin from './images/Bertin.jpg'
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
                    <a href='https://drive.google.com/file/d/1KV2hMVh-NhYcHmsjRkvtn_m37WWBcBI3/view?usp=sharing' className='btn btn-resume'>Resume</a>
                </div>
                <div className='social-medias'>
                    <a href="https://github.com/Mwambuka" className='icons'>
                        <FaGithub  className='icon'/>
                    </a>
                    <a href='https://www.linkedin.com/in/bertin-mwambuka-9a645b201/' className='icons'>
                        <FaLinkedin className='icon' />
                    </a>
                    <a href="https://twitter.com/bertinmwambuka" className='icons'>
                        <FaTwitterSquare  className='icon'/>
                    </a>
                    <a href="https://www.instagram.com/bertinmwambuka/" className='icons'>
                        <FaInstagram className='icon' />
                    </a>
                    <a href="https://www.facebook.com/bertin.nicholas.7" className='icons'>
                        <FaFacebookF className='icon' />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Hero
