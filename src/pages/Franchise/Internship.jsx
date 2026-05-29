import React from "react";
import SEO from "../SEO";

const Internship = () => {
  
  const tracks = [
    {
      title: "Web Development",
      tech: "HTML, CSS, JavaScript, PHP",
      desc: "You build pages that go live, not tutorial clones."
    },
    {
      title: "Digital Marketing",
      tech: "Google Ads, Meta Campaigns, SEO",
      desc: "Running ads, setting up campaigns, pulling SEO reports for real businesses."
    },
    {
      title: "Graphic Design",
      tech: "Logos, Social Media Creatives, Brand Kits",
      desc: "Creating assets for clients who actually use the work."
    },
    {
      title: "Flutter App Development",
      tech: "Android / iOS Build",
      desc: "Joining an ongoing build, writing real code inside a working codebase."
    },
    {
      title: "AI & Data",
      tech: "Python, Datasets, Model Training",
      desc: "Python scripts, dataset work, and basic model training on projects our in-house team is running."
    },
    {
      title: "Hardware & Networking",
      tech: "Physical Lab, Network Config",
      desc: "Physical lab setup, network configuration, and documentation for real infrastructure."
    }
  ];

  return (
    <>
    <SEO
  title="Internship Program – PIIMT EdTech"
  description="Join professional internship programs with live projects and practical IT training."
  keywords="IT internship Jaipur, internship training, live project internship"
  url="https://piimtedtech.in/internship"
/>
   
    <div className="bg-light min-vh-100 pb-5">
      
      {/* Hero / Header Section */}
      <header className="bg-dark text-white text-center py-5 mb-5 position-relative shadow-sm" style={{ background: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)" }}>
        <div className="container py-4">
          <span className="badge bg-primary text-uppercase px-3 py-2 rounded-pill mb-3 fw-semibold tracking-wider">
            3-Month Program
          </span>
          <h1 className="display-4 fw-bold mb-3">
            IT Internship in Jaipur
          </h1>
          <p className="lead fs-3 text-primary-emphasis fw-medium text-info mb-4">
            Gain Real Experience at PIIMT EdTech
          </p>
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <p className="fs-5 text-white-50 lh-base mb-0">
                Spend three months at the right place and your career can shift completely. The PIIMT EdTech internship is not a filler program you do to tick a box on your resume. It is project work, with actual timelines, actual clients, and a mentor sitting next to you who has done this professionally.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container">
        
        {/* Intro Info Nudge */}
        <div className="bg-white border rounded-3 p-4 mb-5 shadow-sm text-center">
          <p className="fs-5 text-secondary mb-0">
            "Jaipur and Sikar have no shortage of IT institutes. Finding one where the internship means something is harder. <strong className="text-dark">Here is what we have built.</strong>"
          </p>
        </div>

        {/* Section: Six Tracks */}
        <section className="mb-5">
          <div className="text-center mb-4">
            <h2 className="fw-bold text-dark">Six Tracks, One Clear Goal</h2>
            <p className="text-muted max-w-2xl mx-auto">
              Pick the area you want to build your career in. We put you on a live project inside that domain straight away.
            </p>
          </div>

          {/* Grid Layout for Tracks */}
          <div className="row g-4">
            {tracks.map((track, index) => (
              <div key={index} className="col-md-6 col-lg-4">
                <div className="card h-100 border-0 shadow-sm rounded-3">
                  <div className="card-body p-4 d-flex flex-column">
                    <div className="d-flex align-items-center mb-3">
                      <span className="badge bg-info text-dark rounded-circle px-2 py-1 me-2 fw-bold">{index + 1}</span>
                      <h5 className="card-title fw-bold m-0 text-dark">{track.title}</h5>
                    </div>
                    <h6 className="card-subtitle mb-3 text-primary fw-semibold small">
                      ⚡ {track.tech}
                    </h6>
                    <p className="card-text text-secondary small flex-grow-1">
                      {track.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Depth Warning Note */}
          <div className="alert alert-info border-0 shadow-sm rounded-3 mt-4 p-3 d-flex align-items-center" role="alert">
            <span className="fs-4 me-3">💡</span>
            <p className="mb-0 text-dark small">
              <strong>Please Note:</strong> You stay in your chosen track for the full duration. No switching mid-program, because depth matters more than variety when you are starting out.
            </p>
          </div>
        </section>

        {/* Section: Timeline (What the 30 to 90 Days Look Like) */}
        <section className="card border-0 shadow-sm p-4 p-md-5 rounded-3 bg-white">
          <div className="d-flex align-items-center mb-4 border-bottom pb-3">
            <span className="fs-3 me-2">📆</span>
            <h2 className="fw-bold m-0 text-dark">What the 30 to 90 Days Look Like</h2>
          </div>

          <div className="row g-4">
            {/* Week 1 */}
            <div className="col-md-6">
              <div className="p-3 bg-light rounded-3 border-start border-4 border-primary h-100">
                <h5 className="fw-bold text-primary mb-2">Week 1: Orientation</h5>
                <p className="text-secondary small mb-0">
                  You meet your assigned mentor, go through the project brief, and understand exactly what is expected of you each week. After that, things move quickly.
                </p>
              </div>
            </div>

            {/* Week 2 Onwards */}
            <div className="col-md-6">
              <div className="p-3 bg-light rounded-3 border-start border-4 border-success h-100">
                <h5 className="fw-bold text-success mb-2">Week 2 Onwards: Core Work</h5>
                <p className="text-secondary small mb-0">
                  You are working. Assignments come in, reviews happen every Friday, and your mentor marks up your work with honest notes — the kind you would get from a senior colleague, not a teacher. By the final two weeks, you are putting finishing touches.
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="text-center text-muted py-4 mt-5 border-top border-light">
        <small>© 2026 PIIMT EdTech. All rights reserved.</small>
      </footer>
    </div>
     </>
  );
};

export default Internship;