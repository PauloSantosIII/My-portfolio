'use client'
import Image from 'next/image'
import Link from './Link'
import LogoSVG from '../../../public/images/logo.png'
import { BookType, MonitorSmartphone, PersonStanding, PhoneCall } from 'lucide-react'


const NavBar = () => {
  const menuList = [
    { href: '#quem-sou',    label: 'QUEM SOU',    icon: <PersonStanding />    },
    { href: '#o-que-faco',  label: 'O QUE FAÇO',  icon: <MonitorSmartphone /> },
    { href: '#portfolio',   label: 'PORTFÓLIO',   icon: <BookType />          },
    { href: '#fale-comigo', label: 'FALE COMIGO', icon: <PhoneCall />         }
  ]

   
  return(
    <div className='fixed bottom-0 sm:top-0 left-0 w-full bg-primary sm:bg-primary/70 h-26 z-50'>
      <div className='container mx-auto flex relative h-24 flex-col'>
        <div className='mx-auto absolute left-1/2 -translate-x-1/2 hidden sm:block'>
          <Image src={LogoSVG} alt='Logo SVG' width={60} height={60} />
        </div>
      
        <div className='flex w-full justify-around mt-2 sm:mt-14'>
          {menuList.map((item, index) => (
            <Link key={index} href={item.href} label= {item.label} icon={item.icon} />
          ))}
        </div>
      </div>      
    </div>    
  )
}

export default NavBar