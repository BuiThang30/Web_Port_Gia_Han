// ==================== Slider ====================
document.addEventListener("DOMContentLoaded", () => {
  const sliders = document.querySelectorAll(".slider");

  sliders.forEach(slider => {
    const track = slider.querySelector(".slide-track");
    const slides = slider.querySelectorAll(".slide");

    const gap = 10;
    const totalSlides = slides.length / 3; 
    let index = 0;
    let isTransitioning = false;

    function updateSlide(noTransition = false) {
      const slideWidth = slides[0].offsetWidth + gap;
      track.style.transition = noTransition ? "none" : "transform 0.6s ease-in-out";
      track.style.transform = `translateX(${-index * slideWidth}px)`;
    }

    track.addEventListener("transitionend", () => {
      isTransitioning = false;
      if (index >= totalSlides) {
        index = 0;
        requestAnimationFrame(() => updateSlide(true));
      } else if (index < 0) {
        index = totalSlides - 1;
        requestAnimationFrame(() => updateSlide(true));
      }
    });

    function nextSlide() {
      if (isTransitioning) return;
      isTransitioning = true;
      index++;
      updateSlide();
    }

    setInterval(nextSlide, 3000);

    updateSlide();
  });
});


function navigateTo(page) {
  switch (page) {
    case 'little':
      window.location.href = '/little-champa';
      break;
    case 'about':
      window.location.href = '/about#about';
      break;

    case 'collections':
      window.location.href = '/collections';
      break;

    case 'residency':
      window.location.href = '/bau_truc';
      break;
    
    case 'other':
      window.location.href = '/other-activities';
      break;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const switches = document.querySelectorAll(".switch-container");

  switches.forEach(switchEl => {
    const handle = switchEl.querySelector(".switch-handle, .switch-handle-right");
    const handleWidth = handle.offsetWidth + 4; // cộng 4px viền
    switchEl.style.setProperty("--handle-width", `${handleWidth}px`);

    let active = false;

    switchEl.addEventListener("click", () => {
      active = !active;
      switchEl.classList.toggle("active");

      if (active) {
        const link = switchEl.dataset.target;
        setTimeout(() => {
          window.location.href = link;
        }, 400);
      }
    });
  });
});

window.onpageshow = function(event) {
  if (event.persisted) {
    window.location.reload();
  }
};

