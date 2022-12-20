import { api } from '../../helpers/api'
/*'@usuarioFitt*/
export const usuarioService = {
    login,
    logout
}

function login (dato) {    
    const requestOptions = {
        method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dato),
    };
    return fetch(`${api}/usuarios/login`,requestOptions)
    .then(handleResponse)
    .then((response)=>{                
        if(response.user.usuario){
            let resu = response.user            
            localStorage.setItem("@usuarioFitt",JSON.stringify(resu.usuario))
            localStorage.setItem("@tokenFitt",JSON.stringify(resu.token))                        

        }
        return response
    })
}

function logout() {
    localStorage.removeItem("@usuarioFitt")
    localStorage.removeItem("@tokenFitt")                
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