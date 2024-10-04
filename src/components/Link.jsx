const Link = ({ href, label }) => {
  return(
    <span className='py-2 px-3 md:hover:w-40 text-left md:text-center md:hover:bg-primary/75 text-primary md:text-font-white md:hover:text-secondary font-bold border-b-2 border-secondary md:border-transparent md:hover:border-secondary md:hover:rounded-full'>
      <a href={href}>{label}</a>
    </span>
  )
}

export default Link