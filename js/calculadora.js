const botones = document.getElementsByClassName("btn");
console.log(botones)
for(let i = 0; i < botones.length; i++) {
    let boton = botones[i];
    boton.addEventListener("click", () => {clickEnBoton(boton)}); 
}

function clickEnBoton(boton) {
    console.log(boton);
    document.getElementById("salida").value = document.getElementById("salida").value + boton.innerHTML;
}