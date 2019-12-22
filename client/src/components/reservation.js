import React, { Component } from 'react'

class Reservation extends Component {
  render() {
    var arrivalDate = new Date(this.props.reservation.arrivalDate);
    var departureDate = new Date(this.props.reservation.departureDate);
    return (
      <div className="card w-75 mx-auto mt-2">
        <div className="card-body">
          <h5 className="card-title">
            <label className="mr-2">Guest Name:</label>{this.props.reservation.guestName} 
          </h5>
          <h6 className="card-subtitle mb-2">
            <label className="mr-2">Hotel Name:</label>{this.props.reservation.hotelName}
          </h6>
          <h6 className="card-subtitle mb-2">
            <label className="mr-2">Arrival Date:</label>{arrivalDate.toDateString()}
          </h6>
          <h6 className="card-subtitle mb-2">
            <label className="mr-2">Departure Date:</label>{departureDate.toDateString()}
          </h6>
        </div>
      </div>
    )
  }
}

export default Reservation