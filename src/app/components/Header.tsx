'use client'
import { useState } from 'react'
import Image from 'next/image'
import { motion, useScroll } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import logo from '../../../public/images/logo.png'

const links = [
  { href: '#quem-sou', label: 'Quem sou' },
  { href: '#o-que-faco', label: 'O que faço' },
  { href: '#portfolio', label: 'Portfólio' },
  { href: '#fale-comigo', label: 'Fale comigo' },
]

const Header = () => {
  const [open, setOpen] = useState(false)
  const { scrollYProgress } = useScroll()

  return (
    <header className='fixed top-0 inset-x-0 z-50 bg-primary/80 backdrop-blur-md border-b border-secondary-transparent'>
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className='absolute top-0 left-0 h-[3px] w-full origin-left bg-secondary'
      />

      <nav className='container mx-auto flex items-center justify-between px-6 h-20'>
        <a href='#inicio' className='flex items-center gap-3'>
          <Image src={logo} alt='Logo Paulo Santos III' width={40} height={40} priority />
          <span className='text-secondary text-2xl' style={{ fontFamily: 'var(--font-finger)' }}></span>
        </a>

        <ul className='hidden md:flex gap-8 text-xl'>
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className='hover:text-secondary transition-colors'>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setOpen((prev) => !prev)}
          className='md:hidden text-secondary p-2 cursor-pointer'
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {open && (
        <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className='md:hidden flex flex-col items-center gap-6 py-8 bg-primary text-xl border-t border-secondary-transparent'
        >
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setOpen(false)} className='hover:text-secondary transition-colors'>
                {link.label}
              </a>
            </li>
          ))}
        </motion.ul>
      )}
    </header>
  )
}

export default Header
