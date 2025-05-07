"use strict";

/**
 * navbar toggle
 */

const header = document.querySelector("[data-header]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");

navToggleBtn.addEventListener("click", function () {
  header.classList.toggle("nav-active");
  this.classList.toggle("active");
});

/**
 * toggle the navbar when click any navbar link
 */

const navbarLinks = document.querySelectorAll("[data-nav-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    header.classList.toggle("nav-active");
    navToggleBtn.classList.toggle("active");
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const bars = document.querySelectorAll(".progress-fill  ");
  const section = document.querySelector(".progress-bar"); // adjust this selector to match your section

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          bars.forEach((bar) => {
            const percent = bar.getAttribute("data-percentage");
            bar.style.width = percent + "%";
          });
          observer.unobserve(entry.target); // Optional: run only once
        }
      });
    },
    {
      threshold: 0.3, // adjust visibility threshold
    }
  );

  if (section) {
    observer.observe(section);
  }
});



document.addEventListener("DOMContentLoaded", function () {
  const image = document.querySelector(".abs-img");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          image.classList.add("visible");
          observer.unobserve(entry.target); // Remove if you want it to trigger only once
        }
      });
    },
    {
      threshold: 0.5, // Adjust depending on when you want it to trigger
    }
  );

  if (image) {
    observer.observe(image);
  }
});


document.addEventListener("DOMContentLoaded", function () {
  const aboutContent = document.querySelector(".about-content");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          aboutContent.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.3,
    }
  );

  if (aboutContent) {
    observer.observe(aboutContent);
  }
});



/**
 * back to top & header
 */

const backTopBtn = document.querySelector("[data-back-to-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});
