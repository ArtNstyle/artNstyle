var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var TicketSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: String
    },
    comment: {
        type: String
    },
    solved: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Ticket', TicketSchema);