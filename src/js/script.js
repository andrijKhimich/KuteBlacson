const body = document.getElementsByTagName('body')[0];
const mainWrapper = document.querySelector('.main-wrapper');
const testimonialsSlider = document.querySelector('#testimonialsSlider');
// const bannerSlider = document.querySelector('#bannerSlider');
const storeSlider = document.querySelector('#storeSlider');
const blogSlider = document.querySelector('#blogSlider');
const menuBtn = document.querySelector('#menuBtn');
const nav = document.querySelector('#nav');
const partners = $('#partnerSlider');
const fixed = $('#target');
// const show = document.querySelector('#nav');




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

// function initBannerSlider() {
//   $(bannerSlider).slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     dots: false,
//     fade: true,
//     arrows: false,
//     infinite: false,
//     autoplaySpeed: 10000
//   });
// }



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
  menuBtn.classList.add('active');
  nav.classList.add('active');
  body.style.overflow = 'hidden';
}

function closeMenu() {
  menuBtn.classList.remove('active');
  nav.classList.remove('active');
  body.style.overflow = 'auto';
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
  menuBtn.addEventListener('click', function () {
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
      console.log(walk);
    });

  }


  // function initHelpSlider() {
  //   const helpSlider = document.querySelector('#helpSlider.slick-slider');
  //   if (window.innerWidth < 767 && !helpSlider) {
  //     $(helpSlider).slick({
  //       slidesToShow: 1,
  //       slidesToScroll: 1,
  //       autoplay: false,
  //       dots: false,
  //       fade: false,
  //       arrows: false,
  //       infinite: false,
  //       autoplaySpeed: 10000,
  //       responsive: [{
  //         breakpoint: 575,
  //         settings: {
  //           adaptiveHeight: true
  //         }
  //       }]
  //     });
  //   }
  // }

});

function fixedImage() {
  const stopElement = $('#stopFixed');
  // console.log(fixed.offset().top);
  let topPosition = fixed.offset().top;
  let stopPosition = stopElement.offset().top + stopElement.height() - fixed.height();
  // console.log(topPosition, stopPosition);
  let lastScrollTop = 0;
  $(window).scroll(function (event) {
    let scrollPosition = $(this).scrollTop();
    if (scrollPosition > lastScrollTop) {
      console.log('Down');
      if (scrollPosition >= topPosition && scrollPosition <= stopPosition) {
        fixed.css({
          'position': 'fixed',
          'top': '0'
        });
      } else if (scrollPosition > stopPosition) {
        fixed.css({
          'position': 'absolute',
          'bottom': '0',
          'top': 'auto'
        });
      } else {
        fixed.css({
          'position': 'absolute',
          'top': '0'
        });
      }

    } else {
      console.log('Up');

      if (scrollPosition >= topPosition && scrollPosition <= stopPosition) {
        fixed.css({
          'position': 'fixed',
          'top': '0',
          'bottom': 'auto'
        });
      } else if (scrollPosition > stopPosition) {
        fixed.css({
          'position': 'absolute',
          'bottom': '0',
          'top': 'auto'
        });
      } else {
        fixed.css({
          'position': 'absolute',
          'top': '0',
          'bottom': 'auto'
        });
      }
    }
    lastScrollTop = scrollPosition;
  });
}


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

$(document).ready(function () {
  showContent();
  if (partners) {
    initPartnersSlider();
  }
  initTestimonialsSlider();
  // initBannerSlider();
  initStoreSlider();
  // initHelpSlider();
  initBlogSlider();
  if (fixed.length) {
    fixedImage();
  }
  // showOnLoad();
  showOnScroll($(window).scrollTop());
  $(window).scroll(function () {
    const scrollValue = $(this).scrollTop();
    showOnScroll(scrollValue);
    scrollValue >= 1 ? closeMenu() : null;
  });



  $(window).resize(function () {
    if (partners) {
      initPartnersSlider();
    }
  });

  function initPartnersSlider() {
    const partnerSlider = $('#partnerSlider.slick-slider');
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