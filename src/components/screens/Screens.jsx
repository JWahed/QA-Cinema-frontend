import React from "react";
import { Card } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import standardSeatings from "../../assets/standard-seatings.jpg";
import standardSeatingPlan from "../../assets/standard-seating-plan.jpg";
import deluxeSeatings from "../../assets/deluxe-seatings.jpg";
import deluxeSeatingPlan from "../../assets/deluxe-seating-plan.jpg";
import "./Screens.css"

function Screens() {
  return (
    <div id="screens-page">
      <div>
        <h1>Screens</h1>
        <p>Here is a preview of the screens with the seats</p>
      </div>


        <Container className="screens-container">
        <div className="Standard">
          <div>
            <Card className="screens-cards">
              <Card.Body className="body">
                <Card.Title>Standard Screen</Card.Title>
                <Card.Img
                  variant="top"
                  className="screens-img"
                  src={standardSeatings}
                />
                <Card.Text>Our Standard screen seatings</Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div>
            <Card className="screens-cards">
              <Card.Body className="body">
                <Card.Title>Standard Seats</Card.Title>
                <Card.Img
                  variant="top"
                  className="screens-img"
                  src={standardSeatingPlan}
                />
                <Card.Text>Our Standard screen venue</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>

        <br />
        <br />
        <br />

        <div className="Deluxe">
          <div>
            <Card className="screens-cards">
              <Card.Body className="body">
                <Card.Title>Deluxe Screen</Card.Title>
                <Card.Img
                  variant="top"
                  className="screens-img"
                  src={deluxeSeatings}
                />
                <Card.Text>Our Dexluxe screen venue</Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div>
            <Card className="screens-cards">
              <Card.Body className="body">
                <Card.Title>Deluxe Seats</Card.Title>
                <Card.Img
                  variant="top"
                  className="screens-img"
                  src={deluxeSeatingPlan}
                />
                <Card.Text>Our Standard screen seatings</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
        <br />
        <br />
        </Container>
    </div>
  );
}

export default Screens;