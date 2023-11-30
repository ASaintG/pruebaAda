
const calificaciones = [85, 90, 92, 88, 78];

let sumaCalificaciones = 0;

for (let i = 0; i < calificaciones.length; i++) {
    sumaCalificaciones += calificaciones[i];
}

const promedio = sumaCalificaciones / calificaciones.length;

console.log("El promedio de las calificaciones es:", promedio);

if (promedio >= 90) {
    console.log("El promedio es mayor o igual a 90.");
} else {
    console.log("El promedio es menor que 90. Detalles de las calificaciones:");

    for (let i = 0; i < calificaciones.length; i++) {
        if (calificaciones[i] >= 85) {
            console.log(`Calificación ${i + 1}: ${calificaciones[i]} (Mayor o igual a 85)`);
        } else {
            console.log(`Calificación ${i + 1}: ${calificaciones[i]} (Menor que 85)`);
        }
    }
}
