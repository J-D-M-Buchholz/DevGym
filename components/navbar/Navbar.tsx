//Bitte alles außer den Nav löschen und eigene Komponenten hier einfügen!!!
import Link from 'next/link'
import React, { useState } from 'react'

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about">
            About
          </Link>
        </li>
        <li>
          <Link href="/contact">
            Contact
          </Link>
        </li>
        <li>
          <Link href="/content">
            Content
          </Link>
        </li>
        <li>
          <Link href="/users">
            Users
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar