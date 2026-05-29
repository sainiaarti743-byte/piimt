import React from "react";
import SEO from "./SEO";

const Contact = () => {
  return (
    <>
    <SEO
  title="Contact PIIMT EdTech"
  description="Contact PIIMT EdTech for admission and course information."
  keywords="Contact PIIMT EdTech, IT institute contact"
  url="https://piimtedtech.in/contact"
/>
      <div className="bg-light min-vh-100">
        
        {/* Hero / Header Section */}
        <section className="bg-dark text-white text-center py-5" style={{ background: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)" }}>
          <div className="container py-3">
            <span className="badge bg-primary text-uppercase px-3 py-2 rounded-pill mb-3 fw-semibold tracking-wider">
              Reach PIIMT EdTech
            </span>
            <h1 className="display-4 fw-bold mb-3">Jaipur & Sikar Centres</h1>
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <p className="fs-5 text-white-50 lh-base mb-0">
                  Questions before you join are a good sign. Whether you are trying to figure out which course suits you, want to check if a batch still has seats, or just need someone to explain how the whole thing works — our team is available.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Trust Banner (No Chatbots) */}
        <div className="container my-4">
          <div className="alert alert-info border-0 shadow-sm rounded-3 p-3 d-flex align-items-center justify-content-center">
            <span className="fs-4 me-3">🤝</span>
            <p className="mb-0 text-dark text-center">
              Six days a week, phones are answered by <strong>actual people</strong> who know the courses and can give you a straight answer. <strong>No chatbots, no automated responses.</strong>
            </p>
          </div>
        </div>

        {/* Main Contact Wrapper Section */}
        <section className="py-4">
          <div className="container">
            <div className="row g-4">
              
              {/* Left Column: Centre Details & Info */}
              <div className="col-lg-5">
                
                {/* Sikar Centre Card */}
                <div className="card border-0 shadow-sm rounded-3 mb-4">
                  <div className="card-body p-4">
                    <div className="d-flex align-items-center mb-3 text-primary">
                      <i className="bi bi-geo-alt-fill fs-4 me-2"></i>
                      <h4 className="fw-bold m-0 text-dark">Sikar Centre — <span className="fs-5 text-muted fw-normal">Main Campus</span></h4>
                    </div>
                    <p className="text-secondary mb-3 small">
                      Shiv Nagar, NH52, Gordhanpura, Palsana, Sikar, Rajasthan — 332402
                    </p>
                    <div className="border-top pt-2">
                      <div className="d-flex justify-content-between small mb-1">
                        <span className="text-muted"><i className="bi bi-clock me-1"></i> Mon–Sat:</span>
                        <span className="fw-semibold text-dark">8:00 AM – 7:00 PM</span>
                      </div>
                      <div className="d-flex justify-content-between small">
                        <span className="text-muted"><i className="bi bi-x-circle me-1"></i> Sunday:</span>
                        <span className="text-danger fw-semibold">Closed</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Jaipur Centre Card */}
                <div className="card border-0 shadow-sm rounded-3 mb-4">
                  <div className="card-body p-4">
                    <div className="d-flex align-items-center mb-3 text-primary">
                      <i className="bi bi-geo-alt-fill fs-4 me-2"></i>
                      <h4 className="fw-bold m-0 text-dark">Jaipur Centre</h4>
                    </div>
                    <p className="text-secondary mb-3 small">
                      Nursery Circle, Vaishali Nagar, Jaipur, Rajasthan — 302021
                    </p>
                    <div className="border-top pt-2">
                      <div className="d-flex justify-content-between small">
                        <span className="text-muted"><i className="bi bi-clock me-1"></i> Mon–Sat:</span>
                        <span className="fw-semibold text-dark">9:00 AM – 6:00 PM</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Walk-in & Quick Call Help Card */}
                <div className="card bg-dark text-white border-0 shadow-sm rounded-3">
                  <div className="card-body p-4">
                    <h5 className="fw-bold mb-3 text-warning">🚶‍♂️ Walk-In Visits Welcome</h5>
                    <p className="small text-white-50 mb-4">
                      You do not need to book an appointment. Show up during working hours and ask for the admissions desk. A counsellor will sit with you for as long as it takes.
                    </p>
                    <hr className="text-light-50" />
                    <div className="d-grid gap-2">
                      <a href="tel:+917300180494" className="btn btn-outline-light d-flex align-items-center justify-content-center">
                        <i className="bi bi-telephone me-2"></i> Call: +91 7300180494
                      </a>
                      <a href="https://wa.me/917300180494" className="btn btn-success d-flex align-items-center justify-content-center fw-bold">
                        <i className="bi bi-whatsapp me-2"></i> Chat on WhatsApp
                      </a>
                    </div>
                    <p className="text-center text-white-50 small mt-2 mb-0">
                      WhatsApp is quicker if you are reaching us outside peak hours.
                    </p>
                  </div>
                </div>

              </div>

              {/* Right Column: Enquiry Form */}
              <div className="col-lg-7">
                <div className="card border-0 shadow-sm rounded-3 bg-white h-100">
                  <div className="card-body p-4 p-md-5">
                    <h3 className="fw-bold text-dark mb-2">How to Get in Touch</h3>
                    <p className="text-secondary mb-4 small">
                      Fill in the form below. Someone from the team calls back within one working day — usually the same day if your form comes in before 4 PM.
                    </p>
                    
                    <form>
                      <div className="row g-3">
                        <div className="col-md-6">
                          <label className="form-label small fw-semibold text-secondary">Your Name</label>
                          <input type="text" className="form-control bg-light border-0 py-2.5" placeholder="Enter name" required />
                        </div>
                        <div className="col-md-6">
                          <label className="form-label small fw-semibold text-secondary">Phone Number</label>
                          <input type="tel" className="form-control bg-light border-0 py-2.5" placeholder="Enter mobile number" required />
                        </div>
                        <div className="col-md-6">
                          <label className="form-label small fw-semibold text-secondary">Course or Subject</label>
                          <input type="text" className="form-control bg-light border-0 py-2.5" placeholder="e.g., Web Development" required />
                        </div>
                        <div className="col-md-6">
                          <label className="form-label small fw-semibold text-secondary">Preferred Call Time</label>
                          <select className="form-select bg-light border-0 py-2.5" required>
                            <option value="">Select preferred time</option>
                            <option value="morning">Morning (9 AM - 12 PM)</option>
                            <option value="afternoon">Afternoon (12 PM - 4 PM)</option>
                            <option value="evening">Evening (4 PM - 7 PM)</option>
                          </select>
                        </div>
                        <div className="col-12">
                          <label className="form-label small fw-semibold text-secondary">Your Message / Question (Optional)</label>
                          <textarea className="form-control bg-light border-0" rows="4" placeholder="How can we help you?"></textarea>
                        </div>
                        <div className="col-12 mt-4">
                          <button type="submit" className="btn btn-primary w-100 py-2.5 fw-bold">
                            Submit Enquiry Form
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

            </div>

            {/* Map Section */}
            <div className="card border-0 shadow-sm rounded-3 overflow-hidden mt-5">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.025345758414!2d75.7483483!3d26.9011111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db47b85c1fff5%3A0x6b1fbc9c6dcbffeb!2sNursery%20Circle%2C%20Vaishali%20Nagar%2C%20Jaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1716380000000!5m2!1sen!2sin" 
                width="100%" 
                height="400" 
                style={{ border: "0" }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="PIIMT Location Map"
              ></iframe>
            </div>

          </div>
        </section>
      </div>

      {/* Floating Back to Top Button */}
      <button type="button" className="btn btn-warning btn-lg rounded-circle position-fixed bottom-0 end-0 m-4 shadow" id="btn-back-to-top" style={{ zIndex: 1050 }}>
        <i className="bi bi-arrow-up text-white"></i>
      </button>
    </>
  );
};

export default Contact;