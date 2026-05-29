import React from "react";
import { Link } from "react-router-dom";

import SEO from "./SEO";


const Home = () => {

    const courseData = [
        {
            title: "Web Design & Development",
            image: "assets/image/home-web-design.jpg",
            instructorName: "Amit Sharma",
            instructorRole: "Lead Web Architect",
            // Standard reliable placeholder avatar
            instructorImage: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80",
            lessons: "45 Modules",
            students: "120+ Enrolled",
            badge: "Full Stack"
        },
        {
            title: "Digital Marketing & SEO",
            image: "assets/image/homeDigital.jpg",
            instructorName: "Rahul Verma",
            instructorRole: "Growth Strategist",
            instructorImage: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=150&q=80",
            lessons: "32 Chapters",
            students: "85+ Enrolled",
            badge: "Live Projects"
        },
        {
            title: "AI & Machine Learning",
            image: "assets/image/home-ai.jpeg",
            instructorName: "Dr. Priya Joshi",
            instructorRole: "AI Research Lead",
            instructorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
            lessons: "52 Sessions",
            students: "60+ Enrolled",
            badge: "Python Based"
        },
        {
            title: "Graphic Designing",
            image: "assets/image/home-gra.jpg",
            instructorName: "Vikram Choudhary",
            instructorRole: "Creative Director",
            instructorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
            lessons: "28 Workshops",
            students: "95+ Enrolled",
            badge: "UI/UX Included"
        }
    ];

    return (
        <> <SEO
            title="PIIMT EdTech – Best IT Training Institute in Jaipur & Sikar"
            description="Learn React JS, Python, Laravel, Web Development and Mobile App Development with placement support."
            keywords="IT institute Jaipur, React JS training Jaipur, Python classes Jaipur"
            url="https://piimtedtech.in/"
        />

            <div
                id="heroCarousel"
                className="carousel slide carousel-fade"
                data-bs-ride="carousel"
            >
                <div className="carousel-inner">

                    {/* Slide 1 */}
                    <div
                        className="carousel-item active"
                        style={{
                            background: `
            linear-gradient(rgba(24, 24, 27, 0.85), rgba(39, 39, 42, 0.70)),
            url('assets/image/slider.webp') center/cover no-repeat
        `,
                            minHeight: "85vh",
                        }}
                    >

                        <div
                            className="d-flex align-items-center"
                            style={{
                                minHeight: "85vh",
                                width: "100%",
                            }}
                        >

                            <div className="container">

                                <div
                                    style={{
                                        maxWidth: "750px",
                                        paddingLeft: "10px",
                                        paddingRight: "10px",
                                    }}
                                >

                                    <span
                                        className="badge bg-warning text-dark px-3 py-2 rounded-pill fw-semibold mb-4"
                                        style={{
                                            fontSize: "14px",
                                        }}
                                    >
                                        Trusted by 1,000+ Students
                                    </span>

                                    <h1
                                        className="fw-bold text-white mb-4"
                                        style={{
                                            fontSize: "clamp(36px,6vw,72px)",
                                            lineHeight: "1.2",
                                        }}
                                    >
                                        Start Your IT Career at
                                        <br />

                                        <span className="text-warning">
                                            PIIMT EdTech
                                        </span>

                                        <br />

                                        Jaipur & Sikar's Trusted Institute
                                    </h1>

                                    <p
                                        className="text-white-50 mb-4"
                                        style={{
                                            fontSize: "18px",
                                            lineHeight: "1.8",
                                            maxWidth: "650px",
                                        }}
                                    >
                                        Over 1,000 students from Jaipur,
                                        Sikar, and across Rajasthan have
                                        trained at PIIMT EdTech.
                                    </p>

                                    <a
                                        href="/course"
                                        className="btn btn-warning btn-lg text-dark fw-bold px-5 py-3 rounded-pill shadow"
                                    >
                                        Explore Our Courses
                                    </a>

                                </div>

                            </div>

                        </div>
                    </div>

                    {/* Slide 2 */}
                    <div
                        className="carousel-item"
                        style={{
                            background: `
            linear-gradient(rgba(24, 24, 27, 0.85), rgba(39, 39, 42, 0.70)),
            url('assets/image/slider.webp') center/cover no-repeat
        `,
                            minHeight: "85vh",
                        }}
                    >

                        <div
                            className="d-flex align-items-center"
                            style={{
                                minHeight: "85vh",
                                width: "100%",
                            }}
                        >

                            <div className="container">

                                <div
                                    style={{
                                        maxWidth: "750px",
                                        paddingLeft: "10px",
                                        paddingRight: "10px",
                                    }}
                                >

                                    <span
                                        className="badge bg-warning text-dark px-3 py-2 rounded-pill fw-semibold mb-4"
                                        style={{
                                            fontSize: "14px",
                                        }}
                                    >
                                        ISO 9001 Certified
                                    </span>

                                    <h1
                                        className="fw-bold text-white mb-4"
                                        style={{
                                            fontSize: "clamp(36px,6vw,72px)",
                                            lineHeight: "1.2",
                                        }}
                                    >
                                        Learn. Create. Succeed.
                                        <br />

                                        <span className="text-warning">
                                            Join PIIMT Today!
                                        </span>
                                    </h1>

                                    <p
                                        className="text-white-50 mb-4"
                                        style={{
                                            fontSize: "18px",
                                            lineHeight: "1.8",
                                            maxWidth: "650px",
                                        }}
                                    >
                                        Over 1,000 students from Jaipur,
                                        Sikar, and across Rajasthan have
                                        trained at PIIMT EdTech.
                                    </p>

                                    <a
                                        href="/course"
                                        className="btn btn-warning btn-lg text-dark fw-bold px-5 py-3 rounded-pill shadow"
                                    >
                                        Talk to an Advisor
                                    </a>

                                </div>

                            </div>

                        </div>
                    </div>

                </div>

                {/* Controls */}
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#heroCarousel"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon"></span>
                </button>

                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#heroCarousel"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon"></span>
                </button>
            </div>

            <section className="py-4 bg-light position-relative overflow-hidden">
                <div className="container">
                    <div className="row g-4">

                        {/* Box 1 */}
                        <div className="col-lg-3 col-md-6 col-6">
                            <div
                                className="text-center rounded-4 py-4 py-md-5 px-3 h-100 shadow-sm"
                                style={{
                                    backgroundColor: "#2b426e",
                                    transition: "all 0.3s ease",
                                    cursor: "pointer",
                                }}
                                onMouseOver={(e) => {
                                    e.currentTarget.style.transform = "translateY(-8px)";
                                    e.currentTarget.style.backgroundColor = "#1d355d";
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.transform = "translateY(0)";
                                    e.currentTarget.style.backgroundColor = "#2b426e";
                                }}
                            >
                                <div
                                    className="mb-2 fw-bold"
                                    style={{
                                        color: "#e06023",
                                        fontSize: "clamp(28px, 5vw, 48px)",
                                    }}
                                >
                                    1,000+
                                </div>

                                <p
                                    className="text-light m-0 fw-medium"
                                    style={{
                                        fontSize: "clamp(14px, 2vw, 18px)",
                                    }}
                                >
                                    Students Trained
                                </p>
                            </div>
                        </div>

                        {/* Box 2 */}
                        <div className="col-lg-3 col-md-6 col-6">
                            <div
                                className="text-center rounded-4 py-4 py-md-5 px-3 h-100 shadow-sm"
                                style={{
                                    backgroundColor: "#2b426e",
                                    transition: "all 0.3s ease",
                                    cursor: "pointer",
                                }}
                                onMouseOver={(e) => {
                                    e.currentTarget.style.transform = "translateY(-8px)";
                                    e.currentTarget.style.backgroundColor = "#1d355d";
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.transform = "translateY(0)";
                                    e.currentTarget.style.backgroundColor = "#2b426e";
                                }}
                            >
                                <div
                                    className="mb-2 fw-bold"
                                    style={{
                                        color: "#e06023",
                                        fontSize: "clamp(28px, 5vw, 48px)",
                                    }}
                                >
                                    100+
                                </div>

                                <p
                                    className="text-light m-0 fw-medium"
                                    style={{
                                        fontSize: "clamp(14px, 2vw, 18px)",
                                    }}
                                >
                                    Certified Courses
                                </p>
                            </div>
                        </div>

                        {/* Box 3 */}
                        <div className="col-lg-3 col-md-6 col-6">
                            <div
                                className="text-center rounded-4 py-4 py-md-5 px-3 h-100 shadow-sm"
                                style={{
                                    backgroundColor: "#2b426e",
                                    transition: "all 0.3s ease",
                                    cursor: "pointer",
                                }}
                                onMouseOver={(e) => {
                                    e.currentTarget.style.transform = "translateY(-8px)";
                                    e.currentTarget.style.backgroundColor = "#1d355d";
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.transform = "translateY(0)";
                                    e.currentTarget.style.backgroundColor = "#2b426e";
                                }}
                            >
                                <div
                                    className="mb-2 fw-bold"
                                    style={{
                                        color: "#e06023",
                                        fontSize: "clamp(28px, 5vw, 48px)",
                                    }}
                                >
                                    25+
                                </div>

                                <p
                                    className="text-light m-0 fw-medium"
                                    style={{
                                        fontSize: "clamp(14px, 2vw, 18px)",
                                    }}
                                >
                                    Training Centres
                                </p>
                            </div>
                        </div>

                        {/* Box 4 */}
                        <div className="col-lg-3 col-md-6 col-6">
                            <div
                                className="text-center rounded-4 py-4 py-md-5 px-3 h-100 shadow-sm"
                                style={{
                                    backgroundColor: "#2b426e",
                                    transition: "all 0.3s ease",
                                    cursor: "pointer",
                                }}
                                onMouseOver={(e) => {
                                    e.currentTarget.style.transform = "translateY(-8px)";
                                    e.currentTarget.style.backgroundColor = "#1d355d";
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.transform = "translateY(0)";
                                    e.currentTarget.style.backgroundColor = "#2b426e";
                                }}
                            >
                                <div
                                    className="mb-2 fw-bold"
                                    style={{
                                        color: "#e06023",
                                        fontSize: "clamp(28px, 5vw, 48px)",
                                    }}
                                >
                                    800+
                                </div>

                                <p
                                    className="text-light m-0 fw-medium"
                                    style={{
                                        fontSize: "clamp(14px, 2vw, 18px)",
                                    }}
                                >
                                    Students Placed
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* <!-- 🎓 Popular Courses Section --> */}
            <div className="container my-5 py-4">

                {/* Heading Section */}
                <div className="row align-items-end mb-5 g-4">

                    <div className="col-lg-8">
                        <span
                            className="badge px-3 py-2 rounded-pill fw-bold text-uppercase mb-3"
                            style={{
                                backgroundColor: "rgba(255,193,7,0.12)",
                                color: "#f59e0b",
                                letterSpacing: "1px",
                                fontSize: "12px",
                            }}
                        >
                            Courses That Get You Hired
                        </span>

                        <h2
                            className="fw-bold"
                            style={{
                                fontSize: "clamp(32px,5vw,56px)",
                                background: "linear-gradient(45deg, #1d355d, #457b9d)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                lineHeight: "1.2",
                            }}
                        >
                            Limitless Learning, More Possibilities
                        </h2>

                        <p
                            className="text-muted mt-3"
                            style={{
                                fontSize: "clamp(16px,2vw,20px)",
                                maxWidth: "700px",
                            }}
                        >
                            Explore our most popular programs — each one designed around what
                            today's employers are actually hiring for.
                        </p>
                    </div>

                    <div className="col-lg-4 text-lg-end">
                        <a
                            href="/allcourses"
                            className="btn text-white fw-semibold px-4 py-3 rounded-pill shadow"
                            style={{
                                background: "linear-gradient(45deg, #1d355d, #2b426e)",
                                border: "none",
                                transition: "0.3s ease",
                            }}
                        >
                            <i className="fa-solid fa-eye me-2"></i>
                            View All Courses
                        </a>
                    </div>
                </div>

                {/* Cards */}
                <div className="row g-4">
                    {courseData.map((course, index) => (
                        <div className="col-sm-6 col-lg-3" key={index}>
                            <div
                                className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden position-relative"
                                style={{
                                    transition: "all 0.3s ease",
                                    cursor: "pointer",
                                }}
                                onMouseOver={(e) => {
                                    e.currentTarget.style.transform = "translateY(-10px)";
                                    e.currentTarget.style.boxShadow = "0 1rem 3rem rgba(0,0,0,.12)";
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.transform = "translateY(0)";
                                    e.currentTarget.style.boxShadow = "0 .125rem .25rem rgba(0,0,0,.075)";
                                }}
                            >
                                {/* Upper Badge */}
                                <span className="badge bg-primary position-absolute top-0 end-0 m-3 z-1 px-3 py-2 rounded-pill fw-medium small shadow-sm">
                                    {course.badge}
                                </span>

                                {/* Course Image */}
                                <div className="overflow-hidden bg-light" style={{ height: "210px" }}>
                                    <img
                                        src={course.image}
                                        alt={course.title}
                                        className="card-img-top h-100 w-100"
                                        style={{
                                            objectFit: "cover",
                                            transition: "0.5s ease",
                                        }}
                                        onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                                        onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
                                        // Broken image handle karne ke liye fallback loader
                                        onError={(e) => {
                                            e.target.src = "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80";
                                        }}
                                    />
                                </div>

                                {/* Card Body */}
                                <div className="card-body p-4 d-flex flex-column justify-content-between">
                                    <div>
                                        <h4 className="fw-bold mb-3 fs-5 text-dark lh-base">
                                            {course.title}
                                        </h4>

                                        {/* Instructor Block */}
                                        <div className="d-flex align-items-center">
                                            <img
                                                src={course.instructorImage}
                                                alt={course.instructorName}
                                                className="rounded-circle me-2 border border-2 border-white shadow-sm"
                                                style={{
                                                    width: "42px",
                                                    height: "42px",
                                                    objectFit: "cover",
                                                }}
                                                onError={(e) => {
                                                    e.target.src = "https://ui-avatars.com/api/?name=" + encodeURIComponent(course.instructorName) + "&background=random";
                                                }}
                                            />
                                            <div>
                                                <small className="fw-bold d-block text-dark">
                                                    {course.instructorName}
                                                </small>
                                                <small className="text-muted" style={{ fontSize: "12px" }}>
                                                    {course.instructorRole}
                                                </small>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Plan Info Footer */}
                                    <div className="mt-4">
                                        <hr className="text-muted opacity-25 my-3" />
                                        <div className="d-flex justify-content-between bg-light rounded-3 p-2 small fw-semibold text-secondary">
                                            <span>
                                                <i className="bi bi-journal-code me-1 text-primary fs-6"></i>
                                                {course.lessons}
                                            </span>
                                            <span>
                                                <i className="bi bi-people-fill me-1 text-success fs-6"></i>
                                                {course.students}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>



            <section
                className="py-5 text-center text-white position-relative overflow-hidden"
                style={{
                    background:
                        "linear-gradient(rgba(15, 23, 42, 0.85), rgba(15, 23, 42, 0.95)), url('assets/image/slide-banner.jpg') center/cover no-repeat",
                }}
            >
                <div className="container">

                    {/* Heading */}
                    <div className="mb-5">

                        <span
                            className="badge px-3 py-2 rounded-pill fw-bold text-uppercase shadow-sm"
                            style={{
                                backgroundColor: "#ffbb00",
                                color: "#000",
                                fontSize: "0.8rem",
                                letterSpacing: "1px",
                            }}
                        >
                            <i className="bi bi-patch-check-fill me-1"></i>
                            ISO 9001 Certified Institute
                        </span>

                        <h1
                            className="fw-bold text-white mt-4"
                            style={{
                                fontSize: "clamp(32px, 6vw, 60px)",
                                lineHeight: "1.2",
                            }}
                        >
                            Building Careers, Shaping Futures
                        </h1>

                        <hr
                            className="mx-auto my-3"
                            style={{
                                width: "70px",
                                height: "4px",
                                backgroundColor: "#ffbb00",
                                border: "none",
                                opacity: 1,
                                borderRadius: "10px",
                            }}
                        />
                    </div>

                    {/* Stats Box */}
                    <div className="row justify-content-center mb-5">
                        <div className="col-lg-11">

                            <div
                                className="p-4 rounded-4 shadow-lg"
                                style={{
                                    background: "rgba(255,255,255,0.06)",
                                    backdropFilter: "blur(10px)",
                                    border: "1px solid rgba(255,255,255,0.1)",
                                }}
                            >

                                <div className="row g-4">

                                    {/* Stat 1 */}
                                    <div className="col-6 col-md-3 border-end border-secondary border-opacity-25">
                                        <div
                                            className="fw-bold text-warning"
                                            style={{
                                                fontSize: "clamp(28px,5vw,48px)",
                                            }}
                                        >
                                            1,000+
                                        </div>

                                        <small
                                            className="text-white-50 text-uppercase fw-semibold d-block"
                                            style={{
                                                fontSize: "12px",
                                                letterSpacing: "1px",
                                            }}
                                        >
                                            Students Empowered
                                        </small>
                                    </div>

                                    {/* Stat 2 */}
                                    <div className="col-6 col-md-3 border-md-end border-secondary border-opacity-25">
                                        <div
                                            className="fw-bold text-warning"
                                            style={{
                                                fontSize: "clamp(28px,5vw,48px)",
                                            }}
                                        >
                                            100+
                                        </div>

                                        <small
                                            className="text-white-50 text-uppercase fw-semibold d-block"
                                            style={{
                                                fontSize: "12px",
                                                letterSpacing: "1px",
                                            }}
                                        >
                                            Certified Courses
                                        </small>
                                    </div>

                                    {/* Stat 3 */}
                                    <div className="col-6 col-md-3 border-end border-secondary border-opacity-25">
                                        <div
                                            className="fw-bold text-warning"
                                            style={{
                                                fontSize: "clamp(28px,5vw,48px)",
                                            }}
                                        >
                                            25+
                                        </div>

                                        <small
                                            className="text-white-50 text-uppercase fw-semibold d-block"
                                            style={{
                                                fontSize: "12px",
                                                letterSpacing: "1px",
                                            }}
                                        >
                                            Training Centers
                                        </small>
                                    </div>

                                    {/* Stat 4 */}
                                    <div className="col-6 col-md-3">
                                        <div
                                            className="fw-bold text-warning"
                                            style={{
                                                fontSize: "clamp(28px,5vw,48px)",
                                            }}
                                        >
                                            800+
                                        </div>

                                        <small
                                            className="text-white-50 text-uppercase fw-semibold d-block"
                                            style={{
                                                fontSize: "12px",
                                                letterSpacing: "1px",
                                            }}
                                        >
                                            Students Placed
                                        </small>
                                    </div>

                                </div>

                                {/* Bottom Text */}
                                <div className="mt-4 pt-3 border-top border-secondary border-opacity-25">
                                    <p
                                        className="mb-0 text-white"
                                        style={{
                                            fontSize: "15px",
                                        }}
                                    >
                                        <span className="text-warning fw-bold">
                                            Recognized as an
                                        </span>{" "}
                                        International Certification Provider
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="row justify-content-center">
                        <div className="col-lg-10">

                            <p
                                className="text-white-50 mb-4"
                                style={{
                                    fontSize: "clamp(16px,2vw,20px)",
                                    lineHeight: "1.9",
                                }}
                            >
                                PIIMT EdTech was started with one straightforward belief:
                                a student who practises what they learn will always outperform
                                one who only reads about it. Every course at our{" "}
                                <span className="text-warning fw-semibold">
                                    Jaipur and Sikar
                                </span>{" "}
                                centres is built around that idea.
                            </p>

                            <p
                                className="text-white-50 mb-4"
                                style={{
                                    fontSize: "clamp(16px,2vw,20px)",
                                    lineHeight: "1.9",
                                }}
                            >
                                We offer more than 100 job-oriented programs — from{" "}
                                <span className="text-warning fw-semibold">
                                    web development & digital marketing
                                </span>{" "}
                                to{" "}
                                <span className="text-warning fw-semibold">
                                    artificial intelligence, graphic design
                                </span>
                                , hardware networking, and business skills.
                                Our students do not just attend classes —
                                they build actual projects, work on live briefs,
                                and graduate with a portfolio they can show employers.
                            </p>

                            <p
                                className="text-white-50 mb-0"
                                style={{
                                    fontSize: "clamp(16px,2vw,20px)",
                                    lineHeight: "1.9",
                                }}
                            >
                                Whether you are a school leaver choosing your first
                                career path, a graduate looking to upskill,
                                or a working professional switching fields,
                                PIIMT EdTech has a program structured for your
                                schedule and your goals.
                            </p>

                        </div>
                    </div>

                </div>
            </section>

            <section className="py-5 bg-white">
                <div className="container py-4">

                    {/* Heading */}
                    <div className="row mb-5">
                        <div className="col-12 text-center">

                            <span
                                className="badge px-3 py-2 rounded-pill fw-bold text-uppercase mb-3"
                                style={{
                                    backgroundColor: "rgba(245,161,0,0.12)",
                                    color: "#f5a100",
                                    letterSpacing: "1px",
                                    fontSize: "12px",
                                }}
                            >
                                Our Strengths
                            </span>

                            <h2
                                className="fw-bold"
                                style={{
                                    fontSize: "clamp(32px,5vw,52px)",
                                    background: "linear-gradient(45deg, #1d355d, #2b426e)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    lineHeight: "1.2",
                                }}
                            >
                                Why Choose PIIMT Edtech Jaipur?
                            </h2>

                            <hr
                                className="mx-auto mt-3"
                                style={{
                                    width: "60px",
                                    height: "4px",
                                    backgroundColor: "#f5a100",
                                    border: "none",
                                    opacity: 1,
                                    borderRadius: "10px",
                                }}
                            />
                        </div>
                    </div>

                    {/* Cards */}
                    <div className="row g-4 text-center">

                        {/* Card 1 */}
                        <div className="col-md-4">
                            <div
                                className="card h-100 border-0 shadow-sm rounded-4 p-4"
                                style={{
                                    backgroundColor: "#2b426e",
                                    transition: "all 0.3s ease",
                                    cursor: "pointer",
                                }}
                                onMouseOver={(e) => {
                                    e.currentTarget.style.transform = "translateY(-8px)";
                                    e.currentTarget.style.backgroundColor = "#1d355d";
                                    e.currentTarget.style.boxShadow =
                                        "0 1rem 3rem rgba(0,0,0,.18)";
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.transform = "translateY(0)";
                                    e.currentTarget.style.backgroundColor = "#2b426e";
                                    e.currentTarget.style.boxShadow =
                                        "0 .125rem .25rem rgba(0,0,0,.075)";
                                }}
                            >

                                <div
                                    className="mx-auto mb-4 d-flex align-items-center justify-content-center rounded-circle"
                                    style={{
                                        width: "80px",
                                        height: "80px",
                                        backgroundColor: "rgba(245,161,0,0.15)",
                                    }}
                                >
                                    <i className="bi bi-mortarboard-fill fs-2 text-warning"></i>
                                </div>

                                <h5
                                    className="fw-bold text-white mb-3"
                                    style={{
                                        fontSize: "24px",
                                    }}
                                >
                                    Expert Faculty
                                </h5>

                                <p
                                    className="text-light mb-0"
                                    style={{
                                        lineHeight: "1.8",
                                        fontSize: "15px",
                                    }}
                                >
                                    Our faculty members are highly experienced
                                    professionals and veterans in their respective
                                    tech fields.
                                </p>

                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="col-md-4">
                            <div
                                className="card h-100 border-0 shadow-sm rounded-4 p-4"
                                style={{
                                    backgroundColor: "#2b426e",
                                    transition: "all 0.3s ease",
                                    cursor: "pointer",
                                }}
                                onMouseOver={(e) => {
                                    e.currentTarget.style.transform = "translateY(-8px)";
                                    e.currentTarget.style.backgroundColor = "#1d355d";
                                    e.currentTarget.style.boxShadow =
                                        "0 1rem 3rem rgba(0,0,0,.18)";
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.transform = "translateY(0)";
                                    e.currentTarget.style.backgroundColor = "#2b426e";
                                    e.currentTarget.style.boxShadow =
                                        "0 .125rem .25rem rgba(0,0,0,.075)";
                                }}
                            >

                                <div
                                    className="mx-auto mb-4 d-flex align-items-center justify-content-center rounded-circle"
                                    style={{
                                        width: "80px",
                                        height: "80px",
                                        backgroundColor: "rgba(245,161,0,0.15)",
                                    }}
                                >
                                    <i className="bi bi-person-bounding-box fs-2 text-warning"></i>
                                </div>

                                <h5
                                    className="fw-bold text-white mb-3"
                                    style={{
                                        fontSize: "24px",
                                    }}
                                >
                                    Personalized Learning
                                </h5>

                                <p
                                    className="text-light mb-0"
                                    style={{
                                        lineHeight: "1.8",
                                        fontSize: "15px",
                                    }}
                                >
                                    We offer customized learning tracks and
                                    direct 1-on-1 mentorship sessions tailored
                                    to individual student needs.
                                </p>

                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="col-md-4">
                            <div
                                className="card h-100 border-0 shadow-sm rounded-4 p-4"
                                style={{
                                    backgroundColor: "#2b426e",
                                    transition: "all 0.3s ease",
                                    cursor: "pointer",
                                }}
                                onMouseOver={(e) => {
                                    e.currentTarget.style.transform = "translateY(-8px)";
                                    e.currentTarget.style.backgroundColor = "#1d355d";
                                    e.currentTarget.style.boxShadow =
                                        "0 1rem 3rem rgba(0,0,0,.18)";
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.transform = "translateY(0)";
                                    e.currentTarget.style.backgroundColor = "#2b426e";
                                    e.currentTarget.style.boxShadow =
                                        "0 .125rem .25rem rgba(0,0,0,.075)";
                                }}
                            >

                                <div
                                    className="mx-auto mb-4 d-flex align-items-center justify-content-center rounded-circle"
                                    style={{
                                        width: "80px",
                                        height: "80px",
                                        backgroundColor: "rgba(245,161,0,0.15)",
                                    }}
                                >
                                    <i className="bi bi-journal-code fs-2 text-warning"></i>
                                </div>

                                <h5
                                    className="fw-bold text-white mb-3"
                                    style={{
                                        fontSize: "24px",
                                    }}
                                >
                                    Industry Curriculum
                                </h5>

                                <p
                                    className="text-light mb-0"
                                    style={{
                                        lineHeight: "1.8",
                                        fontSize: "15px",
                                    }}
                                >
                                    Our syllabus is consistently updated
                                    based on top market demands and what
                                    employers are actively seeking.
                                </p>

                            </div>
                        </div>

                    </div>
                </div>
            </section>


            <section className="py-5 bg-light position-relative overflow-hidden">
                <div className="container py-5">

                    <div className="row align-items-center g-5">

                        {/* Left Content */}
                        <div className="col-lg-5">

                            <span
                                className="badge px-3 py-2 rounded-pill fw-bold text-uppercase mb-3"
                                style={{
                                    backgroundColor: "rgba(245,161,0,0.12)",
                                    color: "#f5a100",
                                    letterSpacing: "1px",
                                    fontSize: "12px",
                                }}
                            >
                                About Our Academy
                            </span>

                            <h2
                                className="fw-bold mb-3"
                                style={{
                                    color: "#1d355d",
                                    fontSize: "clamp(34px,5vw,56px)",
                                    lineHeight: "1.2",
                                }}
                            >
                                Welcome to{" "}
                                <span style={{ color: "#f5a100" }}>
                                    PIIMT Edtech Jaipur
                                </span>
                            </h2>

                            <div
                                className="mb-4"
                                style={{
                                    width: "70px",
                                    height: "4px",
                                    background: "#f5a100",
                                    borderRadius: "10px",
                                }}
                            ></div>

                            <p
                                className="text-muted mb-4"
                                style={{
                                    fontSize: "clamp(16px,2vw,20px)",
                                    lineHeight: "1.9",
                                }}
                            >
                                At PIIMT Edtech Jaipur, we provide
                                industry-focused IT training designed
                                to help students build real-world skills
                                and successful careers in technology.
                            </p>

                        </div>

                        {/* Right Cards */}
                        <div className="col-lg-7">

                            <div className="row g-4">

                                {/* Mission Card */}
                                <div className="col-md-6">

                                    <div
                                        className="h-100 p-4 rounded-4 shadow-sm"
                                        style={{
                                            background: "#2b426e",
                                            transition: "0.3s ease",
                                            cursor: "pointer",
                                        }}
                                        onMouseOver={(e) => {
                                            e.currentTarget.style.transform =
                                                "translateY(-8px)";
                                            e.currentTarget.style.background =
                                                "#1d355d";
                                            e.currentTarget.style.boxShadow =
                                                "0 1rem 3rem rgba(0,0,0,.18)";
                                        }}
                                        onMouseOut={(e) => {
                                            e.currentTarget.style.transform =
                                                "translateY(0px)";
                                            e.currentTarget.style.background =
                                                "#2b426e";
                                            e.currentTarget.style.boxShadow =
                                                "0 .125rem .25rem rgba(0,0,0,.075)";
                                        }}
                                    >

                                        <div className="d-flex align-items-center mb-4">

                                            <div
                                                className="d-flex align-items-center justify-content-center rounded-3 me-3"
                                                style={{
                                                    width: "65px",
                                                    height: "65px",
                                                    background: "rgba(255,255,255,0.1)",
                                                }}
                                            >
                                                <i className="fa-solid fa-bullseye fs-3 text-warning"></i>
                                            </div>

                                            <h4
                                                className="fw-bold text-white mb-0"
                                                style={{
                                                    fontSize: "24px",
                                                }}
                                            >
                                                Our Mission
                                            </h4>

                                        </div>

                                        <p
                                            className="text-light mb-0"
                                            style={{
                                                lineHeight: "1.9",
                                                fontSize: "15px",
                                            }}
                                        >
                                            To give every student in Rajasthan
                                            access to practical, job-ready IT
                                            skills regardless of background
                                            or education.
                                        </p>

                                    </div>
                                </div>

                                {/* Vision Card */}
                                <div className="col-md-6">

                                    <div
                                        className="h-100 p-4 rounded-4 shadow-sm"
                                        style={{
                                            background: "#2b426e",
                                            transition: "0.3s ease",
                                            cursor: "pointer",
                                        }}
                                        onMouseOver={(e) => {
                                            e.currentTarget.style.transform =
                                                "translateY(-8px)";
                                            e.currentTarget.style.background =
                                                "#1d355d";
                                            e.currentTarget.style.boxShadow =
                                                "0 1rem 3rem rgba(0,0,0,.18)";
                                        }}
                                        onMouseOut={(e) => {
                                            e.currentTarget.style.transform =
                                                "translateY(0px)";
                                            e.currentTarget.style.background =
                                                "#2b426e";
                                            e.currentTarget.style.boxShadow =
                                                "0 .125rem .25rem rgba(0,0,0,.075)";
                                        }}
                                    >

                                        <div className="d-flex align-items-center mb-4">

                                            <div
                                                className="d-flex align-items-center justify-content-center rounded-3 me-3"
                                                style={{
                                                    width: "65px",
                                                    height: "65px",
                                                    background: "rgba(255,255,255,0.1)",
                                                }}
                                            >
                                                <i className="fa-solid fa-eye fs-3 text-warning"></i>
                                            </div>

                                            <h4
                                                className="fw-bold text-white mb-0"
                                                style={{
                                                    fontSize: "24px",
                                                }}
                                            >
                                                Our Vision
                                            </h4>

                                        </div>

                                        <p
                                            className="text-light mb-0"
                                            style={{
                                                lineHeight: "1.9",
                                                fontSize: "15px",
                                            }}
                                        >
                                            To become Rajasthan’s most trusted
                                            IT training institute for students
                                            and employers alike.
                                        </p>

                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>
            </section>

            <section className="py-5 bg-white border-top border-light">
                <div className="container py-4">

                    {/* Heading */}
                    <div className="row mb-5">
                        <div className="col-12 text-center">

                            <span
                                className="badge px-3 py-2 rounded-pill fw-bold text-uppercase mb-3"
                                style={{
                                    backgroundColor: "rgba(245,161,0,0.12)",
                                    color: "#f5a100",
                                    letterSpacing: "1px",
                                    fontSize: "12px",
                                }}
                            >
                                Core Principles
                            </span>

                            <h2
                                className="fw-bold mt-2"
                                style={{
                                    fontSize: "clamp(32px,5vw,52px)",
                                    background:
                                        "linear-gradient(45deg, #1d355d, #2b426e)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    lineHeight: "1.2",
                                }}
                            >
                                Our Values
                            </h2>

                            <hr
                                className="mx-auto mt-3"
                                style={{
                                    width: "60px",
                                    height: "4px",
                                    backgroundColor: "#f5a100",
                                    border: "none",
                                    opacity: 1,
                                    borderRadius: "10px",
                                }}
                            />

                        </div>
                    </div>

                    {/* Cards */}
                    <div className="row g-4 text-center">

                        {/* Card 1 */}
                        <div className="col-md-4">

                            <div
                                className="card h-100 border-0 shadow-sm rounded-4 p-4"
                                style={{
                                    backgroundColor: "#2b426e",
                                    transition: "all 0.3s ease",
                                    cursor: "pointer",
                                }}
                                onMouseOver={(e) => {
                                    e.currentTarget.style.transform =
                                        "translateY(-8px)";
                                    e.currentTarget.style.backgroundColor =
                                        "#1d355d";
                                    e.currentTarget.style.boxShadow =
                                        "0 1rem 3rem rgba(0,0,0,.18)";
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.transform =
                                        "translateY(0)";
                                    e.currentTarget.style.backgroundColor =
                                        "#2b426e";
                                    e.currentTarget.style.boxShadow =
                                        "0 .125rem .25rem rgba(0,0,0,.075)";
                                }}
                            >

                                <div
                                    className="mx-auto mb-4 d-flex align-items-center justify-content-center rounded-circle"
                                    style={{
                                        width: "75px",
                                        height: "75px",
                                        backgroundColor: "rgba(245,161,0,0.15)",
                                    }}
                                >
                                    <i className="bi bi-star-fill fs-3 text-warning"></i>
                                </div>

                                <h5
                                    className="fw-bold mb-3 text-white"
                                    style={{
                                        fontSize: "24px",
                                    }}
                                >
                                    Excellence
                                </h5>

                                <p
                                    className="text-light mb-0"
                                    style={{
                                        lineHeight: "1.8",
                                        fontSize: "15px",
                                    }}
                                >
                                    We set the bar high and do not lower it.
                                    Every course, every batch, every trainer
                                    is held to a standard that makes our
                                    certificate worth something.
                                </p>

                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="col-md-4">

                            <div
                                className="card h-100 border-0 shadow-sm rounded-4 p-4"
                                style={{
                                    backgroundColor: "#2b426e",
                                    transition: "all 0.3s ease",
                                    cursor: "pointer",
                                }}
                                onMouseOver={(e) => {
                                    e.currentTarget.style.transform =
                                        "translateY(-8px)";
                                    e.currentTarget.style.backgroundColor =
                                        "#1d355d";
                                    e.currentTarget.style.boxShadow =
                                        "0 1rem 3rem rgba(0,0,0,.18)";
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.transform =
                                        "translateY(0)";
                                    e.currentTarget.style.backgroundColor =
                                        "#2b426e";
                                    e.currentTarget.style.boxShadow =
                                        "0 .125rem .25rem rgba(0,0,0,.075)";
                                }}
                            >

                                <div
                                    className="mx-auto mb-4 d-flex align-items-center justify-content-center rounded-circle"
                                    style={{
                                        width: "75px",
                                        height: "75px",
                                        backgroundColor: "rgba(245,161,0,0.15)",
                                    }}
                                >
                                    <i className="bi bi-shield-check fs-3 text-warning"></i>
                                </div>

                                <h5
                                    className="fw-bold mb-3 text-white"
                                    style={{
                                        fontSize: "24px",
                                    }}
                                >
                                    Integrity
                                </h5>

                                <p
                                    className="text-light mb-0"
                                    style={{
                                        lineHeight: "1.8",
                                        fontSize: "15px",
                                    }}
                                >
                                    We tell students exactly what a course
                                    covers, what it does not cover,
                                    and what careers it opens.
                                    No false promises. No inflated
                                    placement statistics.
                                </p>

                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="col-md-4">

                            <div
                                className="card h-100 border-0 shadow-sm rounded-4 p-4"
                                style={{
                                    backgroundColor: "#2b426e",
                                    transition: "all 0.3s ease",
                                    cursor: "pointer",
                                }}
                                onMouseOver={(e) => {
                                    e.currentTarget.style.transform =
                                        "translateY(-8px)";
                                    e.currentTarget.style.backgroundColor =
                                        "#1d355d";
                                    e.currentTarget.style.boxShadow =
                                        "0 1rem 3rem rgba(0,0,0,.18)";
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.transform =
                                        "translateY(0)";
                                    e.currentTarget.style.backgroundColor =
                                        "#2b426e";
                                    e.currentTarget.style.boxShadow =
                                        "0 .125rem .25rem rgba(0,0,0,.075)";
                                }}
                            >

                                <div
                                    className="mx-auto mb-4 d-flex align-items-center justify-content-center rounded-circle"
                                    style={{
                                        width: "75px",
                                        height: "75px",
                                        backgroundColor: "rgba(245,161,0,0.15)",
                                    }}
                                >
                                    <i className="bi bi-graph-up-arrow fs-3 text-warning"></i>
                                </div>

                                <h5
                                    className="fw-bold mb-3 text-white"
                                    style={{
                                        fontSize: "24px",
                                    }}
                                >
                                    Growth
                                </h5>

                                <p
                                    className="text-light mb-0"
                                    style={{
                                        lineHeight: "1.8",
                                        fontSize: "15px",
                                    }}
                                >
                                    We keep updating our curriculum because
                                    technology does not stand still.
                                    A course we taught two years ago has
                                    already been revised to match
                                    today's demands.
                                </p>

                            </div>
                        </div>

                    </div>
                </div>
            </section>



            <section className="course-category py-5 bg-light">
                <div className="container">

                    {/* Heading */}
                    <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-5">

                        <div className="text-center text-lg-start">

                            <span
                                className="badge px-3 py-2 rounded-pill fw-bold text-uppercase mb-3"
                                style={{
                                    backgroundColor: "rgba(245,161,0,0.12)",
                                    color: "#f5a100",
                                    letterSpacing: "1px",
                                    fontSize: "12px",
                                }}
                            >
                                Learning Journey
                            </span>

                            <h2
                                className="fw-bold mb-0"
                                style={{
                                    fontSize: "clamp(32px,5vw,52px)",
                                    background:
                                        "linear-gradient(45deg, #1d355d, #2b426e)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    lineHeight: "1.3",
                                }}
                            >
                                How a PIIMT EdTech Course Actually Works
                            </h2>

                        </div>

                        <div className="text-center">

                            <a
                                href="/allcourses"
                                className="btn text-white fw-semibold px-4 py-3 rounded-pill shadow-sm"
                                style={{
                                    background:
                                        "linear-gradient(45deg, #1d355d, #2b426e)",
                                    border: "none",
                                    transition: "0.3s ease",
                                }}
                            >
                                <i className="fa-solid fa-eye me-2"></i>
                                View All
                            </a>

                        </div>
                    </div>

                    {/* Cards */}
                    <div className="row g-4 justify-content-center">

                        {/* Card 1 */}
                        <div className="col-sm-6 col-lg-3">

                            <div
                                className="p-4 text-white rounded-4 shadow-sm h-100"
                                style={{
                                    background: "#1d355d",
                                    transition: "0.3s ease",
                                    cursor: "pointer",
                                }}
                                onMouseOver={(e) => {
                                    e.currentTarget.style.transform =
                                        "translateY(-8px)";
                                    e.currentTarget.style.boxShadow =
                                        "0 1rem 3rem rgba(0,0,0,.15)";
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.transform =
                                        "translateY(0)";
                                    e.currentTarget.style.boxShadow =
                                        "0 .125rem .25rem rgba(0,0,0,.075)";
                                }}
                            >

                                <div
                                    className="mb-4 d-flex align-items-center justify-content-center rounded-circle"
                                    style={{
                                        width: "75px",
                                        height: "75px",
                                        background: "rgba(255,255,255,0.12)",
                                    }}
                                >
                                    <i className="fa-solid fa-code fs-2 text-warning"></i>
                                </div>

                                <h5 className="fw-bold mb-3">
                                    You Enroll
                                </h5>

                                <p
                                    className="small mb-0"
                                    style={{
                                        lineHeight: "1.8",
                                    }}
                                >
                                    Tell us your goal — a new career,
                                    a promotion, or a specific skill —
                                    and we help you pick the right
                                    course and batch timing.
                                    The process takes about 15 minutes.
                                </p>

                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="col-sm-6 col-lg-3">

                            <div
                                className="p-4 text-white rounded-4 shadow-sm h-100"
                                style={{
                                    background: "#2b426e",
                                    transition: "0.3s ease",
                                    cursor: "pointer",
                                }}
                                onMouseOver={(e) => {
                                    e.currentTarget.style.transform =
                                        "translateY(-8px)";
                                    e.currentTarget.style.boxShadow =
                                        "0 1rem 3rem rgba(0,0,0,.15)";
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.transform =
                                        "translateY(0)";
                                    e.currentTarget.style.boxShadow =
                                        "0 .125rem .25rem rgba(0,0,0,.075)";
                                }}
                            >

                                <div
                                    className="mb-4 d-flex align-items-center justify-content-center rounded-circle"
                                    style={{
                                        width: "75px",
                                        height: "75px",
                                        background: "rgba(255,255,255,0.12)",
                                    }}
                                >
                                    <i className="fa-solid fa-palette fs-2 text-warning"></i>
                                </div>

                                <h5 className="fw-bold mb-3">
                                    You Learn in the Lab
                                </h5>

                                <p
                                    className="small mb-0"
                                    style={{
                                        lineHeight: "1.8",
                                    }}
                                >
                                    Your classes are hands-on from
                                    the start. You work through
                                    structured modules, complete
                                    weekly assignments, and build
                                    small projects as you go.
                                </p>

                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="col-sm-6 col-lg-3">

                            <div
                                className="p-4 text-white rounded-4 shadow-sm h-100"
                                style={{
                                    background: "#f5a100",
                                    transition: "0.3s ease",
                                    cursor: "pointer",
                                }}
                                onMouseOver={(e) => {
                                    e.currentTarget.style.transform =
                                        "translateY(-8px)";
                                    e.currentTarget.style.boxShadow =
                                        "0 1rem 3rem rgba(0,0,0,.15)";
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.transform =
                                        "translateY(0)";
                                    e.currentTarget.style.boxShadow =
                                        "0 .125rem .25rem rgba(0,0,0,.075)";
                                }}
                            >

                                <div
                                    className="mb-4 d-flex align-items-center justify-content-center rounded-circle"
                                    style={{
                                        width: "75px",
                                        height: "75px",
                                        background: "rgba(255,255,255,0.18)",
                                    }}
                                >
                                    <i className="fa-solid fa-bullhorn fs-2 text-white"></i>
                                </div>

                                <h5 className="fw-bold mb-3 text-dark">
                                    You Build a Portfolio
                                </h5>

                                <p
                                    className="small mb-0 text-dark"
                                    style={{
                                        lineHeight: "1.8",
                                    }}
                                >
                                    Before your course ends,
                                    you complete a full project —
                                    a working website, live ad campaign,
                                    designed brand kit, or functioning app.
                                </p>

                            </div>
                        </div>

                        {/* Card 4 */}
                        <div className="col-sm-6 col-lg-3">

                            <div
                                className="p-4 text-white rounded-4 shadow-sm h-100"
                                style={{
                                    background: "#457b9d",
                                    transition: "0.3s ease",
                                    cursor: "pointer",
                                }}
                                onMouseOver={(e) => {
                                    e.currentTarget.style.transform =
                                        "translateY(-8px)";
                                    e.currentTarget.style.boxShadow =
                                        "0 1rem 3rem rgba(0,0,0,.15)";
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.transform =
                                        "translateY(0)";
                                    e.currentTarget.style.boxShadow =
                                        "0 .125rem .25rem rgba(0,0,0,.075)";
                                }}
                            >

                                <div
                                    className="mb-4 d-flex align-items-center justify-content-center rounded-circle"
                                    style={{
                                        width: "75px",
                                        height: "75px",
                                        background: "rgba(255,255,255,0.12)",
                                    }}
                                >
                                    <i className="fa-solid fa-laptop-code fs-2 text-warning"></i>
                                </div>

                                <h5 className="fw-bold mb-3">
                                    You Get Certified & Placed
                                </h5>

                                <p
                                    className="small mb-0"
                                    style={{
                                        lineHeight: "1.8",
                                    }}
                                >
                                    You sit your certification exam
                                    and receive your PIIMT certificate
                                    with ISO endorsement. Our placement
                                    team helps you land your first
                                    or next job.
                                </p>

                            </div>
                        </div>

                    </div>
                </div>
            </section>


            <section
                className="register text-white position-relative py-5 overflow-hidden"
                style={{
                    background:
                        "linear-gradient(rgba(0,0,0,0.78), rgba(0,0,0,0.82)), url('assets/image/registerd-bg.jpg') center/cover no-repeat",
                }}
            >
                <div className="container py-4">

                    <div className="row g-5 align-items-center">

                        {/* Left Content */}
                        <div className="col-lg-7">

                            <span
                                className="badge px-3 py-2 rounded-pill fw-bold text-uppercase mb-3"
                                style={{
                                    backgroundColor: "rgba(245,161,0,0.15)",
                                    color: "#f5a100",
                                    letterSpacing: "1px",
                                    fontSize: "12px",
                                }}
                            >
                                Build Your Career
                            </span>

                            <h2
                                className="fw-bold mb-4"
                                style={{
                                    fontSize: "clamp(38px,5vw,62px)",
                                    lineHeight: "1.2",
                                }}
                            >
                                Join{" "}
                                <span style={{ color: "#f5a100" }}>
                                    PIIMT EdTech
                                </span>{" "}
                                Today
                            </h2>

                            <p
                                className="text-light mb-4"
                                style={{
                                    fontSize: "17px",
                                    lineHeight: "1.9",
                                    opacity: 0.9,
                                }}
                            >
                                At PIIMT Edtech Jaipur, we invite you
                                to become part of a growing community
                                of learners, creators, and professionals.
                                Learn practical skills, build real projects,
                                and prepare for a successful future
                                in technology.
                            </p>

                            <p
                                className="text-light mb-5"
                                style={{
                                    lineHeight: "1.9",
                                    opacity: 0.8,
                                }}
                            >
                                Whether you are starting your career,
                                upgrading your skills, or switching
                                industries, our expert trainers and
                                industry-focused programs are designed
                                to help you succeed confidently.
                            </p>

                            {/* Stats */}
                            <div className="row g-4">

                                {/* Stat 1 */}
                                <div className="col-6 col-md-3">

                                    <div
                                        className="text-center rounded-4 p-3 h-100"
                                        style={{
                                            background: "rgba(255,255,255,0.08)",
                                            backdropFilter: "blur(8px)",
                                            border: "1px solid rgba(255,255,255,0.08)",
                                        }}
                                    >
                                        <h3
                                            className="fw-bold mb-1"
                                            style={{
                                                color: "#f5a100",
                                                fontSize: "38px",
                                            }}
                                        >
                                            150+
                                        </h3>

                                        <p
                                            className="mb-0 text-light small"
                                            style={{
                                                letterSpacing: "0.5px",
                                            }}
                                        >
                                            Branches
                                        </p>
                                    </div>

                                </div>

                                {/* Stat 2 */}
                                <div className="col-6 col-md-3">

                                    <div
                                        className="text-center rounded-4 p-3 h-100"
                                        style={{
                                            background: "rgba(255,255,255,0.08)",
                                            backdropFilter: "blur(8px)",
                                            border: "1px solid rgba(255,255,255,0.08)",
                                        }}
                                    >
                                        <h3
                                            className="fw-bold mb-1"
                                            style={{
                                                color: "#f5a100",
                                                fontSize: "38px",
                                            }}
                                        >
                                            400+
                                        </h3>

                                        <p
                                            className="mb-0 text-light small"
                                            style={{
                                                letterSpacing: "0.5px",
                                            }}
                                        >
                                            Instructors
                                        </p>
                                    </div>

                                </div>

                                {/* Stat 3 */}
                                <div className="col-6 col-md-3">

                                    <div
                                        className="text-center rounded-4 p-3 h-100"
                                        style={{
                                            background: "rgba(255,255,255,0.08)",
                                            backdropFilter: "blur(8px)",
                                            border: "1px solid rgba(255,255,255,0.08)",
                                        }}
                                    >
                                        <h3
                                            className="fw-bold mb-1"
                                            style={{
                                                color: "#f5a100",
                                                fontSize: "38px",
                                            }}
                                        >
                                            300+
                                        </h3>

                                        <p
                                            className="mb-0 text-light small"
                                            style={{
                                                letterSpacing: "0.5px",
                                            }}
                                        >
                                            Courses
                                        </p>
                                    </div>

                                </div>

                                {/* Stat 4 */}
                                <div className="col-6 col-md-3">

                                    <div
                                        className="text-center rounded-4 p-3 h-100"
                                        style={{
                                            background: "rgba(255,255,255,0.08)",
                                            backdropFilter: "blur(8px)",
                                            border: "1px solid rgba(255,255,255,0.08)",
                                        }}
                                    >
                                        <h3
                                            className="fw-bold mb-1"
                                            style={{
                                                color: "#f5a100",
                                                fontSize: "38px",
                                            }}
                                        >
                                            10L+
                                        </h3>

                                        <p
                                            className="mb-0 text-light small"
                                            style={{
                                                letterSpacing: "0.5px",
                                            }}
                                        >
                                            Students
                                        </p>
                                    </div>

                                </div>

                            </div>

                        </div>

                        {/* Right Form */}
                        <div className="col-lg-5">

                            <div
                                className="rounded-4 p-4 p-md-5 shadow-lg"
                                style={{
                                    background: "rgba(17, 24, 39, 0.92)",
                                    backdropFilter: "blur(10px)",
                                    border: "1px solid rgba(255,255,255,0.08)",
                                }}
                            >

                                <h3
                                    className="fw-bold text-center mb-2 text-white"
                                    style={{
                                        fontSize: "32px",
                                    }}
                                >
                                    Join PIIMT Today!
                                </h3>

                                <p
                                    className="text-center text-light mb-4"
                                    style={{
                                        opacity: 0.8,
                                    }}
                                >
                                    Create your free account and start
                                    learning from expert instructors.
                                </p>

                                <form>

                                    <div className="mb-3">

                                        <input
                                            type="text"
                                            className="form-control form-control-lg border-0 rounded-3"
                                            placeholder="Full Name"
                                            style={{
                                                background: "rgba(255,255,255,0.08)",
                                                color: "#fff",
                                                padding: "14px 18px",
                                            }}
                                        />

                                    </div>

                                    <div className="mb-3">

                                        <input
                                            type="email"
                                            className="form-control form-control-lg border-0 rounded-3"
                                            placeholder="Email Address"
                                            style={{
                                                background: "rgba(255,255,255,0.08)",
                                                color: "#fff",
                                                padding: "14px 18px",
                                            }}
                                        />

                                    </div>

                                    <div className="mb-4">

                                        <input
                                            type="tel"
                                            className="form-control form-control-lg border-0 rounded-3"
                                            placeholder="Phone Number"
                                            style={{
                                                background: "rgba(255,255,255,0.08)",
                                                color: "#fff",
                                                padding: "14px 18px",
                                            }}
                                        />

                                    </div>

                                    <button
                                        type="submit"
                                        className="btn w-100 fw-bold py-3 rounded-3"
                                        style={{
                                            background:
                                                "linear-gradient(45deg, #f5a100, #ffbb00)",
                                            border: "none",
                                            color: "#1d355d",
                                            fontSize: "17px",
                                            transition: "0.3s ease",
                                        }}
                                    >
                                        Register Now
                                    </button>

                                </form>

                            </div>

                        </div>

                    </div>
                </div>
            </section>

            <section className="testimonials py-5 bg-light position-relative overflow-hidden">
                <div className="container">

                    {/* Heading */}
                    <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-5">

                        <div className="text-center text-lg-start">

                            <span
                                className="badge px-3 py-2 rounded-pill fw-bold text-uppercase mb-3"
                                style={{
                                    backgroundColor: "rgba(245,161,0,0.12)",
                                    color: "#f5a100",
                                    letterSpacing: "1px",
                                    fontSize: "12px",
                                }}
                            >
                                Student Success Stories
                            </span>

                            <h2
                                className="fw-bold mb-2"
                                style={{
                                    fontSize: "clamp(34px,5vw,58px)",
                                    background:
                                        "linear-gradient(45deg, #1d355d, #2b426e)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    lineHeight: "1.2",
                                }}
                            >
                                In Their Own Words
                            </h2>

                            <p
                                className="text-muted mb-0"
                                style={{
                                    fontSize: "18px",
                                    maxWidth: "700px",
                                }}
                            >
                                These are the stories we are most proud of.
                                Hear directly from our students about their
                                learning experience at PIIMT.
                            </p>

                        </div>

                        <div className="text-center">

                            <a
                                href="#"
                                className="btn text-white fw-semibold px-4 py-3 rounded-pill shadow-sm"
                                style={{
                                    background:
                                        "linear-gradient(45deg, #1d355d, #2b426e)",
                                    border: "none",
                                }}
                            >
                                <i className="fa-solid fa-eye me-2"></i>
                                View All
                            </a>

                        </div>

                    </div>

                    {/* Testimonials */}
                    <div className="row g-4">

                        {/* Testimonial 1 */}
                        <div className="col-md-6 col-xl-3">

                            <div
                                className="bg-white rounded-4 shadow-sm p-4 h-100"
                                style={{
                                    transition: "0.3s ease",
                                    cursor: "pointer",
                                }}
                                onMouseOver={(e) => {
                                    e.currentTarget.style.transform =
                                        "translateY(-8px)";
                                    e.currentTarget.style.boxShadow =
                                        "0 1rem 3rem rgba(0,0,0,.12)";
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.transform =
                                        "translateY(0)";
                                    e.currentTarget.style.boxShadow =
                                        "0 .125rem .25rem rgba(0,0,0,.075)";
                                }}
                            >

                                <div className="d-flex align-items-center mb-4">

                                    <img
                                        src="assets/image/11.jpg"
                                        alt="Aarav Mehta"
                                        className="rounded-circle me-3"
                                        style={{
                                            width: "70px",
                                            height: "70px",
                                            objectFit: "cover",
                                        }}
                                    />

                                    <div>

                                        <h5
                                            className="fw-bold mb-1"
                                            style={{
                                                color: "#1d355d",
                                            }}
                                        >
                                            Aarav Mehta
                                        </h5>

                                        <small className="text-muted">
                                            Web Development Graduate
                                        </small>

                                    </div>

                                </div>

                                <p
                                    className="fst-italic text-muted mb-0"
                                    style={{
                                        lineHeight: "1.9",
                                    }}
                                >
                                    “I started with zero coding knowledge.
                                    By the third month I had built two
                                    working websites on my own.
                                    The trainers at PIIMT helped me
                                    at every step.”
                                </p>

                            </div>

                        </div>

                        {/* Testimonial 2 */}
                        <div className="col-md-6 col-xl-3">

                            <div
                                className="bg-white rounded-4 shadow-sm p-4 h-100"
                                style={{
                                    transition: "0.3s ease",
                                    cursor: "pointer",
                                }}
                                onMouseOver={(e) => {
                                    e.currentTarget.style.transform =
                                        "translateY(-8px)";
                                    e.currentTarget.style.boxShadow =
                                        "0 1rem 3rem rgba(0,0,0,.12)";
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.transform =
                                        "translateY(0)";
                                    e.currentTarget.style.boxShadow =
                                        "0 .125rem .25rem rgba(0,0,0,.075)";
                                }}
                            >

                                <div className="d-flex align-items-center mb-4">

                                    <img
                                        src="assets/image/46.jpg"
                                        alt="Riya Sharma"
                                        className="rounded-circle me-3"
                                        style={{
                                            width: "70px",
                                            height: "70px",
                                            objectFit: "cover",
                                        }}
                                    />

                                    <div>

                                        <h5
                                            className="fw-bold mb-1"
                                            style={{
                                                color: "#1d355d",
                                            }}
                                        >
                                            Riya Sharma
                                        </h5>

                                        <small className="text-muted">
                                            Graphic Designing Graduate
                                        </small>

                                    </div>

                                </div>

                                <p
                                    className="fst-italic text-muted mb-0"
                                    style={{
                                        lineHeight: "1.9",
                                    }}
                                >
                                    “The lab here is better equipped
                                    than anything I expected.
                                    My portfolio from PIIMT helped me
                                    get my first freelance client.”
                                </p>

                            </div>

                        </div>

                        {/* Testimonial 3 */}
                        <div className="col-md-6 col-xl-3">

                            <div
                                className="bg-white rounded-4 shadow-sm p-4 h-100"
                                style={{
                                    transition: "0.3s ease",
                                    cursor: "pointer",
                                }}
                                onMouseOver={(e) => {
                                    e.currentTarget.style.transform =
                                        "translateY(-8px)";
                                    e.currentTarget.style.boxShadow =
                                        "0 1rem 3rem rgba(0,0,0,.12)";
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.transform =
                                        "translateY(0)";
                                    e.currentTarget.style.boxShadow =
                                        "0 .125rem .25rem rgba(0,0,0,.075)";
                                }}
                            >

                                <div className="d-flex align-items-center mb-4">

                                    <img
                                        src="assets/image/31.jpg"
                                        alt="Mohit Verma"
                                        className="rounded-circle me-3"
                                        style={{
                                            width: "70px",
                                            height: "70px",
                                            objectFit: "cover",
                                        }}
                                    />

                                    <div>

                                        <h5
                                            className="fw-bold mb-1"
                                            style={{
                                                color: "#1d355d",
                                            }}
                                        >
                                            Mohit Verma
                                        </h5>

                                        <small className="text-muted">
                                            Digital Marketing Graduate
                                        </small>

                                    </div>

                                </div>

                                <p
                                    className="fst-italic text-muted mb-0"
                                    style={{
                                        lineHeight: "1.9",
                                    }}
                                >
                                    “Thanks to PIIMT, I got certified
                                    in Digital Marketing and now manage
                                    campaigns for local businesses.
                                    Their practical teaching made
                                    all the difference.”
                                </p>

                            </div>

                        </div>

                        {/* Testimonial 4 */}
                        <div className="col-md-6 col-xl-3">

                            <div
                                className="bg-white rounded-4 shadow-sm p-4 h-100"
                                style={{
                                    transition: "0.3s ease",
                                    cursor: "pointer",
                                }}
                                onMouseOver={(e) => {
                                    e.currentTarget.style.transform =
                                        "translateY(-8px)";
                                    e.currentTarget.style.boxShadow =
                                        "0 1rem 3rem rgba(0,0,0,.12)";
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.transform =
                                        "translateY(0)";
                                    e.currentTarget.style.boxShadow =
                                        "0 .125rem .25rem rgba(0,0,0,.075)";
                                }}
                            >

                                <div className="d-flex align-items-center mb-4">

                                    <img
                                        src="assets/image/testimonial.jpg"
                                        alt="Simran Kaur"
                                        className="rounded-circle me-3"
                                        style={{
                                            width: "70px",
                                            height: "70px",
                                            objectFit: "cover",
                                        }}
                                    />

                                    <div>

                                        <h5
                                            className="fw-bold mb-1"
                                            style={{
                                                color: "#1d355d",
                                            }}
                                        >
                                            Simran Kaur
                                        </h5>

                                        <small className="text-muted">
                                            Python Programming Graduate
                                        </small>

                                    </div>

                                </div>

                                <p
                                    className="fst-italic text-muted mb-0"
                                    style={{
                                        lineHeight: "1.9",
                                    }}
                                >
                                    “The trainers pushed us to solve
                                    real-world problems instead of
                                    just learning theory.
                                    That experience prepared me
                                    for actual industry work.”
                                </p>

                            </div>

                        </div>

                    </div>

                </div>
            </section>



        </>
    );
};

export default Home;