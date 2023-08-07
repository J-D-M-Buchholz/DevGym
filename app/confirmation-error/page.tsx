import React from "react"
import Link from "next/link"

export default function page() {
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>
        Error confirming your email, try again later or{" "}
        <Link href="/contact" style={{ color: "red" }}>
          {" "}
          contact support{" "}
        </Link>
      </h2>
    </div>
  )
}
