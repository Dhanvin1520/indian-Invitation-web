let index = 0;

function showSlides() {
    let slides = document.querySelector(".slides");
    index++;

    if (index >= 4) {  // Since there are 3 images
        index = 0;
    }

    slides.style.transform = `translateX(${-index * 100}%)`; // Moves to next image

    setTimeout(showSlides, 4000);  // Change image every 5 seconds
}

showSlides();
function redirectToYouTube() {
    window.open("https://www.youtube.com/watch?v=m88rfCrDYEE", "_blank");
}