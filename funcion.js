function guardartexto(){
let textoIngresado = document.getElementById("nombre").value.trim(); // con este codigo obtengo el texto que ingrese en el input

if(textoIngresado !==""){
    let nombres = JSON.parse(localStorage.getItem("nombresGuardados")) || [];//obtiene los nombres y vacia l array
    // localStorage.setItem("textoGuardado", textoIngresado); // cuando ponemos el let y lo que le sigue a el es el nombre qu le ponemos a esa funcion para llamarla despues , guarda en localSorage
    nombres.push(textoIngresado);//agregar el nuevo nombre
    localStorage.setItem("nombresGuardados",JSON.stringify(nombres));
    window.location.href="amigosec.html";
}else{
    alert("Por favor, ingrese un nombre para continuar");
}
}


function mostrarNombresGuardados() {
    // Obtener el array de nombres guardados desde localStorage
    let nombres = JSON.parse(localStorage.getItem("nombresGuardados")) || [];

    // Agregar un log para depuración
    console.log(nombres);  // Esto te mostrará los nombres en la consola del navegador

    if (nombres.length > 0) {
        document.getElementById("mostrarTexto").innerText = "Nombres guardados: " + nombres.join(", ");
    } else {
        document.getElementById("mostrarTexto").innerText = "No se han guardado nombres aún.";
    }
}


function generarParejas() {
    // Recuperar los nombres guardados desde localStorage
    let nombres = JSON.parse(localStorage.getItem("nombresGuardados")) || [];

    // Verificar si la cantidad de nombres es menor a 2 o impar
    if (nombres.length < 2) {
        alert("Debe haber al menos 2 personas para generar parejas.");
        return;
    } else if (nombres.length % 2 !== 0) {
        alert("La cantidad de nombres debe ser par para generar parejas.");
        return;
    }

    // Formar las parejas
    let parejas = [];
    for (let i = 0; i < nombres.length; i += 2) {
        parejas.push(`Pareja ${(i / 2) + 1}: ${nombres[i]} - ${nombres[i + 1]}`);
    }

    // Guardar las parejas en localStorage
    localStorage.setItem("parejasGeneradas", JSON.stringify(parejas));
    window.location.href = "parejas.html"; // Redirigir a la página de parejas
}


function mostrarParejas() {
    // Obtener las parejas generadas desde localStorage
    let parejas = JSON.parse(localStorage.getItem("parejasGeneradas")) || [];

    if (parejas.length > 0) {
        // Mostrar las parejas generadas
        document.getElementById("mostrarParejas").innerText = parejas.join("\n");
    } else {
        document.getElementById("mostrarParejas").innerText = "No se han generado parejas.";
    }
}
