import React from "react";

import Nav from "../../Components/Navbar";
import CandidatesList from "../../Components/CandidatesList"
import Footer from "../../Components/Footer";
import { BiChevronRight } from "react-icons/bi";
export default function Candidatelist() {
  return (
    <div>
      <Nav />
      <div>
        <div className="CreateContainer">
          <div className="titleArea">
            <h1>Candidatelist</h1>
            <ul>
              <li>Home</li>
              <li>
                <BiChevronRight id="righticon" />
              </li>
              <li>Candidatelist</li>
            </ul>
          </div>
        </div>
      </div>
      <CandidatesList/>
      <Footer />
    </div>
  );
}
