import React from 'react'
import {
    Container,
    Title,
    ContactP,
    Form,
    Label,
    Input,
    TextArea,
    Button,
    Menu,
    HLogo
} from './styles'
import { BiPen, BiMessageDetail } from 'react-icons/bi'
import { AiOutlineMail, AiOutlineWhatsApp } from 'react-icons/ai'
import { MdSubject } from 'react-icons/md'
import { RiSendPlaneFill } from 'react-icons/ri'
import Logo from '../../assets/images/logo.png'
import { MdLocalPhone } from 'react-icons/md'
import emailjs from 'emailjs-com'

const Contact = () => {
    
    function sendEmail(e) {
        e.preventDefault()
    
        emailjs.sendForm('contato_email', 'template_emailjs', e.target, 'user_CSKNQYEw0N3PO4QuvxAML')
            .then((result) => {
                console.log(result.text)
            }, (error) => {
                console.log(error.text)
            })
            e.target.reset()
    }


    return (
        <Container>
            <Title id='fale_comigo'>Fale comigo</Title>
            <ContactP>Dúvidas? Preencha os campos abaixo com os seguintes dados que em breve entrarei em contato.</ContactP>

            <Form onSubmit={sendEmail}>
                <Label htmlFor='name'>
                    <BiPen />
                    <Input type='text' required placeholder='Nome' name='name' />
                </Label>
                
                <Label htmlFor='email'>
                    <AiOutlineMail />
                    <Input type='email' required placeholder='Email' name='email' />
                </Label>
                
                <Label htmlFor='phone'>
                    <AiOutlineWhatsApp />
                    <Input type='tel' required placeholder='Telefone'  name='phone' />
                </Label>
                
                <Label htmlFor='subject'>
                    <MdSubject />
                    <Input type='text' required placeholder='Assunto'  name='subject' />
                </Label>
                
                <Label htmlFor='message'>
                    <BiMessageDetail />
                    <TextArea type='textArea' required placeholder='Mensagem'  name='message' />
                </Label>
                
                <Button type='submit' value='Send'>
                    <RiSendPlaneFill /> Enviar
                </Button>
            </Form>
            <a href='/'><HLogo src={Logo} alt='Logo' /></a>
            <Menu>
                <Menu.Left>
                    <p>MENU</p>
                    <a href='#home'>HOME</a>
                    <a href='#quem_sou'>QUEM SOU</a>
                    <a href='#portfolio'>PORTFÓLIO</a>
                    <a href='#fale_comigo'>FALE COMIGO</a>
                    <br />
                    <br />
                    <a href='mailto:paulosantosiii@outlook.com'><AiOutlineMail /> paulosantosiii@outlook.com</a>
                </Menu.Left>
                <Menu.Right>
                    <p>REDES SOCIAIS</p>
                    <a href='https://www.linkedin.com/in/paulosantosiii/' target='_blank' rel='noopener noreferrer'>LINKEDIN</a>
                    <a href='https://github.com/PauloSantosIII' target='_blank' rel='noopener noreferrer'>GITHUB</a>
                    <a href='https://gitlab.com/PauloSantosIII' target='_blank' rel='noopener noreferrer'>GITLAB</a>
                    <a href='https://api.whatsapp.com/send?phone=5541984154262' target='_blank' rel='noopener noreferrer'>WHATSAPP</a>
                    <a href='tel:+41984154262'><MdLocalPhone />(41) 98415-4262</a>
                </Menu.Right>
            </Menu>
        </Container>
    )
}

export default Contact