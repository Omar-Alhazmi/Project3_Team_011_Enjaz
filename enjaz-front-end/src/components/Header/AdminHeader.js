//AdminHeader
import React from "react";
import "./header.css";
import Tickets from "../Ticket/Tickets";
import { getAllTicket } from "../api";
import { getInfo } from '../login/decodeToken'
import NewEmployee from "../manager/NewEmployee";

export default class AdminHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: null,
            Fltir: "none",
            FltirTicket: "display"
        };
    }
    componentDidMount() {
        // Mack API call
        getAllTicket()
            .then(reponse => {
                console.log("reponse.data", reponse.data);
                const history = reponse.data.filter(Ticket => {
                    if (Ticket.TicketState === "closed") {
                        return reponse.data;
                    }
                });
                this.setState({ history });
            })
            .catch(error => {
                console.log(" API error: ", error);
            });
    }
    TicketClicked = (e) => {
        if (this.state.Fltir === 'none') {
            this.setState({
                Fltir: 'display',
                FltirTicket: 'none'
            });
        }
        else {
            this.setState({
                Fltir: 'none',
                FltirTicket: 'display'
            });
        }
    }
    logOut = e => {
        e.preventDefault();
        this.props.history.push('/Login')
        localStorage.clear('currentUser')
    }
    AddClicked = () => {
        if (this.state.FltirTicket === 'display') {
            this.setState({
                FltirTicket: 'none',
                Fltir: 'display'
            });
        }
        else {
            this.setState({
                FltirTicket: 'display',
                Fltir: 'none'
            });
        }
    }
    render() {
        console.log(getInfo())
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
                            <li onClick={this.TicketClicked}>NewEmployee</li>

                            <li>
                                <a href="">History</a>
                            </li>
                            <li><a onClick={e => this.logOut(e)}>Log out </a></li>
                        </ul>
                    </div>
                </div>
                <main>
                    <div className="content">
                        <div className={`Tickets-${this.state.FltirTicket}`}>
                            <Tickets />
                        </div>
                        <div className={`NewEmployee-${this.state.Fltir}`}>
                            <NewEmployee AddClicked={this.AddClicked} />
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}
