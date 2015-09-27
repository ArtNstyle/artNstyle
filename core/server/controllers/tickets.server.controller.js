var Ticket = require('mongoose').model('Ticket');

exports.postTicket = function (req, res, next) {
    var ticket = new Ticket(req.body);
    ticket.save(function (err) {
        if (err) res.send(err);
        else res.json(ticket);
    });
};


exports.getTickets = function (req, res) {
    Ticket.find({})
    .exec(function (err, tickets) {
        if (err) res.status(500).send(err);
        else res.json(tickets);
    });
};


exports.getOneTicket = function (req, res) {
    Ticket.findById(req.params.id)
    .exec(function (err, ticket) {
        if (err) res.status(500).send(err);
        else res.json(ticket);
    });
};


exports.putTicket = function (req, res) {
    Ticket.findById(req.params.id)
        .exec(function (err, ticket) {
            if (err) res.status(500).send(err);
            else {
                ticket.name = req.body.name;
                ticket.save();
                res.json(ticket);
            }
        });
};


exports.deleteTicket = function (req, res) {
    Ticket.findById(req.params.id)
        .remove(function (err) {
            if (err) res.status(500).send(err);
            else res.status(204).send('Removed');
        });
};