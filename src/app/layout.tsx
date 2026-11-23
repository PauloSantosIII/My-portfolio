import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const fingerPaint = localFont({
  src: '../../public/fonts/FingerPaint-Regular.ttf',
  weight: '400',
  variable: '--font-finger',
  display: 'swap',
})

const londrinaSolid = localFont({
  src: '../../public/fonts/LondrinaSolid-Regular.ttf',
  weight: '400',
  variable: '--font-londrina-solid',
  display: 'swap',
})

const londrinaOutline = localFont({
  src: '../../public/fonts/LondrinaOutline-Regular.ttf',
  weight: '400',
  variable: '--font-londrina-outline',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Paulo Santos III | Web Designer e Desenvolvedor Full-stack',
  description:
    'Web designer e desenvolvedor full-stack com 6 anos de experiência em projetos web e sistemas ERP. React, Next.js, Angular, Vue, Python e Ruby on Rails.',
  openGraph: {
    title: 'Paulo Santos III | Web Designer e Desenvolvedor Full-stack',
    description: 'Projetos em front-end, back-end e sistemas ERP. Vamos conversar sobre o seu projeto.',
    locale: 'pt_BR',
    type: 'website',
  },
}

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang='pt-BR'>
      <body
        className={`${londrinaSolid.className} ${fingerPaint.variable} ${londrinaSolid.variable} ${londrinaOutline.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}

export default RootLayout
