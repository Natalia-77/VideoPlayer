import axios, { AxiosError } from 'axios';
import { Dispatch } from 'react';
import {
       IRegister,
       RegisterAction,
       RegisterActionTypes } from './types';
       import http from '../../../http-common';



  
  export const RegisterNewUser=(data:IRegister)=> async(dispatch:Dispatch<RegisterAction>)=> {

    try{
        dispatch({type:RegisterActionTypes.REGISTER_START});
        const response = await http.post("api/account/register",data);
        const token = response.data.token;
        dispatch({
            type:RegisterActionTypes.REGISTER_SUCCESS,
            payload:token
        });
        
        
      
    }

    

}

