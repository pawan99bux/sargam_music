import React from "react";
import Logo from "../assets/img/logo.png";
import "./css/Login.scss";
import { Link } from "react-router-dom";

class Login extends React.Component {
  render() {
    return (
      <section id="main">
        <div className="main-row">
          <div className="main-row-img">
            <img className="login-img" src={Logo} alt="" />
          </div>
          <div className="main-row-text">
            <h1>Music streaming website</h1>
            <p>Feel relax and listen🎶</p>
            <Link to={"/home"} className="btn">
              Start Listening
            </Link>
          </div>
        </div>
      </section>
    );
  }
}

export default Login;
