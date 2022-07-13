import { Dispatch } from "react";
import setToken from "../helpers/setTokenAuthorize";
import {
  RegisterAction,
  IRegisteredUser,
} from "../components/account/register/types";

export const setUserInLocalStorage = (
  token: string,
  user: IRegisteredUser,
  dispatch: Dispatch<RegisterAction>
) => {

  setToken(token);  
  localStorage.setItem("user", token);

  dispatch({
    type: AuthActionTypes.LOGIN_AUTH,
    payload: user,
  });
};
