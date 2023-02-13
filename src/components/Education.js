import React from 'react'
import './Education.css'

const Education = () => {
    return (
        <div className='edu-wrapper' id='education'>
            <div className='container'>
                <div className='col-2'>
                   <div className='education'>
                        <h2>Education</h2>
                        <div className='edu-container'>
                            <h3>Bachelor's Degree in Computer Applications</h3>
                            <p>Gandhi Institute of Technology and Management University, India</p>
                            <p>CGPA: 8.11/10</p>
                            <p>2020-2023</p>
                        </div>
                        <div className='edu-container'>
                            <h3>High School Diploma</h3>
                            <p>Lycée de Kigali, Rwanda</p>
                            <p>2012-2018</p>
                        </div>
                   </div>
                   <div className='education'>
                        <h2>Certificates</h2>
                        <div className='edu-container'>
                            <ul>
                                <li>Full-Stack Web Development with React, <i>The Hong Kong University of Science and Technology - June 2020</i></li>
                                <li>Front-End Web UI Frameworks and Tools Bootstrap 4, <i>The Hong Kong University of Science and Technology - Nov 2021</i></li>
                                <li>Matrix Algebra for Engineers, <i>The Hong Kong University of Science and Technology - Feb 2021</i></li>
                                <li>HTML, CSS, and Javascript for Web Developers, <i>The Johns Hopkins University - Nov 2021</i> </li>
                                <li>Marketing in a Digital World, <i>University of Illinois at Urbana-Champaign - Feb 2021</i></li>
                                <li>Java Programming and Software Engineering Fundamentals, <i>Duke University - Nov 2021</i></li>
                                <li>Back-end Web Development Bootcamp, <i>DevTown organization - September 2022</i></li>
                                
                            </ul>
                        </div>
                   </div>
                </div>
            </div>
        </div>
    )
}

export default Education
