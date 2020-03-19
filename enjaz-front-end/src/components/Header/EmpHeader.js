// EmpHeader
import React from 'react'
import './header.css';
import SendTickets from '../SendTicket/SendTickets'
import ReceivedTickets from '../ReceivedTickets/ReceivedTickets'
import NewTicket from '../NewTicket/NewTicket';

export default class EmpHeader extends React.Component{
  constructor(props){
    super(props);
    this.state = {
  
      toggle:false,
    };
  }
  togglehandler(e){
    e.preventDefault();

    this.setState({
      toggle: !this.state.toggle
    })
  }
    render(){
    return (
<div className="page">

  <header tabindex="0">Enjaz</header>
  <div className="nav-container">
    <div className="bg"></div>
    
    <div className="button" tabindex="0">
      
      <span className="icon-bar"></span>
      <span className="icon-bar"></span>
      <span className="icon-bar"></span>

    </div>

    <div className="nav-content" tabindex="0">
      <ul>

        <li>LogOut</li>
        <li><a>New Ticket</a></li>


    </ul>
    </div>
  </div>

  <main>
 
  {this.state.toggle===false?
<>

    <div className="container-SendTickets">
    <SendTickets />
    </div>
    <div className="container-ReceivedTickets">
    <ReceivedTickets />
    </div>
</>
    : <NewTicket addTicket={this.addTicket} />
    }

  </main>


</div>
    );
  }
}