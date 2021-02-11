import CardComponent from "./components/CardComponent";
import { Container, Breadcrumb, Row, Col } from "react-bootstrap";
import NavbarComponent from "./components/NavbarComponent";
import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  return (
    <div>
      <NavbarComponent setText={setText} />
      <Container className="mt-2">
        <Row>
          <Col sm={4}>
            <Breadcrumb>
              <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
              <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                Library
              </Breadcrumb.Item>
              <Breadcrumb.Item active>Data</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
        <Row>
          <p>{text}</p>
        </Row>
      </Container>
    </div>
  );
}

export default App;
