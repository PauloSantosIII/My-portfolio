import React from 'react'
import { 
    Container, 
    Card, 
    CarouselContainer, 
    Title, 
    Description, 
    Subscription
} from './styles'
import { Projects, ProjectsReact, settings } from './helper'

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Portfolio = () => {
    return (
        <Container id='portfolio'>
            <Title>Potifólio</Title>
            
            <Description>
                ESTES SÃO PROJETOS EXECUTADOS DURANTE O CURSO DE DESENVOLVIMENTO FULL STACK
                 NA <a 
                 href='https://kenzie.com.br/curriculo.html' 
                 target='_blank' 
                 rel='noopener noreferrer'
                 >
                 KENZIE ACADEMY BRASIL
                </a>.
            </Description>

            <Subscription>
                Aqui são projetos em HTML5 + CSS3 + Javascript
            </Subscription>
            
            <CarouselContainer>
                <Slider {...settings}>
                {Projects.map((project, index) => (
                    <Card>
                        <a href={project.link} target='_blank' rel='noopener noreferrer'>
                            <img key={index} src={project.img} alt={project.id} />
                        </a>  
                    </Card>
                ))}
                </Slider>
            </CarouselContainer>

            <Subscription>
                Aqui são projetos em ReactJS
            </Subscription>

            <CarouselContainer>
                <Slider {...settings}>
                {ProjectsReact.map((project, index) => (
                    <Card>
                        <a href={project.link} target='_blank' rel='noopener noreferrer'>
                            <img key={index} src={project.img} alt={project.id} />
                        </a>
                    </Card>
                ))}
                </Slider>
            </CarouselContainer>           
        </Container>
    )
}

export default Portfolio