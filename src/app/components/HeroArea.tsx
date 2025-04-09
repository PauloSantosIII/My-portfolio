import Image from 'next/image'
import LapTop from '../../../public/images/mockup.png'

const HeroArea = () => {
  return(
    <div className='
        w-full h-full bg-gradient-to-br from-primary-transparent to-secondary-transparent
        flex flex-col justify-items-start sm:justify-center items-center pb-8 sm:py-48
    '>
      <div className='flex relative select-none'>
        <h2
          className='
          text-secondary text-[200px] sm:text-9xl md:text-[160px] font-[fingerPaint] absolute
          top-0 sm:-top-1 md:-top-0.5 -right-14 sm:-right-8.5 md:-right-11 animate-shake
        '>
          III
        </h2>
        <h1 className='hidden sm:block sm:text-8xl md:text-9xl font-medium z-10'>PAULOSANTOS</h1>
        <h1 className='block sm:hidden text-[180px] font-medium z-10'>PS</h1>
      </div>

      <div className='font-[londrinaSolid] text-secondary flex gap-8 w-5/6 sm:w-4/6 sm:mt-28'>
        <div className='hidden sm:block w-full sm:w-1/3 animate-wiggle'>
          <Image
            src={LapTop}
            alt='Imagem de um Laptop'
            priority
            quality={100}
            className='object-fill'
          />
        </div>
        
        <div className='w-full sm:w-2/3 text-lg text-center sm:text-left sm:text-xl sm:pt-4 select-none'>
          Com ampla experiência em desenvolvimento front-end, minha missão é transformar ideias em soluções 
          digitais impactantes.
          Ajudo meus clientes a alcançar seus objetivos, fortalecendo sua presença online e expandindo o 
          alcance de sua marca no mundo virtual. Criatividade, estratégia e resultados são o foco do meu trabalho.
          Vamos juntos impulsionar o sucesso da sua marca!
          <br></br>
          <br></br>
          Se quiser ajustar algo ou adicionar mais detalhes sobre seu estilo ou expertise, é só me avisar! 🚀
          <br></br>
          <a href='#fale-comigo' className='py-5'>
            <button  className='
              border-2 border-secondary hover:border-primary bg-secondary sm:bg-transparent hover:bg-secondary
              text-primary sm:text-secondary hover:text-primary mt-8 py-5 px-20 rounded-full cursor-pointer
            '>
              FALE COMIGO
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default HeroArea