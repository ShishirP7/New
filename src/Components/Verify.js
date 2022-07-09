import React from "react";
import "../Style/verify.css";
import { Link } from "react-router-dom";
import { MdOutlineMarkEmailRead } from "react-icons/md";

export default function Verify() {
  return (
    <div className="verifyContainer">
      <div className="verifyyCard">
        <div className="verify-Col1">
          <MdOutlineMarkEmailRead className="verifyIcon" />
        </div>
        <div className="verify-Col2">
          <h1>Please Verify Your Email Address</h1>
          <h4>
            Your email address is unverified. To get verified, please check the
            link that was sent to your email address .
          </h4>
          <p>
            If you want to Update Your Credentials. <span>Click Here</span>
          </p>
          <div className="btn-verify">
            <Link to="/">
              <button>Go to Home Page</button>
            </Link>
            <Link to="/login">
              <button>Go to Login Page</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
