function main() {
    console.log("Hola mundo!");
    console.log(4 + 5);

    var num1 = 10.0;
    var num2 = 20.0;

    num1 = "Hola";

    console.log(num1 + num2);
    console.log(num1 - num2);
    console.log(num1 * num2);
    console.log(num1 / num2);
    console.log(num1 % 3);

    console.log("Hola " + num1);

    num1++;
    if (num1 % 2 == 0) {
        console.log("Es par");
    } else {
        console.log("Es impar");
    }

    var i = 0;
    while (i < 10) {
        console.log(i + 1);
        i++;
    }

    for(var i = 0; i < 10; i++){
        console.log(i);
    }
}

function incrementarNumero() {
    const inputNumero = document.getElementById("num1");
    console.log("elemento numero", inputNumero);
    
    inputNumero.value = parseInt(inputNumero.value) + 1;
}

function actualizarVista() {
    console.log("Actualizar vista");

    const valor = document.getElementById("nombre").value;
    document.getElementById("contador").innerHTML = "<small>"+valor.length+"</small>"
    document.getElementById("vista").innerHTML = "<h2>"+valor+"</h2>";
}


