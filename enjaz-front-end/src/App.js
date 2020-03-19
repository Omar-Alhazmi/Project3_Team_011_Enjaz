import React from 'react';
import apiURL from'./APIconfig';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

// Components
import Login from './components/login/Login'
import AdminHeader from './components/Header/AdminHeader'
import EmpHeader from './components/Header/EmpHeader'
import AuthComponent from './components/login/AuthenticatedComponent';

export default class App extends React.Component {
  render(){
    console.log('MY API :  ',apiURL);
    return (
      <>
      <BrowserRouter>
     <Switch>
      <Route path={'/login'} exact component={Login}/>   
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