import React from "react";
import { Routes, Route, Outlet, Link} from 'react-router-dom'

import ProveedoresView from './proveedores/components/Screens/ProveedoresTable'
import ProveedoresEdit from './proveedores/components/Screens/ProveedorEdit'
import ComprasView from './compras/ComprasView'
import CompraEdit from './compras/components/Screens/ComprasEdit'

const InicioView = () =>{

    return(
        <div className="h-550 flex-1 border">       
        <div className="flex text-xs font-bold text-white flex-row">       
        
        <Link to={"/admin/adquisiciones"}>
            <button className="h-6 w-28 text-center rounded-t-md bg-sky-400 hover:bg-orange-300 focus:bg-orange-300 mr-1 pt-1 ">
              Compras
            </button>
        </Link>
        <Link to={"/admin/adquisiciones/proveedores/list"}>
            <button className="h-6 w-28 text-center rounded-t-md bg-sky-400 hover:bg-orange-300 focus:bg-orange-300 mr-1 pt-1">                                          
               Proveedores
            </button>
        </Link>

        </div>              
        <Outlet/>
        <Routes>                
        <Route path="/" element={<ComprasView />}/>                   
        <Route path="compras/list" element={<ComprasView />}/>                     
        <Route path="compras/new" element={<CompraEdit />}/> 
        <Route path="proveedores/list" element={<ProveedoresView />}/>
        <Route path="proveedores/new" element={<ProveedoresEdit />}/>                   
        
    </Routes>

    </div>
    )
}

export default InicioView