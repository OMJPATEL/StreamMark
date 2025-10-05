import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <nav className="navbar">
      <span className="brand">StreamMark</span>
      <ul className="nav-links">
        <li><NavLink to="/educational">Educational</NavLink></li>
        <li><NavLink to="/funfacts">Fun-Facts</NavLink></li>
        <li><NavLink to="/movies">Movies</NavLink></li>
        <li><NavLink to="/music">Music</NavLink></li>
              <li><NavLink to="/liked">Liked</NavLink></li>
      </ul>
    </nav>
  )
}
export default NavBar
