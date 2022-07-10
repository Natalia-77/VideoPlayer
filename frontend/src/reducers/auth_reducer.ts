
import { 
    RegisterState,
    RegisterAction,
    RegisterActionTypes } from "../components/account/register/types"

const initialState:RegisterState={

    data:'',
    isRegisterd:false,
    loader:false

};

export const registerReducer = ( state = initialState, action: RegisterAction): RegisterState => {

switch (action.type) {
  case RegisterActionTypes.REGISTER_START: {
    return {
      ...state,
      loader: true,
    };
  }

  case RegisterActionTypes.REGISTER_SUCCESS: {
    return {
      ...state,
      loader: false,
      isRegisterd:true,
      data:action.payload
    };
  }
}

};