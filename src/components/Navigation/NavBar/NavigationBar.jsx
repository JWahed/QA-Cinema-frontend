import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../../logoPrototype.png';
import './NavigationBar.css';

function NavigationBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} id="logo" alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/CurrentMovieList">
              {/* Will Style the below component when have time*/}
              <span>
                <span style={{color: "rgba(0,64,80,100)"}}>W</span>
                <span style={{color: "rgba(0,64,80,100)"}}>H</span>
                <span style={{color: "rgba(0,64,80,100)"}}>A</span>
                <span style={{color: "rgba(0,64,80,100)"}}>T</span>
                <span style={{color: "rgba(0,64,80,100)"}}>&apos;</span>
                <span style={{color: "rgba(0,64,80,100)"}}>S&nbsp;</span>
                <span style={{color: "rgba(0,64,80,100)"}}>O</span>
                <span style={{color: "rgba(0,64,80,100)"}}>N</span>
              </span>
            </Nav.Link>
            <Nav.Link href="/bookings">Bookings</Nav.Link>
            <Nav.Link href="/NewReleaseList">New releases</Nav.Link>
            <Nav.Link href="/discussion-board">Discussion board</Nav.Link>
            <NavDropdown title="Information" id="basic-nav-dropdown">
              <NavDropdown.Item href="/opening-times">Opening hours</NavDropdown.Item>
              <NavDropdown.Item href="/getting-here">Getting here</NavDropdown.Item>
              <NavDropdown.Item href="/classification">Film Classifications</NavDropdown.Item>
              <NavDropdown.Item href="/screens">Screens</NavDropdown.Item>
              <NavDropdown.Item href="/about">About</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/contact-us">Contact Us</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
