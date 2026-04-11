import React from 'react'
import {
    SiTailwindcss, SiFlask, SiSpring, SiPostgresql, SiDocker,
    SiAmazonaws, SiKubernetes, SiMongodb, SiExpress, SiMysql,
    SiRedux, SiCplusplus, SiHtml5, SiTableau, SiMaterialui,
    SiTypescript, SiFastapi, SiTensorflow, SiAngular, SiNginx,
    SiRedis, SiElasticsearch, SiGrafana
} from 'react-icons/si'
import { IoLogoJavascript } from 'react-icons/io'
import { FaJava, FaNode, FaGithub, FaPython, FaBootstrap, FaReact, FaCss3Alt, FaRProject, FaPhp } from 'react-icons/fa'
import { DiGit, DiDjango } from 'react-icons/di'
import './Skills.css'

const categories = [
    {
        label: 'Frontend',
        skills: [
            { icon: <SiHtml5 />, name: 'HTML5' },
            { icon: <FaCss3Alt />, name: 'CSS3' },
            { icon: <IoLogoJavascript />, name: 'JavaScript' },
            { icon: <SiTypescript />, name: 'TypeScript' },
            { icon: <FaReact />, name: 'React' },
            { icon: <SiAngular />, name: 'Angular' },
            { icon: <SiRedux />, name: 'Redux' },
            { icon: <SiTailwindcss />, name: 'Tailwind CSS' },
            { icon: <FaBootstrap />, name: 'Bootstrap' },
            { icon: <SiMaterialui />, name: 'Material UI' },
        ]
    },
    {
        label: 'Backend & Languages',
        skills: [
            { icon: <FaNode />, name: 'Node.js' },
            { icon: <FaJava />, name: 'Java' },
            { icon: <FaPython />, name: 'Python' },
            { icon: <SiFlask />, name: 'Flask' },
            { icon: <SiFastapi />, name: 'FastAPI' },
            { icon: <SiSpring />, name: 'Spring Boot' },
            { icon: <DiDjango />, name: 'Django' },
            { icon: <SiExpress />, name: 'Express' },
            { icon: <FaPhp />, name: 'PHP' },
            { icon: <SiCplusplus />, name: 'C++' },
            { icon: <FaRProject />, name: 'R' },
        ]
    },
    {
        label: 'Databases',
        skills: [
            { icon: <SiPostgresql />, name: 'PostgreSQL' },
            { icon: <SiMysql />, name: 'MySQL' },
            { icon: <SiMongodb />, name: 'MongoDB' },
            { icon: <SiRedis />, name: 'Redis' },
        ]
    },
    {
        label: 'DevOps, Cloud & Observability',
        skills: [
            { icon: <SiDocker />, name: 'Docker' },
            { icon: <SiKubernetes />, name: 'Kubernetes' },
            { icon: <SiAmazonaws />, name: 'AWS' },
            { icon: <SiNginx />, name: 'Nginx' },
            { icon: <DiGit />, name: 'Git' },
            { icon: <FaGithub />, name: 'GitHub' },
            { icon: <SiElasticsearch />, name: 'Elasticsearch' },
            { icon: <SiGrafana />, name: 'Grafana' },
            { icon: <SiTensorflow />, name: 'TensorFlow' },
            { icon: <SiTableau />, name: 'Tableau' },
        ]
    },
]

const Skills = () => {
    return (
        <div id='skills' className='skills-section'>
            <div className='container'>
                <div className='skills-header'>
                    <span className='section-label'>Technology</span>
                    <h2 className='section-title section-title-center'>Skills &amp; Tools</h2>
                </div>

                {categories.map((cat, ci) => (
                    <div className='skills-category' key={ci}>
                        <p className='skills-category-title'>{cat.label}</p>
                        <div className='skills-grid'>
                            {cat.skills.map((s, si) => (
                                <div className='skill' key={si}>
                                    <span className='skill-icon'>{s.icon}</span>
                                    <span className='skill-name'>{s.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skills
