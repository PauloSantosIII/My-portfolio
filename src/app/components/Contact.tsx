'use client'
import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { FaWhatsapp, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa'

const EMAIL = 'paulosantosiii@outlook.com'
const WHATSAPP_NUMBER = '5541920016915'
const WHATSAPP_MESSAGE = encodeURIComponent('Olá Paulo! Vi seu site e gostaria de conversar sobre um projeto.')

const inputClass =
  'w-full bg-primary-transparent border-2 border-secondary-transparent focus:border-secondary outline-none rounded-xl px-4 py-3 text-white placeholder:text-white/40 transition-colors disabled:opacity-60'

const Contact = () => {
  const [sending, setSending] = useState(false)
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; text: string } | null>(null)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())

    setSending(true)
    setFeedback(null)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const json = await res.json().catch(() => ({}))

      if (res.ok) {
        setFeedback({ type: 'success', text: 'Mensagem enviada! Retorno em breve.' })
        form.reset()
      } else {
        setFeedback({ type: 'error', text: json.error ?? 'Não foi possível enviar. Tente novamente.' })
      }
    } catch {
      setFeedback({ type: 'error', text: 'Falha de conexão. Tente novamente ou use o WhatsApp.' })
    } finally {
      setSending(false)
    }
  }

  return (
    <section id='fale-comigo' className='py-24 px-6 bg-primary-transparent text-white'>
      <div className='container mx-auto max-w-3xl'>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='text-secondary text-5xl md:text-7xl text-center mb-6'
          style={{ fontFamily: 'var(--font-londrina-outline)' }}
        >
          FALE COMIGO
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className='text-center text-lg text-white/80 mb-12'
        >
          Tem um projeto em mente? Envie uma mensagem ou chame no WhatsApp.
        </motion.p>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className='flex flex-col gap-5'
        >
          {/* Campo armadilha contra spam: fica oculto para pessoas */}
          <input type='text' name='website' tabIndex={-1} autoComplete='off' aria-hidden='true' className='hidden' />

          <label className='flex flex-col gap-2 text-lg'>
            Nome
            <input
              type='text'
              name='name'
              required
              minLength={2}
              disabled={sending}
              className={inputClass}
              placeholder='Seu nome'
            />
          </label>

          <label className='flex flex-col gap-2 text-lg'>
            E-mail
            <input
              type='email'
              name='email'
              required
              disabled={sending}
              className={inputClass}
              placeholder='seu@email.com'
            />
          </label>

          <label className='flex flex-col gap-2 text-lg'>
            Mensagem
            <textarea
              name='message'
              required
              minLength={10}
              rows={5}
              disabled={sending}
              className={inputClass}
              placeholder='Conte um pouco sobre o seu projeto'
            />
          </label>

          <button
            type='submit'
            disabled={sending}
            className='mt-2 flex items-center justify-center gap-3 py-4 rounded-full bg-secondary text-primary border-2 border-secondary hover:bg-transparent hover:text-secondary disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer transition-colors text-xl'
          >
            <FaEnvelope />
            {sending ? 'ENVIANDO...' : 'ENVIAR MENSAGEM'}
          </button>

          {feedback && (
            <p
              role='status'
              className={`text-center text-lg ${feedback.type === 'success' ? 'text-secondary' : 'text-red-400'}`}
            >
              {feedback.text}
            </p>
          )}
        </motion.form>

        <div className='mt-12 flex flex-col sm:flex-row gap-4 justify-center'>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center justify-center gap-3 px-8 py-4 rounded-full border-2 border-secondary text-secondary hover:bg-secondary hover:text-primary transition-colors text-xl'
          >
            <FaWhatsapp /> WHATSAPP
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className='flex items-center justify-center gap-3 px-8 py-4 rounded-full border-2 border-secondary-transparent hover:border-secondary transition-colors text-xl'
          >
            <FaEnvelope /> {EMAIL}
          </a>
        </div>

        <div className='mt-10 flex justify-center gap-8 text-3xl'>
          <a
            href='https://www.linkedin.com/in/paulosantosiii/'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='LinkedIn'
            className='hover:text-secondary transition-colors'
          >
            <FaLinkedin />
          </a>
          <a
            href='https://github.com/PauloSantosIII'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='GitHub'
            className='hover:text-secondary transition-colors'
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
