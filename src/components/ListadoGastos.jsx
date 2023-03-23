import React from "react";
import Gasto from "./Gasto";

function ListadoGastos({
  gastos,
  setGastoEditar,
  eliminarGasto,
  gastosFiltrados,
  filtros,
}) {
  return (
    <div className="listado-gastos contenedor">
      {filtros ? (
        <>
          <h2>{gastosFiltrados.length ? "Gastos:" : "No hay gastsos "}</h2>
          {gastosFiltrados?.map((gasto) => (
            <Gasto
              key={gasto.id}
              gasto={gasto}
              setGastoEditar={setGastoEditar}
              eliminarGasto={eliminarGasto}
            />
          ))}
        </>
      ) : (
        <>
          <h2>{gastos.length ? "Gastos:" : "No hay gastsos "}</h2>
          {gastos?.map((gasto) => (
            <Gasto
              key={gasto.id}
              gasto={gasto}
              setGastoEditar={setGastoEditar}
              eliminarGasto={eliminarGasto}
            />
          ))}
        </>
      )}
    </div>
  );
}

export default ListadoGastos;
