let slideIndex = 0;

function showSlides() {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    
    slideIndex++;
    
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }    
    
    slides[slideIndex-1].style.display = "block";  
    adjustImageSize(); // Llama a la función para ajustar el tamaño de la imagen
    setTimeout(showSlides, 4000); // Cambia la imagen cada 2 segundos
}

function adjustImageSize() {
    const currentSlide = document.querySelector(".mySlides:nth-child(" + slideIndex + ")");
    const image = currentSlide.querySelector("img");

    if (image) {
        // Ajusta el tamaño de la imagen según sea necesario
        image.style.width = "100%";
        image.style.height = "100%";
    }
}

document.addEventListener('DOMContentLoaded', function() {
    showSlides();
});
