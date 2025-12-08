// Get all the sections and nav links
var sections = document.querySelectorAll("main[id], section[id], aside[id]");
var navLinks = document.querySelectorAll(".nav-link");

// When the user scrolls the page
window.addEventListener("scroll", function() {
  var currentSectionId = "";

  // Loop through each section
  for (var i = 0; i < sections.length; i++) {
    var section = sections[i];
    var sectionTop = section.offsetTop;
    var sectionHeight = section.offsetHeight;

    // Check if we are currently viewing this section
    if (window.pageYOffset >= sectionTop - sectionHeight / 4) {
      currentSectionId = section.getAttribute("id");
    }
  }

  // Loop through each nav link
  for (var j = 0; j < navLinks.length; j++) {
    var link = navLinks[j];
    
    // Remove 'active' class from all links
    link.classList.remove("active");

    // Add 'active' class to the currently visible section's link
    var linkHref = link.getAttribute("href");
    if (linkHref === "#" + currentSectionId) {
      link.classList.add("active");
    }
  }
});

let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });

  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });

  currentIndex = index;
}

// Auto Slide every 5 seconds
setInterval(() => {
  const nextIndex = (currentIndex + 1) % slides.length;
  showSlide(nextIndex);
}, 5000);

// Allow manual click from dots
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    showSlide(index);
  });
});
