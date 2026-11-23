'use client'
import { motion } from 'framer-motion'
import { Code2, Server, Gauge, LayoutDashboard } from 'lucide-react'

const services = [
  {
    icon: Code2,
    title: 'Front-end',
    text: 'Interfaces modernas com React, Next.js, Angular e Vue, focadas em experiência do usuário e acessibilidade.',
  },
  {
    icon: Server,
    title: 'Back-end',
    text: 'APIs e regras de negócio com Python e Ruby on Rails, organizadas para crescer com o projeto.',
  },
  {
    icon: LayoutDashboard,
    title: 'Sistemas ERP',
    text: 'Telas e fluxos para sistemas de gestão, com foco em usabilidade e clareza na apresentação dos dados.',
  },
  {
    icon: Gauge,
    title: 'Performance',
    text: 'Carregamento rápido, código limpo e manutenção simples no longo prazo.',
  },
]

const About = () => {
  return (
    <>
      <section id='quem-sou' className='py-24 px-6 bg-primary text-white'>
        <div className='container mx-auto max-w-4xl text-center'>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-secondary text-5xl md:text-7xl mb-8'
            style={{ fontFamily: 'var(--font-londrina-outline)' }}
          >
            QUEM SOU
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className='text-lg md:text-xl text-white/80 leading-relaxed'
          >
            Transformo ideias em produtos digitais claros e rápidos. Ao longo de 6 anos, trabalhei com projetos web
            e sistemas ERP, sempre buscando equilibrar qualidade visual, performance e código fácil de manter.
            Procuro projetos freelance em que a interface faça diferença para o negócio do cliente.
          </motion.p>
        </div>
      </section>

      <section id='o-que-faco' className='py-24 px-6 bg-primary-transparent text-white'>
        <div className='container mx-auto'>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-secondary text-5xl md:text-7xl text-center mb-16'
            style={{ fontFamily: 'var(--font-londrina-outline)' }}
          >
            O QUE FAÇO
          </motion.h2>

          <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-4'>
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className='p-8 rounded-3xl border-2 border-secondary-transparent hover:border-secondary bg-primary transition-colors'
                >
                  <Icon className='text-secondary mb-6' size={44} />
                  <h3 className='text-3xl text-secondary mb-3'>{service.title}</h3>
                  <p className='text-lg text-white/80'>{service.text}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default About
