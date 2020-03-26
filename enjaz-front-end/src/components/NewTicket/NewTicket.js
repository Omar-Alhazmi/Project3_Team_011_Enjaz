import React from "react";
import TicketForm from "./TickectForm";

class NewTicket extends React.Component {
  constructor() {
    super();
    this.state = {
      TicketType: "",
      TicketDescription: "",
      TicketState: ""
    };
  }
  handleChange = event =>
    this.setState({
      [event.target.name]: event.target.value
    });

  formAdd = e => {
    const newTicket = this.state;
    console.log(newTicket, " NewTicket");
    e.preventDefault();
    this.props.addTicket(newTicket);
  };

  render() {
 
    return (
      <div>
        <TicketForm handleChange={this.handleChange} newTicket={this.newTicket}  formAdd={this.formAdd}/>
      </div>
    );
  }
}
export default NewTicket;
