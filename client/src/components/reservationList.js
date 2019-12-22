import React, { Component } from 'react'
import Reservation from './reservation'
import { Query } from 'react-apollo'
import gql from 'graphql-tag';
import { Consumer } from "../context";

const FEED_QUERY = gql`
  {
    reservations {
        id
        guestName
        hotelName
        arrivalDate
        departureDate
      }
  }
`

class ReservationList extends Component {

  render() {
    return (
    <Consumer>
        {value => {
          const { reservations } = value;

        return (
            <Query query={FEED_QUERY}>
                {({loading,error,data}) => {
                    if (loading) return <div className="d-flex justify-content-center mt-5"><div className="spinner-border text-primary" role="status"><span className="sr-only">Fetching</span></div></div>
                    if (error) return <div className="text-center text-danger mt-5">Error</div>
                    if(data.reservations < 1) return <div className="text-center text-muted mt-5">No reservation to display</div>
                    const reservationsToRender = reservations
                      return (
                          <div>
                              {reservationsToRender.map(reservation => <Reservation key={reservation.id} reservation={reservation} />
                                 )}
                          </div>
                      )
                }}
            </Query>
        );
      }}
    </Consumer>
    )
  }
}

export default ReservationList
