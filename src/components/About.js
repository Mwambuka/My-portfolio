import React from 'react'
import './About.css'

const About = () => {
    return (
        <div className='about' id='about'>
            <div className='container'>
                <div className='col-2'>
                    <h2>About</h2>
                   <div className='about-me'>
                        <p>I am an IT and cyber security consultant based in Kigali, Rwanda. I enjoy learning about the latest threats to computer security.</p>
                        <p>I am a results-driven professional with expertise spanning network engineering, cloud engineering, automation, cybersecurity, and AI.</p>
                        <p>My value lies in designing scalable, secure, and efficient IT solutions that elevate organizational performance while safeguarding data integrity and privacy.</p>
                        <p>I have a proven track record in deploying highavailability infrastructure across multi-cloud environments, automating deployments, and ensuring robust infrastructure security. </p>
    
                   </div>
                </div>
                <div className='col-2'>
                    <h2>Experience</h2>
                    <span className='line'></span>
                    <div className='experience'>
                        <h3>Security Engineer</h3>
                        <p><strong>Association Rwandaise pour la Défense des Droits de l'Homme (ARDHO)</strong></p>
                        <p>• Engineered and deployed perimeter security solutions across firewall, IDS/IPS, and threat intelligence platforms, strengthening enterprise cybersecurity defenses and reducing attack surface by 40%.</p>
                        <p>• Designed and implemented network segmentation policies within DMZ environments, enhancing security for high-risk applications and minimizing lateral movement risks.</p>
                    </div>
                    <div className='experience'>
                        <h3>ICT Support Officer</h3>
                        <p><strong>The National Agricultural Export Development Board (NAEB)</strong></p>
                        <p>• Provided first-line technical support to over 100 end-users, resolving network, hardware, and software-related issues, improving overall IT efficiency.</p>
                        <p>• Strengthened NAEB's network security by implementing robust protocols and monitoring access controls.</p>
                        <p>• Safeguarded critical data against unauthorized access, ensuring confidentiality and integrity.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
