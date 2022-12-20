import { api } from "../../helpers/api";

export const tarea= {   
  getList,
  postAdd,
  postSearch,
  putUpdate
  
};


function getList(payload,dato){
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dato),
    }
    return fetch(`${api}/${payload}/lista/items`, requestOptions).then(handleResponse);
  }

  function postAdd(payload,dato,tipo){
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dato),
    };
    return fetch(`${api}/${payload}/${tipo}`,requestOptions)
    .then(handleResponse);     
}

function postSearch(payload,dato){
    const requestOptions ={
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dato),
    };
    return fetch(`${api}/${payload}/search/lista`,requestOptions)
    .then(handleResponse);
  }

  function putUpdate(payload, dato, tipo){
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dato),
    };
    return fetch(`${api}/${payload}/${dato.id}/${tipo}`, requestOptions).then(
      handleResponse
    );
  }

  function handleResponse(response) {
    return response.text().then((text) => {
      const data = text && JSON.parse(text);
      if (!response.ok) {
        if (response.status === 401) {
          // auto logout if 401 response returned from api
          // logout();
          //location.reload(true);
        }
  
        const error = (data && data.message) || response.statusText;
        return Promise.reject(error);
      }
  
      return data;
    });
  }
  