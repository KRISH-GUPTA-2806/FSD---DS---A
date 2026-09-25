import React from 'react'

const Course = () => {
  return (
    <main className="page">
      <section className="course-header">
        <div>
          <p className="eyebrow">ABES ENGINEERING COLLEGE</p>
          <h1>Our Courses</h1>
          <p>Explore our engineering and technology programmes.</p>
        </div>
        <div className="course-logo">A</div>
      </section>

      <section className="course-card">
        <h2>B.Tech — Data Science</h2>
        <p>
          Build a strong foundation in programming, data analytics,
          machine learning and modern technologies.
        </p>
        <button>Learn More</button>
      </section>
    </main>
  )
}

export default Course
