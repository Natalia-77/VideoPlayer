import http from '../../http-common';

class DataService {

    getdata() {
        return http.get("weatherforecast");        
    }  
    
}

export default new DataService();