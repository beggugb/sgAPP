const DetalleVentas = ({item}) => {    
    return ( 
        <div className="h-1/12 p-1 grid grid-cols-4 text-[11px] text-white font-bold bg-stone-500">            
            <div className="text-center">
            Cantidad:
            </div>
            <div className="text-center">
            {item.nroItems}
            </div>
            <div className="text-center">
            Total:
            </div>
            <div className="text-center">
            {new Intl.NumberFormat('es-BO',{style: "currency",currency:'BOB',minimumFractionDigits: 2}).format(item.totalGeneral)}
            </div>
        </div>     
     );
}
 
export default DetalleVentas;



