import React from 'react'
import projectsData from './projectsData'
import './Projects.css'

const Projects = () => {
    return (
        <div className='projects' id='projects'>
            <div className='container'>
                <h2>Projects</h2>
                <div className='content' >
                {projectsData.map((data, index) => {
                    return(
                        <div className='project-card' key={index}>
                            <div className='img-section'>
                                <img src={data.image} alt={data.title}/>
                            </div>
                            <div className='project-info'>
                                <h5 className="project-title">{data.title}</h5>
                                <p className='desc-section'>{data.description}</p>
                                <h3>Technology :</h3> <span>{data.technology}</span>
                            </div>
                            <div className='links'>
                                <a href={data.source} target="_blank" rel="noopener noreferrer">GitHub</a>
                                {data.demoLink && (
                                    <a href={data.demoLink} target="_blank" rel="noopener noreferrer">Live Demo</a>
                                )}
                            </div>
                        </div>
                    )
                })}
                </div>
            </div>
        </div>
    )
}

export default Projects
