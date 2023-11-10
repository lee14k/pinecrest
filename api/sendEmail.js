// pages/api/sendEmail.js

import nodemailer from 'nodemailer';

// Set up Nodemailer transporter
const transporter = nodemailer.createTransport({
 host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: true, // use SSL for port 465
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

export default async function handler(req, res) {
  if (req.method === 'POST') {
    // Process a POST request
    const { formType } = req.body; // Extract formType
    let mailOptions;

    if (formType === 'employment') {
      // Destructure the form fields from req.body for the employment form
      const {
        firstName,
        lastName,
        email,
        phoneNumber,
        workHistories,
        driversLicense,
        over18,
        shiftPreference,
      } = req.body;

      // Construct the email message for the employment form
      let emailText = `New employment form submission:\n\nName: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phoneNumber}\nShift Preference: ${shiftPreference}\nOver 18: ${over18 ? 'Yes' : 'No'}\nDriver's License: ${driversLicense ? 'Yes' : 'No'}\n\nWork Histories:\n`;

      workHistories.forEach((history, index) => {
        emailText += `\nHistory ${index + 1}:\nCompany: ${history.company}\nPosition: ${history.position}\nDuration: ${history.duration}\n`;
      });

      // Set up the mail options for the employment form
      mailOptions = {
        from: email,
        to: process.env.SMTP_USER,
        subject: 'New Employment Form Submission',
        text: emailText,
      };
    } else if (formType === 'contact') {
      // Destructure the form fields from req.body for the contact form
      const { firstName, lastName, email, phoneNumber, message } = req.body;

      // Construct the email message for the contact form
      const emailText = `You have a new contact form submission from: ${firstName} ${lastName}. Contact information: Email - ${email}, Phone - ${phoneNumber}\n\nMessage: ${message}`;

      // Set up the mail options for the contact form
      mailOptions = {
        from: process.env.SMTP_USER,
        to: process.env.RECIPIENT_EMAIL,
        subject: 'New Contact Form Submission',
        text: emailText,
      };
    }

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(process.env.RECIPIENT_EMAIL) ;
        return res.status(500).json({ error: 'Error sending email' });
      }
      return res.status(200).json({ message: 'Email sent successfully', info });
    });
  } else {
    // Handle any other HTTP method
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
