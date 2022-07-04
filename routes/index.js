const express = require("express");
const router = express.Router();
const { sendEmail } = require("../config");

router.post("/send-email", async (req, res) => {
  const mailOptions = {
    from: `"${process.env.DEFAULT_FROM}" <${process.env.EMAIL}>`,
    to: req.body.to,
    subject: req.body.subject,
    html: req.body.html,
  };

  try {
    await sendEmail(mailOptions);
    res.json({
      status: true,
    });
  } catch (err) {
    res.json({ status: false, error: err });
    console.log(`Errore invio mail - ${err}`);
  }
});

module.exports = router;
