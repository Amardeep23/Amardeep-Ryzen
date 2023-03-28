import React from "react";
import "./Home.css";
import { Navbar } from "../../components/Navbar/Navbar";
import Landing_img from '../../assets/img/Landing_image.jpg'

export default function Home() {
  return (
    <div className="Home">
      <Navbar></Navbar>
      <img  className="landing_image" src={Landing_img} alt="" />
    </div>
  );
}
