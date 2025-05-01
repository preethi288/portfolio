import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/me1.jpeg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            Hello! I’m Preethi reddy, a passionate frontend developer with a strong focus on building clean, responsive, and user-friendly web applications.
              <br />
              <br />I specialize in modern JavaScript frameworks like <b className="purple"> React </b>,with a strong focus on <b className="purple"> state management </b>,<b className="purple">component architecture</b> and, <b className="purple"> performance optimization </b>.I enjoy turning complex problems into intuitive, user-friendly interfaces and strive to deliver seamless,high-quality digital experiences.
              <br />
              <br />
              I’m a lifelong learner and innovator, driven by a passion for contributing to the developer community through ideas and tools that create meaningful impact.&nbsp;
              <br />
              <br />
             
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar"  style={{
    width: "300px",
    height: "300px",
    objectFit: "cover",
    borderRadius: "5%", // for circular crop
  }}/>
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/preethi-reddy-7b349b1ab/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
