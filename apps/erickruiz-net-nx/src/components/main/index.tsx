import React, { useEffect, useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";

function scrollListener(el: HTMLDivElement) {
  const elRect = el.getBoundingClientRect();
  if (window.scrollY > elRect.height / 2) {
    document.body.dataset['scrolledPast'] = 'true'
  } else {
    document.body.dataset['scrolledPast'] = 'false'
  }
}

export const Main: React.FC = () => {
  const topSection = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (!topSection.current) return;
    window.addEventListener("scroll", (e) => { scrollListener(topSection.current) })
    return () => {
      window.removeEventListener("scroll", (e) => { scrollListener(topSection.current) })
    }
  }, [topSection])

  return (
    <Container className="d-flex flex-column" fluid>
      <Row className="vh-100-header" id="top" ref={topSection}>
        <Col xl={{span: 12}}  md={12} lg={12} className={"main-content primary"}>
          Main section!!
        </Col>
      </Row>
      <Row className="vh-100-header" id="about">
        <Col xl={{span: 12}}  md={12} lg={12} className={"main-content secondary"}>
          Main section!!
        </Col>
      </Row>
      <Row className="vh-100-header" id="projects">
        <Col xl={{span: 12}}  md={12} lg={12} className={"main-content tertiary"}>
          Main section!!
        </Col>
      </Row>
    </Container>
  );
};
