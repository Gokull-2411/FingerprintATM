import React from "react";
import ChartistGraph from "react-chartist";
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
  Form,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import {useSelector} from "react-redux"
import {selectBalance,selectCreditCount,selectDebitCount} from "./../store/amountSlice"
function Dashboard() {
  const balance = useSelector(selectBalance);
  const debitCount = useSelector(selectDebitCount)
  const creditCount = useSelector(selectCreditCount);
  return (
    <>
      <Container fluid>
        <Row>
          <Col lg="4" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-chart text-warning"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">No of deposits</p>
                      <Card.Title as="h4">{creditCount}</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
             
            </Card>
          </Col>
          <Col lg="4" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-chart text-warning"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">No of withdrawals</p>
                      <Card.Title as="h4">{debitCount}</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
             
            </Card>
          </Col>
          <Col lg="4" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-money-coins text-warning"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Balance</p>
                      <Card.Title as="h4">Rs.{balance}</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
             
            </Card>
          </Col>
         
        </Row>
        <Row>
          <Col md="8">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Transaction</Card.Title>
                <p className="card-category">Last 3 months</p>
              </Card.Header>
              <Card.Body>
                <div className="ct-chart" id="chartHours">
                  <ChartistGraph
                    data={{
                      labels: [
                        "Oct","Oct","Oct","Nov","Nov","Nov","Dec","Dec","Dec"
                      ],
                      series: [
                        
                        [13, 3, 8, 17, 12, 2, 5, 14, 6, 15],
                      ],
                    }}
                    type="Line"
                    options={{
                      low: 0,
                      high: 25 ,
                      showArea: false,
                      height: "245px",
                      axisX: {
                        showGrid: false,
                      },
                      lineSmooth: true,
                      showLine: true,
                      showPoint: true,
                      fullWidth: true,
                      chartPadding: {
                        right: 50,
                      },
                    }}
                    responsiveOptions={[
                      [
                        "screen and (max-width: 640px)",
                        {
                          axisX: {
                            labelInterpolationFnc: function (value) {
                              return value[0];
                            },
                          },
                        },
                      ],
                    ]}
                  />
                </div>
              </Card.Body>
              <Card.Footer>
                <div className="legend">
                  <i className="fas fa-circle text-info"></i>
                  No of transactions 
                
                </div>
               
              </Card.Footer>
            </Card>
          </Col>
          <Col md="4">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Holdings</Card.Title>
               {/* <p className="card-category">Last Campaign Performance</p>*/}
              </Card.Header>
              <Card.Body>
                <div
                  className="ct-chart ct-perfect-fourth"
                  id="chartPreferences"
                >
                  <ChartistGraph
                    data={{
                      labels: ["60%", "25%", "15%"],
                      series: [60, 25, 15],
                    }}
                    type="Pie"
                  />
                </div>
                <div className="legend">
                  <i className="fas fa-circle text-info"></i>
                  Credit <i className="fas fa-circle text-danger"></i>
                  Debit <i className="fas fa-circle text-warning"></i>
                  Static
                </div>
                
              </Card.Body>
            </Card>
          </Col>
        </Row>
            </Container>
    </>
  );
}

export default Dashboard;
