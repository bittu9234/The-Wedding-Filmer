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

// love Image
const path = document.querySelector("path");
const pathLength = path.getTotalLength();
path.style.strokeDasharray = pathLength;
path.style.strokeDashoffset = pathLength;

let lastScroll = 0;

window.addEventListener("scroll", () => {
  const section = document.getElementById("heart-section");
  const rect = section.getBoundingClientRect();

  if (rect.top < window.innerHeight && rect.bottom > 0) {
    const scrollDir = window.scrollY > lastScroll ? 'down' : 'up';

    if (scrollDir === 'down') {
      path.style.strokeDashoffset = 0;
    } else {
      path.style.strokeDashoffset = pathLength;
    }
  }

  lastScroll = window.scrollY;
});


const typingSections = document.querySelectorAll('.typing-section');

function updateText() {
  const windowHeight = window.innerHeight;

  typingSections.forEach(section => {
    const textElement = section.querySelector('.scroll-text');
    const fullText = textElement.getAttribute('data-fulltext') || textElement.innerText;

    if (!textElement.getAttribute('data-fulltext')) {
      textElement.setAttribute('data-fulltext', fullText);
      textElement.innerText = "";
    }

    const rect = section.getBoundingClientRect();
    let progress = 1 - rect.top / windowHeight; // robust formula
    progress = Math.min(Math.max(progress, 0), 1);

    const charsToShow = Math.floor(fullText.length * progress);
    textElement.innerText = fullText.substring(0, charsToShow);
  });
}

// initial update
updateText();

// update on scroll and resize
window.addEventListener('scroll', updateText);
window.addEventListener('resize', updateText);

