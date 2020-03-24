let apiURL ;


const expressPort = 5000;
const apiUrls = {
    //http://localhost:5000/emp/
    development:`http://localhost:${expressPort}/api`,
    production:`http://aqueous-atoll-85096.herokuapp.com`,
} 

if( window.location.hostname === 'localhost' ){
    apiURL = apiUrls.development;
} else{
    apiURL = apiUrls.production;
}

export default apiURL; 