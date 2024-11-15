import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, phone, pref_dates, message, apptdsgvo } = req.body;

    // Create a transporter using your email service (e.g., Gmail, SMTP server)
    const transporter = nodemailer.createTransport({
      service: 'gmail', // You can use other services like SMTP server
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    try {
      await transporter.sendMail({
        from: email,
        to: process.env.GMAIL_USER,
        subject: `Webseite Terminanfrage | ${name}`,
        text: `
          Name: ${name}
          Email: ${email}
          Phone: ${phone ? phone : ''}
          Wunschtermin: ${pref_dates}
          Message: ${message ? message : ''}
          DSGVO: ${apptdsgvo ? 'zugestimmt' : 'abgelehnt'}
        `,
      });

      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email', error);
      res.status(500).json({ message: 'Error sending email' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
