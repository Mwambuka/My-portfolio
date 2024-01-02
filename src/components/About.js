import React from 'react'
import './About.css'

const About = () => {
    return (
        <div className='about' id='about'>
            <div className='container'>
                <div className='col-2'>
                    <h2>About</h2>
                   <div className='about-me'>
                        <p>Product-focused, forward-looking software Engineer with 3+ years of professional work experience.</p>
                        <p>Highly experienced in all aspects of the software development life cycle and end-to-end project management, from the concept through to development and delivery.</p>
                        <p>Consistently recognized as a hands-on and competent leader, skilled at coordinating cross-functional teams in a fast-paced, deadline-driven environment to steer timely project completion within budgetary constraints.</p>
                        <p></p>
                   </div>
                </div>
                <div className='col-2'>
                    <h2>Experince</h2>
                    <span className='line'></span>
                        <div className='experience'>
        <div className='experience'>
                            <h3>Software Engineer</h3>
                            <p> I am a Software Engineer at EDYGRAD One Private Limited
I play a crucial role In the entire software development lifecycle, from conceptualization
and design to implementation, testing, and maintenance, contributing to the creation of
functional, reliable, and secure software applications.</p>
                        
                         </div>
                            <h3>Software Developer</h3>
                            <p>I was a Software Developer at an organization called ARDHO Rwanda, from February 2018 to October 2021. I designed, developed, maintained and tested computer software at the firm.</p>
                        
                         </div>
                        <div className='experience'>
                            <h3>React Developer</h3>
                            <p>Using ReactJs and Tailwin Css, Add more functionality to the website like login and registration validation before sending data to the backend, teachers and students dashboard, assignment parts, calendar, and many more functionalities.</p>
                           
                        </div>
                        
                </div>
            </div>
        </div>
    )
}

export default About
