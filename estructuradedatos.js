const persona={
    nombre:"Anthony Saint",
    edad:25,
    sexo:"masculino",
    hobbies:["gaming","musica","futbol"]
}

function agregarHobby(persona, nuevoHobby) {
    persona.hobbies.push(nuevoHobby);
}

console.log("Persona antes de añadir un nuevo hobby:", persona);

agregarHobby(persona, "Pintura");

console.log("Persona después de añadir un nuevo hobby:", persona);