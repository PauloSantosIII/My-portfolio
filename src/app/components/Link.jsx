const Link = ({ href, label }) => {
  return(
    <nav className='py-2 px-3'>
      <a
        className='md:hover:w-40 text-left md:text-center md:hover:bg-primary/75 text-font-white md:text-font-white md:hover:text-secondary font-bold border-b-2 border-secondary md:border-transparent md:hover:border-secondary md:hover:rounded-full cursor-pointer'
        href={href}
      >{label}</a>
    </nav>
  )
}

export default Link