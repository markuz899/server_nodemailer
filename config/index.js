const nodeMailer = require("nodemailer");

// GMAIL ERROR
//   const transporter = nodeMailer.createTransport({
//     host: "smtp.gmail.com",
//     port: 587,
//     secure: false, // true for 465, false for other ports 587
//     auth: {
//       user: "fortestingdebug@gmail.com",
//       pass: "kosymcrznwjbwqsp",
//     },
//   });

const transporter = nodeMailer.createTransport({
  host: process.env.HOST,
  secureConnection: process.env.SECURE,
  port: process.env.HOST_PORT,
  tls: {
    ciphers: "SSLv3",
  },
  auth: {
    user: process.env.TRANSPORTER_USER,
    pass: process.env.TRANSPORTER_PASSWORD,
  },
});

module.exports = { transporter };
