import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import bgVideo from "./images/background.mp4";
import { Button } from "react-bootstrap";

export default function Home() {
  return (
    <div style={{ position: "relative", width: "100%", height: "100vh", overflow: "hidden" }}>
      {/* Background Video */}
      <video autoPlay loop muted style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover" }}>
        <source src={bgVideo} type="video/mp4" />
      </video>
      
      {/* Content */}
      <div style={{ position: "relative", zIndex: 1, textAlign: "center", color: "white", paddingTop: "20%" }}>
        <h1 style={{ fontSize: "3rem", fontWeight: "bold" }}>Welcome to World-Wide Bank</h1>
        <p style={{ fontSize: "1.5rem", marginBottom: "20px" }}>Secure and Easy Banking</p>
        <Button variant="success" href="#register">Get Started</Button>
      </div>
    </div>
  );
}
