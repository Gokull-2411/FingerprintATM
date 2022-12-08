import React from "react";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
} from "react-bootstrap";

function TableList() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Withdrawals</Card.Title>
               
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                     <th className="border-0">Sno</th>
                      <th className="border-0">ID</th>
                      <th className="border-0">Amount</th>
                      <th className="border-0">Date</th>
                      <th className="border-0">Time</th>
                      <th className="border-0">Authentication</th>
                    </tr>
                  </thead>
                  <tbody>
                  <tr>
                        <td>1</td>
                        <td>234W6789e123456</td>
                        <td>Rs.8000</td>
                        <td>{new Date().toISOString()}</td>
                        <td>22:07:03</td>
                        <td>FP</td>
                      </tr>
                     
                   
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Deposits</Card.Title>
               
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                     <th className="border-0">Sno</th>
                      <th className="border-0">ID</th>
                      <th className="border-0">Amount</th>
                      <th className="border-0">Date</th>
                      <th className="border-0">Time</th>
                      <th className="border-0">Authentication</th>
                    </tr>
                  </thead>
                  <tbody>
                  <tr>
                        <td>1</td>
                        <td>334M0739s12356</td>
                        <td>Rs.23,000</td>
                        <td>{new Date().toISOString()}</td>
                        <td>08:47:15</td>
                        <td>PIN</td>
                      </tr>
                     
                   
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
          
        </Row>
      </Container>
    </>
  );
}

export default TableList;
