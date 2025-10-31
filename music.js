
    document.addEventListener('DOMContentLoaded', () => {
      const viewport = document.querySelector('.hero-slider-viewport');
      const container = document.querySelector('.slider-container');
      const dots = document.querySelectorAll('.slider-dot');
      const prevBtn = document.querySelector('.slider-nav.prev');
      const nextBtn = document.querySelector('.slider-nav.next');
      
      const numSlides = dots.length;
      let currentSlide = 0;
      let autoPlayInterval;

      /**
       * Goes to a specific slide index.
       * @param {number} slideIndex - The index of the slide to go to.
       */
      function goToSlide(slideIndex) {
          // Check if elements exist before using them
          if (container) {
              container.style.transform = `translateX(-${slideIndex * (100 / numSlides)}%)`;
          }
          
          // Update active dot
          dots.forEach(dot => dot.classList.remove('active'));
          if (dots[slideIndex]) {
              dots[slideIndex].classList.add('active');
          }
          
          // Update current slide index
          currentSlide = slideIndex;
      }

      /**
       * Moves to the next slide.
       */
      function nextSlide() {
          const nextIndex = (currentSlide + 1) % numSlides;
          goToSlide(nextIndex);
      }

      /**
       * Moves to the previous slide.
       */
      function prevSlide() {
          const prevIndex = (currentSlide - 1 + numSlides) % numSlides;
          goToSlide(prevIndex);
      }

      /**
       * Starts the autoplay interval.
       */
      function startAutoPlay() {
          // Clear any existing interval to prevent speeding up
          clearInterval(autoPlayInterval);
          autoPlayInterval = setInterval(nextSlide, 2000); // 5 seconds per slide
      }

      /**
       * Stops the autoplay interval.
       */
      function stopAutoPlay() {
          clearInterval(autoPlayInterval);
      }

      /**
       * Resets the autoplay timer.
       * (Stops it and starts it again)
       */
      function resetAutoPlay() {
          stopAutoPlay();
          startAutoPlay();
      }

      // --- Event Listeners ---

      // Dot navigation
      dots.forEach((dot, index) => {
          dot.addEventListener('click', () => {
              goToSlide(index);
              resetAutoPlay(); // Reset timer on manual navigation
          });
      });

      // Arrow navigation
      if (nextBtn) {
          nextBtn.addEventListener('click', () => {
              nextSlide();
              resetAutoPlay(); // Reset timer on manual navigation
          });
      }

      if (prevBtn) {
          prevBtn.addEventListener('click', () => {
              prevSlide();
              resetAutoPlay(); // Reset timer on manual navigation
          });
      }

      // Pause on hover
      if (viewport) {
          viewport.addEventListener('mouseenter', stopAutoPlay);
          viewport.addEventListener('mouseleave', startAutoPlay);
      }

      // --- Initialization ---
      // Ensure there are slides before trying to initialize
      if (numSlides > 0) {
          goToSlide(0);       // Set initial slide
          startAutoPlay(); // Start sliding
      }
    });
 