import { Dispatch } from "react";
import setToken from '../helpers/setTokenAuthorize';
import {RegisterAction} from '../components/account/register/types';

export const setUserInLocalStorage=(token:string,dispatch:Dispatch<RegisterAction>)=>{

    setToken(token);
    localStorage.setItem('user', token);    
   
    dispatch({
        type: 
        payload: 
      });

}