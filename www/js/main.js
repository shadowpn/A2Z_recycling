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

    $(document).ready(function () {
      // Найти все элементы .simpleCardsContent_content
      var contentBlocks = $(".simpleCardsContent_content");

      // Инициализировать переменную для хранения максимальной высоты
      var maxHeight = 0;

      // Перебрать каждый элемент .simpleCardsContent_content и найти максимальную высоту
      contentBlocks.each(function () {
        var currentHeight = $(this).outerHeight(); // Получить текущую высоту блока
        if (currentHeight > maxHeight) {
          maxHeight = currentHeight; // Обновить максимальную высоту, если текущая высота больше
        }
      });
      // Установить максимальную высоту для всех элементов .simpleCardsContent_content
      contentBlocks.css("height", maxHeight + "px");
    });

/*масштабировать фотографии Trust */
window.addEventListener("load", function () {
  const photoRow = document.getElementById("photo-row");
  const images = photoRow.querySelectorAll("img");

  let maxWidth = 0;

  // Находим максимальную ширину фотографии в ряду
  images.forEach(function (img) {
    const imgWidth = img.width;
    if (imgWidth > maxWidth) {
      maxWidth = imgWidth;
    }
  });

  // Устанавливаем максимальную ширину для всех фотографий
  images.forEach(function (img) {
    img.style.width = maxWidth + "px";
  });
});
