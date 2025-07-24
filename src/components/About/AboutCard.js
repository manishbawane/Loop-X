import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone, I am <span className="purple"> Manish Bawane </span>
            from <span className="purple"> Pune, India.</span>
            <br />
            I am <span className="purple"> CDAC </span> Certified Software Developer.
            <br />
            I have done some internships in the domain of <span className="purple">Web Development </span> , recent company was <span className="purple"> NullClass</span>.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Shero-Shyari
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            “Design isn’t decoration—it’s a bridge between intention and action.”

{" "}
          </p>
          <footer className="blockquote-footer">MB</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
