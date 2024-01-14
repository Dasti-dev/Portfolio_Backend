const nodemailer = require("nodemailer");
require('dotenv').config();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: false,
    auth: {
      user: "verse.billu.portfolio@gmail.com",
      pass: "twxw krbi jwck dwhf",
    },
    // authMethod: 'PLAIN',
});

const emailSender = async (req,res) => {
    try {
        const { from, text } = req.body;
    
        // Define email options
        const mailOptions = {
          from: 'verse.billu.portfolio@gmail.com',
          to: 'dastitwa@gmail.com',
          subject: from,
          text,
        };
    
        // Send the email
            const info = await transporter.sendMail(mailOptions);
    
            console.log('Email sent:', info.response);
            res.json({ success: true, message: 'Email sent successfully' });
        } catch (error) {
            console.error('Error:', error.message);
            res.status(500).json({ error: 'Failed to send email' });
    }
}

module.exports = {emailSender}