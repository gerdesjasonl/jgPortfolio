import { Link, useLocation } from 'react-router-dom';
const navStyle = {
  listStyleType: 'none',
  alignItems: 'center',
  paddingInlineStart: '0px',
  display: 'inline-flex',
}

const cardStyle = {
  padding: '5px',
  margin: '5px',
  borderRadius: '5px'
}

function NavTabs() {
  const currentPage = useLocation().pathname;
  
  return (
    <ul id="homeNav" style={navStyle}>
      <li className="nav-item" style={cardStyle}>
        <Link to="/"
        className={currentPage === '/' ? 'nav-link active' : 'nav=link'}
        >Home</Link>
      </li>
      <li className="nav-item" style={cardStyle}>
        <Link to="/AboutMe"
        className={currentPage === '/AboutMe' ? 'nav-link active' : 'nav=link'}
        >About</Link>
      </li>
      <li className="nav-item" style={cardStyle}>
        <Link to="/Portfolio"
        className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav=link'}
        >Portfolio </Link>
      </li>      
      <li className="nav-item" style={cardStyle}>
        <Link to="/Contact"
        className={currentPage === '/Contact' ? 'nav-link active' : 'nav=link'}
        >Contact</Link>
      </li>
      <li className="nav-item" style={cardStyle}>
        <Link to="/Resume"
        className={currentPage === '/Resume' ? 'nav-link active' : 'nav=link'}
        >Resume</Link>
      </li>
    </ul>
    );
}

export default NavTabs;