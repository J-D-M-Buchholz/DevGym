//Bitte alles außer den DIV löschen und eigene Komponenten hier einfügen!!!
"use client"

import "@/styles/contact.css"
import React, { FormEvent, useState } from "react"

const ContactContent = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [message, setMessage] = useState("")

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value
    const numericInput = input.replace(/\D/g, "")
    const formattedInput = input.startsWith("+")
      ? "+" + numericInput
      : numericInput
    let formattedPhoneNumber = formattedInput
    if (formattedInput.length > 2) {
      formattedPhoneNumber = formattedInput.replace(/(\+\d{2})(\d+)/, "$1 $2")
    }
    setPhoneNumber(formattedPhoneNumber)
  }

  const sendEmail = async (
    name: string,
    email: string,
    phoneNumber: string,
    message: string
  ) => {
    const response = await fetch("/api/contact/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, phoneNumber, message }),
    })

    const data = await response.json()
    return { status: response.status, data }
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    try {
      const req = await sendEmail(name, email, phoneNumber, message)
      if (req.status === 250) {
        const data = req.data
        console.log(data)

        console.log("email sent")
        setName("")
        setEmail("")
        setPhoneNumber("")
        setMessage("")
      }
    } catch (e) {
      console.log(e)
      console.log("Error sending the message")
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter your fullname"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="phone number">Phone Number:</label>
        <input
          type="text"
          name="phone number"
          id="phone-number"
          placeholder="Enter your phone number"
          value={phoneNumber === "" ? "+49 " : phoneNumber}
          onChange={handlePhoneNumberChange}
        />
        <label htmlFor="message">Message:</label>
        <textarea
          name="message"
          id="message"
          cols={30}
          rows={10}
          placeholder="How can we help you?"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        <button className="btn" type="submit">
          Send
        </button>
      </form>
    </>
  )
}

export default ContactContent
