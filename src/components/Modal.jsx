import React,{ useEffect, useState} from 'react'
import cerrarBtn from '../img/cerrar.svg'
import Mensaje from './Mensaje'


function Modal({setModal , animarModal , setAnimarModal , guardarGasto , gastoEditar , setGastoEditar}) {
    
    const [nombre , setNombre] = useState("")
    const [ cantidad , setCantidad] = useState(0)
    const [ categoria , setCategoria] = useState("")
    const [ id  , setId] = useState("")
    const [ fecha , setFecha] = useState("")
    const [ mensaje , setMensaje]  = useState('')

    useEffect(() => {
      
        if (Object.keys(gastoEditar).length > 0) {
            setNombre(gastoEditar.nombre)
            setCantidad(gastoEditar.cantidad)
            setCategoria(gastoEditar.categoria)
            setId(gastoEditar.id)
            setFecha(gastoEditar.fecha)
        }
      
    }, [])
    
    
    function ocultarModal (){
        console.log('ocultando');
        setAnimarModal(false)
        setGastoEditar({})
        setTimeout(() => {
            setModal(false)
            
        }, 500);

    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if( [nombre , cantidad , categoria].includes('')){
            setMensaje("Fallo la validacion")
            setTimeout(() => {
                setMensaje('')
                
            }, 2000);
            return
        }

        setMensaje('')
        guardarGasto({nombre , cantidad , categoria , id})
    }
  return (
    <div className='modal'>
        <div className='cerrar-modal'>
            <img src={cerrarBtn} alt='cerrar modal' onClick={ocultarModal}/>
        </div>
        <form className={`formulario ${animarModal? "animar" : "cerrar"}`}  onSubmit={handleSubmit}>
            <legend>{gastoEditar.nombre?"Editar Gasto":"Nuevo Gasto"}</legend>
            {mensaje && <Mensaje tipo='error'>{mensaje}</Mensaje>}
            <div className='campo'>
                <label htmlFor='nombre'>Nombre gasto</label>
                <input
                    id='nombre'
                    type='text'
                    placeholder='añade el nombre del gasto'
                    value={nombre}
                    onChange={ e => setNombre(e.target.value)}
                />
            </div>
            <div className='campo'>
                <label htmlFor='cantidad'>Cantidad</label>
                <input
                    id='cantidad'
                    type='number'
                    placeholder='añade la cantidad del gasto'
                    value={cantidad}
                    onChange={ e => setCantidad(Number(e.target.value))}
                />
            </div>
            <div className='campo'>
                <label htmlFor='categoria'>Categoria</label>
                <select id='categoria' value={categoria} onChange={ e => setCategoria(e.target.value)}>
                    <option>-- seleccione --</option>
                    <option value='ahoro'>Ahorro</option>
                    <option value='comida'>Comida</option>
                    <option value='casa'>Casa</option>
                    <option value='ocio'>Ocio</option>
                    <option value='salud'>Salud</option>
                    <option value='suscripciones'>Suscripciones</option>
                </select>
            </div>
            <input 
                type='submit'
                value={gastoEditar.nombre? "Editar":"Añadir gasto"}
            />
        </form>
    </div>
  )
}

export default Modal