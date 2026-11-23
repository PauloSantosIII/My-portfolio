import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const CONTACT_TO = process.env.CONTACT_TO_EMAIL ?? 'paulosantosiii@outlook.com'
const CONTACT_FROM = process.env.CONTACT_FROM_EMAIL ?? 'Site Paulo Santos III <onboarding@resend.dev>'
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request: Request) {
  let data: Record<string, unknown>

  try {
    data = await request.json()
  } catch {
    return NextResponse.json({ error: 'Requisição inválida.' }, { status: 400 })
  }

  const name = String(data.name ?? '').trim()
  const email = String(data.email ?? '').trim()
  const message = String(data.message ?? '').trim()
  const honeypot = String(data.website ?? '')

  // Campo armadilha: robôs costumam preenchê-lo. Simula sucesso sem enviar.
  if (honeypot) {
    return NextResponse.json({ ok: true })
  }

  if (name.length < 2 || name.length > 100) {
    return NextResponse.json({ error: 'Informe um nome válido.' }, { status: 400 })
  }

  if (email.length > 254 || !EMAIL_REGEX.test(email)) {
    return NextResponse.json({ error: 'Informe um e-mail válido.' }, { status: 400 })
  }

  if (message.length < 10 || message.length > 5000) {
    return NextResponse.json(
      { error: 'A mensagem deve ter entre 10 e 5000 caracteres.' },
      { status: 400 }
    )
  }

  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY não configurada.')
    return NextResponse.json(
      { error: 'Serviço de e-mail indisponível no momento.' },
      { status: 500 }
    )
  }

  // Cliente criado dentro do handler para não quebrar o build sem a variável.
  const resend = new Resend(process.env.RESEND_API_KEY)

  const { error } = await resend.emails.send({
    from: CONTACT_FROM,
    to: CONTACT_TO,
    replyTo: email,
    subject: `Novo contato pelo site: ${name.replace(/[\r\n]+/g, ' ')}`,
    text: `Nome: ${name}\nE-mail: ${email}\n\nMensagem:\n${message}`,
  })

  if (error) {
    console.error('Erro ao enviar e-mail:', error)
    return NextResponse.json(
      { error: 'Não foi possível enviar agora. Tente novamente ou use o WhatsApp.' },
      { status: 500 }
    )
  }

  return NextResponse.json({ ok: true })
}
