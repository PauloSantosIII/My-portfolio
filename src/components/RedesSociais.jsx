import { FaLinkedin, FaGitlab, FaGithub, FaWhatsapp, FaPhoneAlt } from 'react-icons/fa'

const RedesSociais = () => {
  return(
    <div className='text-font-white text-xl fixed bottom-2 z-50 bg-primary left-[10%] w-[80%] h-11 rounded-full flex justify-evenly items-center border sm:top-6 sm:left-[92%] sm:w-[8%] sm:h-60 sm:flex-col sm:gap-3 sm:mx-0 sm:rounded-3xl sm:rounded-r-none md:left-[96%] md:w-[4%]' id='home'>
      <a href='https://www.linkedin.com/in/paulosantosiii/' target='_blank' rel='noopener noreferrer'><FaLinkedin /></a>
      <a href='https://github.com/PauloSantosIII' target='_blank' rel='noopener noreferrer'><FaGithub /></a>
      <a href='https://gitlab.com/PauloSantosIII' target='_blank' rel='noopener noreferrer'><FaGitlab /></a>
      <a href='https://api.whatsapp.com/send?phone=5541984154262' target='_blank' rel='noopener noreferrer'><FaWhatsapp /></a>
      <a href='tel:+41984154262'><FaPhoneAlt /></a>
    </div>
  )
}

export default RedesSociais