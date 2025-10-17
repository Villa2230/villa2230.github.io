JavaScript
// script.js

const imagenInput = document.getElementById('imagen');
const galeria = document.getElementById('galeria');
const siButton = document.getElementById('si');
const noButton = document.getElementById('no');
const detalles = document.getElementById('detalles');

imagenInput.addEventListener('change', (e) => {
    const archivos = e.target.files;
    for (const archivo of archivos) {
        const reader = new FileReader();
        reader.onload = () => {
            const img = document.createElement('img');
            img.src = reader.result;
            galeria.appendChild(img);
        };
        reader.readAsDataURL(archivo);
    }
});

siButton.addEventListener('click', () => {
    detalles.style.display = 'block';
});

noButton.addEventListener('click', () => {
    const pregunta = document.querySelector('.pregunta p');
    pregunta.textContent = '¿Cómo puedes decir que no? ¡Vamos a celebrar!';
    setTimeout(() => {
        pregunta.textContent = '¿Aceptas esta invitación?';
    }, 2000);
});