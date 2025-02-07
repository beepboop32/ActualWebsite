let currentIndex =1;
showSlide(currentIndex);

function plusSlides(nextSlide) {
    showSlide(currentIndex += nextSlide);
}

function currentSlide(n) {
    showSlide(currentIndex = n);
}

function showSlide(n) {
    let i;
    const slides = document.getElementById("imageCarousel").getElementsByClassName("images");
    console.log(slides);
    const dots = document.getElementsByClassName("dot");
    if (slides.length === 0 || dots.length === 0) return;
    if (n > slides.length) {currentIndex = 1}    
    if (n < 1) {currentIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[currentIndex-1].style.display = "block";  
    console.log(dots);
    console.log(currentIndex);
    dots[currentIndex-1].className += " active";
}

function changePage(page) {
    switch(page) {
        case 0:
            window.location.href = 'shopIndex.html';
            break;
        case 1:
            window.location.href = 'picturesIndex.html';
            break;
        case 2:
            window.location.href = '../gambling/gamblingIndex.html';
            break;
        case 3:
            window.location.href = 'miscIndex.html';
            break;
        
    }
}