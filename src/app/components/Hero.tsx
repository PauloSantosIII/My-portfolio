'use client'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import mockup from '../../../public/images/mockup.png'

const Hero = () => {
  const { scrollY } = useScroll()
  const titleY = useTransform(scrollY, [0, 800], [0, -80])
  const imageY = useTransform(scrollY, [0, 800], [0, 120])

  return (
    <section
      id='inicio'
      className='relative min-h-screen flex items-center overflow-hidden pt-28 pb-20 bg-gradient-to-br from-primary via-primary to-secondary-transparent'
    >
      <div className="absolute inset-0 -z-10 bg-[url('/images/hero-bg.png')] bg-cover bg-center opacity-20" />

      <div className='container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center'>
        <motion.div
          style={{ y: titleY }}
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className='text-secondary text-xl mb-2'>Olá, eu sou</p>

          <h1 className='leading-none text-white text-6xl sm:text-8xl' style={{ fontFamily: 'var(--font-finger)' }}>
            PAULO SANTOS <span className='text-secondary'>III</span>
          </h1>

          <p className='mt-6 text-lg md:text-xl text-white/80 max-w-xl'>
            Web designer e desenvolvedor full-stack com 6 anos de experiência em projetos web e sistemas ERP.
            Especialista em front-end com React, Next.js, Angular e Vue, e em back-end com Python e Ruby on Rails.
            Foco em qualidade de interface e performance, com código limpo e fácil de manter.
          </p>

          <div className='mt-10 flex flex-wrap gap-4'>
            <a
              href='#fale-comigo'
              className='px-8 py-4 rounded-full text-xl bg-secondary text-primary border-2 border-secondary hover:bg-transparent hover:text-secondary transition-colors'
            >
              FALE COMIGO
            </a>
            <a
              href='#portfolio'
              className='px-8 py-4 rounded-full text-xl border-2 border-secondary text-secondary hover:bg-secondary hover:text-primary transition-colors'
            >
              VER PROJETOS
            </a>
          </div>
        </motion.div>

        <motion.div
          style={{ y: imageY }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className='hidden md:block'
        >
          <Image src={mockup} alt='Ilustração de notebook exibindo um projeto' priority className='w-full h-auto' />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
