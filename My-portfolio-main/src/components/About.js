import React from 'react'
import './About.css'

const About = () => {
    return (
        <div className='about' id='about'>
            <div className='container'>

                {/* ── Bio column ── */}
                <div>
                    <div className='about-header'>
                        <span className='section-label'>Who I Am</span>
                        <h2 className='section-title'>About Me</h2>
                    </div>
                    <div className='about-bio-card'>
                        <div className='about-me'>
                            <p>Results-driven software engineer with proven expertise in leading the design, development, and deployment of secure, scalable systems. Experienced in refactoring monolithic platforms into containerized microservices, implementing CI/CD pipelines, and ensuring alignment with Agile and DevSecOps practices.</p>
                            <p>Skilled in backend and full-stack development using Java/Spring Boot, Node.js, Angular, Python (Flask/FastAPI), and database optimization with PostgreSQL/MySQL/Oracle.</p>
                            <p>Demonstrated success in mentoring teams, enforcing code quality and testing standards, and guiding technical decision-making to deliver high-performing applications. Adept at building observability with Grafana, Kibana, ELK, and ensuring robust security with OWASP Top 10 and ISO 27002:2022 controls.</p>
                            <p>Recognized for bridging development, security, and operations to drive system modernization, enhance performance, and support mission-critical digital transformation.</p>
                        </div>
                    </div>
                </div>

                {/* ── Experience column ── */}
                <div className='experience-col'>
                    <span className='section-label'>Career</span>
                    <h2 className='section-title'>Professional Experience</h2>

                    <div className='timeline'>

                        {/* Research Assistant */}
                        <div className='experience'>
                            <div className='exp-meta'>
                                <h3 className='exp-role'>Research Assistant — AI &amp; Human-Centered Systems</h3>
                                <span className='exp-date'>Present</span>
                            </div>
                            <p className='exp-company'>Carnegie Mellon University Africa · Under Dr. Edith Luhanga</p>
                            <p>• Contributing to an IRB-approved research study on designing AI-powered applications to support caregivers managing feeding challenges in children (ages 2–8), including autism and ADHD.</p>
                            <p>• Designed and supported survey and interview instruments to capture behavioral, clinical, and user experience data across diverse populations.</p>
                            <p>• Collaborated on ideation and evaluation of AI-driven solutions (e.g., chatbot, mobile apps) for personalized feeding interventions.</p>
                            <p>• Supported human-centered design processes, applying UX research methods to ensure inclusive and accessible application design.</p>
                        </div>

                        {/* Security Analyst */}
                        <div className='experience'>
                            <div className='exp-meta'>
                                <h3 className='exp-role'>Security Analyst</h3>
                                <span className='exp-date'>2025</span>
                            </div>
                            <p className='exp-company'>CyLab-Africa / Upanzi Network</p>
                            <p>• Contributed security engineering for APKIT (mobile app vulnerability platform): designed containerized scanning services behind Nginx, exposed REST endpoints, and wired GitHub Actions CI/CD with gated releases — cutting false positives by 20% and boosting scan precision from 70% to 90% after integrating an LLM component.</p>
                            <p>• Hardened delivery pipelines with SAST/dependency checks, Docker image policies, and secret scanning; implemented health checks and rollout strategies to reduce deploy risk.</p>
                            <p>• Built centralized observability: structured JSON logs, shipped to ELK, created Kibana dashboards and alert rules, shortening detection/triage times across APKIT services.</p>
                            <p>• Enforced secure SDLC &amp; APIs: JWT/RBAC, TLS, secrets management, input validation, and review checklists aligned to OWASP Top 10.</p>
                            <p>• Scaled passive vulnerability scanning for e-Government: engineered scripts across 19 categories to assess 1,000+ African .gov services; published dashboards and reports for stakeholders.</p>
                        </div>

                        {/* Technical Lead */}
                        <div className='experience'>
                            <div className='exp-meta'>
                                <h3 className='exp-role'>Technical Lead, Software Engineering</h3>
                                <span className='exp-date'>2018 – 2024</span>
                            </div>
                            <p className='exp-company'>ARDHO — Association Rwandaise pour la Défense des Droits de l'Homme</p>
                            <p>• Led end-to-end delivery of NGO case-management and identity workflows by decomposing legacy modules into containerized microservices and exposing secure REST APIs, enabling faster independent releases.</p>
                            <p>• Owned CI/CD: designed pipelines (GitHub Actions) with automated build, test, and image publishing; cut deployment failures by 30% via staged rollouts and health checks.</p>
                            <p>• Containerized &amp; orchestrated services with Docker, standardized base images, and environment-specific configs; introduced 12-factor practices for portability.</p>
                            <p>• Instituted code quality &amp; testing: coverage gates, unit/integration tests, API contract tests, and peer reviews, raising reliability release-over-release.</p>
                            <p>• Directed Agile execution, coordinated with program teams, and mentored junior developers to uplift delivery velocity and standards.</p>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default About
