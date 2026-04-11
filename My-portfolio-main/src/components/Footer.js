import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <ul className='footer-nav'>
                    <li><a href='/'>Home</a></li>
                    <li><a href='#about'>About</a></li>
                    <li><a href='#education'>Education</a></li>
                    <li><a href='#projects'>Projects</a></li>
                    <li><a href='#skills'>Skills</a></li>
                    <li><a href='#contact'>Contact</a></li>
                </ul>

                <div className='footer-divider'></div>

                <div className='footer-bottom'>
                    <p>
                        Designed &amp; Developed by{' '}
                        <span className='footer-name'>Bertin Mwambuka</span>
                        {' '}· 2025
                    </p>
                    <p className='footer-tagline'>Software Engineer · Cloud · Security</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
