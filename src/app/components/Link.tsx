const Link = ({ href, label, icon }) => {
  return(
    <nav className='px-4 py-2 md:hover:border-b active:text-secondary rounded-full font-[londrinaSolid] hover:animate-wiggle'
    >
      <a
        className='text-base md:text-xl flex flex-col items-center gap-2'
        href={href}
      >
        <span className='block sm:hidden'>{icon}</span>
        {label}
      </a>
    </nav>
  )
}

export default Link