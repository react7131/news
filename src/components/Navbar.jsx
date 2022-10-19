import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark fixed-top">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">NEWS Website</a>
    <div className="dropdown me-5" >
      <a className="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        your activities
      </a>
      <div className="dropdown-menu">
        <Link to='' className="dropdown-item">Setting</Link>
        
          <Link to='/favorites' className="dropdown-item">
            favorites
          </Link>
          {/* <FavoriteModal /> */}
        <Link to='/comments' className="dropdown-item">comments</Link>
      </div>
    </div>
    {/* <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Menu</h5>
        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="#">Setting</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">Favorites</a>
            <button type="button" class="" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
              favorites
            </button>
            <FavoriteModal />
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">your Comments</a>
          </li>
        </ul>
      </div>
    </div> */}
  </div>
</nav>
  )
}

export default Navbar