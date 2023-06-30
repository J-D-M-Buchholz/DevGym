//Bitte alles außer den DIV löschen und eigene Komponenten hier einfügen!!!
"use client"

import "@/styles/contact.css"
import React, { FormEvent, useState } from "react"

const ContactContent = () => {
  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [email, setEmail] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [details, setDetails] = useState("")

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
    firstname: string,
    lastname: string,
    email: string,
    phoneNumber: string,
    details: string
  ) => {
    const response = await fetch("/api/contact/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname,
        lastname,
        email,
        phoneNumber,
        details,
      }),
    })

    const data = await response.json()
    return { status: response.status, data }
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    try {
      const req = await sendEmail(
        firstname,
        lastname,
        email,
        phoneNumber,
        details
      )
      if (req.status === 250) {
        const data = req.data
        console.log(data)

        console.log("email sent")
        setFirstname("")
        setLastname("")
        setEmail("")
        setPhoneNumber("")
        setDetails("")
      }
    } catch (e) {
      console.log(e)
      console.log("Error sending the message")
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstname">Firstname:</label>
        <input
          type="text"
          name="firstname"
          id="firstname"
          placeholder="Enter your firstname"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
        />
        <label htmlFor="lastname">Lastname:</label>
        <input
          type="text"
          name="lastname"
          id="lastname"
          placeholder="Enter your lastname"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
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
        <label htmlFor="details">Details:</label>
        <textarea
          name="details"
          id="details"
          cols={30}
          rows={10}
          placeholder="How can we help you?"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        ></textarea>

        <button className="btn" type="submit">
          Send
        </button>
      </form>
    </>
  )
}

export default ContactContent
