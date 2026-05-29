import React from "react";
import { Link } from "react-router-dom";
import SEO from "../SEO";

const courses = [

  {
    title: "Web Design & Development",
    image: "/assets/image/website-devlopment.jpg",
    description:
      "Learn to build websites from scratch using HTML, CSS, JavaScript, and PHP.",
    link: "/web-developmen",
  },
  {
    title: "Digital Marketing & SEO",
    image: "/assets/image/digital-marketing.avif",
    description:
      "Run real Google Ads, manage social media campaigns, and master SEO.",
    link: "/digital-marketing",
  },
  {
    title: "Hardware & Networking",
    image: "/assets/image/hardware-network.jpg",
    description:
      "Set up, configure, and secure computer networks professionally.",
    link: "/hardware-network",
  },
  {
    title: "Graphic Designing Course",
    image: "/assets/image/graphics-design.jpg",
    description:
      "Learn Photoshop, Illustrator, and InDesign for creative projects.",
    link: "/graphic-desiging",
  },
  {
    title: "IT Internship Program",
    image: "/assets/image/internship.jpg",
    description:
      "Get hands-on training and mentorship through live IT projects.",
    link: "/internship-it",
  },
  {
    title: "Flutter App Development",
    image: "/assets/image/flutter.png",
    description:
      "Build beautiful, high-performance mobile apps with Flutter.",
    link: "/mobile-app-development",
  },
  {
    title: "React Native App Development",
    image: "/assets/image/react-native.png",
    description:
      "Create powerful cross-platform mobile apps using React Native.",
    link: "/react-native",
  },
  {
    title: "PHP Native Development",
    image: "/assets/image/php.jpg",
    description:
      "Master backend development with dynamic PHP applications.",
    link: "/php-backend-development",
  },
  {
    title: "AWS Cloud Computing",
    image: "/assets/image/aws.jpg",
    description:
      "Deploy scalable cloud applications using AWS services.",
    link: "/aws-cloud-computing",
  },
  {
    title: "ASP.NET Development",
    image: "/assets/image/asp.svg",
    description:
      "Build secure and scalable web applications using ASP.NET.",
    link: "/asp-net-development",
  },
  {
    title: "AI & Machine Learning",
    image: "/assets/image/ai.webp",
    description:
      "Design, train, and deploy intelligent AI systems.",
    link: "/artificial-intelligence",
  },
];

const categories = [
  {
    name: "Web Design & Development",
    link: "/web-development",
  },
  {
    name: "Digital Marketing & SEO",
    link: "/digital-marketing",
  },
  {
    name: "Hardware & Networking",
    link: "/hardware-network",
  },
  {
    name: "Graphic Designing",
    link: "/graphic-desiging",
  },
  {
    name: "IT Internship Programme",
    link: "/internship-it",
  },
  {
    name: "PHP & Backend Web Development",
    link: "/php-backend-development",
  },
  {
    name: "ASP.NET Development",
    link: "/asp-net-development",
  },
  {
    name: "AWS Cloud Computing",
    link: "/aws-cloud-computing",
  },
  {
    name: "Accounting, ERP & Tally GST",
    link: "/accounting-erp",
  },
  {
    name: "Mobile App Development",
    link: "/mobile-app-development",
  },
  {
    name: "Data Science & Analytics",
    link: "/data-science-ai",
  },
  {
    name: "Artificial Intelligence",
    link: "/artificial-intelligence",
  },
];

const quickLinks = [
  {
    name: "About PIIMT",
    link: "/about",
  },
  {
    name: "Franchise",
    link: "/franchise",
  },
  {
    name: "Admissions",
    link: "/admission",
  },
  {
    name: "Contact Us",
    link: "/contact",
  },
];

const AllCourses = () => {
  return (
    <>

    <SEO
  title="All IT Courses – PIIMT EdTech"
  description="Browse all IT training courses including React JS, Python, Laravel and Mobile App Development."
  keywords="All IT courses Jaipur"
  url="https://piimtedtech.in/allcourses"
/>
      <div className="training-page">

        {/* Courses Section */}
        <div className="container my-5">
          <div className="row g-4">

            {/* Left Content */}
            <div className="col-lg-9">

              <h2 className="fw-bold mt-5 mb-4 text-center">
                Courses That Get You Hired
              </h2>

              <div className="row g-4">

                {courses.map((course, index) => (
                  <div className="col-md-6" key={index}>

                    <div className="card course-card h-100 shadow-sm border-0">

                      <img
                        src={course.image}
                        className="card-img-top img-fluid"
                        alt={course.title}
                      />

                      <div className="card-body d-flex flex-column">

                        <h5 className="fw-bold">
                          {course.title}
                        </h5>

                        <p>
                          {course.description}
                        </p>

                        <div className="mt-auto">
                          <Link
                            to={course.link}
                            className="btn btn-warning text-white btn-sm"
                          >
                            Read More
                          </Link>
                        </div>

                      </div>
                    </div>

                  </div>
                ))}

              </div>
            </div>

            {/* Sidebar */}
            <div className="col-lg-3">

              <div className="sidebar-course-page shadow mt-5 p-3 rounded">

                <h4 className="fw-bold bg-primary text-white p-2 rounded">
                  Course Categories
                </h4>

                <ul className="list-unstyled">

                  {categories.map((item, index) => (
                    <li className="mb-2" key={index}>
                      <Link
                        to={item.link}
                        className="text-decoration-none"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}

                </ul>

                <h4 className="mt-4 fw-bold bg-primary text-white p-2 rounded">
                  Quick Links
                </h4>

                <ul className="list-unstyled">

                  {quickLinks.map((item, index) => (
                    <li className="mb-2" key={index}>
                      <Link
                        to={item.link}
                        className="text-decoration-none"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}

                </ul>

              </div>

            </div>

          </div>
        </div>

        {/* Register Section */}
        <section
          className="enroll text-white text-center position-relative my-5"
          style={{
            background:
              "url('/assets/image/registerd-bg.jpg') center/cover no-repeat",
            padding: "100px 20px",
          }}
        >

          <div
            className="overlay position-absolute top-0 start-0 w-100 h-100"
            style={{
              background: "rgba(0,0,0,0.6)",
            }}
          ></div>

          <div className="container position-relative">

            <h2 className="fw-bold mb-3">
              Create Your Free Account Now!
            </h2>

            <p className="lead mb-4">
              Join PIIMT today and get instant access to 100s of online
              professional courses to boost your skills and career.
            </p>

            <Link
              to="/register"
              className="btn btn-light px-5 py-2 fw-semibold rounded-pill"
            >
              Join PIIMT Now
            </Link>

          </div>
        </section>

        {/* Why Join */}
        <div className="container my-5">

          <div className="row text-center">

            <h2 className="fw-bold mt-5 mb-5">
              Why You Should Join PIIMT EdTech IT Education?
            </h2>

            <div className="col-md-2 col-sm-6 mb-4">
              <div className="p-4 rounded shadow h-100">
                <div className="icon-circle bg-success mx-auto mb-3">
                  <i className="fa-solid fa-users-line text-white"></i>
                </div>

                <h6 className="fw-semibold">
                  Employability Skills
                </h6>
              </div>
            </div>

            <div className="col-md-2 col-sm-6 mb-4">
              <div className="p-4 rounded shadow h-100">
                <div className="icon-circle bg-info mx-auto mb-3">
                  <i className="fa-solid fa-certificate text-white"></i>
                </div>

                <h6 className="fw-semibold">
                  International Certifications
                </h6>
              </div>
            </div>

            <div className="col-md-2 col-sm-6 mb-4">
              <div className="p-4 rounded shadow h-100">
                <div className="icon-circle bg-secondary mx-auto mb-3">
                  <i className="fa-solid fa-handshake text-white"></i>
                </div>

                <h6 className="fw-semibold">
                  Placement Assistance
                </h6>
              </div>
            </div>

            <div className="col-md-2 col-sm-6 mb-4">
              <div className="p-4 rounded shadow h-100">
                <div className="icon-circle bg-danger mx-auto mb-3">
                  <i className="fa-solid fa-laptop-code text-white"></i>
                </div>

                <h6 className="fw-semibold">
                  Internship Opportunities
                </h6>
              </div>
            </div>

            <div className="col-md-2 col-sm-6 mb-4">
              <div className="p-4 rounded shadow h-100">
                <div className="icon-circle bg-warning mx-auto mb-3">
                  <i className="fa-brands fa-searchengin text-white"></i>
                </div>

                <h6 className="fw-semibold">
                  Multi Locations 150+ Branches
                </h6>
              </div>
            </div>

            <div className="col-md-2 col-sm-6 mb-4">
              <div className="p-4 rounded shadow h-100">
                <div className="icon-circle bg-dark mx-auto mb-3">
                  <i className="fas fa-chalkboard-teacher text-white"></i>
                </div>

                <h6 className="fw-semibold">
                  Expert Certified Faculties
                </h6>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Back To Top */}
      <button
        type="button"
        className="btn btn-warning btn-lg rounded-circle"
        id="btn-back-to-top"
      >
        <i className="bi bi-arrow-up text-white"></i>
      </button>
    </>
  );
};

export default AllCourses;