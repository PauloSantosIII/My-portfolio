import React from 'react'
import { DivPortfolio, DivScreen, DivScreenReact, DivProject } from './styles'
import { Projects, ProjectsReact } from './projects'

const Portfolio = () => {
    return (
        <DivPortfolio id='portfolio'>
            <DivScreen>
                <DivProject>
                    {Projects.map((project, index) => (
                        <a href={project.link} target='_blank' rel='noopener noreferrer'>
                            <img key={index} src={project.img} alt={project.id} />
                        </a>  
                    ))}
                </DivProject>
            </DivScreen>

            <DivScreenReact>
                <DivProject>
                    {ProjectsReact.map((project, index) => (
                        <a href={project.link} target='_blank' rel='noopener noreferrer'>
                            <img key={index} src={project.img} alt={project.id} />
                        </a>  
                    ))}
                </DivProject>
            </DivScreenReact>
        </DivPortfolio>
    )
}

export default Portfolio