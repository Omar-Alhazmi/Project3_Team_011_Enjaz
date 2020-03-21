import React from "react";
import './ticketform.css';
class TicketForm extends React.Component {
   
  render() {
    return (
    <div>

  <form  className="parent-wrapper"   >
  <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h3>Add New Ticket</h3>
        <div className="subscribe-wrapper">
        <div >
        <div>
          <label htmlFor="TicketType">TicketType</label><br/>
          <input
          className="subscribe-input"
            required
            name="TicketType"
            value={this.props.TicketType}
            type="text"
            placeholder="TicketType"
            onChange={this.props.handleChange}
          />
        </div>
        <div>
          <label htmlFor="TicketDescription">TicketDescription</label><br/>
          <input
            className="subscribe-input"
            required
            name="TicketDescription"
            value={this.props.TicketDescription}
            type="text"
            placeholder="TicketDescription"
            onChange={this.props.handleChange}
          />
        </div>
        </div>
        <div>
            <label htmlFor="TicketState">TicketState:</label><br/>

            <select
              name="TicketState"
              
              type="text"
              placeholder="TicketState"
              onChange={this.props.handleChange}
            >
              <option value={this.props.TicketState}>Open</option>
              <option  value={this.props.TicketState}>On Progress</option>
        
            </select>
            
        </div><br/>
        <a href="/EmpHeader"><i className="material-icons">arrow_back</i></a>

        <div className="submit-btn" onClick= {e=>this.props.formAdd(e)}>Add</div>
        </div>

        </form>
        
    </div>
    );
  }
}
export default TicketForm;
