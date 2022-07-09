import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { BiChevronRight } from "react-icons/bi";
import Footer from "../Components/Footer";
import Banner from "../Components/Banner";
export default function Contact() {
  const [agree, setAgree] = useState(false);

  const checkboxHandler = () => {
    setAgree(!agree);
  };

  const btnHandler = () => {};

  return (
    <div>
      <Navbar />
      <div>
      <Banner name={"Contact"}/>
      </div>
      <div className="contact-form">
        <div className="contact-form-column">
          <div className="contact-form-items">
            <input placeholder="Your Full Name"></input>
            <input placeholder="Your Email"></input>
          </div>
          <div className="contact-form-items">
            <input placeholder="Phone"></input>
            <input placeholder="Subject"></input>
          </div>

          <input
            className="jobdesc-Input"
            placeholder="Job Description"
          ></input>
          <div className="CheckBoxArea">
            <input
              type="checkbox"
              className="inputcheckbox"
              onChange={checkboxHandler}
            />
            <label htmlFor="agree">
              Accept Terms & Conditions And Privacy Policy.
            </label>
          </div>
          <button
            disabled={!agree}
            className={!agree ? "Contact-btnDisabled " : "Contact-btnSubmit"}
            onClick={btnHandler}
          >
            Submit
          </button>
        </div>
      </div>

      <div className="googleMap-column">
        <iframe
          width="100%"
          height="601"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=putalisadak&t=&z=17&ie=UTF8&iwloc=&output=embed"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
        ></iframe>
        <a href="https://123movies-to.org"></a>
      </div>
      <Footer/>
    </div>
  );
}
