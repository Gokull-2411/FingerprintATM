import React from "react";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Form,
  Navbar,
  Nav,
  Container,
  Row,
  Col
} from "react-bootstrap";

function User() {
  return (
    <>
      <Container fluid>
        <Row>
         
          <Col md="12">
            <Card className="card-user">
              <div className="card-image">
                <img
                  alt="..."
                  src={require("assets/img/photo-1431578500526-4d9613015464.jpeg")}
                ></img>
              </div>
              <Card.Body>
                <div className="author">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      className="avatar border-gray"
                      src={require("assets/img/faces/images.jpg")}
                    ></img>
                    <h5 className="title">Aditi Krishnan</h5>
                  </a>
                  <p className="description">Account Number</p>
                </div>
                <p className="description text-center">XXXX XXXX XXXX X753
                </p>
              </Card.Body>
             
            
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default User;
