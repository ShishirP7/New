import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { HiOutlinePlusCircle } from "react-icons/hi";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

let Logo = require("../Images/logo.png");

export default function Nav() {
  const [show, setshow] = useState(false);
  const [form, setform] = useState(0);
  return (
    <nav className="nav-Container">
      <div className="nav-Bar">
        <div className="nav-Logo">
          <Link style={{ textDecoration: "none" }} to="/">
            <img src={Logo} className="logo-img" alt="logo"></img>
          </Link>
        </div>

        <ul className="nav-Items">
          <div className="dropdown">
            <Link style={{ textDecoration: "none" }} to="/">
              <li id="dropbtn" className="ActiveNav">
                Home
              </li>
            </Link>
          </div>
          <Link style={{ textDecoration: "none" }} to="/about">
            <li className="NonActiveNav">About </li>
          </Link>
          <div>
            <div className="dropdown">
              <li id="dropbtn" className="NonActiveNav">
                Jobs <IoMdArrowDropdown />
              </li>
              <div className="dropdown-content">
                <Link to="/Joblist" style={{ textDecoration: "none" }}>
                  <a>Job List</a>
                </Link>

                <Link style={{ textDecoration: "none" }} to="/Jobdetails">
                  <a>
                    <a>Job Details</a>
                  </a>
                </Link>
                <Link style={{ textDecoration: "none" }} to="/Postajob">
                  <a>
                    <a>Post a Job</a>
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="dropdown">
            <li id="dropbtn" className="NonActiveNav">
              Candidates <IoMdArrowDropdown />
            </li>
            <div class="dropdown-content">
              <Link style={{ textDecoration: "none" }} to="/CandidateList">
                <a>Candidate List</a>
              </Link>
              <Link style={{ textDecoration: "none" }} to="/CandidateDetails">
                <a>Candidate Details</a>
              </Link>
              <Link style={{ textDecoration: "none" }} to="/SingleResume">
                <a>Single Resume</a>
              </Link>

              <Link style={{ textDecoration: "none" }} to="/upload">
                <a>Submit Resume</a>
              </Link>
              <Link style={{ textDecoration: "none" }} to="/Pricing">
                <a>Pricing</a>
              </Link>
              <Link style={{ textDecoration: "none" }} to="/CandidateDash">
                <a>Candidate Dashboard</a>
              </Link>
            </div>
          </div>
          <div className="dropdown">
            <li id="dropbtn" className="NonActiveNav">
              Pages <IoMdArrowDropdown />
            </li>
            <div class="dropdown-content">
              <a>Company List</a>
              <a>Company Details</a>
              <a>Create Account Page</a>
              <a>Profile</a>
              <a>Single Profile</a>
              <a>404</a>
              <a>FAQ</a>
              <a>Terms and Condition</a>
              <a>Policy Profile</a>
            </div>
          </div>
          <div className="dropdown">
            <li id="dropbtn" className="NonActiveNav">
              Blogs <IoMdArrowDropdown />
            </li>
            <div class="dropdown-content">
              <Link style={{ textDecoration: "none" }} to="/blogs">
                <a>Blog </a>
              </Link>
              <Link style={{ textDecoration: "none" }} to="/blogdetails">
                <a>Blog Details</a>
              </Link>
            </div>
          </div>{" "}
          <Link style={{ textDecoration: "none" }} to="/contact">
            <li className="NonActiveNav">Contact </li>
          </Link>
        </ul>

        <div className="nav-btns">
          <button className="btn-login" onClick={() => setshow(!show)}>
            <HiOutlinePlusCircle className="loginicon" />
            Login
          </button>

          <Link style={{ textDecoration: "none" }} to="/register">
            <button className="btn-Signup">
              <FaUser /> Register
            </button>
          </Link>
        </div>
      </div>

      <div className="LoginContainer">
        {show && (
          <div className="dropdownLogin">
            <h2>Choose Your Account</h2>
            <div className="btnArea">
              <button onClick={() => setform(1)}>Job Seeker</button>
              <button onClick={() => setform(2)}>Employers</button>
            </div>

            <div className="inputArea">
              <input placeholder="E-Mail Address"></input>
              <input placeholder="Password"></input>
            </div>
            <div className="forgotpww">
              <div>
                <input type="checkbox"></input>
                <label>Remember Me</label>
              </div>
              <span>Forgot Password?</span>
            </div>
            <Link style={{ textDecoration: "none" }} to="/EmailVerification ">
              <button className="LoginBtn">Login</button>
            </Link>

            <p className="AccountText">
              Dont have an Account ?{" "}
              <Link style={{ textDecoration: "none" }} to="/signup">
                <span>Register Now</span>
              </Link>
            </p>
            <p>or</p>
            <div className="loginwith">
              <div className="fbLogin">
                <FaFacebookF className="socialIcon" /> Login With Facebook
              </div>
              <div className="googleLogin">
                <FcGoogle className="socialIcon" /> Login With Google
              </div>
            </div>

            <div className="inputArea">
              <input placeholder="E-Mail Address"></input>
              <input placeholder="Password"></input>
            </div>
            <div className="forgotpww">
              <div>
                <input type="checkbox"></input>
                <label>Remember Me</label>
              </div>
              <span>Forgot Password?</span>
            </div>
            <Link style={{ textDecoration: "none" }} to="/EmailVerification">
              <button className="LoginBtn">Login</button>
            </Link>

            <p className="AccountText">
              Dont have an Account ?{" "}
              <Link style={{ textDecoration: "none" }} to="/signup">
                <span>Register Now</span>
              </Link>
            </p>
            <p>or</p>
            <div className="loginwith">
              <div className="fbLogin">
                <FaFacebookF className="socialIcon" /> Login With Facebook
              </div>
              <div className="googleLogin">
                <FcGoogle className="socialIcon" /> Login With Google
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
