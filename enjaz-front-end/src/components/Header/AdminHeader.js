import React from "react";
import "./header.css";
import Tickets from "../Ticket/Tickets";
import HistoryTickets from '../HistoryTickets/HistoryTickets'
import NewEmployee from "../manager/NewEmployee";

export default class AdminHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: false,
            toggleHistory:true,
        };
    }
    togglehandler(e){
        e.preventDefault();
    
        this.setState({
          toggle: !this.state.toggle
        })
      }
    togglehandler_HistoryTickets(e){
        e.preventDefault();
        this.setState({
            toggleHistory: !this.state.toggleHistory
        })
      }
    logOut = e => {
        e.preventDefault();
        this.props.history.push('/')
        localStorage.clear('currentUser')
    }
    render() {
        return (
            <div className="page">
                <header tabindex="0">Enjaz</header>
                <div className="nav-container">
                    <div className="bg"></div>
                    <div className="button"tabindex="0" >
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </div>

                    <div className="nav-content" tabindex="0">
                        <ul>
                            <li onClick={e=>this.togglehandler(e)}>NewEmployee</li>

                            <li onClick={e=>this.togglehandler_HistoryTickets(e) }>
                                History
                            </li>
                            <li onClick={e => this.logOut(e)}> Log out </li>
                        </ul>
                    </div>
                </div>
                <main>
                    {this.state.toggle === false ?
                        <>
                            {this.state.toggleHistory === false ?
                                <HistoryTickets toggle={e => this.togglehandler_HistoryTickets(e)}/>

                                :
                                <Tickets/>
                            }</>
                        : <NewEmployee AddClicked={this.AddClicked} />
                    }
                </main>
            </div>
        );
    }
}