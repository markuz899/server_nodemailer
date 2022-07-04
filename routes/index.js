const express = require("express");
const router = express.Router();
const { sendEmail } = require("../config");

router.post("/send-email", async (req, res) => {
  const mailOptions = {
    from: `"Test sgasgas" <${process.env.EMAIL}>`,
    to: req.body.to,
    subject: req.body.subject,
    text: req.body.body,
    html: req.body.body,
  };

  try {
    await sendEmail(mailOptions);
    res.render("index");
  } catch (err) {
    console.log(`Errore invio mail - ${err}`);
  }
});

module.exports = router;
