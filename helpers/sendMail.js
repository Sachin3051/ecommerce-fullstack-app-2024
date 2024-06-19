
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: "sachingupta3051@gmail.com",
    pass: "kvhcuehwlkvmhvgt",
  },
});

// async..await is not allowed in global scope, must use a wrapper
async function sendMail(to,subject,text,html) {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: 'sachingupta3051@gmail.com', // sender address
    to:"sachingupta3051@gmail.com", // list of receivers
    subject, // Subject line
    text, // plain text body
    html // html body
  });
}
export default sendMail
