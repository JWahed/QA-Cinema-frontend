import React from "react";
import { Card, CardImg } from "react-bootstrap";
import standardSeatings from "./images/standard-seatings.jpg";
import standardSeatingPlan from "./images/standard-seating-plan.jpg";
import deluxeSeatings from "./images/deluxe-seatings.jpg";
import deluxeSeatingPlan from "./images/deluxe-seating-plan.jpg";


function Screens() {
  return (
    <div>
      <div>
        <h1>Screens</h1>
        <p>Here is a preview of the screens with the seats</p>
      </div>

      <div className="Standard">
        <div>
          <Card style={{ width: "30rem" }}>
            <Card.Body className="body">
              <Card.Title>Standard Screen</Card.Title>
              <Card.Img variant="top" className="img" src={standardSeatings} />
              <Card.Text>Our Standard screen seatings</Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div>
          <Card style={{ width: "30rem" }}>
            <Card.Body className="body">
              <Card.Title>Standard Seats</Card.Title>
              <Card.Img
                variant="top"
                className="img"
                src={standardSeatingPlan}
              />
              <Card.Text>Our Standard screen venue</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>

      <br></br>
      <br></br>
      <br></br>

      <div className="Deluxe">
        <div>
          <Card style={{ width: "30rem" }}>
            <Card.Body className="body">
              <Card.Title>Deluxe Screen</Card.Title>
              <Card.Img variant="top" className="img" src={deluxeSeatings} />
              <Card.Text>Our Dexluxe screen venue</Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div>
          <Card style={{ width: "30rem" }}>
            <Card.Body className="body">
              <Card.Title>Deluxe Seats</Card.Title>
              <Card.Img variant="top" className="img" src={deluxeSeatingPlan} />
              <Card.Text>Our Standard screen seatings</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Screens;