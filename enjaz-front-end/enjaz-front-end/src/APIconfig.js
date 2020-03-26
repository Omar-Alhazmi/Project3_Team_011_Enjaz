let apiURL ;


const expressPort = 58435;
const apiUrls = {
    //http://localhost:5000/emp/
    development:`http://localhost:${expressPort}/api`,
    production:`https://enjaz-0011.herokuapp.com/api`,
} 

if( window.location.hostname === 'localhost' ){
    apiURL = apiUrls.development;
} else{
    apiURL = apiUrls.production;
}

export default apiURL; 