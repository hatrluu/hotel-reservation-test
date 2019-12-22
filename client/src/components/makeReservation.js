import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import { Consumer } from "../context";
import gql from 'graphql-tag'

const MAKE_RESERVATION = gql`
    mutation MakeReservation($guestName:String!,$hotelName:String!,$arrivalDate:Date!,$departureDate:Date!){
        makeReservation(input: {guestName:$guestName, hotelName:$hotelName, arrivalDate:$arrivalDate, departureDate:$departureDate}){
        id
        }
    }
`

class MakeReservation extends Component {
  state = {
    id: Math.random(),
    guestName: ''
    , hotelName: ''
    , arrivalDate: ''
    , departureDate: ''
  }

  onSubmit = async (dispatch, e) => {
    e.preventDefault();

    dispatch({ type: "ADD_RESERVATION", payload: this.state });

  };

  _onFocus (e){
    e.currentTarget.type = "date";
  };

  _onBlur (e){
      e.currentTarget.type = "text";
  };

  render() {
    const { id, guestName, hotelName, arrivalDate, departureDate } = this.state
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card w-50 mx-auto mt-4">
              <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                <div className="card-body">
                  <div className="d-flex flex-column form">
                    <input
                      className="form-control mb-2"
                      value={guestName}
                      onChange={e => this.setState({ guestName: e.target.value })}
                      type="text"
                      placeholder="Guest Name"
                    />
                    <input
                      className="form-control mb-2"
                      value={hotelName}
                      onChange={e => this.setState({ hotelName: e.target.value })}
                      type="text"
                      placeholder="Hotel Name"
                    />
                    <input
                      className="form-control mb-2"
                      value={arrivalDate}
                      onChange={e => this.setState({ arrivalDate: e.target.value })}
                      type="text"
                      placeholder="Arrival Date"
                      onFocus={this._onFocus}
                      onBlur={this._onBlur}
                    />
                    <input
                      className="form-control mb-2"
                      value={departureDate}
                      onChange={e => this.setState({ departureDate: e.target.value })}
                      type="text"
                      placeholder="Departure Date"
                      onFocus={this._onFocus}
                      onBlur={this._onBlur}
                    />
                    <Mutation mutation={MAKE_RESERVATION}
                      variables={{ guestName, hotelName, arrivalDate, departureDate }}
                      onCompleted={() => this.props.history.push('/')}>
                      {makeReservation => (
                        <button className="btn btn-outline-dark" onClick={makeReservation} type="submit">Submit</button>
                      )}
                    </Mutation>
                  </div>
                </div>
              </form>
            </div>
          )
        }}
      </Consumer>
    )
  }
}

export default MakeReservation
