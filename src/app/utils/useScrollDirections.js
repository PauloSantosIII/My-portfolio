let lastScrollTop = 0;


const useScrollDirection = () => {
  window.addEventListener('scroll', () => {
    let scrollTop = document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        console.log('Scroll para baixo')
    } else {
        console.log('Scroll para cima')
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop
    console.log(lastScrollTop)
  })
  return lastScrollTop  

}

export default useScrollDirection