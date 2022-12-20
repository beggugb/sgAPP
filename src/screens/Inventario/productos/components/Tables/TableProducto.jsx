import React from "react";


const TableProducto = ({data,setIndicador,indicador}) =>{
    return(   
    <div className="flex-1 mx-auto border min-h-max border-gray-200 p-1 rounded">
        <table className="border-collapse table-fixed text-xs">           
            <thead>
                <tr>                    
                    <th className="w-1/12 border border-slate-300 bg-gray-200">#</th>                    
                    <th className="w-1/6 border border-slate-300 bg-gray-200">Código</th>
                    <th className="w-3/5 border border-slate-300 bg-gray-200">Nombre</th>
                    <th className="w-1/3 border border-slate-300 bg-gray-200">Categoría</th>
                    <th className="w-1/3 border border-slate-300 bg-gray-200">Industria</th>                    
                </tr>
            </thead>
            {data.length > 0 ?
            <tbody>
                { data.map((item,index) =>(
                <tr key={index} className="hover:bg-gray-100 h-8">
                    <td className="border pl-1">
                        <input type="checkbox" 
                          onChange={() => { setIndicador(item.id) }} 
                          checked={ item.id === indicador ? true : false}
                          />
                    </td>                    
                    <td className="border pl-1">{item.codigo}</td>
                    <td className="border pl-1">{item.nombre}</td>
                    <td className="border pl-1">{item.categoria.nombre}</td>                    
                    <td className="border pl-1">{item.industria.nombre}</td>                    
                </tr>
                ))}
            </tbody>
            : 
            <tbody>                
                <tr>                    
                   <td colSpan={5}>Sin resultados</td>                                        
                </tr>                
            </tbody>
            }           
        </table> 
        </div>       
    )
}

export default TableProducto;