import React from 'react'
import './About.css'

const About = () => {
    return (
        <div className='about' id='about'>
            <div className='container'>
                <div className='col-2'>
                    <h2>About</h2>
                   <div className='about-me'>
                        <p>Results-driven IT professional with proven expertise in leading the design, development, and deployment of secure, scalable software systems. Experienced in refactoring monolithic platforms into containerized microservices, implementing CI/CD pipelines, and ensuring alignment with Agile and DevSecOps practices.</p>
                        <p>Skilled in backend and full-stack development using Java/Spring Boot, Node.js, Angular, Python (Flask/FastAPI), and database optimization with PostgreSQL/MySQL/Oracle.</p>
                        <p>Demonstrated success in mentoring teams, enforcing code quality and testing standards, and guiding technical decision-making to deliver high-performing applications. Adept at building observability with Grafana, Kibana, ELK, and ensuring robust security with OWASP Top 10 and ISO27002:2022 controls.</p>
                        <p>Recognized for bridging development, security, and operations to drive system modernization, enhance performance, and support mission-critical digital transformation.</p>
                   </div>
                </div>
                <div className='col-2'>
                    <h2>Experience</h2>
                    <span className='line'></span>
                    <div className='experience'>
                        <h3>Security Analyst</h3>
                        <p><strong>CyLab-Africa / Upanzi Network</strong> | 2025</p>
                        <p>• Contributed security engineering for APKIT (mobile app vulnerability platform): designed containerized scanning services behind Nginx, expose REST endpoints, and wire GitHub Actions CI/CD with gated releases, cutting false positives by 20% and boosting scan precision from 70% to 90% after integrating an LLM component.</p>
                        <p>• Harden delivery pipelines with SAST/dependency checks, Docker image policies, and secret scanning; implement health checks and rollout strategies to reduce deploy risk and speed safe releases.</p>
                        <p>• Build centralized observability: structure JSON logs, ship to ELK, create Kibana dashboards and alert rules, shortening detection/triage times across APKIT services.</p>
                        <p>• Enforce secure SDLC & APIs: JWT/RBAC, TLS, secrets management, input validation, and review checklists aligned to OWASP Top 10, drive peer code reviews and test coverage targets.</p>
                        <p>• Scale passive vulnerability scanning for e-Government: engineer scripts across 19 categories and automate jobs to assess 1,000+ African .gov services; publish dashboards and reports for stakeholders.</p>
                    </div>
                    <div className='experience'>
                        <h3>Technical Lead, Software Engineering (Lead Developer)</h3>
                        <p><strong>Association Rwandaise pour la Défense des Droits de l'Homme (ARDHO)</strong> | 2018-2024</p>
                        <p>• Led end-to-end delivery of NGO case-management and identity workflows by decomposing legacy modules into containerized microservices and exposing secure REST APIs, enabling faster independent releases and simpler integrations.</p>
                        <p>• Owned CI/CD: designed pipelines (GitHub Actions) with automated build, test, and image publishing to a private registry; cut deployment failures by 30% via staged rollouts and health checks.</p>
                        <p>• Containerized & orchestrated services with Docker (staging/prod), standardized base images, and environment-specific configs; introduced 12-factor practices for portability.</p>
                        <p>• Instituted code quality & testing: coverage gates, unit/integration tests, API contract tests, and peer code reviews, raising reliability and reducing regressions release-over-release.</p>
                        <p>• Directed Agile execution (scrum ceremonies, sprint planning, definition-of-done), coordinated with program teams, and mentored junior developers to uplift delivery velocity and standards.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
