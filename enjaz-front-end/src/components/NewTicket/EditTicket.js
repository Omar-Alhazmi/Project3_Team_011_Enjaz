import React from "react";
import EditForm from "./EditForm";

class NewTicket extends React.Component {
  constructor() {
    super();
    this.state = {
      TicketDescription: "",
      TicketState: ""
    };
  }
  handleChange = event =>
    this.setState({
      [event.target.name]: event.target.value
    });


  formEdit = e => {
    const EditTicket = this.state;
    console.log(EditTicket, "EditTicket");
    e.preventDefault();
    this.props.EditUpdateTicket(EditTicket);
  };
  render() {

    return (
      <div>
        <EditForm handleChange={this.handleChange}  EditTicket={this.EditTicket} formEdit={this.formEdit}/>
      </div>
    );
  }
}
export default NewTicket;
