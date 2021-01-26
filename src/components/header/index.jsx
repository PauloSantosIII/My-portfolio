import React from 'react'
import { Introduce, Menu, SocialMenu, Span, Logo, /* ClientMenu */ } from './styles'
import Logotipo from '../../assets/images/logo.png'
import { FaLinkedin, FaGitlab, FaGithub, FaWhatsapp, FaPhoneAlt } from 'react-icons/fa'

const Header = () => {
    return (
        <Introduce>
            <SocialMenu id='home'>
                <a href='https://www.linkedin.com/in/paulosantosiii/' target='_blank' rel='noopener noreferrer'><FaLinkedin /></a>
                <a href='https://gitlab.com/PauloSantosIII' target='_blank' rel='noopener noreferrer'><FaGitlab /></a>
                <a href='https://github.com/PauloSantosIII' target='_blank' rel='noopener noreferrer'><FaGithub /></a>
                <a href='https://api.whatsapp.com/send?phone=5541984154262' target='_blank' rel='noopener noreferrer'><FaWhatsapp /></a>
                <a href='tel:+41984154262'><FaPhoneAlt /></a>
            </SocialMenu>
            <Menu>
                <Span>QUEM SOU</Span>
                <Span>O QUE FAÇO</Span>
                <Span><a href='#portfolio'>PORTFÓLIO</a></Span>
                <Span><a href='#fale_comigo'>FALE COMIGO</a></Span>
            </Menu>
            <a href='/'><Logo src={Logotipo} alt='logo' /></a>
            {/* <ClientMenu id='home'>
                <p>ÁREA DO CLIENTE</p>
                <Span>
                    <a href='/login' >Cliente</a>|<a href='#fale_comigo'>Orçamento</a>
                </Span>
            </ClientMenu> */}
        </Introduce>        
    )
}

export default Header