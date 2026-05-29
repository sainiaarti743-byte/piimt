import React from "react";
import SEO from "./SEO";

const Admission = () => {
 
  const courses = [
    { name: "Web Design & Development", duration: "3–6 months" },
    { name: "Digital Marketing & SEO", duration: "6 months" },
    { name: "AI & Machine Learning", duration: "4–6 months" },
    { name: "Graphic Designing", duration: "3–4 months" },
    { name: "Hardware & Networking", duration: "3–6 months" },
    { name: "Flutter App Development", duration: "4 months" },
    { name: "AWS Cloud Computing", duration: "3 months" },
    { name: "Accounting & ERP — Tally Prime + GST", duration: "3 months" },
    { name: "PHP Native, React Native, ASP.NET", duration: "3–4 months each" },
    { name: "Business Communication & Soft Skills", duration: "2 months" },
  ];

  return (
    <>

    <SEO
  title="Admission Open – PIIMT EdTech"
  description="Apply now for IT training courses at PIIMT EdTech."
  keywords="IT admission Jaipur"
  url="https://piimtedtech.in/admission"
/>
    <div className="">
    
    <div className="bg-light min-vh-100 pb-5">
      
      {/* Hero Section */}
      <header className="bg-primary bg-gradient text-white text-center py-5 mb-5 shadow-sm">
        <div className="container py-3">
          <span className="badge bg-light text-primary text-uppercase px-3 py-2 rounded-pill mb-3 fw-bold">
            Admissions Open for 2026
          </span>
          <h1 className="display-4 fw-bold tracking-tight">
            Enrol at PIIMT EdTech
          </h1>
          <p className="lead fs-3 fw-normal text-white-50">
            Jaipur & Sikar Centres
          </p>
          <div className="row justify-content-center mt-4">
            <div className="col-lg-8">
              <p className="fs-5 text-white-50 lh-base">
                New batches at PIIMT EdTech start regularly through the year. Right now, seats are available across most of our programs in Jaipur and Sikar. Batch sizes are capped, so secure your slot early!
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="container">
        
        {/* Urgent Nudge Banner */}
        <div className="alert alert-warning border-start border-4 border-warning shadow-sm rounded-3 p-4 mb-5" role="alert">
          <div className="d-flex align-items-start">
            <span className="fs-4 me-3">⏱️</span>
            <div>
              <h5 className="alert-heading fw-bold mb-1">Practical Nudge:</h5>
              <p className="mb-0 text-muted">
                Batch sizes are capped, and the morning slots fill up faster than most people expect. 
                For working professionals: <strong>the 7 PM slot</strong> tends to work well and attendance holds up better when you're juggling a job.
              </p>
            </div>
          </div>
        </div>

        {/* Courses Section */}
        <section className="mb-5">
          <div className="d-flex align-items-center mb-3">
            <span className="fs-3 me-2">📖</span>
            <h2 className="fw-bold m-0 text-dark">Courses With Open Seats Right Now</h2>
          </div>
          <p className="text-secondary mb-4">
            All programs listed below are currently accepting students. Some are available at both Jaipur and Sikar; a few are centre-specific. Our team will confirm availability for your preferred location when you enquire.
          </p>

          {/* Course Cards Grid */}
          <div className="row g-3">
            {courses.map((course, index) => (
              <div key={index} className="col-md-6">
                <div className="card h-100 border-light shadow-sm hover-shadow">
                  <div className="card-body d-flex justify-content-between align-items-center p-3">
                    <div className="d-flex align-items-center">
                      <span className="text-success me-2 fs-5">✓</span>
                      <span className="fw-semibold text-dark">{course.name}</span>
                    </div>
                    <span className="badge bg-primary-subtle text-primary border border-primary-subtle px-2 py-1.5 rounded ms-3 flex-shrink-0">
                      {course.duration}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Who Can Join Section */}
        <section className="card border-light shadow-sm p-4 p-md-5 rounded-3 bg-white">
          <div className="d-flex align-items-center mb-3">
            <span className="fs-3 me-2">🎯</span>
            <h2 className="fw-bold m-0 text-dark">Who Can Join</h2>
          </div>
          
          <p className="text-secondary fs-5 lh-base mb-4">
            No entrance exam. No interview. The eligibility bar is deliberately low because we have seen students from all kinds of academic backgrounds do well here — <strong className="text-dark">what carries weight is effort inside the program, not marks from school.</strong>
          </p>

          <div className="d-inline-flex align-items-center bg-light border p-3 rounded-3">
            <span className="badge bg-dark text-white uppercase px-2.5 py-1.5 me-3">
              Eligibility
            </span>
            <span className="fw-medium text-dark">
              10th pass or above for most short-term and diploma-level courses
            </span>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="text-center text-muted py-4 mt-5 border-top border-light">
        <small>© 2026 PIIMT EdTech. All rights reserved.</small>
      </footer>
    </div>
    </div>
    </>
  );
};

export default Admission;