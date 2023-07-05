import Contact from "@/models/contactModel"
import express from "express"
import nodemailer from "nodemailer"

process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0"

export async function contactController(
  req: express.Request,
  res: express.Response
) {
  const { firstname, lastname, email, phoneNumber, details } = req.body

  try {
    const mailOptions = {
      from: email,
      to: "teamdevgym@gmail.com",
      subject: `Contact from ${firstname} ${lastname}`,
      html: `<p><b>Firstname:</b> ${firstname} </p> <p><b>Lastname:</b> ${lastname} </p> <p><b>Email:</b> ${email} </p> <b>Phone Number:</b> ${phoneNumber} </p>  <p><b>Message</b>: ${details}</p> `,
      text: details,
    }

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: "teamdevgym@gmail.com",
        pass: "fnfmnsoochmyrlue",
      },
    })

    if (req.method === "POST") {
      transporter.sendMail(mailOptions, async (err, info) => {
        if (err) {
          console.log(err)
          return res.status(404).json({
            error: `Connection refused at ${err}`,
          })
        }

        const newContact = new Contact({
          firstname,
          lastname,
          email,
          phoneNumber,
          details,
        })
        await newContact.save()

        return res.status(250).json({
          message: `Message delivered to ${info.accepted}`,
        })
      })
    }
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: "Error processing request" })
  }
}
