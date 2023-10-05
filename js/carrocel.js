const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
let currentIndex = 0;

prevButton.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = slides.length - 1;
    }
    updateSlider();
});

nextButton.addEventListener("click", () => {
    if (currentIndex < slides.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateSlider();
});

let isDragging = false;
let startPosition = 0;
let currentTranslate = 0;
let prevTranslate = 0;

slides.forEach((slide, index) => {
    slide.addEventListener("mousedown", (e) => {
        isDragging = true;
        startPosition = e.clientX - currentTranslate;
        prevTranslate = currentTranslate;

        slider.style.transition = "none";
        slide.style.cursor = "grabbing";
    });

    slide.addEventListener("mousemove", (e) => {
        if (!isDragging) return;

        const currentPosition = e.clientX - startPosition;
        currentTranslate = currentPosition;

        slider.style.transform = `translateX(${-currentIndex * slides[0].offsetWidth}px)`;
    });

    slide.addEventListener("mouseup", () => {
        isDragging = false;
        slide.style.cursor = "grab";

        const threshold = slide.offsetWidth / 3;
        if (Math.abs(currentTranslate - prevTranslate) > threshold) {
            if (currentTranslate > prevTranslate) {
                currentIndex--;
            } else {
                currentIndex++;
            }
        }

        slider.style.transition = "none";
        updateSlider();
    });

    slide.addEventListener("mouseleave", () => {
        isDragging = false;
        slide.style.cursor = "grab";

        slider.style.transition = "none";
        updateSlider();
    });
});

function updateSlider() {
    slides.forEach((slide, index) => {
        if (index === currentIndex) {
            slide.classList.remove("hide");
        } else {
            slide.classList.add("hide");
        }
    });

    slider.style.transform = `translateX(${-currentIndex * slides[0].offsetWidth}px)`;
}