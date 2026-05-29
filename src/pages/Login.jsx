import React from "react";
import SEO from "./SEO";

const Login = () => {
    return (
        <>
        <SEO
  title="Student Login"
  description="Login to PIIMT EdTech student portal."
  keywords="Student login"
  url="https://piimtedtech.in/login"
/>
            <div className="login-page">
              
                <div className="login-card" style={{ maxWidth: "550px", width: "100%", margin: "0 auto" }}>
                    <i className="bi bi-person-circle"></i>
                    <h2>Welcome Back</h2>
                    <p>Login to your PIIMT account</p>

                    <form>
                        <div className="mb-3 text-start">
                            <label className="form-label">Email address</label>
                            <input type="email" className="form-control" placeholder="Enter your email" required/>
                        </div>
                        <div className="mb-3 text-start">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control" placeholder="Enter your password" required/>
                        </div>

                        <div className="text-end mb-3">
                            <a href="/forgetpassword" className="text-white small">Forgot Password?</a>
                        </div>

                       
                        <button type="submit" className="btn btn-register w-100 text-white">Login</button>

                        <div className="mt-3 form-text text-white">
                            Don’t have an account? <a href="/register">Register Now</a>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
};

export default Login;