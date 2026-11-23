'use client'
import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    title: 'Psion',
    url: 'https://psion.app/',
    image: '/images/projects/psion.png',
    role: 'Desenvolvimento das telas do front-end',
    stack: ['Angular'],
  },
  {
    title: 'DigiByte',
    url: 'https://www.digibyte.com.br/',
    image: '/images/projects/digibyte.png',
    role: 'Desenvolvimento das telas do front-end',
    stack: ['Angular'],
  },
]

type Project = (typeof projects)[number]

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const imageY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className='group rounded-3xl overflow-hidden border-2 border-secondary-transparent hover:border-secondary bg-primary-transparent transition-colors'
    >
      <div className='relative aspect-video overflow-hidden'>
        <motion.div style={{ y: imageY }} className='absolute inset-x-0 -top-[10%] h-[120%]'>
          <Image
            src={project.image}
            alt={`Captura de tela do projeto ${project.title}`}
            fill
            sizes='(min-width: 768px) 50vw, 100vw'
            className='object-cover transition-transform duration-500 group-hover:scale-105'
          />
        </motion.div>
      </div>

      <div className='p-6 flex flex-col gap-4'>
        <h3 className='text-3xl text-secondary'>{project.title}</h3>
        <p className='text-lg text-white/80'>{project.role}</p>

        <div className='flex flex-wrap gap-2'>
          {project.stack.map((tech) => (
            <span key={tech} className='px-3 py-1 rounded-full border border-secondary text-secondary text-sm'>
              {tech}
            </span>
          ))}
        </div>

        <a
          href={project.url}
          target='_blank'
          rel='noopener noreferrer'
          className='mt-2 self-start inline-flex items-center gap-2 px-6 py-2 rounded-full bg-secondary text-primary border-2 border-secondary hover:bg-transparent hover:text-secondary transition-colors'
        >
          VER PROJETO <ArrowUpRight size={18} />
        </a>
      </div>
    </motion.article>
  )
}

const Projects = () => {
  return (
    <section id='portfolio' className='py-24 px-6 bg-primary text-white'>
      <div className='container mx-auto'>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='text-secondary text-5xl md:text-7xl text-center mb-16'
          style={{ fontFamily: 'var(--font-londrina-outline)' }}
        >
          PORTFÓLIO
        </motion.h2>

        <div className='grid gap-12 md:grid-cols-2'>
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
