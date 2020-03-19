import apiURL from'../APIconfig';
import axios from 'axios';

// Get All Ticket
export const getAllTicket = () => {
  return axios.get(`${apiURL}/emp/allTickets`);
}

