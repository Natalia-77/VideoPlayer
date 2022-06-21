import http from '../http-common';

 const setToken = (token:string) => {
	if (token) {
		http.defaults.headers.common['Authorization'] = `Bearer ${token}`;
	}
	else {
		delete http.defaults.headers.common["Authorization"];
	}  
}

export default setToken;