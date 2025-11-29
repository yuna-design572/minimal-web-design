let lastScroll = 0;

window.addEventListener("scroll", () => {
  const current = window.pageYOffset;

  if (current > lastScroll) {
    document.querySelector("header").classList.add("hide");
  } else {
    document.querySelector("header").classList.remove("hide");
  }

  lastScroll = current;
});

const ham = document.querySelector('.hamburger');
const nav = document.querySelector('nav');

ham.addEventListener('click', () => {
  ham.classList.toggle('active');
  nav.classList.toggle('active');
});

const fadeElements = document.querySelectorAll(".fade-in");
const options = { threshold: 0.2 };

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("show");
  });
}, options);

fadeElements.forEach(el => observer.observe(el));
