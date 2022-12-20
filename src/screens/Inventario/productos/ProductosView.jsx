import React from "react";
import ProductosTable from "./components/Screens/ProductosTable";
import ProductoItem from "./components/Views/ProductoItem"

const ProductosView= () => {
    const [showModal, setShowModal] = React.useState(false);
    return ( 
        <div className="h-550">       
            <div className="h-6 flex-1 mx-auto pl-2 text-sm text-gray-500 font-bold">       
               Gestión de Productos 
            </div>
            <ProductosTable  setShowModal={setShowModal}/>    
            {showModal &&
                <ProductoItem
                setShowModal={setShowModal}
                />
            }               
        </div>
     
     );
}
 
export default ProductosView;