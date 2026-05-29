import React from "react";
import SEO from "./SEO";

const Register = () => {
    return (
        <>

        <SEO
  title="Student Registration"
  description="Register now for PIIMT EdTech courses."
  keywords="Student registration"
  url="https://piimtedtech.in/register"
/>
            <div className="container-fluid">
                <div className="registerd-page py-5">

                    {/* ध्यान दें: अगर अभी भी विड्थ कम लगे, तो अपनी CSS में .register-card की max-width को बढ़ा कर 800px या 900px कर दें */}
                    <div className="register-card" style={{ maxWidth: "1150px", margin: "0 auto" }}>
                        <i className="bi bi-person-circle"></i>
                        <h2>Create Your Account</h2>
                        <p>Join the PIIMT Learning Community</p>

                        <form>
                            <div className="row">

                                {/* <!-- Left Column (Changed from col-md-12 to col-md-6) --> */}
                                <div className="col-md-6">

                                    {/* <!-- Full Name --> */}
                                    <div className="mb-3 text-start">
                                        <label className="form-label">Full Name</label>
                                        <input type="text" className="form-control" placeholder="Enter your full name" required />
                                    </div>

                                    {/* <!-- Father's Name --> */}
                                    <div className="mb-3 text-start">
                                        <label className="form-label">Father's Name</label>
                                        <input type="text" className="form-control" placeholder="Enter your father’s name" required />
                                    </div>

                                    {/* <!-- Qualification --> */}
                                    <div className="mb-3 text-start">
                                        <label className="form-label">Qualification</label>
                                        <select className="form-select form-control" required>
                                            <option value="">Select Qualification</option>
                                            <option>10th Pass</option>
                                            <option>12th Pass</option>
                                            <option>Graduate</option>
                                            <option>Post Graduate</option>
                                            <option>Other</option>
                                        </select>
                                    </div>

                                    {/* <!-- Centre Area --> */}
                                    <div className="mb-3 text-start">
                                        <label className="form-label">Centre Area</label>
                                        <input type="text" className="form-control" placeholder="Enter centre area" required />
                                    </div>

                                    {/* <!-- Password --> */}
                                    <div className="mb-3 text-start">
                                        <label className="form-label">Password</label>
                                        <input type="password" className="form-control" placeholder="Create a password" required />
                                    </div>

                                </div>

                                {/* <!-- Right Column --> */}
                                <div className="col-md-6">
                                    {/* <!-- Email --> */}
                                    <div className="mb-3 text-start">
                                        <label className="form-label">Email Address</label>
                                        <input type="email" className="form-control" placeholder="Enter your email" required />
                                    </div>

                                    {/* <!-- Phone --> */}
                                    <div className="mb-3 text-start">
                                        <label className="form-label">Phone Number</label>
                                        <input type="tel" className="form-control" placeholder="Enter your phone number" required />
                                    </div>

                                    {/* <!-- Apply Course --> */}
                                    <div className="mb-3 text-start">
                                        <label className="form-label">Apply For Course</label>
                                        <select className="form-select form-control" required>
                                            <option value="">Select Course</option>
                                            <option>Website Design</option>
                                            <option>Web Design & Development</option>
                                            <option>Digital Marketing & SEO</option>
                                            <option>Hardware & Networking</option>
                                            <option>Graphic Designing</option>
                                            <option>Internship to IT Student</option>
                                            <option>Flutter</option>
                                            <option>React Native</option>
                                            <option>PHP Native</option>
                                            <option>ASP.Net</option>
                                            <option>AWS</option>
                                            <option>AI</option>
                                            <option>Business Skills</option>
                                            <option>Admission</option>
                                            <option>Accounting & ERP</option>
                                            <option>Programming Languages</option>
                                            <option>Office & Productivity Tools</option>
                                            <option>Mobile App Development</option>
                                            <option>Data Science & AI</option>
                                            <option>Cyber Security</option>
                                            <option>Cloud & DevOps</option>
                                        </select>
                                    </div>

                                    {/* <!-- Confirm Password --> */}
                                    <div className="mb-3 text-start">
                                        <label className="form-label">Confirm Password</label>
                                        <input type="password" className="form-control" placeholder="Re-enter your password" required />
                                    </div>

                                </div>
                            </div>

                            <hr className="text-white" />

                            <h5 className="text-white mb-3">Upload Documents</h5>

                            <div className="row">

                                {/* <!-- Identity Card --> */}
                                <div className="col-md-6 mb-3 text-start">
                                    <label className="form-label">Aadhaar Card</label>
                                    <input type="file" className="form-control" accept="image/*,.pdf" required />
                                </div>

                                {/* <!-- PAN --> */}
                                <div className="col-md-6 mb-3 text-start">
                                    <label className="form-label">PAN Card</label>
                                    <input type="file" className="form-control" accept="image/*,.pdf" required />
                                </div>

                                {/* <!-- Marksheet --> */}
                                <div className="col-md-6 mb-3 text-start">
                                    <label className="form-label">Marksheet</label>
                                    <input type="file" className="form-control" accept="image/*,.pdf" required />
                                </div>

                                {/* <!-- Photo --> */}
                                <div className="col-md-6 mb-3 text-start">
                                    <label className="form-label">Passport Size Photo</label>
                                    <input type="file" className="form-control" accept="image/*" required />
                                </div>

                            </div>

                            {/* <!-- Register Button --> */}
                            <button type="submit" className="btn btn-register text-white">Register</button>

                            <div className="mt-3 form-text text-white">
                                Already have an account? <a href="/login">Login Now</a>
                            </div>

                        </form>
                    </div>

                </div>
            </div>
        </>
    )
};

export default Register;