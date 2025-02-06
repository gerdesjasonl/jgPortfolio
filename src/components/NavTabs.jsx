import { Link, useLocation } from 'react-router-dom';
const navStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  position: 'fixed',
  width: '100%',
  top: 0,
  left: 0,
  listStyleType: 'none',
  alignItems: 'center',
  paddingInlineStart: '0px',
  justifyContent: 'center'
}

const linkStyle = {
  fontSize: '45px',
  padding: '5px',
  margin: '5px',
  borderRadius: '5px'
}

function NavTabs() {
  const currentPage = useLocation().pathname;
  
  return (
    <ul id="homeNav" style={navStyle}>
      <li className="nav-item" style={linkStyle}>
        <Link to="/"
        className={currentPage === '/' ? 'nav-link active' : 'nav=link'}
        >Home</Link>
      </li>
      <li className="nav-item" style={linkStyle}>
        <Link to="/AboutMe"
        className={currentPage === '/AboutMe' ? 'nav-link active' : 'nav=link'}
        >About</Link>
      </li>
      <li className="nav-item" style={linkStyle}>
        <Link to="/Portfolio"
        className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav=link'}
        >Portfolio </Link>
      </li>      
      <li className="nav-item" style={linkStyle}>
        <Link to="/Contact"
        className={currentPage === '/Contact' ? 'nav-link active' : 'nav=link'}
        >Contact</Link>
      </li>
      <li className="nav-item" style={linkStyle}>
        <Link to="/Resume"
        className={currentPage === '/Resume' ? 'nav-link active' : 'nav=link'}
        >Resume</Link>
      </li>
    </ul>
    );
}

export default NavTabs;