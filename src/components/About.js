import React from 'react'
import './About.css'

const About = () => {
    return (
        <div className='about' id='about'>
            <div className='container'>
                <div className='col-2'>
                    <h2>About</h2>
                   <div className='about-me'>
                        <p>Result-oriented software developer with 3+ years of professional work experience.</p>
                        <p>As a Software developer, my job is to bridge the gap between imagination design and coding, by making it interactive and scalable.</p>
                        <p>My mission is to find a position within a diverse team , which allows me to expand my knowledge.</p>
                        <p>I am looking for full-time/internship/part-time roles as a software engineer/developer, full-stack engineer</p>
                   </div>
                </div>
                <div className='col-2'>
                    <h2>Experince</h2>
                    <span className='line'></span>
                        <div className='experience'>
                            <h3>Software Developer</h3>
                            <p>I was a Software Developer at an organization called ARDHO Rwanda, from February 2018 to October 2021. I designed, developed, maintained and tested computer software at the firm.</p>
                        
                         </div>
                        <div className='experience'>
                            <h3>React Developer</h3>
                            <p>Re-build the user interface of their inferior website.
                                Using ReactJs and Tailwin Css, Add more functionality to the website like: login and registration validation before sending data to the backend, teachers and students dashboard, assignment parts, calendar, and many more functionalities.</p>
                           
                        </div>
                        <div className='experience'>
                            <h3>Python Full-stack Engineer</h3>
                            <p>Building a library that would ensure developers do not reinvent the wheel anymore as far as Authentication is concerned. Developers can easily register and download authentication codes that suit their needs at any point.</p>
                           
                        </div>
                </div>
            </div>
        </div>
    )
}

export default About
