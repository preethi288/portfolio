import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import about from "../../Assets/about.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Professional Journey
        </h1>
        <p style={{ color: "white" }}>
        "Transforming ideas into digital reality, one project at a time"
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              subTitle="Optum United Health Group"
              date="( June 2021 - Aug 2021 )"
              isBlog={false}
              title="Software Engineer Intern"
              description="Led the development of a comprehensive test automation platform, ETAAS
(Enterprise Test Automation as a service), providing UI checks, API
validation, and performance testing services under a unified platform"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              date="( Jan 2022 - June 2022 )"
              isBlog={false}
              subTitle="Tekion Corp"
              title="Software Engineer Intern"
              description="Leveraged expertise in React, Redux, JavaScript to develop a cost-effective in-house Forms tool, reducing organizational costs

"
            />
          </Col>

          <Col md={4} className="project-card">
          <ProjectCard
              imgPath={editor}
              date="( June 2022 - Jan 2024 )"
              isBlog={false}
              subTitle="Tekion Corp"
              title="Associate Software Engineer"
              description="Developed the entire login flow for the Dealer Onboarding, incorporating
user authentication, session management, and security measures.Also
built a dashboard to visualize the status of various forms."
            />
          </Col>

          <Col md={4} className="project-card">
          <ProjectCard
              imgPath={about}
              date="( Jan 2024 - Present )"
              isBlog={false}
              subTitle="Tekion Corp"
              title="Software Engineer"
              description="Developed the Digital Finance Engine project from scratch, an automated platform for the submission of credit applications,lender selection,and decision calback process.Contributed to several initiatives in performance optimisation of frontend application."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
