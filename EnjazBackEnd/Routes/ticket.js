const express = require('express');
const router = express.Router();
const Emp = require('../models/Emp');
const Ticket = require('../models/Ticket');
//-------------create ticket embedded in emp-------------------
router.post('/:empId', (req, res) => {
  // store new ticket in memory with data from request body
  const { TicketType, TicketDescription, TicketState } = req.body
  let ticket = {}
  ticket.TicketType = TicketType,
    ticket.TicketDescription = TicketDescription,
    ticket.TicketState = TicketState,
    ticket.sendTickets = req.params.empId
  const savedTicket = new Ticket(ticket)
  savedTicket.save()
  // find emp in db by id and add new ticket
  Emp.findById(req.params.empId, async (error, foundEmp) => {
    try {
      await foundEmp.sendTickets.push(savedTicket);
      foundEmp.save()
      res.status(200).json(savedTicket);
    }
    catch (error) {
      res.status(404).json(error);
    }
  });
});


//-------------Pass ticket to another Emp-------------------
router.patch('/PassTicket/:TicketId', (req, res) => {

  Ticket.findById(req.params.TicketId, async (error, foundTicket) => {
    try {
      await foundTicket.TicketsEmp.push(req.body.TicketsEmp);
    } catch (error) {
      res.status(404).json(error);
    }
    Emp.findById(req.body.TicketsEmp, async (error, foundEmp) => {
      try {
        await foundTicket.save()
        foundEmp.receivedTickets.push(foundTicket);
        foundEmp.save()
        res.status(200).json(foundTicket.TicketsEmp);
      } catch (error) {
        res.status(404).json(error);
      }
    })
  });
});


//-------------Update Ticket-------------------
router.patch('/UpdateTicket/:TicketId', (req, res) => {

  Ticket.findById(req.params.TicketId, async (error, foundTicket) => {
    try {
      await foundTicket.update(req.body);
      res.status(200).json(req.body);

    } catch (error) {
      res.status(404).json(error);
    }

  });

});

//-------------Update Ticket By Ticket Id-------------------
router.delete('/DeleteTicket/:TicketId', (req, res) => {

  Ticket.findById(req.params.TicketId, async (error, foundTicket) => {
    try {
      await foundTicket.remove();
      res.status(200).json( `Ticket Id:  ${req.params.TicketId} has been deleted `);

    } catch (error) {
      res.status(404).json({ error:{
        name: 'DocumentNotFound',
        massage:'The provided ID dose not match any Document on Ticket'
    } });
    }

  });

});

module.exports = router
