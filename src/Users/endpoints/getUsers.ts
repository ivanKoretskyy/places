import { ServerResponse } from "../../common";

export interface User {
    id: string;
    name: string;
    email: string;
    address: {
      street: string;
      suite: string;
      city: string;
      zipcode: string;
      geo: {
        lat: string;
        lng: string;
      }
    },
  }


  export type Func = () => Promise<ServerResponse<User[]>>

  export const getUsers: Func = () => {

        return fetch('https://jsonplaceholder.typicode.com/users')
          .then(res => res.json())
          .then(data => ({data: data, error: null}))
          .catch(err => ({error: err, data: null}))
   
  }
