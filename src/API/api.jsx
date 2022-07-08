import React from "react";

const baseURL = 'http://134.249.102.244:8080';

export default class API extends React.Component{

  static async getAll() {
    const responce = await fetch( baseURL + '/main/movies', {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
    });
    const films = await responce.json()
    console.log(films);
    return films
  }

  static async postData( data ) {
    const response = await fetch(baseURL + '/registration', {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
        'Content-Type': 'application/json'
        },
      body: JSON.stringify(data)
    });
    return await response.json();
  }

}

// async function postData(url = '', data = {}) {
//     const response = await fetch(url, {
//       method: 'POST', // *GET, POST, PUT, DELETE, etc.
//         headers: {
//         'Content-Type': 'application/json'
//         },
//       body: JSON.stringify(data)
//     });
//     return await response.json();
// }

// export function logIn (data){
//     postData('http://134.249.102.244:8080/registration', data)
//     .then((data) => {
//       console.log(data);
//     });
// }

