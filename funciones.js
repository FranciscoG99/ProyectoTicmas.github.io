/* EFECTO DE NAVEGACION */

ScrollReveal().reveal('.imagenNombre' , { delay: 100});
ScrollReveal().reveal('.estudio2' , { delay: 400});
ScrollReveal().reveal('.experienciaLaboral2' , { delay: 400});
ScrollReveal().reveal('.listaContacto' , { delay: 400});
ScrollReveal().reveal('.contacto4' , { delay: 400});

/* EXPERIENCIA EFECTO*/ 

const color1 = document.querySelector('#color1')

color1.addEventListener('mouseenter', () => {
    color1.style.backgroundColor = '#ced5da';
});

color1.addEventListener("mouseleave", () => {
    color1.style.backgroundColor = "white";
});


const color3 = document.querySelector('#color3')

color3.addEventListener('mouseenter', () => {
    color3.style.backgroundColor = '#ced5da';
});

color3.addEventListener("mouseleave", () => {
    color3.style.backgroundColor = "white";
});


const color2 = document.querySelector('#color2')

color2.addEventListener('mouseenter', () => {
    color2.style.backgroundColor = '#ced5da';
});

color2.addEventListener("mouseleave", () => {
    color2.style.backgroundColor = "white";
});


/* BOTON DE CURSOS */

const buttons = document.querySelectorAll('.boton');
    const textElements = document.querySelectorAll('.ocultarTexto');
    
    buttons.forEach((button, index) => {
      button.addEventListener('click', () => {
        const textElement = textElements[index];
        textElement.classList.toggle('mostrarTexto');
      });
    });
    





   