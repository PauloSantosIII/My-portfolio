import React from 'react'
import Header from '../../page-sectors/header'
// import Portfolio from '../../page-sectors/portfolio'
// import Contact from '../../page-sectors/contact'
// import Footer from '../../page-sectors/footer'
import About from '../../page-sectors/about'
import RedesSociais from '../../components/RedesSociais'
// import ContactUs from '../../page-sectors/contact/emailjs'

const Home = () => {
  return (
    <main className='bg-primary m-0 p-0 w-screen h-full'>
      <Header />
      <About />
      {/* <Portfolio />
      <Contact />
      <Footer /> */}

      <RedesSociais />
    </main>
  )
}

export default Home