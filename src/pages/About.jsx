import React from "react";
import SEO from "./SEO";

const About = () => {
    return (
        <>

            <SEO
                title="About PIIMT EdTech | IT Training Institute India"
                description="Learn about PIIMT EdTech — an IT training institute in India with 100+ courses, industry trainers, and a mission to bring quality tech education pan India."
                keywords="about PIIMT EdTech, IT institute Rajasthan, pan India IT training, IT trainer jobs"
                url="https://piimtedtech.in/about"
            />



            <section className="py-5">
                <div className="container">


                    <h1 className="fw-bold mb-4" style={{ color: '#1a3761', fontSize: '2.5rem' }}>
                        Who We Are and Why We Started
                    </h1>

                    <div className="text-dark fs-5" style={{ lineHeight: '1.8', textAlign: 'justify' }}>
                        <p className="mb-3">
                            Certificates do not get people hired. Skills do. That sounds obvious until you look at how most training programs in this country are still run — long on theory, short on practice, and completely disconnected from what an actual employer is going to ask you on day one. PIIMT EdTech was built to fix that specific problem.
                        </p>

                        <p className="mb-3">
                            We started in Jaipur. Small team, two floors, a very clear idea of what a genuine <strong>IT training institute in India</strong> should look like. Not a classroom where someone reads slides at you. A place where you sit down, open a real project, make mistakes, get corrected by someone who has done this professionally, and walk out three or four months later with something you actually built. That is the model we launched with. It is still the model we run today.
                        </p>

                        <p className="mb-4">
                            Sikar came next. There was demand there — students who did not want to travel to Jaipur every day, families that could not afford to relocate, people who needed quality training close to home. So we opened a second centre. Same trainers, same course quality, same approach. The address changed. Nothing else did.
                        </p>
                    </div>

                    {/* --- Address Cards --- */}
                    <div className="row g-0 border mt-4 mb-5" style={{ borderColor: '#d3dbe6' }}>
                        <div className="col-md-6 p-4 border-end" style={{ backgroundColor: '#f4f7fa', borderColor: '#d3dbe6' }}>
                            <h5 className="fw-bold mb-2" style={{ color: '#1a3761' }}>
                                Head Office — Jaipur
                            </h5>
                            <p className="mb-0 text-muted fs-5" style={{ lineHeight: '1.5' }}>

                               Near JECRC University, vidhani ramachandrapura Jaipur 302021
                            </p>
                        </div>

                        <div className="col-md-6 p-4" style={{ backgroundColor: '#f4f7fa' }}>
                            <h5 className="fw-bold mb-2" style={{ color: '#1a3761' }}>
                                Registered office
                            </h5>
                            <p className="mb-0 text-muted fs-5" style={{ lineHeight: '1.5' }}>
                               Jat Bazar, NH 52, Reengus Sikar 332404
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Section 2: How We Teach --- */}
            <section className="py-5 bg-light">
                <div className="container">
                    <h2 className="fw-bold mb-4" style={{ color: '#1a3761', fontSize: '2rem' }}>
                        The Way We Actually Teach
                    </h2>

                    <div className="text-dark fs-5" style={{ lineHeight: '1.8', textAlign: 'justify' }}>
                        <p className="mb-3">
                            The trainer problem is real. Go to almost any training centre and you will find someone who learned something from a book, maybe got a certification, and is now teaching it to you. At PIIMT, we do not hire that way. Every trainer here has worked in their field — actual jobs, actual projects, actual deadlines. When they explain something, they are not pulling from a textbook. They are pulling from experience.
                        </p>

                        <p className="mb-4">
                            That matters more than most students realise when they are comparing options. An <strong>IT training institute in India</strong> can have the best-looking website and the longest course list, but if the person standing at the front of the room has never actually worked in tech, there is a ceiling on how much you are going to learn. We try to stay well above that ceiling.
                        </p>

                        <p className="mb-0">
                            Every course at PIIMT includes live project work — not a case study, not a simulated exercise, but an actual project that goes into your portfolio. By the time you finish, you have something to show. That changes the conversation in interviews entirely. Instead of talking about what you studied, you can talk about what you built. Employers notice the difference.
                        </p>
                    </div>
                </div>
            </section>

            {/* --- Section 3: What You Can Learn Here --- */}
            <section className="py-5 bg-white">
                <div className="container">
                    <h2 className="fw-bold mb-3" style={{ color: '#1a3761', fontSize: '2rem' }}>
                        What You Can Learn Here
                    </h2>
                    <p className="fs-5 text-muted mb-4">
                        As a top <strong>IT training institute in India</strong> running 100+ certified programs, we cover more ground than most. But the goal has never been volume. It is always been depth — making sure each course is built around what the market is actually hiring for, not what was relevant three years ago. Here is what we currently offer:
                    </p>

                    <div className="row g-4 mt-2">
                        <div className="col-md-6">
                            <ul className="list-unstyled fs-5">
                                <li className="mb-3">
                                    <i className="fa-solid fa-circle-check text-success me-2"></i>
                                    <strong>Web Development —</strong> HTML, CSS, JavaScript, React, Node.js, full-stack builds
                                </li>
                                <li className="mb-3">
                                    <i className="fa-solid fa-circle-check text-success me-2"></i>
                                    <strong>Digital Marketing —</strong> SEO, Google Ads, Meta campaigns, analytics, email marketing
                                </li>
                                <li className="mb-3">
                                    <i className="fa-solid fa-circle-check text-success me-2"></i>
                                    <strong>AI & Machine Learning —</strong> Python, data science, real-world AI tool application
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <ul className="list-unstyled fs-5">
                                <li className="mb-3">
                                    <i className="fa-solid fa-circle-check text-success me-2"></i>
                                    <strong>Graphic Design —</strong> Photoshop, Illustrator, Premiere Pro, UI/UX design
                                </li>
                                <li className="mb-3">
                                    <i className="fa-solid fa-circle-check text-success me-2"></i>
                                    <strong>Hardware & Networking —</strong> CCNA, network setup, system admin, troubleshooting
                                </li>
                                <li className="mb-3">
                                    <i className="fa-solid fa-circle-check text-success me-2"></i>
                                    <strong>Business & Office Skills —</strong> Tally Prime, MS Office, accounting, communication
                                </li>
                            </ul>
                        </div>
                    </div>

                    <p className="fs-5 mt-4 text-dark italic border-start ps-3 style={{ borderColor: '#fd7e14' }}">
                        Batches are kept small on purpose. When a trainer is managing forty students at once, nobody is really getting feedback — they are just getting content delivered at them. We would rather run smaller groups and give each student real, specific input on their work. It takes more coordination on our end. It produces better outcomes on yours.
                    </p>
                </div>
            </section>

            {/* --- Section 4: After the Course Ends --- */}
            <section className="py-5 bg-light">
                <div className="container">
                    <h2 className="fw-bold mb-3" style={{ color: '#1a3761', fontSize: '2rem' }}>
                        After the Course Ends
                    </h2>
                    <div className="text-dark fs-5" style={{ lineHeight: '1.8' }}>
                        <p className="mb-3">
                            One of the honest criticisms you can level at most <strong>IT training institute in India</strong> setups is that placement support means very little in practice. You get a certificate, someone emails you a list of companies, and then you are on your own. We run it differently.
                        </p>
                        <p className="mb-0">
                            Our placement team works with each student individually. They go through your CV line by line, help you reframe what you have done in language that recruiters respond to, and run mock interview sessions before you walk into the real thing. They also make direct introductions to companies that are actively hiring — not companies from a list that has not been updated in two years, but live hiring pipelines. Students from both our Jaipur and Sikar centres are currently working in Pune, Bangalore, Delhi, Hyderabad, and Mumbai.
                        </p>
                    </div>
                </div>
            </section>

            {/* --- Section 5: Certification and Standards --- */}
            {/* <section className="py-5 bg-white">
                <div className="container">
                    <h2 className="fw-bold mb-3" style={{ color: '#1a3761', fontSize: '2rem' }}>
                        On Certification and Standards
                    </h2>
                    <div className="text-dark fs-5" style={{ lineHeight: '1.8' }}>
                        <p className="mb-3">
                            PIIMT is ISO 9001:2008 certified. For most students, that line means very little until someone explains what it actually involves — an external body came in, assessed how we teach, how we test, and what results our students get, and confirmed that it meets an internationally recognised standard. As an <strong>IT training institute in India</strong>, carrying that certification means our quality is not self-reported. It has been independently verified.
                        </p>
                        <p className="mb-0">
                            That translates into something practical for you: the certificate you leave with is one that employers outside Rajasthan will recognise. We have had students use PIIMT qualifications to get roles in companies they never thought would look at them — and the ISO backing is part of why those applications did not get filtered out at the screening stage.
                        </p>
                    </div>
                </div>
            </section> */}

            {/* --- Section 6: Future and Scale --- */}
            <section className="py-5 bg-light">
                <div className="container">
                    <h2 className="fw-bold mb-3" style={{ color: '#1a3761', fontSize: '2rem' }}>
                        Jaipur Today. Pan India Next.
                    </h2>
                    <div className="text-dark fs-5" style={{ lineHeight: '1.8' }}>
                        <p className="mb-3">
                            We are a startup. We will say that plainly because there is no point pretending otherwise. But we are a startup with a clear idea of where this is going. The two centres in Rajasthan are the foundation. The plan is to build an <strong>IT training institute in India</strong> network that reaches tier-2 and tier-3 cities where quality tech education is still very hard to access.
                        </p>
                        <p className="mb-3">
                            Right now, a student in Jodhpur, Kota, Bikaner, or Ajmer has limited options. They can move to a city — which costs money and disrupts their family — or they can settle for whatever is locally available, which is often neither up to date nor particularly job-focused. That gap exists all over the country. Nagpur, Patna, Bhopal, Indore, Mysore — the same problem, repeated in dozens of cities.
                        </p>
                        <p className="mb-0">
                            The PIIMT expansion model is not about franchising a name. It is about replicating a training system — the same trainer standards, the same project-based curriculum, the same placement processes — in cities that have never had access to it. Every new centre we open will be held to the same bar as Jaipur. That is the only version of this that makes sense if we want to be known as a <strong>IT training institute in India</strong> that people in any city can trust.
                        </p>
                    </div>
                </div>
            </section>

            {/* --- Section 7: FAQ Layout --- */}
            <section className="py-5 bg-white">
                <div className="container">
                    <span className="text-white d-inline-block px-2 py-1 fw-bold mb-3 small" style={{ backgroundColor: '#e0533c', letterSpacing: '1px' }}>
                        FAQ — ABOUT US
                    </span>

                    <h2 className="fw-bold mb-5" style={{ color: '#1a3761', fontSize: '2.3rem' }}>
                        People Ask Us These Things a Lot
                    </h2>

                    <div className="row g-4">
                        <div className="col-12">
                            {/* Q1 */}
                            {/* <div className="mb-4 p-4 border-start border-4" style={{ borderColor: '#e0533c', backgroundColor: '#fdfdfe' }}>
                                <h5 className="fw-bold" style={{ color: '#1a3761' }}>Q1. What is PIIMT EdTech and where is it based?</h5>
                                <p className="fs-5 text-muted mb-0 mt-2">PIIMT EdTech is a job-oriented IT training institute based in Jaipur, with a second centre in Sikar. We run 100+ certified courses across six domains — web development, digital marketing, AI and machine learning, graphic design, hardware networking, and business skills. We are ISO 9001:2008 certified and currently expanding across India.</p>
                            </div> */}

                            {/* Q2 */}
                            <div className="mb-4 p-4 border-start border-4" style={{ borderColor: '#e0533c', backgroundColor: '#fdfdfe' }}>
                                <h5 className="fw-bold" style={{ color: '#1a3761' }}>Q1. Where exactly are your two centres?</h5>
                                <p className="fs-5 text-muted mb-0 mt-2">   Head Office —  Nursery Circle Vaishali Nagar Jaipu Raj. 302021. ,   Registered office:  Shiv Nagar, NH52, Gordhanpura, Palsana
                                    Sikar, Rajasthan – 332402. If you are between both cities, either works — students switch between them when needed.</p>
                            </div>

                            {/* Q3 */}
                            <div className="mb-4 p-4 border-start border-4" style={{ borderColor: '#e0533c', backgroundColor: '#fdfdfe' }}>
                                <h5 className="fw-bold" style={{ color: '#1a3761' }}>Q2. Are your trainers actually from the industry or just teaching professionals?</h5>
                                <p className="fs-5 text-muted mb-0 mt-2">Everyone who teaches at PIIMT has held a real job in the field they train. No exceptions. We recruit trainers for what they have done, not just what they know. The difference shows up in the classroom — they teach from experience, not from a curriculum document.</p>
                            </div>

                            {/* Q4 */}
                            <div className="mb-4 p-4 border-start border-4" style={{ borderColor: '#e0533c', backgroundColor: '#fdfdfe' }}>
                                <h5 className="fw-bold" style={{ color: '#1a3761' }}>Q3. What does ISO 9001:2008 mean for a student practically?</h5>
                                <p className="fs-5 text-muted mb-0 mt-2">It means an independent body has audited our processes and confirmed they meet international standards. For you, the practical result is a certificate that carries weight with employers outside Rajasthan. Our students have used PIIMT qualifications to land roles in Bangalore, Pune, Mumbai, and Delhi — the ISO backing is part of what makes that possible.</p>
                            </div>

                            {/* Q5 */}
                            <div className="mb-4 p-4 border-start border-4" style={{ borderColor: '#e0533c', backgroundColor: '#fdfdfe' }}>
                                <h5 className="fw-bold" style={{ color: '#1a3761' }}>Q4. How does placement support actually work at PIIMT?</h5>
                                <p className="fs-5 text-muted mb-0 mt-2">We build an individual roadmap for your technical portfolios and resumes. Instead of sharing random sheets of cold contacts, we sync you directly with live corporate recruitment drives that actively seek out PIIMT graduates. The numbers matter to us — not just as a marketing metric, but as a measure of whether the training is working.</p>
                            </div>

                            {/* Q6 */}
                            <div className="mb-4 p-4 border-start border-4" style={{ borderColor: '#e0533c', backgroundColor: '#fdfdfe' }}>
                                <h5 className="fw-bold" style={{ color: '#1a3761' }}>Q6. I have no IT background at all. Can I still join?</h5>
                                <p className="fs-5 text-muted mb-0 mt-2">Yes. A lot of our best-placed students had zero technical background before they joined — straight out of Class 12, career switchers in their late twenties, people who had never opened a code editor. Our beginner batches are designed for exactly that starting point. The only requirement is that you take the work seriously.</p>
                            </div>

                            {/* Q7 */}
                            <div className="mb-4 p-4 border-start border-4" style={{ borderColor: '#e0533c', backgroundColor: '#fdfdfe' }}>
                                <h5 className="fw-bold" style={{ color: '#1a3761' }}>Q7. Is PIIMT EdTech planning to open centres in other cities?</h5>
                                <p className="fs-5 text-muted mb-0 mt-2">That is exactly the plan. Pan India expansion is not a line we added to the website to sound ambitious — it is the direction the whole operation is built toward. We are working on the trainer network, quality controls, and delivery model that will let us open in other cities without compromising on what makes the Jaipur and Sikar centres work. If you want to stay updated, follow us at www.piimtedtech.in.</p>
                            </div>

                            {/* Q8 */}
                            <div className="mb-4 p-4 border-start border-4" style={{ borderColor: '#e0533c', backgroundColor: '#fdfdfe' }}>
                                <h5 className="fw-bold" style={{ color: '#1a3761' }}>Q8. I am from a city where PIIMT is not yet present. What can I do?</h5>
                                <p className="fs-5 text-muted mb-0 mt-2">For now, both our centres are open to students from anywhere in Rajasthan and beyond. Some students do travel and stay locally for the duration of their course — it is a few months, and the outcome justifies it for many people. We are also building out a roadmap for hybrid delivery for cities we cannot yet reach physically. The best thing to do right now is get in touch and tell us where you are.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default About;