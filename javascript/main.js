"use strict"

document.addEventListener("DOMContentLoaded", () => {
    // Job Positions Toggle
    const jobPositions = document.getElementsByClassName("about__position");

    for (const jobPosition of jobPositions) {
        jobPosition.addEventListener("click", () => {
            jobPosition.classList.toggle("no__border");
            const cardBody = jobPosition.nextElementSibling;
            cardBody.classList.toggle("display__none");

            const cardIcon = jobPosition.querySelector(".about__icon");
            cardIcon.classList.toggle("rotate90deg");
        });
    }

    // Skill Boxes Dimming
    const skillBoxes = document.getElementsByClassName("skill__box");

    for (const skillBox of skillBoxes) {
        skillBox.addEventListener("mouseover", () => {
            for (const otherBox of skillBoxes) {
                if (otherBox !== skillBox) {
                    otherBox.classList.add("dimmed");
                }
            }
        });

        skillBox.addEventListener("mouseout", () => {
            for (const otherBox of skillBoxes) {
                otherBox.classList.remove("dimmed");
            }
        });
    }

    // Slider Functionality
    document.querySelectorAll(".slider").forEach((slider) => {
        let currentIndex = 0; // Initial index for each slider's images
        const images = slider.getAttribute("data-images").split(","); // Images from data-images attribute

        const arrLeft = slider.querySelector(".arrow__left");
        const arrRight = slider.querySelector(".arrow__right");

        const updateSlide = () => {
            slider.style.backgroundImage = `url('../images/${images[currentIndex]}')`;
        };

        arrLeft.addEventListener("click", () => {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            updateSlide();
        });

        arrRight.addEventListener("click", () => {
            currentIndex = (currentIndex + 1) % images.length;
            updateSlide();
        });

        // Initialize the slider with the first image
        updateSlide();
    });
});
