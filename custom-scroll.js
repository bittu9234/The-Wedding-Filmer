const scrollRows = document.querySelectorAll('.custom-scroll-row');

window.addEventListener('scroll', () => {
  scrollRows.forEach((row) => {
    const wrapper = row.parentElement;
    const rect = wrapper.getBoundingClientRect();

    // Check if wrapper is visible in viewport
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      // Calculate scroll percentage only for visible part
      const scrollPercent = 1 - (rect.bottom / (window.innerHeight + wrapper.offsetHeight));

      // Horizontal translate calculation
      const maxTranslate = row.scrollWidth - wrapper.offsetWidth;
      row.style.transform = `translateX(-${maxTranslate * scrollPercent}px)`;

      // Fade in effect for images
      const images = row.querySelectorAll('img');
      images.forEach(img => {
        const imgRect = img.getBoundingClientRect();
        if(imgRect.left < window.innerWidth && imgRect.right > 0){
          img.classList.add('custom-visible');
        } else {
          img.classList.remove('custom-visible');
        }
      });
    }
  });
});

