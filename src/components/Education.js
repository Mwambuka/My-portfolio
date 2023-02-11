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
                                <li>The Frontend Developer Career path, <strong>Scrimba - 2020.</strong></li>
                                <li>The React Bootcamp, <strong>Scrimba - 2020.</strong></li>
                                <li>The Responsive Web Design Bootcamp, <strong>Scrimba - 2021.</strong></li>
                                <li>The UI Design Bootcamp, <strong>Scrimba - 2021.</strong></li>
                                <li>Responsive Web Design, <strong>FreeCodeCamp - 2022.</strong></li>
                                <li>javaScript Algorithms and Data Structures, <strong>FreeCodeCamp - 2022.</strong></li>
                                <li>Full-stack Nano Degree: <strong>Udacity-2022</strong></li>
                            </ul>
                        </div>
                   </div>
                </div>
            </div>
        </div>
    )
}

export default Education
