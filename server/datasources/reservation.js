const mongoose = require('mongoose');
const URL = 'localhost';
const DATABASE = 'local';
mongoose.connect(`mongodb://${URL}/${DATABASE}`);

const Schema = mongoose.Schema;

var reservationSchema = new Schema({
    guestName: String,
    hotelName: String,
    arrivalDate: Date,
    departureDate: Date
})

var reservationModel = mongoose.model('reservations',reservationSchema)

module.exports = reservationModel;