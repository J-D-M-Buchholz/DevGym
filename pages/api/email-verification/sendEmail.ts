import nodemailer from "nodemailer"

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "teamdevgym@gmail.com",
    pass: "fnfmnsoochmyrlue",
  },
})

interface EmailData {
  _id: string
  username: string
}

async function sendVerificationEmail({ _id, username }: EmailData) {
  const confirmationLink = `http://localhost:3000/api/email-verification/confirm?id=${_id}`
  const mailOptions = {
    from: "teamdevgym@gmail.com",
    to: username,
    subject: "Verify Your Email",
    html: `<p>Verify your email address to complete the signup and login into your account.</p>
      <p>This link</p>
      <p>Press <a href=${confirmationLink}>here</a> to proceed.</p>
      <p>Thank you.</p>
      `,
  }
  try {
    await transporter.sendMail(mailOptions)
    console.log("Verification email sent")
  } catch (error) {
    console.log("Error sending verification email:", error)
  }
}

export default sendVerificationEmail
