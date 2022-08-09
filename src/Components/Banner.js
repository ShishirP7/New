import React from "react";
import { BiChevronRight } from "react-icons/bi";

export default function Banner(props) {
  return (
    <>
      <div className="CreateContainer">
        <div className="titleArea">
          <h1>{props.name}</h1>
          <ul>
            <li>Home</li>
            <li>
              <BiChevronRight id="righticon" />
            </li>
            <li>{props.name}</li>
          </ul>
        </div>
      </div>
    </>
  );
}
