import { Link, useLocation } from 'react-router-dom'

function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <ul id="homeNav">
      <li className="nav-item">
        <Link to="/"
        className={currentPage === '/' ? 'nav-link active' : 'nav=link'}
        >Home</Link>
      </li>
      <li className="nav-item">
        <Link to="/About"
        className={currentPage === '/' ? 'nav-link active' : 'nav=link'}
        >About Me </Link>
      </li>
      <li className="nav-item">
        <Link to="/Portfolio"
        className={currentPage === '/' ? 'nav-link active' : 'nav=link'}
        >Portfolio </Link>
      </li>      
      <li className="nav-item">
        <Link to="/Contact"
        className={currentPage === '/' ? 'nav-link active' : 'nav=link'}
        >Contact Me </Link>
      </li>
      <li className="nav-item">
        <Link to="/Resume"
        className={currentPage === '/' ? 'nav-link active' : 'nav=link'}
        >Resume </Link>
      </li>
    </ul>
    );
}

export default NavTabs;