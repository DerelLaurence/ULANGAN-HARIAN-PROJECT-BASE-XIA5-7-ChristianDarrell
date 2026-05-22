// ─── CONSOLE LOGS (Identitas Coder) ───
console.log("=================================");
console.log("  Student Report Website — TIK   ");
console.log("  Nama    : Christian Darrell L. ");
console.log("  Kelas   : XI-A5                ");
console.log("  Sekolah : Kolese Kanisius      ");
console.log("=================================");

// ─── TOAST NOTIFICATION ───
window.addEventListener('load', () => {
  const toast = document.createElement('div');
  toast.className = 'toast-msg';
  toast.id = 'toast-msg';
  toast.innerHTML = '👋 Selamat datang di Website Portofolio Christian Darrell!';
  document.body.appendChild(toast);
  
  setTimeout(() => toast.classList.add('show'), 800);
  setTimeout(() => toast.classList.remove('show'), 4000);
});

// ─── SCROLL REVEAL (Intersection Observer) ───
document.addEventListener('DOMContentLoaded', () => {
  const fadeSections = document.querySelectorAll('.fade-in-section');
  const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        scrollObserver.unobserve(entry.target); // Trigger only once
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  fadeSections.forEach(section => {
    scrollObserver.observe(section);
  });
});

// ─── MOBILE NAV MENU TOGGLE ───
const mobileToggle = document.getElementById('mobile-toggle');
const navLinksContainer = document.getElementById('nav-links');

if (mobileToggle && navLinksContainer) {
  mobileToggle.addEventListener('click', () => {
    mobileToggle.classList.toggle('open');
    navLinksContainer.classList.toggle('open');
  });

  // Close nav menu on clicking links
  const links = navLinksContainer.querySelectorAll('a');
  links.forEach(link => {
    link.addEventListener('click', () => {
      mobileToggle.classList.remove('open');
      navLinksContainer.classList.remove('open');
    });
  });
}

// ─── SCROLL ACTIVE NAVIGATION HIGHLIGHT ───
const sections = document.querySelectorAll('section[id], header');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let currentActive = 'home';
  const scrollY = window.pageYOffset;

  sections.forEach(section => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 120; // Offset for sticky navbar
    const sectionId = section.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      currentActive = sectionId;
    }
  });

  navItems.forEach(item => {
    item.classList.remove('active');
    if (item.getAttribute('href') === `#${currentActive}` || (currentActive === 'home' && item.getAttribute('href') === '#home')) {
      item.classList.add('active');
    }
  });
});

