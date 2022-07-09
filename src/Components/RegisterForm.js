import React from "react";
import { Link } from "react-router-dom";


export default function RegisterForm() {
  return (
    <div className="RegisterForm2">
      <div className="divLeft">
        <div className="divRight-Details">
          <h3>Create Your Employer Account</h3>
          <p>Fill the Details Below!</p>
          <div>
            <button>icon</button>
            <input placeholder="Organization Name" />
          </div>
          <select name="Organization">
            <option>Organization Type</option>
            <option>b</option>
            <option>c</option>
            <option>d</option>
          </select>
          <div>
            <button>icon</button>
            <input placeholder="Organization Contact Number" />
          </div>
          <div>
            <button>icon</button>
            <input placeholder="Official Email" />
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
            <button className="CreateAcc">Create an Employeer Account</button>
          </Link>
          <p>Already have an account?
            <Link to="/login" style={{ textDecoration: "none" }} ><span>Login</span></Link></p>
        </div>
      </div>
      <div className="divRight"></div>
    </div>
  );
}
