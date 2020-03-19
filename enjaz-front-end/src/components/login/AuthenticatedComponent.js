import React, { Component } from "react";
import { getJwt } from "./helper";
import { getInfo } from "./decodeToken";
import { withRouter } from "react-router-dom";

class AuthenticatedComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      admin: undefined,
      user: undefined
    };
  }

  componentDidMount() {
    const jwt = getJwt();
    let jwt1 = getInfo().data.admin;
    // this function is responsible to check if the
    // token is equal to employee or adamant after
    // decrypting that token
    if (!jwt) {
      this.setState({
        user: null,
        admin: null
      });
      return;
    } else if (jwt1 === true) {
      this.setState({
        admin: jwt
      });
    } else if (jwt1 === false) {
      this.setState({
        user: jwt
      });
    }
  }
  render() {
    return (
      <div>
        {/* check if the state the admin doesn't equal undefined 
      then the permission we'll go to the second child   */}
        {this.state.admin !== undefined
          ? this.props.children[1]
          : this.props.children[0]}
      </div>
    );
  }
}

export default withRouter(AuthenticatedComponent);
