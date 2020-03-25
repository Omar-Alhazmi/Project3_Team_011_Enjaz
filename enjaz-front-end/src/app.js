import React from 'react';
import apiURL from'./APIconfig';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

// Components
import Login from './components/login/Login'
import AdminHeader from './components/Header/AdminHeader'
import EmpHeader from './components/Header/EmpHeader'
import AuthComponent from './components/login/AuthenticatedComponent';

export default class App extends React.Component {

// **  Component Tree **
      // 0 -Login

        // 1 -AuthComponent

            // 2- AuthComponent:
            //    2.1 AdminHeader:
            //        * AllTicket => display all tickets
            //          - Ticket => display one ticket of all tickets

            //        * HistoryTickets => display all history ticket
            //          - HistoryTicket => display one ticket of all history tickets

            //        * NewEmployee => display form to add new employee



            //    2.2 EmpHeader:
            //        * SendTickets => display all employee send ticket
            //          - SendTicket => display one ticket of all send tickets

            //        * ReceivedTickets => display all employee received ticket
            //          - ReceivedTicket => display one ticket of all received tickets
            //            . EditTicket => display EditForm component
            //              .. EditForm => display form to edit new ticket

            //        * NewTicket => display TicketForm component
            //          - TicketForm => display form to add new ticket

  render(){
    console.log('MY API :  ',apiURL);
    return (
      <>
      <BrowserRouter>
     <Switch>
      <Route path={'/'} exact component={Login}/>   
    <AuthComponent>
      <Route path={'/EmpHeader'} component={EmpHeader}/>
      <Route path={'/AdminHeader'} component={AdminHeader}/>
      </AuthComponent>
        </Switch>
      </BrowserRouter>
      </>
    );
  }
}