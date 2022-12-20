import React from "react";
import { Routes, Route, Outlet, Link} from 'react-router-dom'

import PaquetesView from './Paquetes/Inicio'
import UsuariosView from './Usuarios/Inicio'

const Inicio = () => {
    return (         
            <div className="h-2/4 flex-1 mx-auto  p-2 mb-10">       
                <div className="flex border-b-4 text-xs font-bold text-white flex-row">                       

                <Link to={"/admin/configuracion/paquetes/list"}>
                    <button className="h-7 w-28 text-center rounded-t-md bg-sky-400 hover:bg-orange-300 focus:bg-orange-300 mr-1 pt-1">                                          
                       Paquetes
                    </button>
                </Link>
                <Link to={"/admin/configuracion/usuarios/list"}>
                    <button className="h-7 w-28 text-center rounded-t-md bg-sky-400 hover:bg-orange-300 focus:bg-orange-300 mr-1 pt-1">
                       Usuarios
                    </button>
                </Link>
                
                    
                </div>              
                <Outlet/>
                <Routes>                
                <Route path="/" element={<PaquetesView/>}/>                   
                <Route path="paquetes/list" element={<PaquetesView />}/>                                            
                <Route path="usuarios/list" element={<UsuariosView />}/> 
       
            </Routes>
    
            </div>    
     );
}
 
export default Inicio;