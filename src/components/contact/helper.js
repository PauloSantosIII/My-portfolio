const express = require('express')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const cors = require('cors')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

app.get('/', () => {
    resizeBy.send('Welcome to my forma')
})

app.post('/api/forma', (req, res) => {
    let data = req.body
    
    const transporter = nodemailer.createTransporter({
        host: 'smtp.office365.com',
        port: 587,
        auth: {
            user: 'paulosantosiii@outlook.com',
            password: 'Anack1503@'
        }
    })

    const mailOptions = {
        from: 'paulosantosiii@outlook.com',
        to: 'paulosantosiii@outlook.com',
        replyTo: `${data.email}`,
        subject: `${data.subject}`,
        html: `
            <h3>CONTATO</h3>
            <ul>
                <li>Name: ${data.name}</li>
                <li>Email: ${data.email}</li>
            </ul>

            <h3>Message</h3>
            <p>${data.message}</p>
        `
    }

    transporter.sendMail(mailOptions, (error, res) => {
        if (error) {
            res.send(error)
        }
        else {
            res.send ('Success')
        }
    })
    
    transporter.close()
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})