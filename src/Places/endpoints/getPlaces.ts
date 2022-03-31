import { ServerResponse } from "../../common";

export interface Place {
    id: string;
    title: string;
    image: string;
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

  export type Func = () => Promise<ServerResponse<Place[]>>

  export const getPlaces: Func = () => {

        return fetch('https://jsonplaceholder.typicode.com/users')
          .then(res => res.json())
          .then(data => ({data: data, error: null}))
          .catch(err => ({error: err, data: null}))
   
  }
