import React from 'react'
import { DivPortfolio, DivScreen, DivProject } from './styles'
import { linkProjects } from './projects'

const Portfolio = () => {
    return (
        <DivPortfolio id='portfolio'>
            <DivScreen>
                {linkProjects.map((image, index) => (
                    <a href={image.link} target='_blank' rel='noopener noreferrer'>
                        <DivProject key={index} src={image.img} alt={image.id} />
                    </a>
                ))}
            </DivScreen>
        </DivPortfolio>
    )
}

export default Portfolio