
export enum RegisterActionTypes {
    REGISTER_START = "REGISTER_START",
    REGISTER_SUCCESS = "REGISTER_SUCCESS",
}

export interface RegisterState {
	data: string,
	isRegisterd:boolean,
  loader:boolean
}

export interface IRegisteredUser{
  name:string,
  email: string
}

export interface IRegister {
    email: string,
    name: string,     
    password: string,
    confirmPassword: string
  }

  export type RegisterError = {
    email: Array<string>, 
    name:Array<string>,
    password: Array<string>, 
    confirmPassword: Array<string> 
  };
  
  export type RegisterErrors = {
    errors: RegisterError,
    status: number 
  };

  export interface RegisterStartAction {
    type: RegisterActionTypes.REGISTER_START;
  }
  
  export interface RegisterSuccessAction {
    type: RegisterActionTypes.REGISTER_SUCCESS;
    payload: string;
  }

  export type RegisterAction =
  | RegisterStartAction
  | RegisterSuccessAction
;