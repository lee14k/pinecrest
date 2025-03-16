import nodemailer from 'nodemailer';

export default async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).end('Method Not Allowed');
  }

  const { firstName, lastName, email, phoneNumber, workHistories, driversLicense, over18, shiftPreference } = req.body;

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: true, // use SSL for port 465
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  let workHistoriesText = workHistories.map((history, index) => 
    `History ${index + 1}:\nCompany: ${history.company}\nPosition: ${history.position}\nDuration: ${history.duration}\n`).join('\n');

  const mailData = {
    from: process.env.SMTP_USER, // sender address
    to: process.env.RECIPIENT_EMAIL, // list of receivers
    subject: 'New Employment Form Submission',
    text: `New employment form submission:
      \nName: ${firstName} ${lastName}
      \nEmail: ${email}
      \nPhone: ${phoneNumber}
      \nShift Preference: ${shiftPreference}
      \nOver 18: ${over18 ? 'Yes' : 'No'}
      \nDriver's License: ${driversLicense ? 'Yes' : 'No'}
      \n\nWork Histories:\n${workHistoriesText}`
  };

  try {
    await transporter.sendMail(mailData);
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error(`Email sending error: ${error}`);
    res.status(500).send('Internal Server Error');
  }
}
