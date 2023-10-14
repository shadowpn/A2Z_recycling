
  $(document).ready(function() {
    // Инициализация карусели
    $("#carouselInterval").carousel({
      interval: 3000, // Интервал между перелистываниями в миллисекундах (например, 3000 мс = 3 секунды)
      wrap: true, // Включить бесконечное перелистывание
    });
  });

    
    // Функция для установки одинаковой высоты карточкам Testimonials
    function setEqualCardHeight() {
        const testimonialCards = document.querySelectorAll('.testimonial-card');
        let maxHeight = 0;

        // Находим максимальную высоту среди всех карточек
        testimonialCards.forEach(card => {
            const cardHeight = card.clientHeight;
            maxHeight = Math.max(maxHeight, cardHeight);
        });

        // Применяем максимальную высоту ко всем карточкам
        testimonialCards.forEach(card => {
            card.style.height = `${maxHeight}px`;
        });
    }

    // Вызываем функцию после загрузки страницы
    window.addEventListener('load', setEqualCardHeight);

    // Вызываем функцию также при изменении размера окна (для адаптивности)
    window.addEventListener('resize', setEqualCardHeight);


