const sgMail = require('@sendgrid/mail')

const sendgridAPIKey = process.env.SENDGRID_API_KEY

sgMail.setApiKey(sendgridAPIKey)


const sendWelcomeEmail = (email, name) =>{
    const msg = {
        to: email,
        from: 'mostafaassem53@gmail.com',
        subject: 'Welcome to the app',
        text: `Welcome to the app, ${name}`,
    }
    
    sgMail
    .send(msg)
    .then(() => {
        console.log('Email sent')
    })
    .catch((error) => {
        console.error(error)
    })
}

const sendCancelEmail = (email, name) =>{
    const msg = {
        to: email,
        from: 'mostafaassem53@gmail.com',
        subject: 'Account deleted',
        text: `Hello ${name}, please contact us if you faced any problems`,
    }
    sgMail
    .send(msg)
    .then(() => {
        console.log('Email sent')
    })
    .catch((error) => {
        console.error(error)
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}