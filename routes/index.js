const express = require("express");
const router = express.Router();
const { transporter } = require("../config");

router.post("/send-email", async (req, res) => {
  const mailOptions = {
    from: '"Test sgasgas" <markuz.89@hotmail.it>', // sender address
    to: req.body.to, // list of receivers
    subject: req.body.subject, // Subject line
    text: req.body.body, // plain text body
    html: req.body.body, // html body
  };

  try {
    await transporter.sendMail(mailOptions);
    res.render("index");
  } catch (err) {
    console.log(`Errore invio mail - ${err}`);
  }
});

module.exports = router;
