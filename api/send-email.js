import nodemailer from 'nodemailer';
import formidable from 'formidable';
import fs from 'fs';

export const config = {
  api: {
    bodyParser: false, // Required for formidable to handle file uploads
  },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Only POST requests allowed' });
  }

  const form = new formidable.IncomingForm({ keepExtensions: true });

  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error('Form parsing error:', err);
      return res.status(500).json({ error: 'Form parsing failed' });
    }

    const { name, email, phone } = fields;
    const cvFile = files.cv;

    if (!cvFile) {
      return res.status(400).json({ error: 'CV file missing' });
    }

    // Gmail transporter setup — USE APP PASSWORD (not real password!)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'ramu65vishnu@gmail.com',
        pass: 'qwrd ljze trao ynjm',
      },
    });

    const mailOptions = {
      from: '"CV Submission Bot" <yourgmail@gmail.com>',
      to: 'yourgmail@gmail.com',
      subject: 'New CV Submission',
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}`,
      attachments: [
        {
          filename: cvFile.originalFilename,
          content: fs.createReadStream(cvFile.filepath),
        },
      ],
    };

    try {
      await transporter.sendMail(mailOptions);
      return res.status(200).json({ success: true });
    } catch (error) {
      console.error('Email sending failed:', error);
      return res.status(500).json({ error: 'Failed to send email' });
    }
  });
}
