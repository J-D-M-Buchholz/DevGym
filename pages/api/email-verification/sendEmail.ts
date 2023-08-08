import nodemailer from "nodemailer";

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "teamdevgym@gmail.com",
    pass: "fnfmnsoochmyrlue",
  },
});

interface EmailData {
  _id: string;
  username: string;
}

async function sendVerificationEmail({ _id, username }: EmailData) {
  const confirmationLink = `https://devgym-drab.vercel.app/api/email-verification/confirm?id=${_id}`;
  const mailOptions = {
    from: "teamdevgym@gmail.com",
    to: username,
    subject: "Verify Your Email",
    html: `<h1>DevGym verificationmail.</h1>
      <p>Verify your email address to complete the signup and login into your account.</p>
      <p>Press <a href=${confirmationLink}>here</a> to proceed.</p>
      <p>Thank you.</p>
      `,
  };
  try {
    await transporter.sendMail(mailOptions);
    console.log("Verification email sent");
  } catch (error) {
    console.log("Error sending verification email:", error);
  }
}

export default sendVerificationEmail