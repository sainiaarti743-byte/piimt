import React from "react";
import SEO from "./SEO";

const Faq = () => {
    return (
        <>
        <SEO
  title="Frequently Asked Questions"
  description="Find answers to commonly asked questions about courses and admissions."
  keywords="FAQ PIIMT EdTech"
  url="https://piimtedtech.in/faq"
/>
            <div className="faq-page py-5">
                <div className="container">
                    <h2 className="fw-bold text-center mb-4">Frequently Asked Questions (FAQ)</h2>
                    <p className="text-center mb-5">
                        Have questions about our courses, admissions, or certifications?
                        Find the answers to the most commonly asked questions below.
                    </p>

                    <div className="accordion" id="faqAccordion">

                        {/* <!-- Q1 --> */}
                        <div className="accordion-item mb-3 shadow-sm">
                            <h2 className="accordion-header" id="faqHeading1">
                                <button className="accordion-button fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapse1" aria-expanded="true" aria-controls="faqCollapse1">
                                    What is the fee range?
                                </button>
                            </h2>
                            <div id="faqCollapse1" className="accordion-collapse collapse show" aria-labelledby="faqHeading1" data-bs-parent="#faqAccordion">
                                <div className="accordion-body">
                                    Course fees at PIIMT EdTech start from ₹3,000 and go up to ₹1,20,000 depending on the program. We also have EMI options available. Call us and we will walk you through the exact fee for the course you are interested in.
                                </div>
                            </div>
                        </div>

                        {/* <!-- Q2 --> */}
                        <div className="accordion-item mb-3 shadow-sm">
                            <h2 className="accordion-header" id="faqHeading2">
                                <button className="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapse2" aria-expanded="false" aria-controls="faqCollapse2">
                                    Do you offer online classNamees?
                                </button>
                            </h2>
                            <div id="faqCollapse2" className="accordion-collapse collapse" aria-labelledby="faqHeading2" data-bs-parent="#faqAccordion">
                                <div className="accordion-body">
                                    Yes — several of our courses run in both online and offline formats. If you are based outside Jaipur or Sikar, ask us about the online batch schedule for your preferred course.
                                </div>
                            </div>
                        </div>

                        {/* <!-- Q3 --> */}
                        <div className="accordion-item mb-3 shadow-sm">
                            <h2 className="accordion-header" id="faqHeading3">
                                <button className="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapse3" aria-expanded="false" aria-controls="faqCollapse3">
                                    What qualifications do I need to join?
                                </button>
                            </h2>
                            <div id="faqCollapse3" className="accordion-collapse collapse" aria-labelledby="faqHeading3" data-bs-parent="#faqAccordion">
                                <div className="accordion-body">
                                    Most of our courses are open to anyone who has completed className 12 or above. Some advanced programs — like AWS or AI — are better suited to graduates or those with basic programming knowledge. We will tell you honestly if a course is right for your level.
                                </div>
                            </div>
                        </div>

                        {/* <!-- Q4 --> */}
                        <div className="accordion-item mb-3 shadow-sm">
                            <h2 className="accordion-header" id="faqHeading4">
                                <button className="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapse4" aria-expanded="false" aria-controls="faqCollapse4">
                                    Will I get a certificate?
                                </button>
                            </h2>
                            <div id="faqCollapse4" className="accordion-collapse collapse" aria-labelledby="faqHeading4" data-bs-parent="#faqAccordion">
                                <div className="accordion-body">
                                    Yes. Every PIIMT EdTech course ends with a certification that is ISO endorsed and recognised by employers across India and internationally. Some courses also help you prepare for third-party certifications like Google, AWS, or Cisco.
                                </div>
                            </div>
                        </div>

                        {/* <!-- Q5 --> */}
                        <div className="accordion-item mb-3 shadow-sm">
                            <h2 className="accordion-header" id="faqHeading5">
                                <button className="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapse5" aria-expanded="false" aria-controls="faqCollapse5">
                                    How quickly can I get placed after finishing?
                                </button>
                            </h2>
                            <div id="faqCollapse5" className="accordion-collapse collapse" aria-labelledby="faqHeading5" data-bs-parent="#faqAccordion">
                                <div className="accordion-body">
                                    It depends on the course and the effort you put in. Most of our students who actively work with our placement team get their first role within 1–3 months of completing their course. We share honest placement data — ask us for our most recent numbers.
                                </div>
                            </div>
                        </div>

                        {/* <!-- Q6 --> */}
                        <div className="accordion-item mb-3 shadow-sm">
                            <h2 className="accordion-header" id="faqHeading6">
                                <button className="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapse6" aria-expanded="false" aria-controls="faqCollapse6">
                                    What are the benefits of joining PIIMT EdTech?
                                </button>
                            </h2>
                            <div id="faqCollapse6" className="accordion-collapse collapse" aria-labelledby="faqHeading6" data-bs-parent="#faqAccordion">
                                <div className="accordion-body">
                                    At PIIMT, you get:
                                    <ul>
                                        <li>Hands-on training with real projects</li>
                                        <li>Experienced industry mentors</li>
                                        <li>Career counseling and placement support</li>
                                        <li>Globally recognized certifications</li>
                                        <li>Access to digital tools and learning resources</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Q7 --> */}
                        <div className="accordion-item mb-3 shadow-sm">
                            <h2 className="accordion-header" id="faqHeading7">
                                <button className="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapse7" aria-expanded="false" aria-controls="faqCollapse7">
                                    How can I contact PIIMT for more information?
                                </button>
                            </h2>
                            <div id="faqCollapse7" className="accordion-collapse collapse" aria-labelledby="faqHeading7" data-bs-parent="#faqAccordion">
                                <div className="accordion-body">
                                    You can reach us through:
                                    <ul>
                                        <li><strong>Phone:</strong> +91-7300180494</li>
                                        <li><strong>Email:</strong> Piimtedtech.com</li>
                                        <li>Or visit our <strong>Jaipur Center</strong> for a free counseling session.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
};

export default Faq;