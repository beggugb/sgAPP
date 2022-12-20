import { api } from '../../helpers/api'

export const inventarioService = {    
    getData,   
    getItem,
    getItems,
    getLista,
    getList,    
    postSearch, 
    postSearchs,
    postAdd,        
    putUpdate,
    putUpdates,
    getCopy,
    putFile,
    dDelete,
    putAprobar,
    items
}
function items(payload,dato){
  const requestOptions={
    method: "POST",
    headers: {  "Content-Type": "application/json" },
    body: JSON.stringify(dato),
  }
  return fetch(`${api}/${payload}/items`, requestOptions).then(handleResponse);
}

function putAprobar(payload, dato, tipo){
  const requestOptions = {
    method: "PUT",
    headers: {  "Content-Type": "application/json" },
    body: JSON.stringify(dato),
  };
  return fetch(`${api}/${payload}/aprobar/${dato.id}/${tipo}`, requestOptions).then(
    handleResponse
  );
}

function getLista(payload,pky){
  const requestOptions={
    method: "GET",
    headers: {  "Content-Type": "application/json" },
  }
  return fetch(`${api}/${payload}/listas/items/${pky}`, requestOptions).then(handleResponse);
}

function getItems(payload){
  const requestOptions={
    method: "GET",
    headers: {  "Content-Type": "application/json" },
  }
  return fetch(`${api}/${payload}/listas/items/`, requestOptions).then(handleResponse);
}

function getList(payload,dato){
  const requestOptions = {
    method: "POST",
    headers: {  "Content-Type": "application/json" },
    body: JSON.stringify(dato),
  }
  return fetch(`${api}/${payload}/lista/items`, requestOptions).then(handleResponse);
}

function dDelete(payload,pky){
  const requestOptions = {
    method: "DELETE",
    headers: {  "Content-Type": "application/json" },
  };
  return fetch(`${api}/${payload}/${pky}`, requestOptions)
  .then(handleResponse);
}

function getCopy(payload,pky){
  const requestOptions={
    method: "GET",
    headers: {  "Content-Type": "application/json" },
  }
  return fetch(`${api}/${payload}/item/copiar/${pky}`, requestOptions).then(handleResponse);
}

function postSearch(payload,dato){
  const requestOptions ={
    method: "POST",
    headers: {  "Content-Type": "application/json" },
    body: JSON.stringify(dato),
  };
  return fetch(`${api}/${payload}/search/lista`,requestOptions)
  .then(handleResponse);
}

function postSearchs(payload,dato){
  const requestOptions ={
    method: "POST",
    headers: {  "Content-Type": "application/json" },
    body: JSON.stringify(dato),
  };
  return fetch(`${api}/${payload}/search/items`,requestOptions)
  .then(handleResponse);
}

function putFile(payload,dato,datoId){
  const requestOptions = {
    method: "PUT",
 
    body: dato
  };
  return fetch(
    `${api}/file/${payload}/item/${datoId}`,
    requestOptions
  ).then(handleResponse);
}

function putUpdates(payload, dato, pky, tipo){
  const requestOptions = {
    method: "PUT",
    headers: {  "Content-Type": "application/json" },
    body: JSON.stringify(dato),
  };
  return fetch(`${api}/${payload}/${pky}/${tipo}`, requestOptions).then(
    handleResponse
  );
}
function putUpdate(payload, dato, tipo){
  const requestOptions = {
    method: "PUT",
    headers: {  "Content-Type": "application/json" },
    body: JSON.stringify(dato),
  };
  return fetch(`${api}/${payload}/${dato.id}/${tipo}`, requestOptions).then(
    handleResponse
  );
}


function getItem(payload,pky){
  const requestOptions = {
    method: "GET",
    headers: {  "Content-Type": "application/json" },
  };
  return fetch(`${api}/${payload}/item/${pky}`, requestOptions)
  .then(handleResponse); 
}

function postAdd(payload,dato,tipo){

    const requestOptions = {
      method: "POST",
      headers: {  "Content-Type": "application/json" },
      body: JSON.stringify(dato),
    };
    return fetch(`${api}/${payload}/${tipo}`,requestOptions)
    .then(handleResponse);     
}
function getData(payload,page,num,prop,orden){
    const requestOptions  = {
        method: "GET",
       
    }
    return fetch(`${api}/${payload}/data/${page}/${num}/${prop}/${orden}`,
    requestOptions).then(handleResponse);
}


function handleResponse(response) {
    return response.text().then((text) => {
      const data = text && JSON.parse(text);
      if (!response.ok) {      
        const error = (data && data.message) || response.statusText;
        return Promise.reject(error);
      }
  
      return data;
    });
  }