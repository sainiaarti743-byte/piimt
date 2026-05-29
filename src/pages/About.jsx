import React from "react";
import SEO from "./SEO";

const About = () => {
    return (
        <>
            <SEO
                title="About PIIMT EdTech"
                description="Know more about PIIMT EdTech and our industry-level IT training programs."
                keywords="About PIIMT EdTech, IT institute Jaipur"
                url="https://piimtedtech.in/about"
            />

            <div className="about-us">
                <section className="py-5 about-us-meet">
                    <div className="container">
                        <div className="row g-4">
                            <div className="col-md-6">
                                <div>
                                    <img src="assets/image/about-us.jpg" className=" img-fluid" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <h3>Who We Are</h3>
                                <p>Walk into any PIIMT EdTech centre and you will notice something different straightaway — students are not sitting through lectures, they are building things. One student is coding a live website. Another is running a Google Ads campaign on a real account. A third is training an AI model using Python. That hands-on energy is not accidental. It is the result of a deliberate choice we made when PIIMT EdTech was founded: to teach skills the way the industry actually uses them.</p>

                                <p>PIIMT EdTech — the Professional Institute of Information and Management Technology — is a quality-committed IT training institute with centres in Jaipur and Sikar, Rajasthan. We offer more than 100 job-oriented programmes spanning web development, digital marketing, artificial intelligence, data science, graphic designing, cloud computing, hardware and networking, mobile app development, accounting and ERP, and business productivity skills. Whether you are a school leaver exploring your first career step, a graduate looking to sharpen your technical edge, or a working professional aiming to pivot into tech, PIIMT EdTech has a structured path designed for you.</p>

                            </div>
                        </div>


                    </div>



                    {/* <!-- Statistics Section --> */}
                    <section className="py-5">
                        <div className="container py-5" style={{ backgroundColor: '#1a3761' }}>
                            <div className="row text-center">
                                {/* <!-- Students Trained --> */}
                                <div className="col-md-3 col-sm-6 mb-4 mb-md-0">
                                    <h3 className="display-4 fw-bold text-warning">1,000+</h3>
                                    <p className="text-white fs-5 opacity-75 text-center">Students Trained</p>
                                </div>

                                {/* <!-- Certified Courses --> */}
                                <div className="col-md-3 col-sm-6 mb-4 mb-md-0">
                                    <h3 className="display-4 fw-bold text-success">100+</h3>
                                    <p className="text-white fs-5 opacity-75 text-center">Certified Courses</p>
                                </div>

                                {/* <!-- Training Centres --> */}
                                <div className="col-md-3 col-sm-6 mb-4 mb-md-0">
                                    <h3 className="display-4 fw-bold text-warning">25+</h3>
                                    <p className="text-white fs-5 opacity-75 text-center">Training Centres</p>
                                </div>

                                {/* <!-- Franchise Partners --> */}
                                <div className="col-md-3 col-sm-6 mb-4 mb-md-0">
                                    <h3 className="display-4 fw-bold text-success">85+</h3>
                                    <p className="text-white fs-5 opacity-75 text-center">Franchise Partners</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="py-5 bg-white">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 mx-auto">
                                    {/* <!-- Heading --> */}
                                    <h2 className="fw-bold mb-4" style={{ color: '#1a3761', borderBottom: '2px solid #1a3761', display: 'inline-block', paddingBottom: '5px' }}>
                                        Our Story
                                    </h2>

                                    {/* <!-- Content Paragraphs --> */}
                                    <div className="story-content" style={{ color: '#333', lineHeight: '1.8' }}>
                                        <p className="mb-4 fs-5">
                                            PIIMT EdTech did not begin with a business plan. It began with a problem. The founders saw motivated young people in Rajasthan — students who wanted careers in technology — struggling to find training that actually prepared them for real jobs. College curricula were outdated. Coaching centres taught theory without practice. And the digital economy was growing fast, creating demand for skilled professionals that the existing education system simply was not meeting.
                                        </p>

                                        <p className="mb-4 fs-5">
                                            The answer was to build something new from the ground up. A training institute where the curriculum matched what recruiters actually asked for. Where trainers were not just teachers but practitioners with years of industry experience. Where a student from Sikar or Jaipur could graduate with a portfolio, a certification, and the confidence to apply for the same roles as candidates from any major city.
                                        </p>

                                        <p className="mb-0 fs-5">
                                            That founding idea has not changed. What has changed is our scale. From a single centre, PIIMT EdTech has grown into a network that spans multiple states and operates a franchise model that allows other education entrepreneurs to deliver the same standard of training in their own communities. We are a Rajasthan-rooted institution with a national footprint and ambitions that match the scale of the opportunities our students are chasing.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                </section>
                <section className="py-5">
                    <div className="container">
                        <h2 className="fw-bold mb-4 text-center">Our Mission & Vision</h2>

                        <div className="row g-4">
                            <div className="col-md-6">
                                <div className="p-4 bg-white shadow rounded h-100">

                                    <div className="text-center mb-4">
                                        <i className="fa-solid fa-bullseye fs-1 text-warning mb-2"></i>
                                        <h5>Our Mission</h5></div>
                                    <p>Our mission is straightforward: to close the gap between what students learn and what employers need. We do this by keeping our curriculum in constant contact with industry requirements, involving working professionals in programme design, running live-project sessions as a core part of every course, and supporting students through placement assistance after they graduate. Every decision we make — from the tools we teach to the assessments we set — is tested against that mission.</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="p-4 bg-white shadow rounded h-100">
                                    <div className="text-center mb-4">
                                        <i className="fa-solid fa-eye fs-1 text-warning mb-2"></i>
                                        <h5>Our Vision</h5></div>
                                    <p>Our vision is to become Rajasthan's most impactful IT skill development institution and to build a network of PIIMT-trained professionals who are recognised across India for their practical competence and professional readiness. We believe that geography should never be a barrier to quality education, which is why we have built our franchise model to bring PIIMT-standard training to towns and districts beyond the major cities.</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="py-5 bg-light">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 mx-auto">
                                {/* <!-- Main Heading --> */}
                                <h2 className="fw-bold mb-4" style={{ color: '#1a3761', borderBottom: '2px solid #1a3761', display: 'inline-block', paddingBottom: '5px' }}>
                                    What We Stand For
                                </h2>

                                <div className="mt-4">
                                    {/* <!-- Point 1 --> */}
                                    <div className="mb-4">
                                        <h5 className="fw-bold" style={{ color: '#fd7e14' }}>Practical Over Theoretical</h5>
                                        <p className="text-muted fs-6" style={{ lineHeight: '1.7' }}>
                                            Every course at PIIMT EdTech is built around doing, not just knowing. We measure a session's success by what students produce in it — not by how many slides were covered. Lab time, live projects, and real-tool practice make up the bulk of our contact hours.
                                        </p>
                                    </div>

                                    {/* <!-- Point 2 --> */}
                                    <div className="mb-4">
                                        <h5 className="fw-bold" style={{ color: '#fd7e14' }}>Industry-Aligned Curriculum</h5>
                                        <p className="text-muted fs-6" style={{ lineHeight: '1.7' }}>
                                            Our syllabi are reviewed regularly against job descriptions, recruiter feedback, and emerging technology trends. We do not teach yesterday's tools for tomorrow's jobs. When the market moves — towards AI, towards data science, towards cloud-native development — our courses move with it.
                                        </p>
                                    </div>

                                    {/* <!-- Point 3 --> */}
                                    <div className="mb-4">
                                        <h5 className="fw-bold" style={{ color: '#fd7e14' }}>Accessible Quality</h5>
                                        <p className="text-muted fs-6" style={{ lineHeight: '1.7' }}>
                                            We keep our fee structures genuinely affordable. Premium IT training should not be available only to students in big cities with big budgets. From our entry-level courses to our advanced certification programmes, we design pricing that reflects our belief that every serious learner deserves access to serious training.
                                        </p>
                                    </div>

                                    {/* <!-- Point 4 --> */}
                                    <div className="mb-0">
                                        <h5 className="fw-bold" style={{ color: '#fd7e14' }}>Integrity in Everything</h5>
                                        <p className="text-muted fs-6" style={{ lineHeight: '1.7' }}>
                                            Our certifications are issued because students earned them, not because they enrolled. Our placement support is honest — we guide students towards opportunities that match their skills, and we do not make guarantees we cannot keep. Our trainers are qualified, our facilities are maintained, and our commitment to every student is genuine.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>




                {/* <!-- Learn Skills --> */}
                <section className="py-5" style={{ backgroundColor: 'var(--primary-color)' }}>
                    <div className="container text-center">
                        <div className="row g-4">
                            <div className="col-md-3 shadow-sm">
                                <div className="icon-circle mx-auto"><img src="assets/image/hand-icon.webp" className="img-fluid icon-industry" /></div>
                                <h6 className="fw-semibold">Hands-on Training</h6>
                                <p className="small">Practical experience with industry-standard tools and technologies</p>
                            </div>
                            <div className="col-md-3 shadow-sm">
                                <div className="icon-circle  mx-auto"><img src="assets/image/partner-ship.png" className="img-fluid icon-industry" /></div>
                                <h6 className="fw-semibold">Industry Partnerships</h6>
                                <p className="small">Collaborations with industry leaders to provide job opportunities and mentorship</p>
                            </div>
                            <div className="col-md-3 shadow-sm">
                                <div className="icon-circle  mx-auto"><img src="assets/image/industry.png" className="img-fluid icon-industry" /></div>
                                <h6 className="fw-semibold">Internship Programs</h6>
                                <p className="small">Opportunities to gain real-world experience and build professional networks</p>
                            </div>
                            <div className="col-md-3 shadow-sm">
                                <div className="icon-circle  mx-auto"><img src="assets/image/career-support.png" className="img-fluid icon-industry" /></div>
                                <h6 className="fw-semibold">Career Support</h6>
                                <p className="small"> Resume building, interview preparation, and job placement assistance</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-5 bg-light">
                    <div className="container text-center">
                        <h2 className="fw-bold mb-5">The Team Behind PIIMT EdTech</h2>
                        <p>PIIMT EdTech is led by a team of educators and professionals who collectively bring decades of experience in IT training, institutional management, and career development.</p>
                        <div className="row g-4 justify-content-center">
                            <div className="col-lg-3 col-md-6">
                                <div className="card border-0 shadow testimonial-card p-4">
                                    <img src="assets/image/dummy-man.png" className="mx-auto mb-3 rounded-circle img-fluid" alt="" />
                                    <h6 className="fw-bold">Meet Our Chairman</h6>
                                    <p className="small text-muted">“Upasana Choudhary, the respected Chairman of PIIMT, is the guiding force behind the institute’s vision, growth, and excellence. With a strong dedication to transforming education, she believes that every student deserves opportunities that empower them to build a successful future.”</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="card border-0 shadow testimonial-card p-4">
                                    <img src="assets/image/dummy-man.png" className="mx-auto mb-3 rounded-circle img-fluid" alt="" />
                                    <h6 className="fw-bold">Meet Our Training Head</h6>
                                    <p className="small text-muted">“Kamlesh, the esteemed Training Head of PIIMT, plays a crucial role in shaping the skills and capabilities of our students. With extensive experience in professional training and student development, he leads the institute’s training initiatives with passion, expertise, and a strong commitment to excellence.”</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="card border-0 shadow testimonial-card p-4">
                                    <img src="assets/image/dummy-man.png" className="mx-auto mb-3 rounded-circle img-fluid" alt="" />
                                    <h6 className="fw-bold">Meet Our Director</h6>
                                    <p className="small text-muted">“Neelam, the dedicated Director of PIIMT, is a strong pillar of leadership, discipline, and academic excellence. With her clear vision and student-centric approach, she works tirelessly to ensure that PIIMT continues to grow as an institution that provides quality education and real opportunities for youth.”</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="card border-0 shadow testimonial-card p-4">
                                    <img src="assets/image/dummy-man.png" className="mx-auto mb-3 rounded-circle img-fluid" alt="" />
                                    <h6 className="fw-bold">Meet Our Director</h6>
                                    <p className="small text-muted">“Suvita, the esteemed Director of PIIMT, is a dynamic leader known for her vision, dedication, and commitment to academic excellence. With a strong belief in quality education and disciplined growth, she ensures that PIIMT continues to evolve as a premier institution focused on student success and development.”</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-5 bg-white">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 mx-auto">
                                {/* <!-- Main Heading --> */}
                                <h2 className="fw-bold mb-3" style={{ color: '#1a3761', borderBottom: '2px solid #1a3761', display: 'inline-block', paddingBottom: '5px' }}>
                                    Why Students Choose PIIMT EdTech
                                </h2>


                                {/* <!-- List of Reasons --> */}
                                <ul className="list-unstyled mt-4">
                                    <li className="mb-3 d-flex align-items-start">
                                        <i className="fa-solid fa-diamond me-3 mt-1" style={{ color: '#fd7e14', fontSize: '0.8rem' }}></i>
                                        <span className="fs-5 text-dark">Expert Faculty with real industry experience — not just academic backgrounds</span>
                                    </li>

                                    <li className="mb-3 d-flex align-items-start">
                                        <i className="fa-solid fa-diamond me-3 mt-1" style={{ color: '#fd7e14', fontSize: '0.8rem' }}></i>
                                        <span className="fs-5 text-dark">Live Projects included in every course — graduates leave with a working portfolio</span>
                                    </li>

                                    <li className="mb-3 d-flex align-items-start">
                                        <i className="fa-solid fa-diamond me-3 mt-1" style={{ color: '#fd7e14', fontSize: '0.8rem' }}></i>
                                        <span className="fs-5 text-dark">Industry-Recognised Certification — our certificates are accepted by hiring partners across India</span>
                                    </li>

                                    <li className="mb-3 d-flex align-items-start">
                                        <i className="fa-solid fa-diamond me-3 mt-1" style={{ color: '#fd7e14', fontSize: '0.8rem' }}></i>
                                        <span className="fs-5 text-dark">Flexible Learning — offline classNameroom sessions and online options available</span>
                                    </li>

                                    <li className="mb-3 d-flex align-items-start">
                                        <i className="fa-solid fa-diamond me-3 mt-1" style={{ color: '#fd7e14', fontSize: '0.8rem' }}></i>
                                        <span className="fs-5 text-dark">Placement Support — resume preparation, mock interviews, and job referrals</span>
                                    </li>

                                    <li className="mb-3 d-flex align-items-start">
                                        <i className="fa-solid fa-diamond me-3 mt-1" style={{ color: '#fd7e14', fontSize: '0.8rem' }}></i>
                                        <span className="fs-5 text-dark">Affordable Fees — courses starting from ₹3,000 with easy instalment options</span>
                                    </li>

                                    <li className="mb-3 d-flex align-items-start">
                                        <i className="fa-solid fa-diamond me-3 mt-1" style={{ color: '#fd7e14', fontSize: '0.8rem' }}></i>
                                        <span className="fs-5 text-dark">150+ Branches across India — consistent quality at every location</span>
                                    </li>

                                    <li className="mb-0 d-flex align-items-start">
                                        <i className="fa-solid fa-diamond me-3 mt-1" style={{ color: '#fd7e14', fontSize: '0.8rem' }}></i>
                                        <span className="fs-5 text-dark">Courses in AI & Data Science — future-ready skills that the market demands right now</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-5 bg-light">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 mx-auto">
                                {/* <!-- Main Heading --> */}
                                <h2 className="fw-bold mb-3" style={{ color: '#1a3761', borderBottom: '2px solid #1a3761', display: 'inline-block', paddingBottom: '5px' }}>
                                    PIIMT EdTech Franchise Programme
                                </h2>


                                {/* <!-- Content Body --> */}
                                <div className="franchise-content" style={{ color: '#333', lineHeight: '1.8' }}>
                                    <p className="mb-4 fs-5">
                                        PIIMT EdTech's franchise programme is one of the most accessible ways to start an education business in India. With an initial refundable security deposit of <strong>₹25,000</strong>, franchise partners gain access to PIIMT's complete curriculum, brand support, marketing materials, trainer guidance, and an admissions system that has already been proven across 85+ locations.
                                    </p>

                                    <p className="mb-4 fs-5">
                                        We guide franchise partners through every stage — from choosing the right location and setting up the centre to running admission campaigns and managing day-to-day operations. Our franchise model works because it is built on a real product: training that students genuinely benefit from, and a certification they can use.
                                    </p>

                                    <p className="mb-4 fs-5">
                                        If you are passionate about education and want to build a sustainable business in your community, speak to our franchise team today.
                                    </p>

                                    {/* <!-- CTA Button (Optional but recommended) --> */}
                                    <a href="franchise.html" className="btn btn-warning text-white fw-bold px-4 py-2 mt-2">
                                        Speak to Franchise Team
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-4">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 mx-auto">
                                {/* <!-- Snapshot Box --> */}
                                <div className="p-4" style={{ backgroundColor: '#f1fbf4', borderLeft: '5px solid #1a6d32' }}>

                                    <h5 className="fw-bold mb-3" style={{ color: '#1a6d32' }}>Franchise in a Snapshot</h5>

                                    <ul className="list-unstyled mb-0" style={{ color: '#444', lineHeight: '2' }}>
                                        <li>
                                            <strong>Initial Security Deposit:</strong> ₹25,000 (Refundable)
                                        </li>
                                        <li>
                                            <strong>Support:</strong> Location guidance, branding, marketing creatives, faculty training
                                        </li>
                                        <li>
                                            <strong>Revenue Model:</strong> Admission fees from students you enrol
                                        </li>
                                        <li>
                                            <strong>Coverage:</strong> 85+ active franchise partners across India
                                        </li>
                                        <li>
                                            <strong>Presence:</strong> Pan-India network
                                        </li>
                                    </ul>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- Trending Categories --> */}
                <section className="py-5 bg-light text-center">
                    <div className="container">
                        <h2 className="fw-bold mb-4">Browse Trending Categories</h2>
                        <div className="row g-4 justify-content-center">
                            <div className="col-md-3">
                                <div className="p-4 bg-info text-white rounded shadow">
                                    <i className="fa-solid fa-code fa-2x mb-3"></i>
                                    <h6 className="text-white">Web Development</h6>
                                    <p className="small mb-0 text-white">5 Courses</p>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="p-4 bg-warning text-white rounded shadow">
                                    <i className="fa-solid fa-camera fa-2x mb-3"></i>
                                    <h6 className="text-white">Photography</h6>
                                    <p className="small mb-0 text-white">3 Courses</p>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="p-4 bg-success text-white rounded shadow">
                                    <i className="fa-solid fa-palette fa-2x mb-3"></i>
                                    <h6 className="text-white">Graphics Design</h6>
                                    <p className="small mb-0 text-white">6 Courses</p>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="p-4 bg-primary text-white rounded shadow">
                                    <i className="fa-solid fa-language fa-2x mb-3"></i>
                                    <h6 className="text-white">Web Language</h6>
                                    <p className="small mb-0 text-white">3 Courses</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>




            </div>        </>
    )
};

export default About;