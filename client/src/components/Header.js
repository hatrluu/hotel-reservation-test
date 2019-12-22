import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'

class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <Link to="/" className="h1 text-decoration-none text-muted"><span className="text-primary">Hotel</span> Reservation</Link>
          <div>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link">Reservations</Link>
              </li>
              <li className="nav-item">
                <Link to="/make-reservation" className="nav-link">Make Reservation</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default withRouter(Header)