import React, { useState } from 'react'
import Mensaje from './Mensaje'

const NuevoPresupuesto = ({presupuesto, setPresupuesto , setIsValidPresupuesto}) => {

    const [mensaje , setMensaje] = useState("")
    function handlePresupuesto (e) {
        e.preventDefault();
        if( !presupuesto ||presupuesto < 0){
            console.log("presupusto no valido");
            setMensaje("presupusto no valido")
            return
        }
            setMensaje("")
            setIsValidPresupuesto(true)
            console.log("presupusto valido");
        
    }
  return (
    <div  className='contenedor-presupuesto contenedor sombra'>
        <form className='formulario' onSubmit={handlePresupuesto}>
            <div className='campo'>
                <label>Definir presupuesto</label>
                <input
                    type="number"
                    className='nuevo-presupuesto'
                    placeholder='añade tu presupuesto'
                    value={presupuesto}
                    onChange={ (e) => setPresupuesto(Number(e.target.value))}
                />
            </div>
            <input  type="submit" value="Añadir"/> 
            { mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
        </form>

    </div>
  )
}

export default NuevoPresupuesto