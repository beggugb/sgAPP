import {combineReducers} from 'redux'
import { reducer as toastrReducer} from 'react-redux-toastr'
import { usuario } from './usuario'
import { cliente } from './cliente'
import { membresias } from './membresias'
import { paquetes } from './paquetes'
import { notas } from './notas'
import { cajas } from './cajas'
import { cajasitems } from './cajasitems'
import { informes } from './informes'
import { registros } from './registros'
import { empresa } from './empresa'
import { tarea } from './tarea'

import { categoria } from './categoria'
import { compra } from './compra'
import { industria } from './industria'
import { marca } from './marca'
import { modelo } from './modelo'
import { origen } from './origen'
import { producto } from './producto'
import { proveedor } from './proveedor'
import { sucursal } from './sucursal'
import { tipo } from './tipo'
import { unidad } from './unidad'
import { venta } from './venta'
import { volumen } from './volumen'

const rootReducer = combineReducers({
    usuario,
    cliente,
    membresias,
    paquetes,
    notas,
    cajas,
    cajasitems,
    informes,
    registros,
    empresa,
    tarea,
    categoria,
    compra,
    industria,
    marca,
    modelo,
    origen,
    producto,
    proveedor,
    sucursal,
    tipo,
    unidad,
    venta,
    volumen,
    toastr: toastrReducer   
})

export default rootReducer;