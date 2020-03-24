import React from "react";
import "./newemployee.css";
import {AddNewEmployee} from '../api';
import { getInfo } from '../login/decodeToken';
class NewEmployee extends React.Component {
  constructor() {
    super();
    this.state = {
      empFullName: "",
      email: "",
      empUsername: "",
      password: "",
      empPhone: ""
    };
    this.addEmployee = this.addEmployee.bind(this);
}
addEmployee = emp => {
    // Make an axios request
    console.log(emp,"Manager");
    let mId = getInfo().data._id
    AddNewEmployee(emp)
      .then(response => {
        console.log(
          // `The Employee ${emp.empFullName} has been added successfully.`
        );
          })
      .catch(error => {
        console.log("API ERROR: ", error);
      });
  };
  handleChange = event =>
    this.setState({
      [event.target.name]: event.target.value
    });
  formSubmit = e => {
    const newEmployee = this.state;
     console.log(newEmployee, " NewEmployee");
    e.preventDefault();
    this.addEmployee(newEmployee);
   };
  render() {
    const { empFullName, email, empUsername, password, empPhone } = this.state;
    return (
      <div>
        <form className="parent-wrappe">
          <button type="button" className="close" data-dismiss="modal">
            &times;
          </button>
          <h3>Add New Employee</h3>
          <div className="subscribe-wrappe">
            <div>
              <label>FullName</label>
              <br />
              <input
                className="subscribe-input"
                required
                name="empFullName"
                value={empFullName}
                type="empFullName"
                placeholder="empFullName"
                onChange={this.handleChange}
              />
            </div>
            <div>
              <br />
              <label>Username</label>
              <br />
              <input
                className="subscribe-input"
                required
                name="empUsername"
                value={empUsername}
                type="empUsername"
                placeholder="empUsername"
                onChange={this.handleChange}
              />
            </div>
            <div>
              <br />
              <label>Email</label>
              <br />
              <input
                className="subscribe-input"
                required
                name="email"
                value={email}
                placeholder="Email"
                onChange={this.handleChange}
              />
            </div>
            <div>
              <br />
              <label>Password</label>
              <br />
              <input
                className="subscribe-input"
                required
                name="password"
                value={password}
                type="password"
                placeholder="Password"
                onChange={this.handleChange}
              />
            </div>
            <div>
              <br />
              <label>Phone</label>
              <br />
              <input
                className="subscribe-input"
                required
                name="empPhone"
                value={empPhone}
                type="empPhone"
                placeholder="empPhone"
                onChange={this.handleChange}
              />
            </div><br/>
            <a href="/AdminHeader"><i className="material-icons"> arrow_back </i></a>
            <div className="submit-btn" onClick={e => this.formSubmit(e)}>
              Add
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default NewEmployee;