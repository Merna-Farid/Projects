

const mobileMenuButton = document.querySelector('#mobile-menu-button');

const mobileMenu = document.querySelector('.mobile-menu');

mobileMenuButton.addEventListener('click', function () {
    mobileMenu.classList.toggle('mobile-menu');
    
});

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    
  });
  