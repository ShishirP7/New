import React from "react";
import Nav from "../../Components/Navbar";
import HotJobs from "../../Components/HotJobs";
import { BiChevronRight } from "react-icons/bi";
import { FcSearch } from "react-icons/fc";
import Jobs from "../../Components/Jobs";
import Footer from "../../Components/Footer";

export default function Joblist() {
  return (
    <div>
      <Nav />
      <div>
        <div className="CreateContainer">
          <div className="titleArea">
            <h1>Job List</h1>
            <ul>
              <li>Home</li>
              <li>
                <BiChevronRight id="righticon" />
              </li>
              <li>Job List</li>
            </ul>
          </div>
        </div>
      </div>
      {/*  <HotJobs/> */}
      <div className="jobListArea">   


      <div className="searchJob">
        <input placeholder="Enter Job, Company, Position"></input>
       
        <button><FcSearch className="searchlogo"/> Search </button>

      </div>
      <Jobs />
      <Jobs />
      <Jobs />
              
      </div>
      <Footer />
    </div>
  );
}
