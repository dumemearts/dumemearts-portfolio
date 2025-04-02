// NAV MENU ITEMS HOVER STAGGER
function initButtonCharacterStagger() {
  const offsetIncrement = 0.05; // Transition offset increment in seconds
  const buttons = document.querySelectorAll('[data-button-animate-chars]');

  buttons.forEach(button => {
    const text = button.textContent; // Get the button's text content
    button.innerHTML = ''; // Clear the original content

    [...text].forEach((char, index) => {
      const span = document.createElement('span');
      span.textContent = char;
      span.style.transitionDelay = `${index * offsetIncrement}s`;

      // Handle spaces explicitly
      if (char === ' ') {
        span.style.whiteSpace = 'pre'; // Preserve space width
      }

      button.appendChild(span);
    });
  });
}

// Initialize Button Character Stagger Animation
document.addEventListener('DOMContentLoaded', () => {
  initButtonCharacterStagger();
});






// IMAGE SLIDESHOW
function initImageCycle() {
  document.querySelectorAll("[data-image-cycle]").forEach(cycleElement => {
    const items = cycleElement.querySelectorAll("[data-image-cycle-item]");
    if (items.length < 2) return;

    let currentIndex = 0, intervalId;
    const duration = 2000;
    const isTwoItems = items.length === 2;

    // Initialize: First active, others not-active
    items.forEach((item, i) => item.setAttribute("data-image-cycle-item", i ? "not-active" : "active"));

    function cycleImages() {
      const prevIndex = currentIndex;
      currentIndex = (currentIndex + 1) % items.length;

      if (isTwoItems) {
        // Special case: Only two images → Toggle between "previous" and "active"
        items[prevIndex].setAttribute("data-image-cycle-item", "previous");
      } else {
        // Normal case: Three or more images
        items[prevIndex].setAttribute("data-image-cycle-item", "previous");
        setTimeout(() => items[prevIndex].setAttribute("data-image-cycle-item", "not-active"), duration);
      }

      items[currentIndex].setAttribute("data-image-cycle-item", "active");
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !intervalId) intervalId = setInterval(cycleImages, duration);
      else clearInterval(intervalId), intervalId = null;
    }, { threshold: 0 });

    observer.observe(cycleElement);
  });
}
// Initialize Image Cycle
document.addEventListener('DOMContentLoaded', function() {
  initImageCycle();
});






// PARAGRAPH SPLIT TEXT 
const splitTypes = document.querySelectorAll('.scroll-highlight');
splitTypes.forEach((char,i) => {
  const text = new SplitType(char, {types: ['chars','words']});
  gsap.from(text.chars, {
    scrollTrigger: {
      trigger: char,
      start: 'top 80%',
      end: 'top 20%',
      scrub: true,
    },
    opacity: 0.2,
    stagger: 0.1,
  })
});









window.addEventListener("DOMContentLoaded", (event) => {
    $(".hover-component").each(function () {
      let componentEl = $(this),
        triggerEl = componentEl.find(".hover-item"),
        targetEl = componentEl.find(".cursor-list");
      triggerEl.on("mouseenter", function () {
        let triggerIndex = $(this).index();
        targetEl.css("transform", `translateY(${triggerIndex * -100}%)`);
      });
    });
});








// FOOTER CONTACT ME TEXT STAGGER
gsap.from(".heading-style-display,.heading-style-display.is-subtract,.heading-style-display.is--next", {
  y: 100,
  opacity: 0,
  duration: 0.4,
  stagger: 0.05,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".footer-wrapper",
    start: "top 75%",
    toggleActions: "restart pause resume pause",
    once: false,
  },
});




// FOOTER TICKER ANIMATION
document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin();

  let ticker = document.querySelector(".email-ticker-wrapper");
  if (!ticker) return;

  let tickerAnimation = gsap.to(ticker, {
    x: "-50%", // Moves by half since content is duplicated
    duration: 20, // Adjust speed as needed
    ease: "linear", // Keeps constant speed
    repeat: -1, // Infinite loop
  });

  // Pause on hover
  ticker.addEventListener("mouseenter", function () {
    tickerAnimation.pause();
  });

  // Resume on hover out
  ticker.addEventListener("mouseleave", function () {
    tickerAnimation.resume();
  });
});



