import React, { useState } from "react";
import jobsData from "../Datas/JobsData";
import { IoIosTime } from "react-icons/io";
import { MdPaid } from "react-icons/md";
import { AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";
export default function Jobs() {
  const [Toggle, setToggle] = useState(1);

  const checkTab = (e) => {
    setToggle(e.Target.value);
    console.log(Toggle);
  };
  return (
    <div className="col-5">
      <div className="col-5Container">
        <section className={"active-category"}>
          {jobsData.map((jobs) => (
            <div key={jobs.id} id="card-type">
              <div className="card-type-row">
                <div>
                  <img src={jobs.image} alt="img"></img>
                </div>
                <div className="card-info">
                  <p id="card-name">{jobs.Name}</p>
                  <p id="card-site">{jobs.website}</p>
                  <p>Skills: <span>React, Javascript Bootstrap</span></p>
                  <div className="viewsArea">
                  <p><AiFillEye className="icon-joblist"/><span>23</span> </p>
                  <p><IoIosTime className="icon-joblist"/><span>2 Days</span></p>
                  </div>
                 
                </div>
                <div id="card-btn">
                  <Link to="/jobdetails">
                    <button id="button-1">Details</button>
                  </Link>
                  <button id="button-2"><MdPaid className="premiIcon"/> {jobs.time}</button>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
