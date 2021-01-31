import React from 'react'
import { Container } from './styles'
import Header from '../../page-sectors/header'
import Portfolio from '../../page-sectors/portfolio'
import Contact from '../../page-sectors/contact'
import Footer from '../../page-sectors/footer'
import About from '../../page-sectors/about'

const Home = () => {
    return (
        <Container>
            <Header />
            <About />
            <Portfolio />
            <Contact />
            <Footer />
        </Container>
    )
}

export default Home