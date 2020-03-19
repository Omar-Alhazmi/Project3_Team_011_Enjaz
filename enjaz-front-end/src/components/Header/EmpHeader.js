// EmpHeader
import React from 'react'
import './header.css';
import SendTickets from '../SendTicket/SendTickets'
import ReceivedTickets from '../ReceivedTickets/ReceivedTickets'
import NewTicket from '../NewTicket/NewTicket';
import { getInfo } from "../login/decodeToken";
import { AddNewTicket } from "../api";

export default class EmpHeader extends React.Component{
  constructor(props){
    super(props);
    this.state = {
  
      toggle: false,
    };
  }
  togglehandler(e){
    e.preventDefault();

    this.setState({
      toggle: !this.state.toggle
    })
  }
  logOut= e =>{
    e.preventDefault();
    this.props.history.push('/')
    localStorage.clear('currentUser')
  }
  addTicket = tic => {
    // Make an axios request
    console.log(tic, "Employee");
    let mId = getInfo().data._id;
    console.log(mId);
    AddNewTicket(tic, mId)
      .then(response => {
        console.log(
          `The Ticket ${tic.empFullName} has been added successfully.`
        );
      })
      .catch(error => {
        console.log("API ERROR: ", error);
      });
  };
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
      <li onClick={e => this.logOut(e)}>LogOut</li>
      <li onClick={e=>this.togglehandler(e)}>New Ticket</li>
    </ul>
    </div>
  </div>

  <main>
 
  {this.state.toggle === false?
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