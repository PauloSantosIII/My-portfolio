// src/app/sections/hero/HeroArea.tsx
import Image from 'next/image'
import LapTop from '../../../public/images/mockup.png'

const HeroArea = () => {
  return (
    <div className='
      w-full h-full bg-gradient-to-br from-primary-transparent to-secondary-transparent
      flex flex-col justify-items-start sm:justify-center items-center sm:py-36 lg:py-48 pb-16
    '>
      <div className='flex relative select-none'>
        <h2
          className='
            text-secondary text-[200px] sm:text-9xl md:text-[160px] font-[fingerPaint] absolute
            top-0 sm:-top-1 md:-top-0.5 -right-14 sm:-right-8.5 md:-right-11 animate-shake
          '
        >
          III
        </h2>
        <h1 className='hidden sm:block sm:text-8xl md:text-9xl font-medium z-10'>PAULOSANTOS</h1>
        <h1 className='block sm:hidden text-[180px] font-medium z-10'>PS</h1>
      </div>

      <div className='font-[londrinaSolid] text-secondary flex gap-8 w-5/6 md:w-4/6 sm:mt-18 md:mt-28'>
        <div className='hidden md:block w-full md:w-1/3 animate-wiggle'>
          <Image
            src={LapTop}
            alt='Imagem de um Laptop'
            priority
            quality={100}
            className='object-fill'
          />
        </div>

        <div className='w-full md:w-2/3 text-lg text-center md:text-left md:text-xl md:pt-4 select-none'>
          <p>
            Web designer e desenvolvedor full-stack com 6 anos de experiência em projetos web e sistemas ERP.
            Especialista em front-end com React, Next.js, Angular e Vue, e em back-end com Python e Ruby on Rails.
            Foco em qualidade de interface e performance, com código limpo e fácil de manter.
            Disponível para projetos freelance.
          </p>

          <a
            href='#fale-comigo'
            className='inline-block mt-8 border-2 border-secondary hover:border-primary bg-secondary md:bg-transparent hover:bg-secondary text-primary md:text-secondary hover:text-primary py-5 px-20 rounded-full transition-colors'
          >
            FALE COMIGO
          </a>
        </div>
      </div>
    </div>
  )
}

export default HeroArea
