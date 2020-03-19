// SendTicket
import React from 'react';
export default class SendTicket extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      Fltir:'none', 
    };
  }
   // To display or not the ticket description  
   TicketClicked = (e) => {
    if( this.state.Fltir === 'none'){
       this.setState({ 
         Fltir:'display', }); 
    }
    else{
        this.setState({ Fltir:'none' }); 
    }
}
  render(){
    return(
        <div className="card">
            <h1 onClick={this.TicketClicked}>
                {this.props.TicketState}
                <span className="shots-number"> 
                {this.props.TicketType} </span>
           </h1>
            <p className={`Description-${this.state.Fltir}`}>
                {this.props.TicketDescription}</p>
        </div>
    );
  }
}