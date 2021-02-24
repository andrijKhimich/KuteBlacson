const body = $('body');
const mainWrapper = $('.main-wrapper');
const testimonialsSlider = $('#testimonialsSlider');
// const bannerSlider = document.querySelector('#bannerSlider');
const meditationSlider = $('#meditationSlider');
const experianceSlider = $('#experianceSlider');
const featuresEventsSlider = $('#featuresEventsSlider');
const upcomingEventsSlider = $('#upcomingEventsSlider');


const storeSlider = $('#storeSlider');
const blogSlider = $('#blogSlider');
const menuBtn = $('#menuBtn');
const nav = $('#nav');
const partners = $('#partnerSlider');
const aboutSlider = $('#aboutSlider');

// const fixed = $('#target');


// const show = document.querySelector('#nav');

// console.log(partners);


// const caseSlider = document.querySelector('#caseSlider');
// const blogSlider = document.querySelector('#blogSlider');
// const practiceSlider = document.querySelector('#practiceSlider');
// const sidebarAccordion = document.querySelector('#sidebarAccordion');
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

function initAboutSlider() {
  $(aboutSlider).slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    dots: false,
    fade: true,
    arrows: true,
    adaptiveHeight: true,
    prevArrow: $('#aboutPrev'),
    nextArrow: $('#aboutNext'),
    infinite: false,
    autoplaySpeed: 10000
  });
}

function initTestimonialsSlider() {
  $(testimonialsSlider).slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    dots: false,
    fade: true,
    arrows: true,
    adaptiveHeight: true,
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

function initMeditationSlider() {
  $(meditationSlider).slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    dots: false,
    fade: false,
    arrows: true,
    prevArrow: $('#meditationPrev'),
    nextArrow: $('#meditationNext'),
    infinite: false,
    responsive: [{
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
      }
    }]
  });
}

function initBlogSlider() {
  $(blogSlider).slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    dots: false,
    fade: false,
    arrows: true,
    prevArrow: $('#blogPrev'),
    nextArrow: $('#blogNext'),
    infinite: false,
    responsive: [{
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
      }
    }]
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

function openMenu() {
  menuBtn.addClass('active');
  nav.addClass('active');
  body.css({
    'overflow': 'hidden'
  });
}

function closeMenu() {
  menuBtn.removeClass('active');
  nav.removeClass('active');
  body.css({
    'overflow': 'auto'
  });
}

function showContent() {
  $(mainWrapper).removeClass('js-fadeIn');
  setTimeout(function () {
    $('.js-show-onload').each(function () {
      let elem = $(this);
      elem.removeClass('js-fadeIn js-slideLeft js-slideRight js-slideTop js-slideDown');
    });
  }, 800);
}


document.addEventListener("DOMContentLoaded", function () {
  // toggle main menu
  menuBtn.click(function () {
    if (this.classList.contains("active")) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  const slider = document.querySelector('.help-slider');
  if (slider) {
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener('mousedown', (e) => {
      isDown = true;
      slider.classList.add('active');
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });
    slider.addEventListener('mouseleave', () => {
      isDown = false;
      slider.classList.remove('active');
    });
    slider.addEventListener('mouseup', () => {
      isDown = false;
      slider.classList.remove('active');
    });
    slider.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 3; //scroll-fast
      slider.scrollLeft = scrollLeft - walk;
      // console.log(walk);
    });

  }
});

// function fixedImage() {
//   const stopElement = $('#stopFixed');
//   // console.log(fixed.offset().top);
//   let topPosition = fixed.offset().top + 20;
//   let stopPosition = stopElement.offset().top - fixed.height() - 40;
//   // console.log(topPosition, stopPosition);
//   let lastScrollTop = 0;
//   $(window).scroll(function (event) {
//     let scrollPosition = $(this).scrollTop();
//     if (scrollPosition > lastScrollTop) {
//       // console.log('Down');
//       if (scrollPosition >= topPosition && scrollPosition <= stopPosition) {
//         fixed.css({
//           'position': 'fixed',
//           'top': '0'
//         });
//       } else if (scrollPosition > stopPosition) {
//         fixed.css({
//           'position': 'absolute',
//           'bottom': '0',
//           'top': 'auto'
//         });
//       } else {
//         fixed.css({
//           'position': 'absolute',
//           'top': '0'
//         });
//       }

//     } else {
//       // console.log('Up');

//       if (scrollPosition >= topPosition && scrollPosition <= stopPosition) {
//         fixed.css({
//           'position': 'fixed',
//           'top': '0',
//           'bottom': 'auto'
//         });
//       } else if (scrollPosition > stopPosition) {
//         fixed.css({
//           'position': 'absolute',
//           'bottom': '0',
//           'top': 'auto'
//         });
//       } else {
//         fixed.css({
//           'position': 'absolute',
//           'top': '0',
//           'bottom': 'auto'
//         });
//       }
//     }
//     lastScrollTop = scrollPosition;
//   });
// }


function initExperianceSlider() {
  // const counter = document.querySelector('#experianceSliderInfo');
  // $(experianceSlider).on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
  //   if (!slick.$dots) {
  //     return;
  //   }
  //   let i = (currentSlide ? currentSlide : 0) + 1;
  //   counter.innerHTML = '<span class="slider__number">' + i + '</span>' + '/' + (slick.$dots[0].children.length);
  // });

  $(experianceSlider).slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    // dots: true,
    infinite: true,
    // speed: 800,
    fade: false,
    arrows: true,
    prevArrow: $('#experiencesPrev'),
    nextArrow: $('#experiencesNext')
    // responsive: [{
    //   breakpoint: 991,
    //   settings: {
    //     adaptiveHeight: true
    //   }
    // }]
  });
}


function initFeaturesEventsSlider() {
  // const counter = document.querySelector('#experianceSliderInfo');
  // $(experianceSlider).on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
  //   if (!slick.$dots) {
  //     return;
  //   }
  //   let i = (currentSlide ? currentSlide : 0) + 1;
  //   counter.innerHTML = '<span class="slider__number">' + i + '</span>' + '/' + (slick.$dots[0].children.length);
  // });

  $(featuresEventsSlider).slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    // dots: true,
    infinite: false,
    // speed: 800,
    fade: false,
    arrows: true,
    prevArrow: $('#featuresPrev'),
    nextArrow: $('#featuresNext')
    // responsive: [{
    //   breakpoint: 991,
    //   settings: {
    //     adaptiveHeight: true
    //   }
    // }]
  });
}

function initUpcomingEventsSlider() {
  // const counter = document.querySelector('#experianceSliderInfo');
  // $(experianceSlider).on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
  //   if (!slick.$dots) {
  //     return;
  //   }
  //   let i = (currentSlide ? currentSlide : 0) + 1;
  //   counter.innerHTML = '<span class="slider__number">' + i + '</span>' + '/' + (slick.$dots[0].children.length);
  // });

  $(upcomingEventsSlider).slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    // dots: true,
    infinite: false,
    // speed: 800,
    fade: false,
    arrows: true,
    prevArrow: $('#upcomingPrev'),
    nextArrow: $('#upcomingNext')
    // responsive: [{
    //   breakpoint: 991,
    //   settings: {
    //     adaptiveHeight: true
    //   }
    // }]
  });
}
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

$(document).ready(function () {

  showContent();
  if (experianceSlider.length) {
    initExperianceSlider();
  }

  if (featuresEventsSlider.length) {
    initFeaturesEventsSlider();
  }

  if (upcomingEventsSlider.length) {
    initUpcomingEventsSlider();
  }
  if (partners.length) {
    // console.log('lenght1')
    initPartnersSlider();
  }
  if (aboutSlider.length) {
    initAboutSlider();

  }
  initTestimonialsSlider();
  // initBannerSlider();
  initMeditationSlider();

  initStoreSlider();
  // initHelpSlider();
  initBlogSlider();
  // if (fixed.length && ($(window).width() > 1199)) {
  //   fixedImage();
  // }
  // showOnLoad();
  showOnScroll($(window).scrollTop());
  $(window).scroll(function () {
    const scrollValue = $(this).scrollTop();
    showOnScroll(scrollValue);
    scrollValue >= 1 ? closeMenu() : null;
  });



  $(window).resize(function () {
    if (partners.length) {
      // console.log('lenght')
      initPartnersSlider();
    }
  });

  function initPartnersSlider() {
    // console.log('start')
    const partnerSlider = document.querySelector('#partnersSlider.slick-slider');
    if ($(window).width() < 991 && !partnerSlider) {
      console.log('start');
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



function showOnScroll(scrollValue) {
  $('.js-scroll').each(function () {
    let elem = $(this);
    let sectionPos = elem.offset().top;
    let windowPos = $(window).scrollTop() + $(window).height() / 1.2;
    if (sectionPos < windowPos) {
      elem.removeClass('js-fadeIn js-slideLeft js-slideRight js-slideTop');
    }
  });
}