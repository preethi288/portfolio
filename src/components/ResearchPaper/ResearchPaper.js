import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import ProjectCard from "../Projects/ProjectCards"
import pdf from "../../Assets/Resume.pdf";
import { AiOutlineDownload, AiOutlineLink } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import research from '../../Assets/research.webp'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResearchPaper() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <h1 className="project-heading">
          Research paper
        </h1>
        <br/>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={'https://link.springer.com/chapter/10.1007/978-981-16-9113-3_54#auth-Preethi-Reddy'}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineLink />
            &nbsp;Open Publication 
          </Button>
        </Row>

        {/* <Container fluid className="project-section"> */}
      <Container>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
                  imgPath={research}
                  style={{
                    width: "250px",
    height: "350px",
    objectFit: "cover",
    margin: "0 auto",
    display: "block",
    borderRadius: "8px",   
                  }}
              subTitle="Conference: Congress on Intelligent
Systems (CIS 2021), Published on July
1, 2022"
              isBlog={false}
              title="Sentimental Analysis of Code mixed
languages – CIS 2021"
              description="Co-authored a research paper
focused on the Sentiment Analysis of
code-mixed data, addressing the
challenges posed by the unstructured
nature of code-mixed text, which
deviates from traditional structures."
            />
          </Col>
        </Row>
      </Container>
    </Container>
      {/* </Container> */}
    </div>
  );
}

export default ResearchPaper;
