// --- Year ---
document.getElementById('year').textContent = new Date().getFullYear();

// --- Mobile nav toggle ---
const toggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close nav when a link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// --- Smooth header shadow on scroll ---
const header = document.querySelector('.site-header');

window.addEventListener('scroll', () => {
  header.style.boxShadow = window.scrollY > 10
    ? '0 2px 24px rgba(26,26,24,0.07)'
    : 'none';
}, { passive: true });

// --- Fade-in on scroll ---
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.service-card, .about-stats .stat').forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});

// Inject fade-in styles
const style = document.createElement('style');
style.textContent = `
  .fade-in { opacity: 0; transform: translateY(16px); transition: opacity 0.5s ease, transform 0.5s ease; }
  .fade-in.visible { opacity: 1; transform: none; }
  .service-card:nth-child(2) { transition-delay: 0.07s; }
  .service-card:nth-child(3) { transition-delay: 0.14s; }
  .service-card:nth-child(4) { transition-delay: 0.07s; }
  .service-card:nth-child(5) { transition-delay: 0.14s; }
  .service-card:nth-child(6) { transition-delay: 0.21s; }
  .stat:nth-child(2) { transition-delay: 0.1s; }
  .stat:nth-child(3) { transition-delay: 0.2s; }
`;
document.head.appendChild(style);
