const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const TicketSchema = mongoose.Schema({
  TicketType: {
        type: String,
        required: [true, 'Ticket Type  required']
      },
      TicketDescription: {
        type: String,
        required: [true, 'Ticket Description required']
      },
      TicketState: {
        type: String,
        required: [true, 'Ticket State required'],
        enum:['Open', 'onProgress','closed']
      },
      TicketsEmp: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Emp'
        }
      ] 
   
});
module.exports = mongoose.model('Ticket',TicketSchema)