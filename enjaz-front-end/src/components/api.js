import apiURL from'../APIconfig';
import axios from 'axios';

// Get All Ticket
export const getAllTicket = () => {
  return axios.get(`${apiURL}/emp/allTickets`);
}
// Get ALl Emp SendTickets By Emp ID
export const getEmpSendTickets = (id) => {
    return axios.get(`${apiURL}/emp/SendTickets/${id}`);
  } 
// Get ALl Emp ReceivedTickets By Emp ID
export const getreceivedTickets = (id) => {
    return axios.get(`${apiURL}/emp/ReceivedTickets/${id}`);
  } 