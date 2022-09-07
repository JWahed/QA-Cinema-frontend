import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <>
      <h1>About QA Cinemas</h1>
      <h2></h2>
      <br />
      <p>The following people worked on this project</p>

      <ul>
        <li>Abdullah Abubakar</li>
        <li>
          Linkedin:
          <Link to={`https://www.linkedin.com/in/abdullah-abubakar-36b991176/`}>
            <p>Link</p>
          </Link>
        </li>
        <li>Contributions to: QA Discussion Board, About Page, Opening Times</li>
        <li>Email: Abdullahagumel@gmail.com</li>
      </ul>

      <ul>
        <li>Joe Bloggs</li>
        <li>Linkedin: </li>
        <li>Email: </li>
      </ul>

      <ul>
        <li>Joe Bloggs</li>
        <li>Linkedin: </li>
        <li>Email: </li>
      </ul>

      <ul>
        <li>Joe Bloggs</li>
        <li>Linkedin: </li>
        <li>Email: </li>
      </ul>

      <ul>
        <li>Joe Bloggs</li>
        <li>Linkedin: </li>
        <li>Email: </li>
      </ul>
    </>
  );
};

export default AboutPage;
