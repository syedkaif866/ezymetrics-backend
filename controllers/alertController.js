const nodemailer = require('nodemailer');

exports.sendAlert = async (req, res) => {
  try {
    const email = req.body.email;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: 'Lead Alert',
      text: 'One of your leads has been updated.',
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Alert email sent!' });
  } catch (err) {
    res.status(500).json({ error: 'Error sending email alert' });
  }
};
