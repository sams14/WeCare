const nodemailer = require('nodemailer');

const sendEmail = (options) =>{
    const transporter = nodemailer.createTransport({
        // host: 'smtp.gmail.com',
        // port: 993,
        // host: 'smtp.ethereal.email',
        // port: 587,
        service : 'gmail',
        auth: {
            user: process.env.USER_EMAIL,
            pass: process.env.USER_PASSWORD
        }
    });

    const mailOptions = {
        from: process.env.USER_EMAIL,
        to: options.to,
        subject: options.subject,
        html: options.text
    }
    transporter.sendMail(mailOptions, function(err,info){
        if(err)
        {
            console.log(err);
        }
        else
        {
            console.log(info);
        }
    })
}

module.exports = sendEmail;