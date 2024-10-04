import { useState } from 'react'
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io'
import Link from './Link'

const Menu = () => {
  const [open, setOpen] = useState(false)
  const width = open ? '[30%]' : 0
  const show = open ? 'block' : 'hidden'
  const menuList = [
    { href: '#quem_sou',    label: 'QUEM SOU'     },
    { href: '#o_que-faco',  label: 'O QUE FAÇO'   },
    { href: '#portfolio',   label: 'PORTFÓLIO'    },
    { href: '#fale_comigo', label: 'FALE COMIGO'  }
  ]

  return(
    <div className='fixed top-0 left-0 w-[100%]'>
      <div className={`bg-font-white md:bg-transparent w-[30%] md:w-screen h-screen md:h-12 pt-16 md:pt-2 flex flex-col md:flex-row gap-3 md:gap-0 md:justify-evenly border md:border-none z-40 ${show} md:flex`}>
        {menuList.map((item, index) => (
          <Link key={index} href={item.href} label= {item.label} />
        ))}
      </div>

      <button
        className={`w-7 h-7 rounded-r-lg bg-font-white md:hidden absolute top-5 left-${width}`}
        onClick={ () => setOpen(!open) }
      >
        {open ?
          <IoIosArrowDropleftCircle className='w-5 h-5 mx-auto text-primary' /> :
          <IoIosArrowDroprightCircle className='w-5 h-5 mx-auto text-primary' />
        }
      </button>
    </div>    
  )
}

export default Menu