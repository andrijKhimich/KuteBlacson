const body = document.getElementsByTagName('body')[0];
const mainWrapper = document.querySelector('.main-wrapper');
const testimonialsSlider = document.querySelector('#testimonialsSlider');
const bannerSlider = document.querySelector('#bannerSlider');
const storeSlider = document.querySelector('#storeSlider');

// const caseSlider = document.querySelector('#caseSlider');
// const blogSlider = document.querySelector('#blogSlider');
// const practiceSlider = document.querySelector('#practiceSlider');
// const sidebarAccordion = document.querySelector('#sidebarAccordion');
// const menuBtn = document.querySelector('#menuBtn');
// const nav = document.querySelector('#nav');
// const navItems = document.querySelectorAll('.nav-list a');
// const submenu = document.querySelectorAll('.nav-sublist');
// const moreLink = document.querySelectorAll('.js-open-text');
// const hiddenText = document.querySelectorAll('.more-text');
// const filterLink = document.querySelectorAll('.filter__list li');
// const header = document.querySelector('.header');
// const homeHeader = document.querySelector('.header_home');
// const innerHeader = document.querySelector('.header_inner');
// const logoImg = document.querySelector('.logo img');
// const logoSource = document.querySelector('.logo source');


function initTestimonialsSlider() {
  $(testimonialsSlider).slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    dots: false,
    fade: true,
    arrows: true,
    prevArrow: $('#testimonialsPrev'),
    nextArrow: $('#testimonialsNext'),
    infinite: false,
    autoplaySpeed: 10000
  });
}


function initStoreSlider() {
  $(storeSlider).slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    dots: false,
    fade: true,
    arrows: true,
    prevArrow: $('#storePrev'),
    nextArrow: $('#storeNext'),
    infinite: false,
    autoplaySpeed: 10000
  });
}

function initBannerSlider() {
  $(bannerSlider).slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    dots: false,
    fade: true,
    arrows: false,
    infinite: false,
    autoplaySpeed: 10000
  });
}
// function setInnerHeader() {
//   logoImg.setAttribute('src', logoWhiteUrl);
//   logoSource.setAttribute('srcset', logoWhiteUrl);
//   header.classList.add("header_inner");
// }

// function setHomeHeader() {
//   logoImg.setAttribute('src', logoBlackUrl);
//   logoSource.setAttribute('srcset', logoBlackUrl);
//   header.classList.remove("header_inner");
// }

// function openMenu() {
//   menuBtn.classList.add('active');
//   menuBtn.innerText = "close";
//   nav.classList.add("open");
//   body.style.overflow = 'hidden';
// }

// function closeMenu() {
//   menuBtn.classList.remove('active');
//   menuBtn.innerText = "menu";
//   nav.classList.remove("open");
//   navItems.forEach(function (element) {
//     element.classList.remove("active");
//   });
//   submenu.forEach(function (element) {
//     element.classList.remove("active");
//   });
//   body.style.overflow = 'auto';
// }

function showContent() {
  mainWrapper.classList.remove("js-fadeIn");
}
document.addEventListener("DOMContentLoaded", function () {


  showContent();
  initPartnersSlider();
  initTestimonialsSlider();
  initBannerSlider();
  initStoreSlider();
  // menuBtn.addEventListener('click', function () {
  //   if (this.classList.contains("active")) {
  //     closeMenu();
  //   } else {
  //     openMenu();
  //   }
  // });

  // navItems.forEach(function (link) {
  //   link.addEventListener('click', function () {
  //     navItems.forEach(function (element) {
  //       element.classList.remove("active");
  //     });
  //     this.classList.add('active');

  //     submenu.forEach(function (sublist) {
  //       sublist.classList.remove("active");
  //     });
  //     const sublist = this.nextSibling.nextSibling;
  //     if (sublist != null) {
  //       sublist.classList.add('active');
  //     }

  //   });
  // })


  window.addEventListener('resize', function (event) {
    initPartnersSlider();
  });

  function initPartnersSlider() {
    const partnerSlider = document.querySelector('#partnerSlider.slick-slider');
    if (window.innerWidth < 991 && !partnerSlider) {
      $('#partnerSlider').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
        arrows: false,
        infinite: false,
        autoplaySpeed: 10000,
        mobileFirst: true,
        responsive: [{
            breakpoint: 991,
            settings: 'unslick'
          },
          {
            breakpoint: 180,
            settings: {
              slidesToShow: 1

            }
          },
          {
            breakpoint: 575,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 4,
              dots: true
            }
          }
        ]
      });
    }
  }

});


// function initTestimonialsSlider() {
//   const counter = document.querySelector('#testimonialsSliderInfo');
//   $(testimonialsSlider).on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
//     if (!slick.$dots) {
//       return;
//     }
//     let i = (currentSlide ? currentSlide : 0) + 1;
//     counter.innerHTML = '<span class="slider__number">' + i + '</span>' + '/' + (slick.$dots[0].children.length);
//   });

//   $(testimonialsSlider).slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     dots: true,
//     infinite: false,
//     speed: 800,
//     fade: true,
//     arrows: true,
//     prevArrow: $('#testimonialsPrev'),
//     nextArrow: $('#testimonialsNext'),
//     responsive: [{
//       breakpoint: 991,
//       settings: {
//         adaptiveHeight: true
//       }
//     }]
//   });
// }

// function initPracticeSlider() {
//   const counter = document.querySelector('#practiceSliderInfo');
//   $(practiceSlider).on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
//     if (!slick.$dots) {
//       return;
//     }
//     let i = (currentSlide ? currentSlide : 0) + 1;
//     counter.innerHTML = '<span class="slider__number">' + i + '</span>' + '/' + (slick.$dots[0].children.length);
//   });

//   $('#practiceSlider').slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     dots: true,
//     infinite: false,
//     speed: 800,
//     fade: true,
//     arrows: true,
//     prevArrow: $('#ptacticePrev'),
//     nextArrow: $('#ptacticeNext'),
//     responsive: [{
//       breakpoint: 575,
//       settings: {
//         adaptiveHeight: true
//       }
//     }]
//   });
// }

// function initCaseSlider() {
//   const counter = document.querySelector('#caseSliderInfo');
//   $(caseSlider).on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
//     if (!slick.$dots) {
//       return;
//     }
//     let i = (currentSlide ? currentSlide : 0) + 1;
//     counter.innerHTML = '<span class="slider__number">' + i + '</span>' + '/' + (slick.$dots[0].children.length);
//   });

//   $('#caseSlider').slick({
//     slidesToShow: 2,
//     slidesToScroll: 1,
//     dots: true,
//     infinite: false,
//     speed: 1000,
//     arrows: true,
//     prevArrow: $('#casePrev'),
//     nextArrow: $('#caseNext'),
//     responsive: [{
//       breakpoint: 991,
//       settings: {
//         slidesToShow: 1
//       }
//     }]
//   });
// }

svg4everybody();

function testWebP(callback) {
  let webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src =
    "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector("body").classList.add("webp");
  } else {
    document.querySelector("body").classList.add("no-webp");
  }
});