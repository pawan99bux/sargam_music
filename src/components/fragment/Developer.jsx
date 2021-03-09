import React from "react";
import "../assets/scss/Developer.scss";
import { IconButton } from "@material-ui/core";
import AvatarImage from "../assets/img/avatar.jpg";
import {
  Facebook,
  Instagram,
  LinkedIn,
  Portrait,
  GitHub,
} from "@material-ui/icons";

const Developer = () => {
  return (
    <div className={"Developer"}>
      <h3 className={"Developer-head"}>Meet the developer</h3>
      <div className="Developer-profile">
        <div className="Developer-profileCard">
          <img src={AvatarImage} alt="Profile" />
          <div className={"Card-details"}>
            <h3>Pawan Singh</h3>
            <p>Full Stack developer</p>
          </div>
        </div>
        <div className="Developer-profileDetails">
          <p>
            A Computer Science and Engineering Student at Indraprastha
            University, New Delhi.
          </p>
          <p>
            Graduated in 2021 and looking for a responsible position to gain
            practical knowledge
          </p>
          <p>A full-stack web developer and a Competitive coder.</p>
          <p>I love designing fully responsive websites.</p>
          <p>
            I have a keen interest in developing projects, whenever I want to
            learn something new.
          </p>

          <div className="Card-btn">
            <IconButton
              target={"_blank"}
              href={"https://www.facebook.com/profile.php?id=100006329043058"}
              title={"pawan singh"}
            >
              <Facebook />
            </IconButton>
            <IconButton
              target={"_blank"}
              href={"https://github.com/pawan99bux"}
              title={"pawan99bux"}
            >
              <GitHub />
            </IconButton>
            <IconButton
              target={"_blank"}
              href={"https://www.linkedin.com/in/pawan-kumar-42a125155/"}
              title={"pawan-kumar"}
            >
              <LinkedIn />
            </IconButton>
            <IconButton
              target={"_blank"}
              href={"https://www.instagram.com/p_onesingh/"}
              title={"p_onesingh"}
            >
              <Instagram />
            </IconButton>
            <IconButton
              target={"_blank"}
              // href={"https://vishal.thetechnician.in/"}
              title={"Web Portfolio"}
            >
              <Portrait />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Developer;
