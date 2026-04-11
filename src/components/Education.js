import React from 'react'
import './Education.css'

const Education = () => {
    return (
        <div className='edu-wrapper' id='education'>
            <div className='container'>
                <div className='edu-header'>
                    <span className='section-label'>Credentials</span>
                    <h2 className='section-title section-title-center'>Education &amp; Certifications</h2>
                </div>

                <div className='edu-grid'>

                    {/* ── Degrees ── */}
                    <div>
                        <h3 className='edu-section-title'>Degrees</h3>

                        <div className='edu-card'>
                            <p className='edu-degree'>Master of Science in Information Technology</p>
                            <p className='edu-institution'>Carnegie Mellon University Africa</p>
                            <p className='edu-detail'>Specializations: Software Engineering &amp; DevOps</p>
                            <span className='edu-years'>2024 – 2025</span>
                        </div>

                        <div className='edu-card'>
                            <p className='edu-degree'>Bachelor of Science in Computer Applications</p>
                            <p className='edu-institution'>Gandhi Institute of Technology and Management University</p>
                            <p className='edu-detail'>Specializations: Software Engineering &amp; Cybersecurity</p>
                            <span className='edu-years'>2020 – 2023</span>
                        </div>
                    </div>

                    {/* ── Certs & Publications ── */}
                    <div>
                        <h3 className='edu-section-title'>Certifications &amp; Publications</h3>

                        <ul className='cert-list'>
                            <li className='cert-item'>
                                <div className='cert-icon'>☁️</div>
                                <div className='cert-body'>
                                    <p className='cert-name'>Kubernetes and Cloud Native Associate (KCNA)</p>
                                    <p className='cert-meta'>Linux Foundation · 2024</p>
                                </div>
                            </li>

                            <li className='cert-item'>
                                <div className='cert-icon'>🐧</div>
                                <div className='cert-body'>
                                    <p className='cert-name'>CompTIA Linux+ Certification</p>
                                    <p className='cert-meta'>Code: 8WRVHJRSZEBE1135</p>
                                </div>
                            </li>

                            <li className='cert-item'>
                                <div className='cert-icon'>📄</div>
                                <div className='cert-body'>
                                    <p className='cert-name'>Securing the Digital State: Redefining Cyber Defense for Public Digital Infrastructure</p>
                                    <p className='cert-meta'>Research Publication</p>
                                    <a
                                        href='https://doi.org/10.13140/RG.2.2.27976.17926'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className='cert-link'
                                    >
                                        View Publication ↗
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Education
