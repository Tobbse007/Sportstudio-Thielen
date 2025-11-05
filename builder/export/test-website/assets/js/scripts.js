// ============================================
// WEBSITE SCRIPTS - Sportstudio Thielen
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  
  // Mobile Menu Toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const mobileMenu = document.querySelector('.mobile-menu');
  
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('active');
    });
  }
  
  // Smooth Scroll für interne Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  // Scroll-to-Top Button
  const scrollTopBtn = document.getElementById('scroll-top');
  if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        scrollTopBtn.classList.remove('hidden');
      } else {
        scrollTopBtn.classList.add('hidden');
      }
    });
    
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
  
  // Lazy Loading für Bilder
  const lazyImages = document.querySelectorAll('img[loading="lazy"]');
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src || img.src;
          img.classList.add('fade-in');
          observer.unobserve(img);
        }
      });
    });
    
    lazyImages.forEach(img => imageObserver.observe(img));
  }
  
  // Form Validation (Kontaktformular)
  const contactForm = document.querySelector('form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Hier kannst du Form-Daten verarbeiten
      const formData = new FormData(contactForm);
      
      console.log('Form submitted:', Object.fromEntries(formData));
      
      // Zeige Erfolgs-Nachricht
      alert('Vielen Dank! Wir melden uns bald bei dir.');
      contactForm.reset();
    });
  }
  
  // Loading Animation entfernen
  const loading = document.querySelector('.loading');
  if (loading) {
    setTimeout(() => {
      loading.classList.add('hidden');
    }, 500);
  }
  
});

// Google Analytics (optional)
// window.dataLayer = window.dataLayer || [];
// function gtag(){dataLayer.push(arguments);}
// gtag('js', new Date());
// gtag('config', 'GA_MEASUREMENT_ID');
