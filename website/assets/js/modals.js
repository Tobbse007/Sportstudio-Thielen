// Modal System - Öffnen & Schließen von Pop-ups

// Funktion zum Öffnen eines Modals
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden'; // Verhindert Scrollen im Hintergrund
  }
}

// Funktion zum Schließen eines Modals
function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = ''; // Scrolling wieder erlauben
  }
}

// Alle Modals schließen bei Klick außerhalb
document.addEventListener('click', function(event) {
  if (event.target.classList.contains('modal-overlay')) {
    const modals = document.querySelectorAll('[id^="modal-"]');
    modals.forEach(modal => {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    });
    document.body.style.overflow = '';
  }
});

// ESC-Taste zum Schließen
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    const modals = document.querySelectorAll('[id^="modal-"]');
    modals.forEach(modal => {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    });
    document.body.style.overflow = '';
  }
});

// Smooth Scroll zu Sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href !== '#' && href.length > 1) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  });
});

// Scroll-Animation (Fade-in beim Scrollen)
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in-up');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Alle Elemente mit data-animate Attribut beobachten
document.addEventListener('DOMContentLoaded', function() {
  const animateElements = document.querySelectorAll('[data-animate]');
  animateElements.forEach(el => {
    observer.observe(el);
  });
});
