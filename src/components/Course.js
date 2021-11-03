import React from "react"

const Header = ({ header }) => {
  return <h1>{header.name}</h1>
}

const Content = ({ content, exercises, total }) => {
  return (
    <div>
      {content.name} {exercises}
      {total}
    </div>
  )
}

const Course = ({ course }) => {
  let total = 0
  // course.parts.forEach((part) => {
  //   total += part.exercises
  // })
  console.log(course.parts)
  total = course.parts.reduce((sum, part) => {
    const sumOfNum = sum + part.exercises
    return sumOfNum
  }, 0)

  return (
    <div>
      <Header header={course} />
      {course.parts.map((course, index) => (
        <Content
          key={course.id}
          content={course}
          exercises={course.exercises}
        />
      ))}
      total of {total} exercises
    </div>
  )
}

export default Course
