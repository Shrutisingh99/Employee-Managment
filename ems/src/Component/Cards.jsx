import React from 'react'
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Chart } from "react-google-charts";
  
export const data = [
  ["Task", "Hours per Day"],
  ["Work", 11],
  ["Present", 2],
  ["Absent", 2],
  ["Leave", 2],
  ["Employee", 7],
];

export const options = {
  title: "Daily Work Activities",
};
export const da = [
  ["City", "2010 Population", "2000 Population"],
  ["New York City, NY", 8175000, 8008000],
  ["Los Angeles, CA", 3792000, 3694000],
  ["Chicago, IL", 2695000, 2896000],
  ["Houston, TX", 2099000, 1953000],
  ["Philadelphia, PA", 1526000, 1517000],
];
export const opt = {
  title: "Population of Largest U.S. Cities",
  chartArea: { width: "50%" },
  isStacked: true,
  hAxis: {
    title: "Total Population",
    minValue: 0,
  },
  vAxis: {
    title: "City",
  },
};
function Cards() {
  return (
    <>
      <Container className=' box-shadow: 5px blue'>
        <Row>
          <Col>
            <Card style={{ width: "18rem"}}>
              <Card.Body>
                <Card.Title>Total Employee</Card.Title>
                <Card.Text>
               20
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col >
            <Card style={{ width: "18rem" }} className="bc">
              <Card.Body>
                <Card.Title>Total Present</Card.Title>
                <Card.Text>
                  15
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}  className="cd">
              <Card.Body>
                <Card.Title>Total Absent</Card.Title>
                <Card.Text>
                 02
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}  className="de">
              <Card.Body>
                <Card.Title>Total Leave</Card.Title>
                <Card.Text>
                 05
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container className="mt-5" >
        <Row>
          <Col>
            <Chart
              chartType="PieChart"
              data={data}
              options={options}
              width={"90%"}
              height={"400px"}
            />
          </Col>
          <Col>
          <Chart
      chartType="BarChart"
      width="90%"
      height="400px"
      data={da}
      options={opt}
    />
          </Col>
        </Row>
      </Container>
      
  </>
  )
}

export default Cards