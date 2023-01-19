import React from "react";
import LinkedIn from "../../utils/fotter_Img/linkedin.png";
import Youtube from "../../utils/fotter_Img/youtube.png";
import Instagram from "../../utils/fotter_Img/insta.png";
import Whatsapp from "../../utils/fotter_Img/whatsapp.png";
import { Link } from "react-router-dom";

let Social = {
  height: "45px",
  width: "45px",
  borderRadius: "10px",
  margin: "10px 10px",
  cursor: "pointer",
};

let foot = {
  color: "white",
  padding: "0.2rem 2rem",
};

export const Footer = () => {
  return (
    <footer className="f-style">
      <div className="G1">
        <div>
          <a href='https://www.linkedin.com/in/govind-kushwaha-0b72a91b4/' target={'_blank'} rel="noopener noreferrer">
          <img alt="pics1" style={Social} src={LinkedIn} />
          </a>
          <a href='https://www.youtube.com/channel/UCqxarKEB5CkMV-oM1V9q7oQ' target={'_blank'} rel="noopener noreferrer">
          <img alt="pics2" style={Social} src={Youtube} />
          </a>
          <a href='https://www.instagram.com/__govind__kushwaha/' target={'_blank'} rel="noopener noreferrer">
          <img alt="pics3" style={Social} src={Instagram} />
          </a>
          <a href='https://wa.me/+919074793605' target={'_blank'} rel="noopener noreferrer">
          <img alt="pics4" style={Social} src={Whatsapp} />
          </a>
        </div>
        <h2 id="logoName">Visit My India</h2>
        <Link to="/contribute">
        <h2 className="list contri">Contribute Us</h2>
        </Link>
      </div>
      <h3 style={foot}>All Rights Reserved by &copy; visit-my-india.com</h3>
      <h3 style={foot}>Thanks for Visit our Website</h3>
      <br />
    </footer>
  );
};
