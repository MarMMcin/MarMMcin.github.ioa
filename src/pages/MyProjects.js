import React from "react";
import "./../styles/MyProjects.css";
import rzeszow from "../images/rzeszow.jpg";

import CountUp from "react-countup";
import { FaThumbsUp, FaUserCheck } from "react-icons/fa";

const MySkills = () => {
  return (
    <>
      <div className="test">My projects</div>
      <div className="all">
        <div className="photos">
          <a
            rel="noopener noreferrer"
            href="https://www.facebook.com/rzeszowwczoraj/"
            target="_blank"
          >
            <img className="inside" src={rzeszow} alt="" />
          </a>
          <div className="thumbs">
            {" "}
            <li className="rzefont">
              {" "}
              <a
                rel="noopener noreferrer"
                href="https://www.facebook.com/groups/178523919544167/"
                target="_blank"
              >
                FanPage:{" "}
              </a>{" "}
            </li>
            &nbsp;
            <FaThumbsUp />
            &nbsp;
            <CountUp end={15738} />
            <li className="rzefont">
              {" "}
              <a
                rel="noopener noreferrer"
                href="https://www.facebook.com/groups/178523919544167/"
                target="_blank"
              >
                Group useres:{" "}
              </a>
            </li>
            <FaUserCheck />
            &nbsp;
            <CountUp end={3929} />
          </div>
        </div>
      </div>
    </>
  );
};

export default MySkills;
