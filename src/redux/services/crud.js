import { api } from "../../helpers/api";

export const crud= { 
  getData, 
  searchList,
  getItem,
  putUnit,
  putList,
  createUnit,
  createList,
  getList,
  postUnit,
  postList,
  deleteList,
  getDetalle,
  getNota,
  pagar,
  getListDetalle,
  cajaItems,
  informes 
};
function informes(payload, dato) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dato),
  };

  return fetch(`${api}/informes/${payload}`, requestOptions).then(handleResponse);
}
function putList(payload, dato) {
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dato),
  };
  return fetch(`${api}/${payload}/${dato.id}`, requestOptions).then(
    handleResponse
  );
}

function createList(payload, dato) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dato),
  };

  return fetch(`${api}/${payload}`, requestOptions).then(handleResponse);
}

function cajaItems(payload,dato) {
  const requestOptions = {
    method: "GET"    
  };

  return fetch(`${api}/${payload}/items/${dato}`, requestOptions).then(handleResponse);
}

function getListDetalle(payload, page,num,dato) {
  const requestOptions = {
    method: "GET",    
  };
  return fetch(`${api}/${payload}/listadetalle/${page}/${num}/${dato}`, requestOptions).then(handleResponse);
}
function pagar(payload, dato) {
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dato),
  };
  return fetch(`${api}/${payload}/${dato.id}`, requestOptions).then(
    handleResponse
  );
}

function getNota(payload, pky) {
  const requestOptions = {
    method: "GET",    
  };
  return fetch(`${api}/${payload}/${pky}`, requestOptions).then(handleResponse);
}
function getDetalle(payload, page,num,dato) {
  const requestOptions = {
    method: "GET"    
  };
  return fetch(`${api}/${payload}/listadetalle/${page}/${num}/${dato}`, requestOptions).then(handleResponse);
}

function deleteList(payload, pky) {
  const requestOptions = {
    method: "DELETE",    
  };
  return fetch(`${api}/${payload}/${pky}`, requestOptions).then(handleResponse);
}


function postList(payload, dato) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dato),
  };

  return fetch(`${api}/${payload}`, requestOptions).then(handleResponse);
}
function postUnit(payload, dato) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dato),
  };

  return fetch(`${api}/${payload}/registro`, requestOptions).then(handleResponse);
}

function getList(payload){
  const requestOptions={
    method: "GET",
    headers: { "Content-Type": "application/json" },
  }
  return fetch(`${api}/${payload}/lista`, requestOptions).then(handleResponse);
}
function createUnit(payload, dato) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dato),
  };
  return fetch(`${api}/${payload}/registro`, requestOptions).then(handleResponse);
}

function putUnit(payload, dato) {
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dato),
  };
  return fetch(`${api}/${payload}/${dato.id}`, requestOptions).then(
    handleResponse
  );
}
function getItem(payload, tipo, pky) {
  const requestOptions = {
    method: "GET",    
  };
  return fetch(`${api}/${payload}/${pky}/${tipo}`, requestOptions).then(handleResponse);
}
function searchList(payload, dato) {  
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dato),
  };
  return fetch(`${api}/${payload}/search`, requestOptions).then(handleResponse);
}

function getData(payload, page,num,prop,orden) {
    const requestOptions = {
      method: "GET",      
    };
    return fetch(`${api}/${payload}/listas/${page}/${num}/${prop}/${orden}`, requestOptions)
    .then(handleResponse);
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
  