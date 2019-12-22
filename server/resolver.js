const reservationModel = require('./datasources/reservation');

const resolvers = {
    Query: {
        reservations: async () => 
        await reservationModel.find({}, function (err, reservations) {
            if (err) throw err;
            return reservations;
        }),
        reservation: (_, { id }) =>
            reservationModel.findById(id, function (err, reservation) {
                if (err) throw err;
                return reservation;
            })
    },
    Mutation: {
        makeReservation: (_,{input}) => {
            var newReservation = new reservationModel(input)
            newReservation.save(function(err){
                if (err) throw err;
            })
        }
    }
}

module.exports = resolvers