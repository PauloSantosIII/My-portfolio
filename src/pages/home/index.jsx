import React from 'react'
import { Container } from './styles'
import Header from '../../components/header'
import Portfolio from '../../components/portfolio'
import Contact from '../../components/contact'
import Footer from '../../components/footer'

const Home = () => {
    return (
        <Container>
            <Header />
            <Portfolio />
            <Contact />
            <Footer />
        </Container>
    )
}

export default Home