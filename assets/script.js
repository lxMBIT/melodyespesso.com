{
      "@context": "https://schema.org",
      "@type": "MusicProductionService",
      "name": "MelodyEspresso.com",
      "description": "Сервис по созданию персонализированных песен в подарок. Мы превращаем ваши истории в уникальные музыкальные композиции за срок от 1 часа.",
      "url": "https://melodyespresso.com",
      "logo": "https://placehold.co/200x60/ffffff/6366f1?text=MelodyEspresso",
      "provider": {
        "@type": "Organization",
        "name": "MelodyEspresso"
      },
      "serviceType": "Песня на заказ",
      "offers": [
        {
          "@type": "Offer",
          "name": "Экспресс-Мелодия",
          "price": "30.00",
          "priceCurrency": "USD",
          "description": "Песня в подарок за 24 часа с использованием передовой ИИ-технологии."
        },
        {
          "@type": "Offer",
          "name": "Хочу Сейчас",
          "price": "99.00",
          "priceCurrency": "USD",
          "description": "Персональная песня всего за 1 час. Идеально для срочных подарков."
        },
        {
          "@type": "Offer",
          "name": "Авторский Шедевр",
          "price": "199.00",
          "priceCurrency": "USD",
          "description": "Эксклюзивная песня, созданная командой профессиональных авторов и музыкантов."
        }
      ],
      "areaServed": {
        "@type": "Country",
        "name": "RU"
      }
    }
    


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