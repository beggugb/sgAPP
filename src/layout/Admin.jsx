import React,{useEffect,useState} from "react";
import { getModulos } from '../routes'
import { Outlet, Routes, Route, Link  } from 'react-router-dom'
import Dashboard from '../screens/Inicio/Dashboard'
import Clientes from '../screens/Clientes/ClientesInicio'
import Membresia from '../screens/Membresias/MembresiaInicio'
import Nota from '../screens/Notas/NotasInicio'
import Caja from '../screens/Cajas/CajasInicio'
import Informes from "../screens/Informes/InformesView";
import Registros from "../screens/Registro/RegistroView"
import Reportes from "../screens/Reportes/ReportesView";
import Configuracion from "../screens/Configuraciones/Inicio"
import Inventario from "../screens/Inventario/Inicio"
import Adquisiciones from "../screens/Adquisiciones/InicioView"
import CajaItems from "../screens/CajasItems/CajasItemsView"
import Tpdv from "../screens/Tpdv/Inicio"
import Membresias from "../screens/Mem/MemInicio"



import { AuthContext }  from '../auth/auth-context'
import NoMatch from '../layout/NoMatch'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOut, faUser } from "@fortawesome/free-solid-svg-icons";

function Admin(){  
  const { onLogout } = React.useContext(AuthContext)
  const [modulos, setmodulos] = useState([]);
  let us = JSON.parse(localStorage.getItem('@usuarioFitt')) 
 
  useEffect(() => {
      let kk = getModulos(us.rolId)
      setmodulos(kk)
  }, []);



  return(
    <div className="flex-1 mx-auto h-3/4">
      <nav className="h-10 flex bg-sky-600 border-b shadow-lg mb-2">   
        <div className="w-2/12 p-2 bg-gray-600 text-gray-200 font-bold">
	  POWER ZONE VIP          
        </div>
        <div className="w-7/12 flex-row flex uppercase pl-1">
          { modulos.map((prop)=>(
              <Link 
                to={prop.layout+prop.path}
                className="h-11 p-1"        
                key={prop.key}> 
              <p className="text-[11px] p-2 text-white  hover:bg-sky-500 ">{prop.name}</p>
              </Link>              
          ))}
        </div>
        <div className="w-2/12 flex-row flex p-3">
            <FontAwesomeIcon icon={faUser} size="xs" color="#fff"  />
            <span className="pl-5 text-xs text-gray-100">{us.nombre}</span> 
        </div>
        <div className="w-1/12 flex p-3 justify-end">
            <button
              className="shadow-base w-10 h-5 bg-rose-400 rounded-md text-sm font-bold"
              onClick={() => onLogout()}>
              <FontAwesomeIcon icon={faSignOut} size="1x" color="#fff"  />
            </button>
        </div>
      </nav>
      <Outlet/>
     
      <Routes>
        <Route path="inicio" element={<Dashboard />}/> 
        <Route path="clientes" element={<Clientes />}/> 
        <Route path="cajas" element={<Caja />}/>
        <Route path="informes" element={<Informes />}/>        
        <Route path="reportes" element={<Reportes />}/>
        <Route path="registros" element={<Registros />}/>
        <Route path="tpdv" element={<Tpdv />}/>
        <Route path="configuracion/*" element={<Configuracion />}/>                
        <Route path="membresia/:clienteId" element={<Membresia />}/>        
        <Route path="cajasitems/:cajaId" element={<CajaItems />}/>
        <Route path="notas/:notaId" element={<Nota />}/> 
        <Route path="inventario/*" element={<Inventario />}/>        
        <Route path="adquisiciones/*" element={<Adquisiciones />}/>
        <Route path="membresias" element={<Membresias />}/>
   
        <Route path="*" element={<NoMatch />} /> 
      </Routes>      
    </div>  
    )
}
export default Admin;

