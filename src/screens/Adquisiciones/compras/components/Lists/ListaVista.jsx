import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";

const ListaVista = ({item, index}) =>{    
    return(
        <>            
            <td>{item.codigo}</td>
            <td>{item.nombre}</td>
            <td>{item.categoria}</td>
            <td>{item.marca}</td>
            <td>{new Intl.NumberFormat('es-BO',{style: "currency",currency:"BOB",minimumFractionDigits: 2}).format(item.valor)}</td>
            <td>{item.cantidad}/{item.unidad} </td>            
            <td>{new Intl.NumberFormat('es-BO',{style: "currency",currency:"BOB",minimumFractionDigits: 2}).format(item.subTotal)}</td>         
        </>                        
    )
}
export default ListaVista