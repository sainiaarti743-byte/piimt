import React from "react";

const Foooter = () => {
    return (
        <>

            <footer>
                <div className="container">
                    <div className="row gy-4">
                        <div className="col-lg-4 col-12">
                            <h5 className="fw-bold mb-3">About Us</h5>
                            <p className="small">
                                PIIMT (Professional Institute of Information & Management Technology) is a leading institute dedicated to providing quality education in IT, management, and professional training programs.
                            </p>
                            <p className="small">
                                With a mission to empower students through skill-based learning, PIIMT offers a wide range of certified courses designed to meet industry standards and future career demands.
                            </p>
                            <a href="about-us.html" className="btn know-more btn-sm text-white">Know More</a>
                        </div>
                        <div className="col-lg-2 col-12">
                            <h5 className="fw-bold mb-3">Quick Links</h5>
                            <ul className="list-unstyled style_1">
                                <li><a href="/about">About Us</a></li>
                                <li><a href="/blog">Blog</a></li>
                                <li><a href="/contact">Contact</a></li>
                                <li><a href="/faq">FAQ</a></li>
                                <li><a href="/privacy">Privacy Policy</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-12">
                            <h5 className="fw-bold mb-3">Contact</h5>
                            <ul className="widget p-0">
                                <li className="small list-unstyled"><span><i className="bi bi-geo-alt-fill"></i></span>  <span className="fs-6">Head Office</span>— Jaipur  Nursery Circle Vaishali Nagar Jaipur (302021)
                                </li>
                                <li className="small list-unstyled"><span><i className="bi bi-geo-alt-fill"></i></span>  <span className="fs-6">Registered office:</span>Shiv Nagar, NH52, Gordhanpura, Palsana
                                Sikar, Rajasthan – 332402
                                </li>
                                <li className="small list-unstyled"><span><a href="tel:+91 7300180494"><i className="bi bi-telephone"></i> +91 7300180494 </a></span>
                                </li>
                                <li className="small list-unstyled"><span><i className="bi bi-envelope-fill"></i></span> Piimtedtech.in</li>
                            </ul>

                        </div>
                        <div className="col-lg-3 col-12">
                            <h5 className="fw-bold mb-3">Working Hours</h5>
                            <table className="table_working_hours">
                                <tbody>
                                    <tr className="opened">
                                        <td className="day_label h6">Monday</td>
                                        <td className="day_value h6">8:00 am - 7.00 pm</td>
                                    </tr>
                                    <tr className="opened">
                                        <td className="day_label h6">Tuesday</td>
                                        <td className="day_value h6">8:00 am - 7.00 pm</td>
                                    </tr>
                                    <tr className="opened">
                                        <td className="day_label h6">Wednesday</td>
                                        <td className="day_value h6">8:00 am - 7.00 pm</td>
                                    </tr>
                                    <tr className="opened">
                                        <td className="day_label h6">Thursday</td>
                                        <td className="day_value h6">8:00 am - 7.00 pm</td>
                                    </tr>
                                    <tr className="opened">
                                        <td className="day_label h6">Friday</td>
                                        <td className="day_value h6">8:00 am - 7.00 pm</td>
                                    </tr>
                                    <tr className="opened">
                                        <td className="day_label h6">Saturday</td>
                                        <td className="day_value h6">8:00 am - 7.00 pm</td>
                                    </tr>
                                    <tr className="closed">
                                        <td className="day_label h6">Sunday</td>
                                        <td className="day_value closed h6"><span>Closed</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <hr className="border-light my-4"/>
                        <div className="footer-bottom pb-4">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-md-4 d-flex flex-wrap align-items-center">
                                        <p className="text-center small mb-0">© 2025 | All Rights Reserved | PIIMT Education</p>
                                    </div>
                                    <div className="col-md-8 d-flex justify-content-end align-items-center">
                                        <div>
                                            <ul className="footer-navbar">
                                                <li><a href="/">HOME</a></li>

                                                <li><a href="/allcourses">COURSE</a></li>
                                                <li><a href="/training">TRAINING</a></li>
                                                <li><a href="/contact">CONTACT</a></li>
                                                <li><a href="/terms">TERMS & CONDITION</a></li>
                                            </ul>
                                        </div>
                                        <div className="social-icons footer-social-icon me-3 ms-5"> <a href="#"><i className="bi bi-facebook"></i></a>
                                            <a href="#"><i className="fa-brands fa-twitter"></i></a>
                                            <a href="#"><i className="bi bi-messenger"></i></a>

                                            <a href="#"><i className="bi bi-messenger"></i></a>
                                            <a href="#"><i className="fa-brands fa-instagram"></i></a>
                                            <a href="#"><i className="bi bi-skype"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </footer>
        </>
    )
};
export default Foooter;