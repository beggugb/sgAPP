import React from 'react';
import { useSelector } from 'react-redux'
import Moment from 'react-moment'

function CajaDetalle() {              
  const item  = useSelector(state => state.cajas.item)  

  return (    
    <>           
    <div className="p-1 w-3/12">    
    <h5 className="border text-white font-bold text-[12px] p-2 rounded-t-lg bg-sky-500">Datos Caja </h5>
    <div className="border border-gray-300 rounded-b-lg p-2 text-xs text-gray-600 shadow-md">
      <h5 className="font-bold">Nº:</h5>                 
      <h5 className="ml-2 border-b-2">{item.id}</h5>           
      <h5 className="font-bold">Fecha:</h5>                 
      <h5 className="ml-2 border-b-2"><Moment format="DD/MM/YYYY">{item.createdAt}</Moment></h5>           
      <h5 className="font-bold">Inicial:</h5>         
      <h5 className="ml-2 border-b-2">{new Intl.NumberFormat('de-DE',{style: "currency",currency:"BOB"}).format(item.montoInicial)}</h5>
      <h5 className="font-bold">Ingresos:</h5>         
      <h5 className="ml-2 border-b-2">{new Intl.NumberFormat('de-DE',{style: "currency",currency:"BOB"}).format(item.montoIngreso)}</h5>
      <h5 className="font-bold">Egresos:</h5>         
      <h5 className="ml-2 border-b-2">{new Intl.NumberFormat('de-DE',{style: "currency",currency:"BOB"}).format(item.montoEgreso)}</h5>
      <h5 className="font-bold">Final:</h5>         
      <h5 className="ml-2 border-b-2">{new Intl.NumberFormat('de-DE',{style: "currency",currency:"BOB"}).format(item.montoFinal)}</h5>
     
    </div>         
    </div>     
  </> 

  );
}

export default CajaDetalle