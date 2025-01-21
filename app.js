// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    const nombre = document.getElementById("nombreAmigo").value;
    if (nombre.trim() === "") {
        alert("Por favor ingresa un nombre válido.");
        return;
    }
    amigos.push(nombre);
    mostrarAmigos();

    document.getElementById("nombreAmigo").value="";//Borra el nombre ingresado
}

function mostrarAmigos() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}


function sortearAmigo() {
    const amigoElegido = amigos[Math.floor(Math.random() * amigos.length)];
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; // Borra todos los nombres de la lista
    const li = document.createElement("li");
    li.textContent = 'El amigo secreto sorteado es: '+amigoElegido;
    listaAmigos.appendChild(li);
}
