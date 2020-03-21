let apiURL ;


const expressPort = 5000;
const apiUrls = {
    //http://localhost:5000/emp/
    development:`http://localhost:58435/api`,
    production:`https://enjaz-0011.herokuapp.com/api`,
} 

if( window.location.hostname === 'localhost' ){
    apiURL = apiUrls.development;
} else{
    apiURL = apiUrls.production;
}

export default apiURL; 