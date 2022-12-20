import { api } from "../../helpers/api";

export const imagenService = {
  uploadCliente,  
  uploadArticulo
};

function uploadCliente(payload, dato, datoId) {
  const requestOptions = {
    method: "PUT",
    body: dato,
  };
  return fetch(
    `${api}/${payload}/cliente/item/${datoId}`,
    requestOptions
  ).then(handleResponse);
}

function uploadArticulo(payload, dato, datoId) {
  const requestOptions = {
    method: "PUT",    
    body: dato,
  };
  return fetch(
    `${api}/${payload}/articulo/item/${datoId}`,
    requestOptions
  ).then(handleResponse);
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
