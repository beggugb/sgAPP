import React from "react";
import ComprasTable from "./components/Screens/ComprasInicio";
import CompraView from "./components/View/CompraView"

const ComprasView= () => {
    const [showModal, setShowModal] = React.useState(false);
    return ( 
        <div className="h-2/4 flex-1 mx-auto  mb-10">       
            <div className="h-7 flex-1 mx-auto pt-1 pl-2 text-sm text-gray-500 font-bold">       
               Gestión de Compras
            </div>
            <ComprasTable  setShowModal={setShowModal}/> 
            {showModal &&
                <CompraView
                setShowModal={setShowModal}
                />
            }                           
        </div>
     
     );
}
 
export default ComprasView;