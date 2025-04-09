import Image from 'next/image'
import React from 'react'
// import Photo from '../../assets/images/eu.png'
import Paulo from '../../../public/images/PauloSantos.png'
import ScrollIndicator from '../components/ScrollIndicator'

const About = () => {
  return (
    <div className='w-full h-full bg-gradient-to-b from-secondary to-primary-transparent flex flex-wrap' id='quem-sou'>
      {/* <ScrollIndicator /> */}

      <Image src={Paulo} alt='Meu avatar' width={500} height={500} data-aos='fade-up-right' />
      {/* <ImageContainer>
        <Image src={Photo} alt='PauloSantosIII' />
      </ImageContainer>
      <Info>
        <h1>Oi,</h1>
        <p>
          sou Paulo Santos, formado em contabilidade e com experiência em indústria multinacional.
          Resolvi migrar para programação ao ter experiências em ser a ponte entre o departamento
          fiscal e o desenvolvimento web, ficando muito empolgado e curioso.
        </p>
        <p>
          Decidi ingressar na <strong>
          <a 
            href='https://kenzie.com.br/' 
            target='_blank' 
            rel='noopener noreferrer'>Kenzie Academy</a>
          </strong> para me tornar um desenvolvedor fullstack.
          Já tive oportunidade de aprender <strong>
          <u>
              HTML, CSS, Javascript, ReactJS, Redux, Redux-Thunk, TypeScript, 
              Python, Flask, Django e Docker.
          </u>
          </strong>
        </p>
        <p>
          Vejo na programação uma oportunidade de criar coisas novas e resolver problemas.
          Me considero uma pessoa mão na massa, focado em solução e <u>entrega com qualidade</u>.
        </p>
      </Info>
      <BaseBoard>
        <p>Por que</p><h1>Paulo Santos III?</h1>
        <h3>
          Essa é só uma brincadeira por ser filho e neto de Paulo Santos, mas não tenho o Terceiro
          nem Neto no sobrenome... hehehe
        </h3>
      </BaseBoard> */}
    </div>
  )
}

export default About