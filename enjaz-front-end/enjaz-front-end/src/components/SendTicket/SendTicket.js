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
    e.preventDefault();
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
        <li className="event">
          <div className="member-infos">
            <h1 className="member-title"
            onClick={e => this.TicketClicked(e)}>
                {this.props.TicketState}
           </h1>
           <div className={`Description-${this.state.Fltir}`}>
             <h2> {this.props.TicketDescription} </h2>
                <div class="member-parameters">
                <li class="member-follower">
                  <span class="followers">
                  {this.props.TicketType}
                  </span>
                  </li>
                </div>
          </div>
          
          </div>        
        </li>
    );
  }
}