const { gql } = require('apollo-server');

const typeDefs = gql`
    scalar Date
    
    type Reservation {
        id: ID!
        guestName: String
        hotelName: String
        arrivalDate: Date
        departureDate: Date
    }

    input newReservation {
        guestName: String
        hotelName: String
        arrivalDate: Date
        departureDate: Date
    }

    type Query {
        reservations: [Reservation]!
        reservation(id: ID!): Reservation
    }

    type Mutation {
        makeReservation(input: newReservation): Reservation
    }
`;

module.exports = typeDefs;