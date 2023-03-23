import React, { useEffect } from "react";
import NuevoPresupuesto from "./NuevoPresupuesto";
import ControlPresupuesto from './ControlPresupuesto'
function Header({
  presupuesto,
  setPresupuesto,
  isValidPresupuesto,
  setIsValidPresupuesto,
  gastos
  
}) {

 
  

  return (
    <header>
      <h1>Planificador de gastos</h1>
      { isValidPresupuesto ?
       (<ControlPresupuesto 
        presupuesto={presupuesto}
        gastos={gastos}
        />)
      
      : <NuevoPresupuesto
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
      />}
     
      
    </header>
  );
}

export default Header;
