import React from "react";
import Banner from "../Components/Banner";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "../Style/TermsAndCon.css";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function Privacy() {
  return (
    <div>
      <Navbar />
      <Banner name="Privacy And Policy" />
      <div className="termnCContainer">
        <div className="terms">
          <h2> 1. What is Terms And Conditions ?</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div className="terms">
          <h2>2.How do we apply our Terms & Conditions?</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div className="terms">
          <h2>3.What personal data can you use?</h2>
          <ul>
            <li><MdKeyboardArrowRight/> 
              Name, email address and/or your photo when you visit our
              exhibitions and make use of the technologies we offer to you to
              receive a Good GIF
            </li>
            <li><MdKeyboardArrowRight/> 
              Personal data obtained through or generated on our website,
              newsletters, commercial emails
            </li>
            <li><MdKeyboardArrowRight/> 
              Your browsing behaviour on the website such as information on your
              first visit Whether you open a newsletter of email and what
              sections you select
            </li>
            <li><MdKeyboardArrowRight/> 
              Personal data obtained through or generated on our website,
              newsletters, commercial emails
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}
