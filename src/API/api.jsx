import React from "react";
import { baseURL } from "../Global/globalValues";

export default class API extends React.Component{

  static async getAll() {
    const responce = await fetch( baseURL + '/main/movies', {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
    });
    const films = await responce.json()
    console.log(films);
    return films
  }

  static async registration ( data ) {
    const response = await fetch(baseURL + '/registration', {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
        'Content-Type': 'application/json'
        },
      body: JSON.stringify(data)
    });
    return await response.json();
  }

  static async postMovie ( data ) {
    const response = await fetch(baseURL + '/admin/movies', {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      body: data
    });
    console.log('postMovie' + response);
    return await response.text();
  }

}

