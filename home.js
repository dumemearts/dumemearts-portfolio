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






// HERO DIGITAL DESIGNER TEXT STAGGER DESKTOP
document.addEventListener("DOMContentLoaded", function () {
  function initGSAPAnimation() {
    let isTabletOrBelow = window.innerWidth <= 991;

    gsap.from(".heading-letter, .heading-letter.is--space", {
      y: 100,
      opacity: 0,
      duration: 0.4,
      stagger: 0.05,
      ease: "power3.out",
      delay: 1.3,
      scrollTrigger: {
        trigger: ".hero-inner",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: isTabletOrBelow ? "play none none none" : "restart none none none", 
        onEnter: isTabletOrBelow
          ? null
          : (self) => setTimeout(() => self.animation.restart(), 500),
        onEnterBack: isTabletOrBelow
          ? null
          : (self) => setTimeout(() => self.animation.restart(), 500),
        once: isTabletOrBelow, // Ensures it only plays once on tablet and below
      },
    });
  }

  initGSAPAnimation(); // Run animation check on page load

  // Listen for window resize to dynamically reinitialize animation
  window.addEventListener("resize", function () {
    gsap.killTweensOf(".heading-letter, .heading-letter.is--space"); // Kill animation on resize
    initGSAPAnimation(); // Reinitialize animation
  });
});






// HERO DIGITAL DESIGNER TEXT STAGGER MOBILE
document.addEventListener("DOMContentLoaded", function () {
  function initGSAPAnimation() {
    gsap.from(".heading-letter-mobile", {
      y: 100,
      opacity: 0,
      duration: 0.4,
      stagger: 0.05,
      ease: "power3.out",
      delay: 1,
      scrollTrigger: {
        trigger: ".hero-inner",
        start: "top 80%",
        end: "bottom 20%",
      },
    });
  }

  initGSAPAnimation(); // Run animation check on page load

  // Listen for window resize to dynamically reinitialize animation
  window.addEventListener("resize", function () {
    gsap.killTweensOf(".heading-letter-mobile"); // Kill animation on resize
    initGSAPAnimation(); // Reinitialize animation
  });
});







// SCRAMBLE TEXT
function initScrambleOnLoad(){
  let targets = document.querySelectorAll('[data-scramble="load"]')
  
  targets.forEach((target) => {
  	// split into seperate words + letters 
    let split = new SplitText3(target, {
      type: "words, chars",
      wordsClass: "word",
      charsClass: "char"
    });
    
    gsap.to(split.words, {
      duration: 1.2,
      stagger: 0.01,
      scrambleText: {
        text: "{original}",
        chars: 'upperCase', // experiment with different scramble characters here
        speed: 0.85,
      },
      // Once animation is done, revert the split to reduce DOM size
      onComplete: () => split.revert()
    })   
  })
}
  // Function to reveal stuff on scroll
  function initScrambleOnScroll(){
  let targets = document.querySelectorAll('[data-scramble="scroll"]')
  
  targets.forEach((target) => {
  	// Used this attribute to showcase a different character scramble, can be replaced with many scenarios
    let isAlternative = target.hasAttribute("data-scramble-alt")
    
    let split = new SplitText3(target, {
      type: "words, chars",
      wordsClass: "word",
      charsClass: "char"
    });
    
    gsap.to(split.words, {
      duration: 1.4,
      stagger: 0.015,
      scrambleText: {
        text: "{original}", 
        chars: isAlternative ? '▯|' : 'upperCase',  // experiment with different scramble characters here
        speed: 0.95,
      },
      scrollTrigger: {
        trigger: target,
        start: "top bottom",
        once: true
      },
      // Once animation is done, revert the split to reduce DOM size
      onComplete: () => split.revert()
    })   
  }) 
}
  function initScrambleOnHover(){
  let targets = document.querySelectorAll('[data-scramble-hover="link"]')
  
  targets.forEach((target) => {
    let textEl = target.querySelector('[data-scramble-hover="target"]')
    let originalText = textEl.textContent // save original text
    let customHoverText = textEl.getAttribute("data-scramble-text") // if this attribute is present, take a custom hover text
    
    let split = new SplitText3(textEl, {
      type: "words, chars",
      wordsClass: "word",
      charsClass: "char"
    })
    
    target.addEventListener("mouseenter", () => {
      gsap.to(textEl, {
        duration: 1,
        scrambleText: {
          text: customHoverText ? customHoverText : originalText,
          chars: "◊▯∆|"
        }
      })
    })
    
    target.addEventListener("mouseleave", () => {
      gsap.to(textEl, {
        duration: 0.6,
        scrambleText: {
          text: originalText,
          speed: 2,
          chars: "◊▯∆"
        }
      })
    })    
  })
}
  document.addEventListener("DOMContentLoaded", () => {
  initScrambleOnLoad()
  initScrambleOnScroll()
  initScrambleOnHover()
})






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




// TR PROJECT SCROLL ANIMATION
$("[tr-scroll-toggle='component']").each(function (index) {
  // get elements
  let component = $(this);
  let lists = component.find("[tr-scroll-toggle='list']");
  // set item total
  let itemTotal = lists.first().children().length;
  component.find("[tr-scroll-toggle='number-total']").text(itemTotal);
  // create trigger divs & spacer
  let firstTrigger = component.find("[tr-scroll-toggle='trigger']").first();
  for (let i = 1; i < itemTotal; i++) {
    firstTrigger.clone().appendTo(component);
  }
  let triggers = component.find("[tr-scroll-toggle='trigger']");
  firstTrigger.css("margin-top", "-100vh");
  let trSpacer = $("<div class='tr-scroll-toggle-spacer' style='width: 100%; height: 100vh;'></div>").hide().appendTo(component);
  // check for min width
  let minWidth = 0;
  let trMinWidth = component.attr("tr-min-width");
  if (trMinWidth !== undefined && trMinWidth !== false) {
    minWidth = +trMinWidth;
  }
  // main breakpoint
  gsap.matchMedia().add(`(min-width: ${minWidth}px)`, () => {
    // show spacer
    trSpacer.show();
    // switch which item is active
    function makeItemActive(activeIndex) {
      component.find("[tr-scroll-toggle='transform-y']").css("transform", `translateY(${activeIndex * -100}%)`);
      component.find("[tr-scroll-toggle='transform-x']").css("transform", `translateX(${activeIndex * -100}%)`);
      component.find("[tr-scroll-toggle='number-current']").text(activeIndex + 1);
      lists.each(function (index) {
        $(this).children().removeClass("is-active");
        $(this).children().eq(activeIndex).addClass("is-active");
      });
    }
    makeItemActive(0);
    // scroll to trigger div on click of anchor
    let anchorLinks = component.find("[tr-anchors]").children();
    anchorLinks.on("click", function () {
      let myIndex = $(this).index();
      let scrollDistance = triggers.eq(myIndex).offset().top + triggers.eq(myIndex).height() - 1;
      $("html, body").animate({ scrollTop: scrollDistance });
    });
    // triggers timeline
    triggers.each(function (index) {
      let triggerIndex = index;
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: $(this),
          start: "top top",
          end: "bottom top",
          scrub: true,
          onToggle: ({ self, isActive }) => {
            if (isActive) {
              makeItemActive(triggerIndex);
            }
          }
        },
        defaults: {
          ease: "none"
        }
      });
      lists.each(function () {
        let childItem = $(this).children().eq(triggerIndex);
        tl.to(childItem.find("[tr-item-animation='scale-to-1']"), { scale: 1 }, 0);
        tl.from(childItem.find("[tr-item-animation='scale-from-1']"), { scale: 1 }, 0);
        tl.to(childItem.find("[tr-item-animation='progress-horizontal']"), { width: "100%" }, 0);
        tl.to(childItem.find("[tr-item-animation='progress-vertical']"), { height: "100%" }, 0);
        tl.to(childItem.find("[tr-item-animation='rotate-to-0']"), { rotation: 0 }, 0);
        tl.from(childItem.find("[tr-item-animation='rotate-from-0']"), { rotation: 0 }, 0);
      });
    });
    // component timeline
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: component,
        start: "top top",
        end: "bottom bottom",
        scrub: true
      },
      defaults: {
        ease: "none"
      }
    });
    tl.to(component.find("[tr-section-animation='scale-to-1']"), { scale: 1 }, 0);
    tl.from(component.find("[tr-section-animation='scale-from-1']"), { scale: 1 }, 0);
    tl.to(component.find("[tr-section-animation='progress-horizontal']"), { width: "100%" }, 0);
    tl.to(component.find("[tr-section-animation='progress-vertical']"), { height: "100%" }, 0);
    tl.to(component.find("[tr-section-animation='rotate-to-0']"), { rotation: 0 }, 0);
    tl.from(component.find("[tr-section-animation='rotate-from-0']"), { rotation: 0 }, 0);
    // optional scroll snapping
    if (component.attr("tr-scroll-snap") === "true") {
      let tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: component,
          start: "top top",
          end: "bottom bottom",
          snap: {
            snapTo: "labelsDirectional",
            duration: { min: 0.01, max: 0.2 },
            delay: 0.0001,
            ease: "power1.out"
          }
        }
      });
      triggers.each(function (index) {
        tl2.to($(this), { scale: 1, duration: 1 });
        tl2.addLabel("trigger" + index);
      });
    }
    // smaller screen sizes
    return () => {
      trSpacer.hide();
      component.find("[tr-scroll-toggle='transform-y']").css("transform", "translateY(0%)");
      component.find("[tr-scroll-toggle='transform-x']").css("transform", "translateX(0%)");
      lists.each(function (index) {
        $(this).children().removeClass("is-active");
      });
    };
  });
});





// CHECK MARQUEE 1
let tickerTl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".ticker-inner-wrapper",
    start: "top bottom", // Starts when it enters the viewport
    end: "bottom top", // Ends when leaving the viewport
    scrub: 1, // Keeps motion smooth and linked to scroll
  },
});
tickerTl2.to(".ticker-inner-wrapper", { xPercent: -25, ease: "none" });




// CHECK MARQUEE 2
let tickerTl4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".ticker-footer",
    start: "top bottom", // Starts when it enters the viewport
    end: "bottom top", // Ends when leaving the viewport
    scrub: 1, // Keeps motion smooth and linked to scroll
  },
});

tickerTl4.to(".ticker-footer", { xPercent: -25, ease: "none" });





// RECENT PROJECTS MARQUEE
let tickerTl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".ticker-container",
    start: "top bottom", // Starts when it enters the viewport
    end: "bottom top", // Ends when leaving the viewport
    scrub: 1, // Keeps motion smooth and linked to scroll
  },
});

tickerTl3.to(".ticker-container", { xPercent: -10, ease: "none" });







// HOVER EXPERTISE SECTION
CustomEase.create("osmo-ease", "0.625, 0.05, 0, 1");
gsap.defaults({
  ease: "osmo-ease",
  duration: 0.725
});
document.addEventListener("DOMContentLoaded", () => {
  const listItems = document.querySelectorAll(".main-title-item");
  const imageItems = document.querySelectorAll(".main-img-item");

  // Show corresponding image on hover of a list item, based on index
  listItems.forEach((listItem, i) => {
    listItem.addEventListener("mouseenter", () => {
      gsap.set(imageItems, { autoAlpha: 0 }); // Hide all images
      gsap.set(imageItems[i], { autoAlpha: 1 }); // Show image with matching index
    });
  });
});




// PROJECT SPLIT-TEXT ANIMATION
let windowWidth = window.outerWidth;
$(".split-text").each(function (index) {
  let myText = $(this);
  let mySplitText;
  function createSplits() {
    mySplitText = new SplitText(myText, {
      type: "chars,words,lines",
      charsClass: "split-chars",
      wordsClass: "split-words",
      linesClass: "split-lines"
    });
  }
  createSplits();
  $(window).resize(function () {
  	if (window.outerWidth !== windowWidth) {
    	mySplitText.revert();
			location.reload();
    }
    windowWidth = window.outerWidth;
  });
});
gsap.registerPlugin(ScrollTrigger);
function createTextAnimations() {
  // Line Animation
  $(".line-animation").each(function (index) {
    let triggerElement = $(this);
    let myText = $(this).find(".split-text");
    let targetElement = $(this).find(".split-lines");

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        // trigger element - viewport
        start: "top bottom",
        end: "bottom top",
        toggleActions: "restart none none none"
      }
    });
    tl.from(targetElement, {
      duration: 0.5,
      y: "150%",
      rotationX: -90,
      opacity: 0,
      ease: "power1.inOut",
      stagger: {
        amount: 0.4,
        from: "0"
      }
    });
  });
  // Word Animation
  $(".word-animation").each(function (index) {
    let triggerElement = $(this);
    let myText = $(this).find(".split-text");
    let targetElement = $(this).find(".split-words");

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        // trigger element - viewport
        start: "top bottom",
        end: "bottom top",
        toggleActions: "restart none none none"
      }
    });
    tl.from(targetElement, {
      duration: 0.3,
      y: "80%",
      rotationX: -90,
      opacity: 0,
      ease: "power1.inOut",
      stagger: {
        amount: 0.9,
        from: "0"
      }
    });
  });
  // Letter Animation
  $(".letter-animation").each(function (index) {
    let triggerElement = $(this);
    let myText = $(this).find(".split-text");
    let targetElement = $(this).find(".split-chars");

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        // trigger element - viewport
        start: "top bottom",
        end: "bottom top",
        toggleActions: "restart none none none"
      }
    });
    tl.from(targetElement, {
      duration: 0.5,
      y: "60%",
      opacity: 0,
      rotationX: -90,
      ease: "power1.inOut",
      stagger: {
        amount: 0.7,
        from: "0"
      }
    });
  });
}
createTextAnimations();










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







// PIXEL HOVER ANIMATION
document.addEventListener('DOMContentLoaded', function () {
  const animationStepDuration = 0.3; // Adjust this value to control the timing
  const gridSize = 7; // Number of pixels per row and column (adjustable)

  // Calculate pixel size dynamically
  const pixelSize = 100 / gridSize; // Calculate the size of each pixel as a percentage

  // Select all cards
  const cards = document.querySelectorAll('[data-pixelated-image-reveal]');

  // Detect if device is touch device
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0 || window.matchMedia("(pointer: coarse)").matches;

  // Loop through each card
  cards.forEach((card) => {
    const pixelGrid = card.querySelector('[data-pixelated-image-reveal-grid]');
    const activeCard = card.querySelector('[data-pixelated-image-reveal-active]');

    // Remove any existing pixels with the class 'pixelated-image-card__pixel'
    const existingPixels = pixelGrid.querySelectorAll('.pixelated-image-card__pixel');
    existingPixels.forEach(pixel => pixel.remove());

    // Create a grid of pixels dynamically based on the gridSize
    for (let row = 0; row < gridSize; row++) {
      for (let col = 0; col < gridSize; col++) {
        const pixel = document.createElement('div');
        pixel.classList.add('pixelated-image-card__pixel');
        pixel.style.width = `${pixelSize}%`; // Set the pixel width dynamically
        pixel.style.height = `${pixelSize}%`; // Set the pixel height dynamically
        pixel.style.left = `${col * pixelSize}%`; // Set the pixel's horizontal position
        pixel.style.top = `${row * pixelSize}%`; // Set the pixel's vertical position
        pixelGrid.appendChild(pixel);
      }
    }

    const pixels = pixelGrid.querySelectorAll('.pixelated-image-card__pixel');
    const totalPixels = pixels.length;
    const staggerDuration = animationStepDuration / totalPixels; // Calculate stagger duration dynamically

    let isActive = false; // Variable to track if the card is active
    let delayedCall;

    const animatePixels = (activate) => {
      isActive = activate;
      gsap.killTweensOf(pixels); // Reset any ongoing animations
      if (delayedCall) {
        delayedCall.kill();
      }
      gsap.set(pixels, { display: 'none' }); // Make all pixels invisible instantly

      // Show pixels randomly
      gsap.to(pixels, {
        display: 'block',
        duration: 0,
        stagger: {
          each: staggerDuration,
          from: 'random'
        }
      });

      // After animationStepDuration, show or hide the activeCard
      delayedCall = gsap.delayedCall(animationStepDuration, () => {
        if (activate) {
          activeCard.style.display = 'block';
          // **Set pointer-events to none so clicks pass through activeCard**
          activeCard.style.pointerEvents = 'none';
        } else {
          activeCard.style.display = 'none';
        }
      });

      // Hide pixels randomly
      gsap.to(pixels, {
        display: 'none',
        duration: 0,
        delay: animationStepDuration,
        stagger: {
          each: staggerDuration,
          from: 'random'
        }
      });
    };

    if (isTouchDevice) {
      // For touch devices, use click event
      card.addEventListener('click', () => {
        animatePixels(!isActive);
      });
    } else {
      // For non-touch devices, use mouseenter and mouseleave
      card.addEventListener('mouseenter', () => {
        if (!isActive) {
          animatePixels(true);
        }
      });

      card.addEventListener('mouseleave', () => {
        if (isActive) {
          animatePixels(false);
        }
      });
    }
  });
});







// TESTIMONIAL SLIDER
let photoSwiper = new Swiper(".swiper.is-photos", {
  effect: "cards",
  grabCursor: true,
  loop: true,
  keyboard: true,
  // Navigation arrows
  navigation: {
    nextEl: ".arrow.is-right",
    prevEl: ".arrow.is-left"
  }
});
let contentSwiper = new Swiper(".swiper.is-content", {
  speed: 0,
  loop: true,
  followFinger: false,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  }
});
photoSwiper.controller.control = contentSwiper;
contentSwiper.controller.control = photoSwiper;





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




// HERO IMAGE TRAIL
function initImageTrail(config = {}) {

  // config + defaults
  const options = {
    minWidth: config.minWidth ?? 992,
    moveDistance: config.moveDistance ?? 15,
    stopDuration: config.stopDuration ?? 300,
    trailLength: config.trailLength ?? 5
  };

  const wrapper = document.querySelector('[data-trail="wrapper"]');
  
  if (!wrapper || window.innerWidth < options.minWidth) {
    return;
  }
  
  // State management
  const state = {
    trailInterval: null,
    globalIndex: 0,
    last: { x: 0, y: 0 },
    trailImageTimestamps: new Map(),
    trailImages: Array.from(document.querySelectorAll('[data-trail="item"]')),
    isActive: false
  };

  // Utility functions
  const MathUtils = {
    lerp: (a, b, n) => (1 - n) * a + n * b,
    distance: (x1, y1, x2, y2) => Math.hypot(x2 - x1, y2 - y1)
  };

  function getRelativeCoordinates(e, rect) {
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
  }

  function activate(trailImage, x, y) {
    if (!trailImage) return;

    const rect = trailImage.getBoundingClientRect();
    const styles = {
      left: `${x - rect.width / 2}px`,
      top: `${y - rect.height / 2}px`,
      zIndex: state.globalIndex,
      display: 'block'
    };

    Object.assign(trailImage.style, styles);
    state.trailImageTimestamps.set(trailImage, Date.now());

	// Here, animate how the images will appear!
    gsap.fromTo(
      trailImage,
      { autoAlpha: 0, scale: 0.8 },
      {
        scale: 1,
        autoAlpha: 1,
        duration: 0.2,
        overwrite: true
      }
    );

    state.last = { x, y };
  }

  function fadeOutTrailImage(trailImage) {
    if (!trailImage) return;
		
    // Here, animate how the images will disappear!
    gsap.to(trailImage, {
      opacity: 0,
      scale: 0.2,
      duration: 0.8,
      ease: "expo.out",
      onComplete: () => {
        gsap.set(trailImage, { autoAlpha: 0 });
      }
    });
  }

  function handleOnMove(e) {
    if (!state.isActive) return;

    const rectWrapper = wrapper.getBoundingClientRect();
    const { x: relativeX, y: relativeY } = getRelativeCoordinates(e, rectWrapper);
    
    const distanceFromLast = MathUtils.distance(
      relativeX, 
      relativeY, 
      state.last.x, 
      state.last.y
    );

    if (distanceFromLast > window.innerWidth / options.moveDistance) {
      const lead = state.trailImages[state.globalIndex % state.trailImages.length];
      const tail = state.trailImages[(state.globalIndex - options.trailLength) % state.trailImages.length];

      activate(lead, relativeX, relativeY);
      fadeOutTrailImage(tail);
      state.globalIndex++;
    }
  }

  function cleanupTrailImages() {
    const currentTime = Date.now();
    for (const [trailImage, timestamp] of state.trailImageTimestamps.entries()) {
      if (currentTime - timestamp > options.stopDuration) {
        fadeOutTrailImage(trailImage);
        state.trailImageTimestamps.delete(trailImage);
      }
    }
  }

  function startTrail() {
    if (state.isActive) return;
    
    state.isActive = true;
    wrapper.addEventListener("mousemove", handleOnMove);
    state.trailInterval = setInterval(cleanupTrailImages, 100);
  }

  function stopTrail() {
    if (!state.isActive) return;
    
    state.isActive = false;
    wrapper.removeEventListener("mousemove", handleOnMove);
    clearInterval(state.trailInterval);
    state.trailInterval = null;
    
    // Clean up remaining trail images
    state.trailImages.forEach(fadeOutTrailImage);
    state.trailImageTimestamps.clear();
  }

  // Initialize ScrollTrigger
  ScrollTrigger.create({
    trigger: wrapper,
    start: "top bottom",
    end: "bottom top",
    onEnter: startTrail,
    onEnterBack: startTrail,
    onLeave: stopTrail,
    onLeaveBack: stopTrail
  });

  // Clean up on window resize
  const handleResize = () => {
    if (window.innerWidth < options.minWidth && state.isActive) {
      stopTrail();
    } else if (window.innerWidth >= options.minWidth && !state.isActive) {
      startTrail();
    }
  };

  window.addEventListener('resize', handleResize);

  return () => {
    stopTrail();
    window.removeEventListener('resize', handleResize);
  };
}

document.addEventListener("DOMContentLoaded", () => {
  const imageTrail = initImageTrail({
    minWidth: 992,
    moveDistance: 15,
    stopDuration: 350,
    trailLength: 8
  });
});

initFooterTrail({
  minWidth: 992,    // Breakpoint in pixels - below this width, the effect is disabled
  moveDistance: 15,  // Controls how fast images appear (lower = more frequent)
  stopDuration: 300, // Time in ms before images start fading when mouse stops
  trailLength: 5     // Number of images visible before they start fading out
});





