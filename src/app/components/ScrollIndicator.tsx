const ScrollIndicator = () => {
  return(
    <div className='w-full h-16 justify-self-end relative z-10 mt-3.5 sm:mt-2 md:mt-1.5 lg:mt-0.5'>
      <div className='absolute left-0 right-0 bottom-16 m-auto w-full justify-center flex'>
        <div
          className='
            text-white text-sm tracking-[0.35em] rotate-90 w-fit flex items-center
            origin-center mb-16
        '>
          
          <div className='w-20 overflow-hidden'>
            <div className='ml-4 w-9 h-[1px] bg-secondary origin-left animate-grow' />
          </div>
        </div>
      </div>

      <div
        className='hidden lg:block md:-top-13.5 lg:-top-14 left-0 h-16 w-1/4 absolute bg-secondary'
      />
      <div
        className='hidden lg:block md:-top-13.5 lg:-top-14 right-0 h-16 w-1/4 absolute bg-secondary'
      />

      <div className='w-full h-16 absolute left-0 right-0 mx-auto flex justify-center'>
        <svg
          width='100%'
          height='73'
          viewBox='0 0 1442 73'
          fill='none'
          className='bottom-14 absolute h-16'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M0 0V70.801H1441.8L1441.8 0H803.163C792.693 0 784.296 8.26248 780.624 18.0683C771.259 43.0759 747.156 60.8762 718.9 60.8762C690.643 60.8762 666.54 43.076 657.176 18.0683C653.503 8.26248 645.107 0 634.636 0H0Z'
            fill='#61DAFB'
          />
        </svg>
      </div>
    </div>
  )
}

export default ScrollIndicator