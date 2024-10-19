// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      document.getElementById(targetId).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Highlight Active Section in Navigation Bar
  window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');
    let currentSection = '';
  
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (window.scrollY >= sectionTop - 50) {
        currentSection = section.getAttribute('id');
      }
    });
  
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').substring(1) === currentSection) {
        link.classList.add('active');
      }
    });
  });
  
  // Load Particles.js Background
  particlesJS.load('particles-js', 'assets/particles.json', function() {
    console.log('Particles.js configuration loaded');
  });
  
  // Dynamic Content Loading
  document.addEventListener('DOMContentLoaded', () => {
    const loadContentButtons = document.querySelectorAll('[data-load-content]');
  
    loadContentButtons.forEach(button => {
      button.addEventListener('click', () => {
        const target = button.getAttribute('data-target');
        const url = button.getAttribute('data-url');
  
        fetch(url)
          .then(response => response.text())
          .then(data => {
            document.querySelector(target).innerHTML = data;
          })
          .catch(error => console.error('Error loading content:', error));
      });
    });
  });
