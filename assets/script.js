

document.addEventListener('DOMContentLoaded', function () {
            // Carousel Logic
            const track = document.getElementById('carousel-track');
            if (track) {
                const slides = Array.from(track.children);
                const nextButton = document.getElementById('nextBtn');
                const prevButton = document.getElementById('prevBtn');
                let slideWidth = slides.length > 0 ? slides[0].getBoundingClientRect().width : 0;
                let currentIndex = 0;

                const updateCarousel = () => {
                    if(track) {
                       track.style.transform = 'translateX(-' + slideWidth * currentIndex + 'px)';
                    }
                };

                nextButton.addEventListener('click', () => {
                    currentIndex = (currentIndex + 1) % slides.length;
                    updateCarousel();
                });

                prevButton.addEventListener('click', () => {
                    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
                    updateCarousel();
                });
                
                window.addEventListener('resize', () => {
                    if (slides.length > 0) {
                       slideWidth = slides[0].getBoundingClientRect().width;
                       updateCarousel();
                    }
                });
            }


            // Accordion Logic
            const accordionButtons = document.querySelectorAll('.accordion-button');
            accordionButtons.forEach(button => {
                button.addEventListener('click', () => {
        let parent = button.parentElement;
        while (parent && !(parent.tagName === 'DIV' && parent.hasAttribute('itemscope') && parent.getAttribute('itemtype') === 'https://schema.org/Question')) {
            parent = parent.parentElement;
        }
        if (!parent) return;
        const content = parent.querySelector('.accordion-content');
        const icon = button.querySelector('.accordion-icon');
        if (!content) return;
        accordionButtons.forEach(otherButton => {
            if (otherButton !== button) {
                if (otherButton.nextElementSibling) { otherButton.nextElementSibling.style.maxHeight = null; }
                otherButton.querySelector('.accordion-icon').classList.remove('rotate-180');
            }
        });
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
            icon.classList.remove('rotate-180');
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
            icon.classList.add('rotate-180');
        }
    });

                });
            });
        });