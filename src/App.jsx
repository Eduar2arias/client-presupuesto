import { useEffect, useState } from "react";
import Header from "./components/Header";
import iconoNuevoGasto from "./img/nuevo-gasto.svg";
import Modal from "./components/Modal";

import { createId } from "./helpers";
import ListadoGastos from "./components/ListadoGastos";
import Filtros from "./components/Filtros";

function App() {
  const [presupuesto, setPresupuesto] = useState(Number(localStorage.getItem("presupuesto")) || 0);
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);
  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);
  const [gastos, setGastos] = useState(
    localStorage.getItem('gastos') ? JSON.parse(localStorage.getItem('gastos')): []
  );
  const [gastoEditar, setGastoEditar] = useState({});
  const [ filtros , setFiltros] = useState("")
  const [ gastosFiltrados , setGastosFiltrados] = useState([])

  useEffect(() => {
    if (Object.keys(gastoEditar).length) {
      setModal(true);
      console.log("añadinedo gasto");
      setTimeout(() => {
        setAnimarModal(true);
      }, 500);
    }
  }, [gastoEditar]);

  useEffect(() => {
    
    localStorage.setItem('presupuesto', presupuesto)
    
  }, [presupuesto])

  useEffect(() => {
    
    localStorage.setItem('gastos',JSON.stringify(gastos)|| []) 
    
  }, [gastos])
  
  useEffect(() => {
    
      if(filtros){
        const gastosFiltrados = gastos.filter( gastos => gastos.categoria === filtros)

        setGastosFiltrados(gastosFiltrados)
      } 
    
  }, [filtros])

  

  useEffect(() => {
    
    const presupuestoLs = Number(localStorage.getItem('presupuesto')) || 0
    if (presupuestoLs) {
        setIsValidPresupuesto(true)
    }
  }, [])
  
  

  const handleNuevoGasto = () => {
    setModal(true);
    console.log("añadinedo gasto");
    setGastoEditar({});
    setTimeout(() => {
      setAnimarModal(true);
    }, 500);
  };

  const guardarGasto = (gasto) => {
    if (gasto.id) {
      const gastosUpdate = gastos.map((gastoSate) =>
        gastoSate.id === gasto.id ? gasto : gastoSate
      );

      setGastos(gastosUpdate);
      setGastoEditar({})
    } else {
      gasto.id = createId();
      gasto.fecha = Date.now();
      console.log(gasto);
      setGastos([...gastos, gasto]);
    }
    setAnimarModal(false);
    setTimeout(() => {
      setModal(false);
    }, 500);
  };

  const eliminarGasto = (id) => {
    console.log(id);
    setGastos([...gastos.filter( gasto => gasto.id !== id)])
  }

  return (
    <div className={modal ? "fijar" : ""}>
      <Header
        gastos={gastos}
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
        
      />

      {isValidPresupuesto && (
        <>
          <main>
            <Filtros
              filtros = {filtros}
              setFiltros={setFiltros}
            />
            <ListadoGastos
              gastos={gastos}
              gastoEditar={gastoEditar}
              setGastoEditar={setGastoEditar}
              eliminarGasto={eliminarGasto}
              gastosFiltrados={gastosFiltrados}
              filtros = {filtros}
            />
          </main>

          <div className="nuevo-gasto">
            <img
              src={iconoNuevoGasto}
              alt="icono nuevo gasto"
              onClick={handleNuevoGasto}
            />
          </div>
        </>
      )}
      {modal && (
        <Modal
          setModal={setModal}
          animarModal={animarModal}
          setAnimarModal={setAnimarModal}
          guardarGasto={guardarGasto}
          gastoEditar={gastoEditar}
          setGastoEditar={setGastoEditar}
        />
      )}
    </div>
  );
}

export default App;
