//ALL  Tickets 
import React from 'react';
import Ticket from './Ticket'
import { getAllTicket , closeTicket ,deleteTicket } from '../api';
import './Tickets.css'; 
export default class Tickets extends React.Component{
    constructor(props){
        super(props)
        this.state = {
        Tickets:null, 
        };
      }
    componentDidMount(){
        // Mack API call 
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
    // Make an API Call to Delete an Ticket
    deleteOneTicket = (id) => {
        console.log('This Ticket ID to Delete 2', id);
        deleteTicket(id)
            .then((res) => {
                console.log(`The Ticket ID to Delete${id} , hasa been deleted`);
                const newList = this.state.Tickets.filter((Ticket) => {
                    return Ticket._id !== id;
                });
                this.setState({ Tickets: newList });
                // this.setTickets(newList);
                console.log(' newList ==> deleteOneTicket : ', newList);
            })
            .catch((err) => {
                console.log(' fun closeClick deleteTicket ==>  ', err);
            })
    }
          // Make an API Call to Delete an Ticket
          closeOneTicket = (id) => {
            console.log('This Ticket ID to Delete', id);
            closeTicket(id)
            .then( (res)=>{
              console.log(`The Ticket ID to Delete${id} , hasa been deleted`);
              const newList = this.state.Tickets.filter((Ticket) => {
                  return Ticket._id !== id;
                });
                this.setState( {Tickets:newList} );
                // this.setTickets(newList);
                console.log(' newList ==>  ', newList);
            })
             .catch( (err)=>{
              console.log(' fun closeClick ==>  ', err);
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
          deleteOneTicket={this.closeOneTicket}
          TicketDescription={Tickets.TicketDescription}
          closeOneTicket={this.closeOneTicket}
          key={index} /> 
          );
      })}
    return(
        <div className="content">
            <h2>ALL Ticket</h2>
            <ul className="all">
            {allTickets}
        </ul>
        </div>);
  }
}