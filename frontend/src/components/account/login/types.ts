export enum AuthActionTypes {
    LOGIN_AUTH = "LOGIN_AUTH",    
    LOGIN_AUTH_ERROR = "LOGIN_AUTH_ERROR",
    LOGOUT_AUTH = "LOGOUT_AUTH",
  }
  
  export interface IUser {
      email: string,
      name: string,
      roles: string
  }
  
  export interface AuthState {
    user: IUser;
    isAuth: boolean;
  }  

  export interface ILogin {
    email: string
    password: string
    
  }
  
  export interface ILoginError {
    password: Array<string>
    email: Array<string>
    
  }
  
  export interface ILoginErrors {
    errors: ILoginError   
  }
  
  export interface LoginAuthAction {
      type: AuthActionTypes.LOGIN_AUTH,
      payload: IUser
  }
  
  
  export interface LoginAuthErrorAction {
      type: AuthActionTypes.LOGIN_AUTH_ERROR,
      payload: string
  }
  export interface LogoutAuth {
      type: AuthActionTypes.LOGOUT_AUTH
  }
  
  export type AuthAction =
    | LoginAuthAction    
    | LoginAuthErrorAction
    | LogoutAuth;
  
  