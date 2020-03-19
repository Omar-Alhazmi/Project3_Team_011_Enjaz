// ReceivedTicket
import React from 'react';
import '../SendTicket/SendTickets.css';
import EditTicket from '../NewTicket/EditTicket';
import { getInfo } from '../login/decodeToken';
import {UpdateTicket} from '../api';
export default class ReceivedTicket extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            Fltir: 'none',
        };
    }
    EditUpdateTicket = (tic) => {
        // Make an axios request
        console.log(tic,"Employee");
        let mId = getInfo().data._id
      
        UpdateTicket(tic,mId)
          .then(response => {
            console.log(
              `The Ticket ${response.tic.TicketType} has been Edit successfully.`
            );
              })
          .catch(error => {
            console.log("API ERROR: ", error);
          });
      };
    // To display or not the ticket description  
    TicketClicked = (e) => {
        if (this.state.Fltir === 'none') {
            this.setState({
                Fltir: 'display',
            });
        }
        else {
            this.setState({ Fltir: 'none' });
        }
    }

    togglehandler() {
        this.setState({
            toggle: true
        })
    }
    render() {
        return (
            <div>
                { this.state.toggle=== false?

                <li className="event">
                    <div className="member-infos">
                        <h1 onClick={this.TicketClicked}>
                            {this.props.TicketState}
                            <span className="shots-number">
                                _{this.props.TicketType} </span>
                        </h1>
                        <div className={`Description-${this.state.Fltir}`}>
                            <p>{this.props.TicketDescription}</p>
                            <button onClick={() => this.togglehandler()} className="raise"> Edit </button>
                        </div>
                    </div>
                </li>
                :  <EditTicket  EditUpdateTicket={this.EditUpdateTicket}/>
  }
            </div>
        );
    }

}
