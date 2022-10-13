const queryID = (id) => document.getElementById(`${id}`);

const totalAPagar = () => {
  let categoria = queryID("categoria").value;
  if (categoria === "estudiante") {
    categoria = 80;
  } else if (categoria === "trainee") {
    categoria = 50;
  } else {
    categoria = 15;
  }
  const cantidad = parseInt(queryID("cantidad").value);
  let porcentaje = (cantidad * categoria) / 100;
  queryID("total").innerHTML = `${porcentaje}`;
};

// const borrarDatos = () => {
//   const categoria = queryID("categoria").value;
//   const cantidad = parseInt(queryID("cantidad").value);
//   categoria = "Estudiante";
//   cantidad = 0;
// };

queryID("resumen").addEventListener("click", totalAPagar);

// queryID("borrar").addEventListener("click", borrarDatos);
