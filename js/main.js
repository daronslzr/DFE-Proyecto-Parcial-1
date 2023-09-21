document.addEventListener('DOMContentLoaded', () => {

    //FORMULARIO
    const contactoForm = document.getElementById('contacto-form');
     contactoForm.addEventListener("submit", (event) =>{
        event.preventDefault();
        /*
        const nombre = document.getElementById('nombreContacto').value;
        const email = document.getElementById('emailContacto').value;
        const mensaje = document.getElementById('mensajeContacto').value;
        */

        alert('Su mensaje ha sido enviado. En brevedad, su mensaje será respondido.')
        contactoForm.reset();
     })

});