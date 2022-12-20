import React, { useState,useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { cajaActions } from '../../../redux/actions/caja'
import Moment from 'react-moment'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import Pagination from '../../../components/Pagination'


function CajasItemsTable () {              
  
  const dispatch = useDispatch()    
  const { data, pagina, paginas, total, modalView } = useSelector(state => state.cajasitems)
  const cajai = useSelector(state => state.cajas.item)

  const [citem, setCitem] = useState({
    id:"",
    createdAt:"",
    label:"",
    tipo:"",
    monto:""
  })
    
  
  const makeHttpRequestWithPage = (page, num) =>{        
    dispatch(cajaActions.getListDetalle('CAJAS_ITEMS_DATA','cajasitems',page, num, cajai.id))  
  }


  useEffect(() =>{    
      
     return () =>{            
       /* dispatch(crudActions.setReset('CAJAS_ITEMS_RESET'))
        dispatch(crudActions.setReset('CAJAS_RESET_ITEM'))        */
    };
  }, []);

  const toggleModalView = (item) => {    
    let est = modalView === true ? false : true;    
    if(item){
      setCitem(item)  
    }else{
      setCitem({id:"",
    createdAt:"",
    label:"",
    tipo:"",
    monto:""})
    }
    
    dispatch(cajaActions.viewModal('CAJAS_ITEMS_VIEW',est))             
  };

   
  return (    
    <>       
            <div className="border flex-1 mx-auto min-h-max border-gray-300 p-1 rounded-md">
              <table className="border-collapse  table-fixed text-[11px]">
                <thead>
                    <tr className="h-6 border-slate-300 bg-gray-200 border">                   
                      <th className="w-1/12">#</th>
                      <th className="w-1/12">Fecha</th>                    
                      <th className="w-5/12">Label</th>
                      <th className="w-1/12">Tipo</th>
                      <th className="w-3/12">$ Monto</th>                    
                      <th className="w-1/12"></th>
                    </tr>
                </thead>
                { data && 
                <tbody>
                    { data.map(item =>(
                            <tr key={item.id} className="hover:bg-gray-100 h-8">
                                <td className="border-b pl-1">{item.id}</td>                      
                                <td className="border-b pl-1"><Moment format="DD/MM/YYYY">{item.registro}</Moment></td>                           
                                <td className="border-b pl-1">{item.label}</td>
                                <td className="border-b pl-1">{item.tipo}</td>                                 
                                <td className="border-b pl-1">{new Intl.NumberFormat('de-DE',{style: "currency",currency:"BOB"}).format(item.monto)}</td>                              
                                <td className="pl-1 flex flex-row justify-center">                                   
                                  <button 
                                    onClick={() => {toggleModalView(item)}}
                                    className="mt-1 w-10 h-6 rounded bg-red-400 hover:bg-red-300 text-xs text-white">
                                      <FontAwesomeIcon icon={faFilePdf} />
                                  </button>                                                                                                
                                </td> 

                            </tr>
                        ))}
                      </tbody>  
                    }                                                        
                </table>
            </div>
            <div className="h-12 border-r border-l border-b border-gray-300 p-3 rounded-b-lg">
               <Pagination
               makeHttpRequestWithPage={ makeHttpRequestWithPage}
               total={total}
               paginas={paginas}
               current={pagina}
               pagina={12}
               />
            </div>
        </>
  );
}

export default CajasItemsTable