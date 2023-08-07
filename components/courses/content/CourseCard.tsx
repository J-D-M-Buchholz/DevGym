import React from "react"
import Link from "next/link"

interface CardProps {
  course_title: string
  description: string
}

const CourseCard: React.FC<CardProps> = (props) => {
  const { course_title, description } = props
  return (
    <div className="course_card">
      <img src="#" alt="Placeholder Course Logo" />
      <h3>{course_title}</h3>
      <p>{description}</p>
      <Link href="/courses/HTML">Start</Link>
    </div>
  )
}

export default CourseCard
