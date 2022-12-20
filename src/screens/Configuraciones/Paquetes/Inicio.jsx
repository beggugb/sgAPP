import React from 'react'
import PaqueteForm from '../Paquetes/component/PaqueteForm'
import PaqueteTable from '../Paquetes/component/PaqueteTable'

const Inicio = () => {
 return ( 
    <div className="h-2/4 flex-1 mx-auto p-2 mb-10 border">  
    <div className="h-5 text-sm font-bold">                                  
       Gestión de Paquetes             
    </div>
    <div className="flex flex-row mx-auto mt-1">                      
       <div className="w-3/12 border p-4"> 
        <PaqueteForm/>
       </div>
       <div className="w-3/4 border ml-1">
           <div className="p-1">
           <PaqueteTable/>    
            </div>
       </div>
    </div>                
</div>     
 );
}
 
export default Inicio;