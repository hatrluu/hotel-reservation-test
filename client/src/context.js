import React, { Component } from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {

    case 'ADD_RESERVATION':
      return {
        ...state,
        reservations: [action.payload, ...state.reservations]
      };

    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    reservations: [],
    dispatch: action => this.setState(state => reducer(state, action))
  };

  async componentDidMount() {
    const GRAPHQL_URL = 'http://localhost:4000/';

    const response = await fetch( GRAPHQL_URL, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            query:`
            query {
              reservations {
                  id
                  guestName
                  hotelName
                  arrivalDate
                  departureDate
                }
            }
          `
        })
      });
      const {data} = await response.json();
      this.setState({ reservations: data.reservations });
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
