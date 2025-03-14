/* script.js */
function generarFormulario() {
    let cant = document.getElementById("cantidadPersonas").value;
    let contenedor = document.getElementById("formularioContainer");
    contenedor.innerHTML = ""; // Limpiar contenido previo
    
    for (let i = 1; i <= cant; i++) {
        let div = document.createElement("div");
        div.innerHTML = `
            <h3>Persona ${i}</h3>
            <label for="nombre${i}">Nombre:</label>
            <input type="text" id="nombre${i}" name="nombre${i}" required><br>
            <label for="edad${i}">Edad:</label>
            <input type="number" id="edad${i}" name="edad${i}" required><br>
            <label for="email${i}">Email:</label>
            <input type="email" id="email${i}" name="email${i}" required><br>
            <hr>
        `;
        contenedor.appendChild(div);
    }
}
