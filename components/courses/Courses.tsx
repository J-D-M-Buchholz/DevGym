import React from "react"

import CourseCard from "./content/CourseCard"

const Courses = () => {
  return (
    <div className="courses_container">
      <CourseCard
        course_title="HTML"
        description="Your starting point in your webdevelopment career. HTML is..."
      />
      <CourseCard
        course_title="CSS"
        description="Your second step in your webdevelopment career. CSS is..."
      />
      <CourseCard
        course_title="Javascript"
        description="Your third step in your webdevelopment career. Javascript is..."
      />
    </div>
  )
}

export default Courses
