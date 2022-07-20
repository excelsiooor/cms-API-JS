import React from "react";
import { baseURL } from "../Global/globalValues";

export default class API extends React.Component{

  static async getAll() {
    const responce = await fetch( baseURL + '/main/movies', {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
    });
    const movies = await responce.json();
    console.log(movies);
    return movies;
  }

  static async getMovieById(path) {
    const responce = await fetch( baseURL + path, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
    });
    const movieById = await responce.json();
    console.log(movieById);
    return movieById;
  }

  static async getStatus() {
    const responce = await fetch( baseURL + '/admin/movies/statuses', {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
    });
    const statuses = await responce.json();
    console.log(statuses);
    return await statuses;
  }

  static async postStatus ( data ) {
    const response = await fetch(baseURL + '/admin/movies/statuses', {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      body: data
    });
    console.log('postStatus>>>' + response);
    return await response.json();
  }

  static async postMovie ( data ) {
    const response = await fetch(baseURL + '/admin/movies', {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      body: data
    });
    console.log('postMovie' + response);
    return await response.json();
  }

  static async registration ( data ) {
    const response = await fetch(baseURL + '/registration', {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
        'Content-Type': 'application/json'
        },
      body: JSON.stringify(data)
    });
    return response/* .json() */;
  }

  static async logIn ( data ) {
    const response = await fetch(baseURL + '/login', {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      credentials: 'include',
      body: data,
    });
    return response;
  }

}