// ReceivedTicket
import React from 'react';
import EditTicket from '../NewTicket/EditTicket';
import { getInfo } from '../login/decodeToken';
import {UpdateTicket} from '../api';
export default class ReceivedTicket extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            toggle:false,
            Fltir: 'none',
        };
    }
    EditUpdateTicket = (tic) => {
        // Make an axios request
        console.log(tic,"Employee");
        let mId = getInfo().data._id
      
        UpdateTicket(tic,this.props.id)
          .then(response => {
                //alert message!!!!!!!!    
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

    togglehandler(e) {
        e.preventDefault();
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
                        </h1>
                        <div className={`Description-${this.state.Fltir}`}>
                            <p>{this.props.TicketDescription}</p>
                            <button onClick={e => this.togglehandler(e)} className="raise"> Edit </button>
                            <span className="shots-number"> {this.props.TicketType} </span>
                        </div>
                    </div>
                </li>
                :  <EditTicket  EditUpdateTicket={this.EditUpdateTicket}/>
  }
            </div>
        );
    }

}
