import { Container, Row, Col } from "react-bootstrap";

const FormComponent = ({ children }) => {
  return (
    <Container>
      <Row className="justifu-content-md-center mt-5">
        <Col xs={12} md={6} className="card p-5">
          {children}
        </Col>
      </Row>
    </Container>
  );
};

export default FormComponent;
