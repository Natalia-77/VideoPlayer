import axios, { AxiosError } from 'axios';
import { Dispatch } from 'react';
import {
       IRegister,
       RegisterAction,
       RegisterActionTypes } from './types';
       import http from '../../../http-common';

import {setUserInLocalStorage} from '../../../helpers/setUserInLocalStorage';

  
  export const RegisterNewUser=(data:IRegister)=> async(dispatch:Dispatch<RegisterAction>)=> {

    try{
        dispatch({type:RegisterActionTypes.REGISTER_START});
        const response = await http.post("api/account/register",data);
        const token = response.data.token;
        dispatch({
            type:RegisterActionTypes.REGISTER_SUCCESS,
            payload:token
        });
        setUserInLocalStorage(token,dispatch);
        return Promise.resolve(token);
        
      
    }

    

}

