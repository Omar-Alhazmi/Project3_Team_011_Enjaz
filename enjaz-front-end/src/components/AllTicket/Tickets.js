import React from 'react';
import Ticket from './Ticket'
import { getAllTicket , closeTicket } from '../api';
import './Tickets.css'; 
export default class Tickets extends React.Component{
    constructor(props){
        super(props)
        this.state = {
        Tickets:null, 
        };
      }
    componentDidMount(){
         // Mack API call to det all the Ticket that not have closed state  
        getAllTicket()
        .then( (repose)=>{
            console.log('repose.data' , repose.data )
            const Tickets = repose.data.filter((Ticket) => {
                if(Ticket.TicketState !== 'closed'){
                    return repose.data
                }
              });this.setState( {Tickets} );
        })
        .catch( (error)=>{
            console.log(' API error: ',error );
        })
    }
          closeOneTicket = (id) => {
               // Make an API Call to close a ticket
            closeTicket(id)
            .then( (res)=>{
              const newList = this.state.Tickets.filter((Ticket) => {
                  return Ticket._id !== id;
                });
                this.setState( {Tickets:newList} );
            })
             .catch( (err)=>{
             })
          }
   render(){
      let allTickets = <h3> No Tickets! :( </h3>
      if(this.state.Tickets !== null ){
      allTickets= this.state.Tickets.map( (Tickets , index)=> {
          return(
          <Ticket 
          id={Tickets._id}
          TicketType={Tickets.TicketType}
          TicketState={Tickets.TicketState}
          TicketDescription={Tickets.TicketDescription}
          closeOneTicket={this.closeOneTicket}
          key={index} /> 
          );
      })}
    return(
        <div className="content">
            <h2>ALL Ticket</h2>
            <ul className="timeline">
            {allTickets}
        </ul>
        </div>);
  }
}