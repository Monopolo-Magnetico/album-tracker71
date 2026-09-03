/**
 * Todo: Lo que seleccionemos al principio
 * Debe ser seleccionado mediante el document
 * 
 * Opciones de selección
 * Clásicas
 * getElementById
 * getElementByClassName
 * 
 * Modernas
 * Nos permiten seleccionar por un selector css
 * Selectores CSS
 * etiqueta, por ejemplo form
 * clase . por ejemplo .form-control
 * id # por ejemplo #title
 * querySelector() Si usamos un selector como de clase, solo va a seleccionar la primera coincidencia
 * querySelectorAll() Similar a querySelector pero nos devolverá todas las coincidencias
 * 
 */

const formEl = document.getElementById("album-form");
console.log(formEl);

const mainEl = document.querySelector("#album-container");
console.log(mainEl);

/**
 * Eventos
 * Es cualquier acción que realiza el usuario en la página web
 * Escuchar por el evento
 * Escuchamos por un evento para que cuando ocurra
 * desencadene una respuesa
 * 
 * Pasos para extraer la info del formulario
 * 1. Agregar un event listener del evento submit
 * 2. Prevenir el comportamiento por default
 * 3. Construir un form data dandole el elemento formulario
 * 4. Extraer la información del formData y guardarla en un array de arrays usando el spred operator
 * El spread operator desempaqueta la información de una iterable y la guarda en otro
 * 5. Crear in objeto con la información usando Object.fromEntries()
 * object from entries recibe un array de arrays
 */

formEl.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(formEl);
    console.log(formData.get("title")); // Obtener un solo dato
    console.log(formData);
    const dataArray = [... formData];
    console.log(dataArray);
    const  dataObject = Object.fromEntries(dataArray);
    console.log(dataObject);
    // Hacer todo lo lo anterior en una linea
    //const album = Object.fromEntries([... new FormData(formEl)]);
    //console.log(album);
});

const card = `
    <div class="card" style="width: 18rem;">
        <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
        <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a>
        </div>
    </div>
`;