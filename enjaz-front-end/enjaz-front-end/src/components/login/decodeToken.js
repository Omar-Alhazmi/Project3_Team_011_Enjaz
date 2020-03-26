import jwt_decode from 'jwt-decode';

export const getInfo = () => {
 
const a =  localStorage.getItem('currentUser')
let jwtDecode =jwt_decode(a)
    return jwtDecode ;
  };