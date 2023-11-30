
const estudiantes = new Set(["Juan", "María", "Carlos"]);

estudiantes.add("Laura");
estudiantes.add("Pedro");

estudiantes.delete("María");

const calificaciones = new Map();

estudiantes.forEach(estudiante => {
    const calificacion = Math.floor(Math.random() * 100) + 1; 
    calificaciones.set(estudiante, calificacion);
});


console.log("Lista de estudiantes con calificaciones:");
calificaciones.forEach((calificacion, estudiante) => {
    console.log(`${estudiante}: ${calificacion}`);
});


let calificacionMaxima = -1;
let estudianteMaximo = "";

calificaciones.forEach((calificacion, estudiante) => {
    if (calificacion > calificacionMaxima) {
        calificacionMaxima = calificacion;
        estudianteMaximo = estudiante;
    }
});

console.log(`Calificación más alta: ${calificacionMaxima}, obtenida por ${estudianteMaximo}`);
