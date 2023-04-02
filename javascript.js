
// document.addEventListener("click", function handleClickOutsideBox(event) {
//     const box = document.getElementById("content1");
//     if (!box.contains(event.target)) {
//         box.style.display = "none";
//     }
// })

// function myFunction() {
//     var x = document.getElementById("content4");
//     if (x.style.display === "none") {
//         x.style.display = "block";
//     } else {
//         x.style.display = "none";
//     }
// }

// window.onclick = function(event) {
//     const box = document.getElementById("content1");
//     if (box.target == content1) {
//         box.style.display = "none";
//     }
// }

var x = ["content1", "content2", "content3", "content4", "content5", "content6"];
    var visibleContent = null;
    function show(contentId) {
        if(visibleContent === contentId) {
            visibleContent = null;
        } else {
            visibleContent = contentId;
        }
        hideNonVisibleContents();
    }
    function hideNonVisibleContents() {
        var i, contentId, content;
        for (i = 0; i < x.length; i++) {
            contentId = x[i];
            content = document.getElementById(contentId);
            if (visibleContent === contentId) {
                content.style.display = "block";
            } else {
                content.style.display = "none";
            }
        }
    }



// function modulo(number, mod) {
//     let result = number % mod;
//     if (result < 0) {
//         result += mod;
//     }
//     return result;
// }

// function setUpcarousel(carousel) {
//     function handleNext() {
//         currentSlide = modulo(currentSlide + 1, numSlides);
//         changeSlide(currentSlide);
//     }


//     function handlePrev() {
//         currentSlide = modulo(currentSlide - 1, numSlides);
//         changeSlide(currentSlide);
//     }

//     function changeSlide(slideNumber) {
//         carousel.style.setProperty('--current-slide', slideNumber);
//     }

//     // Get elements
//     const buttonPrev = carousel.querySelector('[data-carousel-button-prev-one]');
//     const buttonNext = carousel.querySelector('[data-carousel-button-next-one]');
//     const slidesContainer = carousel.querySelector('[data-slides-one]')

//     // Carousel state we need to remember
//     let currentSlide = 0;
//     const numSlides = slidesContainer.children.lenght;

//     // Set up events
//     buttonPrev.addEventListener('click', handlePrev);
//     buttonNext.addEventListener('click', handleNext);
// }


function setUpCarousel(carousel) {
    // Creates const getting the elements from the html file, using data-attributes
    const buttonPrev = carousel.querySelector('[data-carousel-button-prev-one');
    const buttonNext = carousel.querySelector('[data-carousel-button-next-one]');
    const slidesContainer = carousel.querySelector('[data-slides-one]');

    // When click "buttonNext" it will run the "handleNext" function, and when click "buttonPrev" it will do the opposite
    buttonNext.addEventListener('click', handleNext);
    buttonPrev.addEventListener('click', handlePrev);

    // // Check if you've connected both the buttons: when you cllick on them, on the console appears 'clicked'
    // buttonNext.addEventListener('click', () => console.log('clicked'));

    // // Check if the idea of transforming is right
    // slidesContainer.style.transform = 'translateX(-20%)';

    // Remember which slide are we on
    let currentSlide = 0;
    const numSlides = (slidesContainer.children.length)/3;

    // Translate the slide x% times the current slide
    function handleNext() {
        currentSlide = (currentSlide + 1) % numSlides;
        slidesContainer.style.transform = `translateX(${currentSlide * -100}%)`;
    }

    function handlePrev() {
        currentSlide = (currentSlide - 1) % numSlides;
        if (currentSlide < 0) {
            currentSlide += numSlides;
        }
        slidesContainer.style.transform = `translateX(${currentSlide * -100}%)`;
    }
}


// Create an array which contains all the carousels of the page
const carousels = document.querySelectorAll('[data-carousel]');

// Apply the function for each carousel of the page
carousels.forEach(setUpCarousel);
