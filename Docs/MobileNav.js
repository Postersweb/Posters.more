const menuToggle = document.getElementById('menu-toggle');
const mobileNav = document.getElementById('mobile-nav');
const header = document.querySelector('header');
let lastScrollTop = 0;

menuToggle.addEventListener('click', () => {
  if (mobileNav.classList.contains('open')) {
    mobileNav.classList.remove('open');
    menuToggle.classList.remove('active');
  } else {
    mobileNav.classList.add('open');
    menuToggle.classList.add('active');
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    mobileNav.classList.remove('open');
    menuToggle.classList.remove('active');
  }
});

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  if (scrollTop > lastScrollTop && scrollTop > 10) {
    header.classList.add('hide');
    if (mobileNav.classList.contains('open')) {
      mobileNav.classList.remove('open');
      menuToggle.classList.remove('active');
    }
  } else {
    header.classList.remove('hide');
  }
  
  lastScrollTop = scrollTop;
});