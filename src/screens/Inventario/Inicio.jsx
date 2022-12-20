import React from "react";
import { Routes, Route, Outlet, Link} from 'react-router-dom'
import ProductosView from './productos/ProductosView'
import ProductosEdit from './productos/components/Screens/ProductoEdit'
import Categorias from './categorias/CategoriasView'
import Marcas from './marcas/MarcasView'
import Modelos from './modelos/ModelosView'
import Tipos from './tipos/TiposView'
import Origenes from './origenes/OrigenesView'
import Volumenes from './volumenes/VolumenesView'
import Unidades from './unidades/UnidadesView'
import Industrias from './industrias/IndustriasView'

const Inicio= () => {

    return ( 
        <div className="h-2/4 flex-1 mx-auto  p-2 mb-10">       
            <div className="flex border-b-4 text-xs font-bold text-white flex-row">       
            
            <Link to={"/admin/inventario/productos/list"}>
                <button className="h-7 w-28 text-center rounded-t-md bg-sky-400 hover:bg-orange-300 focus:bg-orange-300 mr-1 pt-1 ">
                   Productos
                </button>
            </Link>
            <Link to={"/admin/inventario/categorias/list"}>
                <button className="h-7 w-28 text-center rounded-t-md bg-sky-400 hover:bg-orange-300 focus:bg-orange-300 mr-1 pt-1">                                          
                   Categorias
                </button>
            </Link>
            <Link to={"/admin/inventario/marcas/list"}>
                <button className="h-7 w-28 text-center rounded-t-md bg-sky-400 hover:bg-orange-300 focus:bg-orange-300 mr-1 pt-1">
                   Marcas
                </button>
            </Link>
            <Link to={"/admin/inventario/origenes/list"}>
                <button className="h-7 w-28 text-center rounded-t-md bg-sky-400 hover:bg-orange-300 focus:bg-orange-300 mr-1 pt-1">
                   Origenes
                </button>
            </Link>
            <Link to={"/admin/inventario/volumenes/list"}>
                <button className="h-7 w-28 text-center rounded-t-md bg-sky-400 hover:bg-orange-300 focus:bg-orange-300 mr-1 pt-1">                                          
                   Volumenes
                </button>
            </Link>
            <Link to={"/admin/inventario/unidades/list"}>
                <button className="h-7 w-28 text-center rounded-t-md bg-sky-400 hover:bg-orange-300 focus:bg-orange-300 mr-1 pt-1">
                   Unidades
                </button>
            </Link>
            <Link to={"/admin/inventario/industrias/list"}>
                <button className="h-7 w-28 text-center rounded-t-md bg-sky-400 hover:bg-orange-300 focus:bg-orange-300 mr-1 pt-1">
                   Industrias
                </button>
            </Link>


            </div>              
            <Outlet/>
            <Routes>                
            <Route path="/" element={<ProductosView />}/>                   
            <Route path="productos/list" element={<ProductosView />}/>                   
            <Route path="productos/new" element={<ProductosEdit />}/>             
            <Route path="categorias/list" element={<Categorias />}/> 
            <Route path="marcas/list" element={<Marcas />}/>
            <Route path="modelos/list" element={<Modelos />}/>
            <Route path="tipos/list" element={<Tipos />}/>
            <Route path="origenes/list" element={<Origenes />}/>
            <Route path="volumenes/list" element={<Volumenes />}/>
            <Route path="unidades/list" element={<Unidades />}/>
            <Route path="industrias/list" element={<Industrias />}/>
        </Routes>

        </div>
     
     );
}
 
export default Inicio;
