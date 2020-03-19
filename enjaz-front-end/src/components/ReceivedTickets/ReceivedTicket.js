// ReceivedTicket
import React from 'react';
import '../SendTicket/SendTickets.css';

export default class ReceivedTicket extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            Fltir: 'none',
        };
    }

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
            </div>
        );
    }

}
