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
                            <h3>Master of Science in Information Technology</h3>
                            <p>Carnegie Mellon University Africa</p>
                            <p>Specializations: Software Engineering & DevOps</p>
                            <p>2024-2025</p>
                        </div>
                        <div className='edu-container'>
                            <h3>Bachelor of Science in Computer Applications</h3>
                            <p>Gandhi Institute of Technology and Management University</p>
                            <p>Specializations: Software Engineering and Cybersecurity</p>
                            <p>2020-2023</p>
                        </div>
                   </div>
                   <div className='education'>
                        <h2>Certificates</h2>
                        <div className='edu-container'>
                            <ul>
                                <li>Kubernetes and Cloud Native Associate (KCNA) - <i>Linux Foundation, 2024</i></li>
                                <li>CompTIA Linux+ Certification - <i>Code: 8WRVHJRSZEBE1135</i></li>
                                <li><strong>Publication:</strong> Securing the Digital State: Redefining Cyber Defense for Public Digital Infrastructure - <i><a href="https://doi.org/10.13140/RG.2.2.27976.17926" target="_blank" rel="noopener noreferrer" style={{color: 'var(--primary-color)', textDecoration: 'underline'}}>View Publication</a></i></li>
                            </ul>
                        </div>
                   </div>
                </div>
            </div>
        </div>
    )
}

export default Education
