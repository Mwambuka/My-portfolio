import React from 'react'
import { FaGithub, FaLinkedin, FaTwitterSquare, FaEnvelope, FaPhone } from 'react-icons/fa'
import './Contact.css'

export const Contact = () => {
    return (
        <div className='contact-wrapper' id='contact'>
            <div className='container'>
                <div className='contact-header'>
                    <span className='section-label'>Get In Touch</span>
                    <h2 className='section-title section-title-center'>Let's Connect</h2>
                    <p className='contact-subtitle'>
                        Whether you have a role in mind, a project to discuss, or just want to say hello — my inbox is always open.
                    </p>
                </div>

                <div className='contact-card'>
                    <div className='contact-items'>
                        <a href='mailto:bertinmwambuka@gmail.com' className='contact-item'>
                            <div className='contact-item-icon'>
                                <FaEnvelope color='#fff' />
                            </div>
                            <div className='contact-item-body'>
                                <span className='contact-item-label'>Email</span>
                                <span className='contact-item-value'>bertinmwambuka@gmail.com</span>
                            </div>
                        </a>

                        <a href='tel:+250798904755' className='contact-item'>
                            <div className='contact-item-icon'>
                                <FaPhone color='#fff' />
                            </div>
                            <div className='contact-item-body'>
                                <span className='contact-item-label'>Phone</span>
                                <span className='contact-item-value'>+250 798 904 755</span>
                            </div>
                        </a>
                    </div>

                    <div className='contact-divider'>Find me on</div>

                    <div className='contact-socials'>
                        <a
                            href='https://github.com/Mwambuka'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='social-link'
                            aria-label='GitHub'
                        >
                            <FaGithub /> GitHub
                        </a>
                        <a
                            href='https://www.linkedin.com/in/bertinmwambuka/'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='social-link'
                            aria-label='LinkedIn'
                        >
                            <FaLinkedin /> LinkedIn
                        </a>
                        <a
                            href='https://twitter.com/bertinmwambuka'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='social-link'
                            aria-label='Twitter'
                        >
                            <FaTwitterSquare /> Twitter
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
