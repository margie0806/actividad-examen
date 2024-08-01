// Definir las capacidades de los vehículos
const buses = [
    { tipo: 'van', capacidad: 15 }, // Ejemplo de capacidad de una van
    { tipo: 'bus', capacidad: 40 }, // Ejemplo de capacidad de un bus normal
    { tipo: 'bus grande', capacidad: 60 } // Ejemplo de capacidad de un bus grande
  ];
  
  // Inicializar el tipo de bus que quieres arrendar
  let tipoBus = 'bus grande'; // Puedes cambiar este valor a 'van', 'bus' o 'bus grande'
  
  // Encontrar el bus seleccionado
  let busSeleccionado = buses.find(bus => bus.tipo === tipoBus);
  
  if (busSeleccionado) {
    let capacidad = busSeleccionado.capacidad;
    let puestosVendidos = 0;
  
   vendido=parseInt(prompt("cuantos cupos"))
  puestosVendidos+=vendido
    while (puestosVendidos < capacidad) { 
      // Puedes reemplazar esta parte con la lógica real de venta de puestos
      
      vendido=parseInt(prompt("cuantos cupos"))
      puestosVendidos++;
    }
  
    console.log(`Todos los ${puestosVendidos} puestos han sido vendidos.`);
  } else {
    console.log(`El tipo de bus "${tipoBus}" no se encuentra disponible.`);
  }
  
