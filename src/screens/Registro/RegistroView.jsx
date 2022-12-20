import React, { useState, useEffect } from 'react';
import { crudActions } from '../../redux/actions/crud'
import { useDispatch, useSelector } from 'react-redux'
import RegistroForm from './components/RegistroForms'
import {api} from '../../helpers/api'
import Moment from 'react-moment'

const  RegistroView = () => { 
  const { cliente, membresia, mensaje, bandera  } = useSelector(state => state.registros)
  const [mount, setMount] = useState(false) 
  const audioTune1 = new Audio(`${api}/static/audios/acceso.mp3`);
  const audioTune2 = new Audio(`${api}/static/audios/denegado.mp3`);

  const [playInLoop1] = useState(false);
  const [playInLoop2] = useState(false);
 
  const playSound1 = () => {
    audioTune1.play();
  }
  const playSound2 = () => {
    audioTune2.play();
  }

   useEffect(() => {
     if(!mount) {
      setMount(true); 
      audioTune1.load();
      audioTune2.load();
    }
    }, [mount,audioTune1,audioTune2])

     useEffect(() => {
      if(!mount) {
      setMount(true); 
      audioTune1.loop = playInLoop1;
      audioTune2.loop = playInLoop2;
      }
    },[playInLoop1,playInLoop2,audioTune1.loop,audioTune2.loop,mount])
 
    switch(bandera){
      case 1:
        playSound1()
      break;
      case 2:
        playSound2()
      break;
      case 3:
        playSound2()
      break;  
      default:
      break;
    }  

  
    return ( 
      <div className="h-full flex-1 mx-auto -mt-10 bg-gray-900 p-2 mb-10"> 
         <div className="grid grid-cols-2 gap-2">
        <div className="flex justify-center">
        <img
        alt="..."
        className="h-20"
        src={require("../../assets/img/logo.png")}
        />
        </div>          
        <div className="mt-9">
        <RegistroForm/>
        </div>            
      </div>


        <div className="flex flex-row mx-auto border-2 min-h-max border-gray-500 p-3 mt-2 rounded-md">
            <div className="h-auto w-2/5 bg-white flex p-1 justify-center text-center">
                <img
                alt="cliente"
                className="h-650"
                src={api + "/static/images/clientes/lg/" + cliente.filename}
                />
            </div>  
            <div className="h-11/12 w-3/5 bg-white border-2 flex-1 p-2 text-2xl">

                <div className="h-32 flex flex-row border-2 justify-between">
                    <p className="pt-9 pl-4 w-2/5 border-2 bg-sky-200">NOMBRES :</p> 
                    <p className="pt-9 pl-4 w-3/5 border-2">{cliente.nombres}</p> 
                </div>

                <div className="h-32 flex flex-row border-2 justify-between">
                    <p className="pt-9 pl-4 w-2/5 border-2 bg-sky-200">CI :</p> 
                    <p className="pt-9 pl-4 w-3/5 border-2">{cliente.ci}</p> 
                </div>

                <div className="h-32 flex flex-row border-2 justify-between">
                    <p className="pt-9 pl-4 w-2/5 border-2 bg-sky-200">PAQUETE :</p> 
                    <p className="pt-9 pl-4 w-3/5 border-2">{membresia.Paquete.nombre}</p> 
                </div>

                <div className="h-32 flex flex-row border-2 justify-between">
                    <p className="pt-9 pl-4 w-2/5 border-2 bg-sky-200">VENCIMIENTO :</p> 
                    <p className="pt-9 pl-4 w-3/5 border-2">
                    <Moment format="DD/MM/YYYY">{membresia.fvigencia}</Moment>
                    </p> 
                </div>
                <div className="h-32 flex flex-row border-2 justify-between text-white text-center text-4xl">
                    <p className={bandera === 1 ?"pt-9 p-2 w-full bg-green-500 border-2" :"pt-9 bg-red-500 p-2 w-full border-2" }>
                        {mensaje}
                    </p>                      
                </div>   
            </div>    
        </div>  
         
      </div> 
     );
}
 

export default RegistroView ;
