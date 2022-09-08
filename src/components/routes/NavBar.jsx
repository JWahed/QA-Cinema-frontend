import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <h1>QA Film Discussion Board</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create" style={{ 
          color: 'white', 
          backgroundColor: '#131e28',
          borderRadius: '8px' 
        }}>New Topic</Link>
      </div>
    </nav>
  );
}
 
export default NavBar;