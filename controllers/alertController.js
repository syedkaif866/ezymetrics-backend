const nodemailer = require('nodemailer');

exports.sendAlert = async (req, res) => {
  try {
    // Create email transporter
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL, // your email
        pass: process.env.PASSWORD // your email password
      }
    });

    // Define email content
    let mailOptions = {
      from: process.env.EMAIL,
      to: 'syedkaif.21is@saividya.ac.in',
      subject: 'Campaign Alert',
      text: 'One of your campaigns has less than 5 leads.'
    };

    // Send email
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Alert email sent!' });
  } catch (err) {
    res.status(500).json({ error: 'Error sending email alert' });
  }
};
