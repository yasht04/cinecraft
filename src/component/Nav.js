import React from 'react'
import { Link } from 'react-router-dom'
export default function Nav() {
  return (

    <nav className="navbar navbar-expand-lg bg-white">
  <div className="container-fluid">
    <Link className="navbar-brand text-dark" to="/">CINECRAFT</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active text-dark" aria-current="page" to="/login">Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-dark" to="/">Home</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle text-dark" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </Link>
          <ul className="dropdown-menu bg-white">
            <li><Link className="dropdown-item text-dark" to="/">Action</Link></li>
            <li><Link className="dropdown-item text-dark" to="/">Another action</Link></li>
            <li><Link className="dropdown-item text-dark" to="/">Something else here</Link></li>
          </ul>
        </li>
      </ul>
    </div>
    <button type="button" className="btn btn-success mx-2">Login</button>
    <button type="button" className="btn btn-success">Sign In</button>
  </div>
</nav>
  )
}
