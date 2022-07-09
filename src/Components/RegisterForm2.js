import React from "react";
import { Link } from "react-router-dom";

export default function RegisterForm() {
  return (
    <div className="RegisterForm">
      <div className="divLeft">
        <div className="divRight-Details">
          <h3>Create Your Job Seekers Account</h3>
          <p>Fill the Details Below!</p>
          <div>
            <button>icon</button>
            <input placeholder="Full Name" />
          </div>
          <select name="Organization">
            <option>Select Job Category</option>
            <option>b</option>
            <option>c</option>
            <option>d</option>
          </select>
          <div>
            <button>icon</button>
            <input placeholder="Phone Number" />
          </div>
          <div>
            <button>icon</button>
            <input placeholder="E-mail Address" />
          </div>
          <div>
            <button>icon</button>
            <input placeholder="Password" />
          </div>
          <div>
            <button>icon</button>
            <input placeholder="Verify Password" />
          </div>
          <Link style={{ textDecoration: "none" }} to="/EmailVerification">
            <button className="CreateAcc">Create an Job Seeker Account</button>
          </Link>

          <p>
            Already have an account?
            <Link to="/login" style={{ textDecoration: "none" }}>
              <span>Login</span>
            </Link>
          </p>
        </div>
      </div>
      <div className="divRight"></div>
    </div>
  );
}
