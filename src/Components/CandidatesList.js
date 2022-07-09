import React from "react";
import Data from "../Datas/ProfileData";
import "../Style/Candidatelist.css";
import { FaArrowRight } from "react-icons/fa";
import { BsSuitHeartFill } from "react-icons/bs";

export default function CandidatesList() {
  return (
    <div className="CanListContainer">
      <div>
        <div className="canCards">
          {Data.map((profile) => {
            return (
              <div className="canCard">
                <img src={profile.img} alt="img" />
                <div className="canCard-Details">
                  <h4>{profile.name}</h4>
                  <p>{profile.job}</p>
                  <div className="canCard-view">
                    <p className="view">
                      View Profile <FaArrowRight />
                    </p>
                    <p>
                      <BsSuitHeartFill className="heart" />
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
