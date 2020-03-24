import React from 'react';
import SendTicket from './SendTicket'
import { getEmpSendTickets } from '../api';
import './SendTickets.css'; 
import {getInfo} from '../login/decodeToken'
export default class SendTickets extends React.Component{

    constructor(props){
        super(props)

        this.state = {
        Emp_SendTickets:[], 
        };
      }

    componentDidMount(){
        // Mack API call 
        let mId = getInfo().data._id
        getEmpSendTickets(mId)
        .then( (reponse)=>{
            console.log('reponse.data' , reponse.data )
            this.setTickets(reponse.data)
        })
        .catch( (error)=>{
            console.log(' API error: ',error );
        })
    }

    setTickets = (Emp_SendTickets) =>{
        this.setState( {Emp_SendTickets} );
      }


   render(){
      let allTickets = <h3> No Tickets! :( </h3>

      if(this.state.Emp_SendTickets.length > 0 ){
      allTickets= this.state.Emp_SendTickets.map( (Tickets , index)=> {
          return(
          <SendTicket 
          id={Tickets._id}
          TicketType={Tickets.TicketType}
          TicketState={Tickets.TicketState}
          TicketDescription={Tickets.TicketDescription}
          key={index} /> 
          );
      })}

    return(
        <div className="content">
            <h2>Your Tickets</h2>
        <ul className="timeline">
            {allTickets}
        </ul>
        <button onClick={this.props.toggle} > Go back </button>

        </div>);
  }

} 