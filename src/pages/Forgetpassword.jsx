import React from "react";
import SEO from "./SEO";

const ForgetPassword = () => {
    return (

        <>

        <SEO
  title="Forgot Password"
  description="Reset your PIIMT EdTech account password."
  keywords="Forgot password"
  url="https://piimtedtech.in/forgetpassword"
/>
            <div className="login-page">
                <div className="login-card">
                    <i className="bi bi-lock"></i>
                    <h2>Reset Password</h2>
                    <p>Set a new password for your PIIMT account</p>

                    <form>
                        <div className="mb-3 text-start">
                            <label className="form-label">New Password</label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Enter new password"
                                required
                            />
                        </div>

                        <div className="mb-3 text-start">
                            <label className="form-label">Confirm New Password</label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Confirm new password"
                                required
                            />
                        </div>

                        <a href="/login" type="submit" className="btn btn-register w-100 text-white">Reset Password</a>

                        <div className="mt-3 form-text text-white">
                            Back to <a href="/login">Login</a>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
};

export default ForgetPassword;