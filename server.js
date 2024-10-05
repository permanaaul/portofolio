const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Route to handle form submission
app.post('/send-email', async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    // Set up Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'permanaaulia@gmail.com', 
        pass: 'qwkz dume jxkp ctsp'   
      }
    });

    // Mail options
    const mailOptions = {
      from: email,
      to: 'permanaaulia@gmail.com', 
      subject: subject,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`
    };

    // Send email
    await transporter.sendMail(mailOptions);
    res.status(200).send('Email sent successfully!');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Failed to send email.');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
