import nodemailer from 'nodemailer';

// Create a Nodemailer transporter object
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com', // Your Gmail address
    pass: 'your-gmail-password', // Your Gmail password or application-specific password
  },
});

export async function post(request) {
  try {
    const { name, email, message } = request.body;

    // Send email
    await transporter.sendMail({
      from: email, // Use the user's email from the form
      to: 'recipient@example.com', // Replace with your recipient email address
      subject: 'New Message from Contact Form',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    return {
      status: 200,
      body: { message: 'Email sent successfully' },
    };
  } catch (error) {
    console.error('Failed to send email:', error);
    return {
      status: 500,
      body: { error: 'Failed to send email' },
    };
  }
}
