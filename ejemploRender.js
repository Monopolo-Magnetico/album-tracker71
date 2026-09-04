/**
 * Manipulación de la interfaz
 * 1. Propiedad llamada innerhtml dentro de ella podremos obsevar
 * todo el html que vive dentro de la etiqueta seleccionada
 * si lo usamos sin cuidado podemos borrar todo lo que estaba
 * ! IMPROTANTE
 * ! NO USAR innerHTML para renderizar solo texto si estoy recibiendo y mostrando inmediatamente (propenso a inyección de html)
 * 2. Propiedad llamada textContent esta solo mostrara el texto que tiene dentro
 */

console.log(mainEl.innerHTML);
console.log("Text content");
console.log(mainEl.textContent);

mainEl.innerHTML += "<h1>Hola ch71</h1>";
mainEl.innerHTML += card;
console.log(mainEl.innerHTML);

//mainEl.textContent += "hola";
//mainEl.textContent += card; //textContent es mas seguro si solo se renderiza text

/**
 * Insert Adjacent HTML
 * Permite insertar html en el contenedor sin borrar lo que ya está y en una posición específica
 * tiene 4 posiciones
 * 1. beforebegin
 * 2. beforeend
 * 
 */
mainEl.insertAdjacentHTML(
    "beforeend", "<p>Insertado por insert adjacent HTML</p>"
);

mainEl.insertAdjacentHTML("beforeend", card);