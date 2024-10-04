import React from 'react'
import Menu from '../../components/Menu'
// import { Image } from '../../components/Image'
// import Logotipo from '../../assets/images/logo.png'

const Header = () => {
  return (
    <header className='w-screen h-screen bg-[url("")] bg-primary bg-cover text-font-white'>
      <Menu />
      
      
      {/* <a href='/'>
        <Image src={Logotipo} alt='logo' className='m-[10%] w-4/5 mt-[30vw] md:mt-0' />
      </a>


      <h1 className='text-7xl text-secondary font-finger italic ml-60 -z-10'>
        III
      </h1>
      <h1 className='text-7xl text-font-white font-londrina -mt-[72px] z-10'>
        PAULOSANTOS
      </h1> */}

      
      {/* <ClientMenu id='home'>
        <p>ÁREA DO CLIENTE</p>
        <Span>
          <a href='/login' >Cliente</a>|<a href='#fale_comigo'>Orçamento</a>
        </Span>
      </ClientMenu> */}
    </header>        
  )
}

export default Header