import axios from "axios";

export const urlBackend = 'https://startss.tk/';
export default axios.create({
  baseURL: `${urlBackend}`,
  headers: {
    "Content-type": "application/json"
  }
});