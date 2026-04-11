import React from 'react'
import projectsData from './projectsData'
import './Projects.css'

const Projects = () => {
    return (
        <div className='projects' id='projects'>
            <div className='container'>
                <div className='projects-header'>
                    <span className='section-label'>What I've Built</span>
                    <h2 className='section-title section-title-center'>Projects</h2>
                </div>

                <div className='projects-grid'>
                    {projectsData.map((data, index) => (
                        <div className='project-card' key={index}>
                            <div className='img-section'>
                                <img src={data.image} alt={data.title} />
                            </div>

                            <div className='project-info'>
                                <h5 className='project-title'>{data.title}</h5>
                                <p className='desc-section'>{data.description}</p>
                                <div className='tech-tags'>
                                    {data.technology.split(',').map((tech, i) => (
                                        <span className='tech-tag' key={i}>{tech.trim()}</span>
                                    ))}
                                </div>
                            </div>

                            <div className='links'>
                                <a href={data.source} target='_blank' rel='noopener noreferrer'>
                                    GitHub ↗
                                </a>
                                {data.demoLink && (
                                    <a href={data.demoLink} target='_blank' rel='noopener noreferrer' className='demo-link'>
                                        Live Demo ↗
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Projects
