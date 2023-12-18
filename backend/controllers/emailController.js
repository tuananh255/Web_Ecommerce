const nodemailer = require('nodemailer')
const asyncHandle = require('express-async-handler')

const sendEmail = asyncHandle(async(data,req,res)=>{

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          // TODO: replace `user` and `pass` values from <https://forwardemail.net>
          user: process.env.MAIL_ID,
          pass: process.env.MP,
        },
      });
      
      const info = await transporter.sendMail({
        from: '"hey 👻" <minmaxtuan@gmail.com>', // sender address
        to: data.to, // list of receivers
        subject: data.subject, // Subject line
        text: data.text, // plain text body
        html: data.htm, // html body
      });


      console.log("Message sent: %s", info.messageId);
     
})


module.exports = {sendEmail}