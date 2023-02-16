import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export const Main: React.FC = () => {
  return (
    <Container className="d-flex flex-column" fluid>
      <Row className="vh-100-header">
        <Col xl={{span: 2, order: 1}} lg={3} className={"content-gutter left-gutter menu-list"}>
          Left gutter and mobile menu
        </Col>
        <Col xl={{span: 2, order: 3}} className={"content-gutter right-gutter d-none d-xl-block"}>
          Right sidebar on xl
        </Col>
        <Col xl={{span: 8, order: 2}}  md={12} lg={9} className={"main-content primary"}>
          Main section!!
        </Col>
      </Row>
      <Row className="vh-100-header">
        <Col xl={{span: 2, order: 1}} lg={3} className={"content-gutter left-gutter menu-list"}>
          Left gutter and mobile menu
        </Col>
        <Col xl={{span: 2, order: 3}} className={"content-gutter right-gutter d-none d-xl-block"}>
          Right sidebar on xl
        </Col>
        <Col xl={{span: 8, order: 2}}  md={12} lg={9} className={"main-content secondary"}>
          Main section!!
        </Col>
      </Row>
      <Row className="vh-100-header">
        <Col xl={{span: 2, order: 1}} lg={3} className={"content-gutter left-gutter menu-list"}>
          Left gutter and mobile menu
        </Col>
        <Col xl={{span: 2, order: 3}} className={"content-gutter right-gutter d-none d-xl-block"}>
          Right sidebar on xl
        </Col>
        <Col xl={{span: 8, order: 2}}  md={12} lg={9} className={"main-content tertiary"}>
          Main section!!
        </Col>
      </Row>
    </Container>
  );
};
