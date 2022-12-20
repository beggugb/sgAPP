import React, { useState } from 'react';
import { usuarioActions } from '../../redux/actions/usuario'
import { useSelector, useDispatch } from 'react-redux'


const  Login = () => {
    const dispatch = useDispatch()
    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')
    const { bandera }= useSelector(state => state.usuario)

    const submitHandle = event => {       
        event.preventDefault()        
        let us = {
            username : username,
            password: password
        }
        dispatch(usuarioActions.login(us))
    }


    return ( 
        <div className="flex min-h-screen p-20 justify-center">               
            <div className="h-96 w-350 p-7 border rounded-l-md shadow-md border-gray-300 content-center">                       
            
            <form onSubmit={submitHandle} className="h-72 p-6 border rounded-lg">
                <h5 className="text-center text-stone-500 font-bold">Iniciar sessión</h5>
                <div className="mt-3">
                <p className="h-7 text-stone-500">Username</p>
                    <input 
                    value={username}
                    autoComplete="off"
                    onChange={(e) =>  { setusername(e.target.value)}}
                    type="text" 
                    className={ bandera === 1 ? "text-[10px] w-full h-9 mt-0 block border-4 border-red-300 rounded-md" : "text-[10px] w-full h-9 mt-0 block border border-gray-400 rounded-md"}
                    />
                </div>
                
                <div className="mt-5">
                <p className="h-7 text-stone-500">Password</p>
                    <input 
                    onChange={(e) =>  { setpassword(e.target.value)}}
                    autoComplete="new-password" 
                    value={password}
                    type="password" 
                    className={ bandera === 3 ? "text-[10px] w-full h-9 mt-0 block border-4 border-red-300 rounded-md" : "text-[10px] w-full h-9 mt-0 block border border-gray-400 rounded-md"}
                    />
                </div>    
                <button 
                    type="submit" 
                    className="w-full bg-sky-600  mt-5 rounded-md h-10 text-white font-bold">
                    Ingresar
                </button>

            </form> 

            <p className="h-3 mt-4 text-[10px] font-bold text-gray-400">Desarrollado por Beggu'Gnu</p>
            <p className="h-3 text-[10px] font-bold text-gray-400">www.beggubo.com</p>
            </div>   
            <div className="h-96 w-350 bg-black rounded-r-md shadow-md flex items-center justify-center"> 
                <img
                    alt="..."
                    className="h-52"
                    src={require("../../assets/img/logo.png")}
                />                
            </div>            
        </div>               
     );
}
 

export default Login ;