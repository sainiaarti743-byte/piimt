import React from "react";
import { Link } from "react-router-dom";
import SEO from "../SEO";

const DataScience = () => {
  return (
    <>
    <SEO
  title="Data Science & AI Course in Jaipur"
  description="Learn Data Science, Artificial Intelligence and Machine Learning with live projects."
  keywords="Data Science course Jaipur, AI training Jaipur, Machine Learning course"
  url="https://piimtedtech.in/data-science-ai"
/>
      <div className="training-page course-detail-page">
        {/* <!-- 🤖 Data Science & AI Section --> */}
        <section className="py-5">
          <div className="container">
            <div className="row">
              {/* <!-- Sidebar --> */}
              <div className="col-lg-3 mb-4">
                <div className="sidebar shadow px-3 pb-3">
                  <div className="nav flex-column nav-pills">

                    <Link to="/web-development" className="nav-link btn bg-warning text-white mt-3 p-3 ">
                      Web Design & Development
                    </Link>

                    <Link to="/digital-marketing" className="nav-link btn bg-warning text-white mt-3 p-3">
                      Digital Marketing & SEO
                    </Link>

                    <Link to="/hardware-network" className="nav-link btn bg-warning text-white mt-3 p-3">
                      Hardware & Networking
                    </Link>

                    <Link to="/graphic-desiging" className="nav-link btn bg-warning text-white mt-3 p-3">
                      Graphic Designing
                    </Link>

                    <Link to="/internship-it" className="nav-link btn bg-warning text-white mt-3 p-3">
                      IT Internship Programme
                    </Link>

                    <Link to="/php-backend-development" className="nav-link btn bg-warning text-white mt-3 p-3">
                      PHP & Backend Web Development
                    </Link>

                    <Link to="/asp-net-development" className="nav-link btn bg-warning text-white mt-3 p-3">
                      ASP.NET Development
                    </Link>

                    <Link to="/aws-cloud-computing" className="nav-link btn bg-warning text-white mt-3 p-3">
                      AWS Cloud Computing
                    </Link>

                    <Link
                      to="/accounting-erp"
                      className="nav-link btn bg-warning text-white mt-3 p-3 "
                    >
                      Accounting, ERP & Tally GST
                    </Link>

                    <Link to="/mobile-app-development" className="nav-link btn bg-warning text-white mt-3 p-3">
                      Mobile App Development
                    </Link>

                    <Link to="/data-science-ai" className="nav-link btn-warning text-white mt-3 p-3 active">
                      Data Science & Analytics Course
                    </Link>

                    <Link to="/artificial-intelligence" className="nav-link btn bg-warning text-white mt-3 p-3">
                      Artificial Intelligence
                    </Link>

                  </div>
                </div>
              </div>

              {/* <!-- Main Content --> */}
              <div className="col-lg-9">
                <div className="course-content bg-white p-5 mb-5 rounded shadow">
                  <h4 className="fw-bold">Data Science & Artificial Intelligence</h4>
                  <img src="assets/image/data-science-ai.jpg" className="img-fluid rounded my-4" alt="Data Science and AI Course at PIIMT Edtech" />

                  <p><strong>Turn raw data into decisions — master the tools and thinking that power the data economy.</strong></p>
                  <ul className="list-unstyled mt-2">
                    {/* <!-- Courses Covered --> */}
                    <li className="mb-3 d-flex align-items-start">
                      <i className="fa-solid fa-diamond me-3 mt-1" style={{ color: '#fd7e14', fontSize: '0.8rem' }}></i>
                      <span className="fs-5 text-dark">
                        <strong>Courses Covered:</strong> Data Science & Analytics — Comprehensive Programme
                      </span>
                    </li>

                    {/* <!-- Who This Is For --> */}
                    <li className="mb-3 d-flex align-items-start">
                      <i className="fa-solid fa-diamond me-3 mt-1" style={{ color: '#fd7e14', fontSize: '0.8rem' }}></i>
                      <span className="fs-5 text-dark">
                        <strong>Who This Is For:</strong> Graduates from any discipline who want to enter the data science field, business and finance professionals who work with data and want to move beyond spreadsheets, IT professionals wanting to add high-value analytical skills to their profile, aspiring data analysts and business intelligence professionals
                      </span>
                    </li>

                    {/* <!-- What You Will Learn --> */}
                    <li className="mb-3 d-flex align-items-start">
                      <i className="fa-solid fa-diamond me-3 mt-1" style={{ color: '#fd7e14', fontSize: '0.8rem' }}></i>
                      <div className="fs-5 text-dark">
                        <strong>What You Will Learn:</strong>
                        <ul className="list-unstyled ms-4 mt-2">
                          <li className="mb-1">— Data science workflow: problem framing, data collection, cleaning, analysis, communication</li>
                          <li className="mb-1">— Python for data science: Pandas for data manipulation, NumPy for numerical computing</li>
                          <li className="mb-1">— Exploratory Data Analysis (EDA): identifying patterns, outliers, and relationships in datasets</li>
                          <li className="mb-1">— Data visualisation: creating clear, compelling charts and dashboards using Matplotlib, Seaborn, and Power BI</li>
                          <li className="mb-1">— Statistics for data science: distributions, hypothesis testing, confidence intervals, correlation</li>
                          <li className="mb-1">— Machine learning for analysts: regression models, classNameification, clustering — applied to business problems</li>
                          <li className="mb-1">— SQL for data querying: writing queries, joins, aggregations, and subqueries on real databases</li>
                          <li className="mb-1">— Excel and Google Sheets: advanced functions, pivot tables, and data modelling</li>
                          <li className="mb-1">— Business Intelligence tools: building dashboards and reports in Power BI</li>
                          <li className="mb-1">— Working with real-world datasets: e-commerce data, HR data, sales data, financial data</li>
                          <li className="mb-1">— Communicating data insights: storytelling with data, presenting findings to non-technical audiences</li>
                        </ul>
                      </div>
                    </li>

                    {/* <!-- Tools You Will Use --> */}
                    <li className="mb-3 d-flex align-items-start">
                      <i className="fa-solid fa-diamond me-3 mt-1" style={{ color: '#fd7e14', fontSize: '0.8rem' }}></i>
                      <span className="fs-5 text-dark">
                        <strong>Tools You Will Use:</strong> Python, Pandas, NumPy, Matplotlib, Seaborn, Power BI, SQL, Excel, Jupyter Notebook
                      </span>
                    </li>

                    {/* <!-- Format --> */}
                    <li className="mb-3 d-flex align-items-start">
                      <i className="fa-solid fa-diamond me-3 mt-1" style={{ color: '#fd7e14', fontSize: '0.8rem' }}></i>
                      <span className="fs-5 text-dark">
                        <strong>Format:</strong> Dataset-driven learning — every session uses real data from real industries. No synthetic exercises.
                      </span>
                    </li>

                    {/* <!-- Capstone Project --> */}
                    <li className="mb-3 d-flex align-items-start">
                      <i className="fa-solid fa-diamond me-3 mt-1" style={{ color: '#fd7e14', fontSize: '0.8rem' }}></i>
                      <span className="fs-5 text-dark">
                        <strong>Capstone Project:</strong> Students complete a full data science project — sourcing a dataset, cleaning it, analysing it, building a predictive model, and presenting the results as a business report
                      </span>
                    </li>

                    {/* <!-- Outcome --> */}
                    <li className="mb-3 d-flex align-items-start">
                      <i className="fa-solid fa-diamond me-3 mt-1" style={{ color: '#fd7e14', fontSize: '0.8rem' }}></i>
                      <span className="fs-5 text-dark">
                        <strong>Outcome:</strong> A portfolio of data science projects and a capstone analysis that can be shown in job interviews. Students are prepared for data analyst and junior data scientist roles.
                      </span>
                    </li>

                    {/* <!-- Duration --> */}
                    <li className="mb-3 d-flex align-items-start">
                      <i className="fa-solid fa-diamond me-3 mt-1" style={{ color: '#fd7e14', fontSize: '0.8rem' }}></i>
                      <span className="fs-5 text-dark">
                        <strong>Duration:</strong> 4 to 5 months | Offline and online batches available
                      </span>
                    </li>

                    {/* <!-- Who Teaches It --> */}
                    <li className="mb-4 d-flex align-items-start">
                      <i className="fa-solid fa-diamond me-3 mt-1" style={{ color: '#fd7e14', fontSize: '0.8rem' }}></i>
                      <span className="fs-5 text-dark">
                        <strong>Who Teaches It:</strong> Trainers who work with real data professionally — not just academics teaching from textbooks
                      </span>
                    </li>
                  </ul>

                  {/* <!-- SEO Keywords Section --> */}
                  <p className="mt-4 small">
                    <span style={{ color: '#fd7e14' }} className="fw-bold"><i className="bi bi-pin-angle-fill"></i> Primary Keywords:</span>
                    <span className="text-muted italic">data science course Jaipur, data analytics training Rajasthan, Python data science Sikar</span>
                  </p>

                  <a href="registerd.html" className="btn btn-warning text-white btn-sm">Enroll Now</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Accordion Section --> */}
        <section className="py-5 bg-blue">
          <div className="container">
            <h3 className="fw-bold text-white text-center mb-4">
              PIIMT EdTech IT Education – ISO Certified Excellence
            </h3>

            <div className="accordion" id="piimtAccordion">
              {/* <!-- Item 1 --> */}
              <div className="accordion-item mb-3">
                <h2 className="accordion-header" id="headingOne">
                  <button className="accordion-button fw-semibold" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    PIIMT EdTech IT Education – ISO Certified Excellence
                  </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                  data-bs-parent="#piimtAccordion">
                  <div className="accordion-body">
                    PIIMT EdTech IT Education is an ISO 9001:2008 certified institute, recognized for maintaining high standards in IT
                    education and training. Our globally accepted certifications open doors to international career opportunities.
                    Students from PIIMT stand out in placements because they gain hands-on, job-ready skills that today’s industries demand.
                  </div>
                </div>
              </div>

              {/* <!-- Item 2 --> */}
              <div className="accordion-item mb-3">
                <h2 className="accordion-header" id="headingTwo">
                  <button className="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Global Recognition & Opportunities
                  </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                  data-bs-parent="#piimtAccordion">
                  <div className="accordion-body">
                    Our globally accepted certifications open doors to international career opportunities. Students from PIIMT stand out
                    in placements because they gain hands-on, job-ready skills that today’s industries demand.
                  </div>
                </div>
              </div>

              {/* <!-- Item 3 --> */}
              <div className="accordion-item mb-3">
                <h2 className="accordion-header" id="headingThree">
                  <button className="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Job-Ready Practical Skills
                  </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                  data-bs-parent="#piimtAccordion">
                  <div className="accordion-body">
                    Students from PIIMT gain practical skills and real-world experience, ensuring they are career-ready from day one.
                  </div>
                </div>
              </div>

              {/* <!-- Item 4 --> */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFour">
                  <button className="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                    Focused on Career Success
                  </button>
                </h2>
                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour"
                  data-bs-parent="#piimtAccordion">
                  <div className="accordion-body">
                    We focus on <strong>practical learning</strong> to ensure every student is <strong>career-ready from day one</strong>.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>




        <div className=" p-5">
          <div className="container my-5">
            <div className="row text-center">

              <h2 className="fw-bold mb-5">Why You Should Join PIIMT EdTech IT Education ?</h2>
              <div className="col-md-2 col-sm-6 mb-4">
                <div className="p-4 rounded shadow bg-white">
                  <div className="icon-circle bg-success mx-auto"><i className="fa-solid fa-users-line"></i></div>
                  <h6 className="fw-semibold">Employability Skills</h6>
                </div>
              </div>
              <div className="col-md-2 col-sm-6 mb-4">
                <div className="p-4 rounded shadow bg-white">
                  <div className="icon-circle bg-info mx-auto"><i className="fa-solid fa-certificate"></i></div>
                  <h6 className="fw-semibold">International Certifications</h6>
                </div>
              </div>
              <div className="col-md-2 col-sm-6 mb-4">
                <div className="p-4 rounded shadow bg-white">
                  <div className="icon-circle bg-secondary mx-auto"><i className="fa-solid fa-handshake"></i></div>
                  <h6 className="fw-semibold">Placement Assistance</h6>
                </div>
              </div>
              <div className="col-md-2 col-sm-6 mb-4">
                <div className="p-4 rounded shadow bg-white">
                  <div className="icon-circle bg-danger mx-auto"><i className="fa-solid fa-laptop-code"></i></div>
                  <h6 className="fw-semibold">Internship Opportunities</h6>
                </div>
              </div>
              <div className="col-md-2 col-sm-6 mb-4">
                <div className="p-4 rounded shadow bg-white">
                  <div className="icon-circle bg-warning mx-auto"><i className="fa-brands fa-searchengin"></i></div>
                  <h6 className="fw-semibold">Multi Locations 150+ Branches</h6>
                </div>
              </div>
              <div className="col-md-2 col-sm-6 mb-4">
                <div className="p-4 rounded shadow bg-white">
                  <div className="icon-circle bg-dark mx-auto"> <i className="fas fa-chalkboard-teacher"></i></div>
                  <h6 className="fw-semibold">Expert Certified Faculties</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="testimonials py-5">
          <div className="container">
            <div className="course-heading mb-5">
              <div className="heading">
                <h2>What our students say</h2>
                <h3>Hear from Our Learners</h3>
              </div>
              <div className="view-all mt-2 d-block"><a href="#"><i className="fa-solid fa-eye me-2"></i>View All</a> </div>
            </div>
            <div className="owl-carousel owl-theme testi">
              {/* <!-- Single Starts --> */}
              <div className="item shadow rounded">
                <div className="profile">
                  <img src="assets/image/testimonial.jpg" alt="" />
                  <div className="information">
                    <p>Furkan Giray</p>
                    <span>Web Developer</span>
                  </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita velit labore suscipit distinctio, officiis deserunt rem blanditiis ducimus. Voluptate quaerat assumenda qui veniam facilis doloribus maiores impedit ducimus cum accusamus.</p>
              </div>
              {/* <!-- Single Ends --> */}
              <div className="item shadow rounded">
                <div className="profile">
                  <img src="assets/image/testimonial.jpg" alt="" />
                  <div className="information">
                    <p>Furkan Giray</p>
                    <span>Web Developer</span>
                  </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita velit labore suscipit distinctio, officiis deserunt rem blanditiis ducimus. Voluptate quaerat assumenda qui veniam facilis doloribus maiores impedit ducimus cum accusamus.</p>
              </div>
              <div className="item shadow rounded">
                <div className="profile">
                  <img src="assets/image/testimonial.jpg" alt="" />
                  <div className="information">
                    <p>Furkan Giray</p>
                    <span>Web Developer</span>
                  </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita velit labore suscipit distinctio, officiis deserunt rem blanditiis ducimus. Voluptate quaerat assumenda qui veniam facilis doloribus maiores impedit ducimus cum accusamus.</p>
              </div>
              <div className="item shadow rounded">
                <div className="profile">
                  <img src="assets/image/testimonial.jpg" alt="" />
                  <div className="information">
                    <p>Furkan Giray</p>
                    <span>Web Developer</span>
                  </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita velit labore suscipit distinctio, officiis deserunt rem blanditiis ducimus. Voluptate quaerat assumenda qui veniam facilis doloribus maiores impedit ducimus cum accusamus.</p>
              </div>
              <div className="item shadow rounded">
                <div className="profile">
                  <img src="assets/image/testimonial.jpg" alt="" />
                  <div className="information">
                    <p>Furkan Giray</p>
                    <span>Web Developer</span>
                  </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita velit labore suscipit distinctio, officiis deserunt rem blanditiis ducimus. Voluptate quaerat assumenda qui veniam facilis doloribus maiores impedit ducimus cum accusamus.</p>
              </div>
              <div className="item shadow rounded">
                <div className="profile">
                  <img src="assets/image/testimonial.jpg" alt="" />
                  <div className="information">
                    <p>Furkan Giray</p>
                    <span>Web Developer</span>
                  </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita velit labore suscipit distinctio, officiis deserunt rem blanditiis ducimus. Voluptate quaerat assumenda qui veniam facilis doloribus maiores impedit ducimus cum accusamus.</p>
              </div>
              <div className="item shadow rounded">
                <div className="profile">
                  <img src="assets/image/testimonial.jpg" alt="" />
                  <div className="information">
                    <p>Furkan Giray</p>
                    <span>Web Developer</span>
                  </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita velit labore suscipit distinctio, officiis deserunt rem blanditiis ducimus. Voluptate quaerat assumenda qui veniam facilis doloribus maiores impedit ducimus cum accusamus.</p>
              </div>
            </div>
          </div>
        </section>


      </div>
    </>
  )
};

export default DataScience;