import NavBar from '../components/NavBar'
import HeroArea from '../components/HeroArea'

const Hero = () => {
  return (
    <nav className='w-full h-full hero'>
      <NavBar />

      <HeroArea />
      
      
      {/* <a href='/'>
        <Image
          src={Logo}
          alt='logo'
          className='m-[10%] w-4/5 mt-[30vw] md:mt-0'
        />
      </a> */}
      
      {/* <ClientMenu id='home'>
        <p>ÁREA DO CLIENTE</p>
        <Span>
          <a href='/login' >Cliente</a>|<a href='#fale_comigo'>Orçamento</a>
        </Span>
      </ClientMenu> */}

      
    </nav>        
  )
}

export default Hero