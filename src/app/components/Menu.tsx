'use client'
import Image from 'next/image'
import Link from './Link'
import LogoSVG from '../../../public/images/logo.png'


const Menu = () => {
  const menuList = [
    { href: '#quem-sou',    label: 'QUEM SOU'     },
    { href: '#o_que-faco',  label: 'O QUE FAÇO'   },
    { href: '#portfolio',   label: 'PORTFÓLIO'    },
    { href: '#fale_comigo', label: 'FALE COMIGO'  }
  ]

   
  return(
    <div className='fixed top-0 left-0 w-[100%] bg-amber-200'>
      <div className=''>
        <Image src={LogoSVG} alt='Logo SVG' width={24} height={24} />
      </div>
      
      <div className='bg-amber-600'>
        {menuList.map((item, index) => (
          <Link key={index} href={item.href} label= {item.label} />
        ))}
      </div>
    </div>    
  )
}

export default Menu