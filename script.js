let index = 0;

function showSlides() {
    let slides = document.querySelector(".slides");
    index++;

    if (index >= 4) { 
        index = 0;
    }

    slides.style.transform = `translateX(${-index * 100}%)`;

    setTimeout(showSlides, 4000);
}

showSlides();
function redirectToYouTube() {
    window.open("https://www.youtube.com/watch?v=m88rfCrDYEE", "_blank");
}
