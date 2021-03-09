const body = $('body');
const mainWrapper = $('.main-wrapper');
const testimonialsSlider = $('#testimonialsSlider');
const meditationSlider = $('#meditationSlider');
const experianceSlider = $('#experianceSlider');
const storeSlider = $('#storeSlider');
const blogSlider = $('#blogSlider');
const menuBtn = $('#menuBtn');
const menuBox = $('#menuBox');

const nav = $('#nav');
const partners = $('#partnerSlider');
const aboutSlider = $('#aboutSlider');
const helpSlider = $('#helpSlider');
const bookPartners = $('#partners');
const btnUp = $('#btnUp');


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

function initHelpSlider() {
  $(helpSlider).slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    dots: false,
    fade: false,
    infinite: true,
    autoplaySpeed: 5000,
    // adaptiveHeight: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    arrows: true,
    prevArrow: $('#helpPrev'),
    nextArrow: $('#helpNext'),
  });
}

function openMenu() {
  menuBox.addClass('active');
  menuBtn.addClass('active');
  nav.addClass('active');
  body.css({
    'overflow': 'hidden'
  });
}

function closeMenu() {
  menuBox.removeClass('active');
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
  menuBox.click(function () {
    if (this.classList.contains("active")) {
      closeMenu();
    } else {
      openMenu();
    }
  });
});

function initExperianceSlider() {
  $(experianceSlider).slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    // dots: true,
    infinite: true,
    // speed: 800,
    fade: false,
    arrows: true,
    prevArrow: $('#experiencesPrev'),
    nextArrow: $('#experiencesNext'),
    autoplay: true,
    autoplaySpeed: 5000,
    adaptiveHeight: true,
    pauseOnFocus: false,
    pauseOnHover: false
  });
}

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

  btnUp.click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 400);
  });

  showContent();
  if (experianceSlider.length) {
    initExperianceSlider();
  }
  if (partners.length) {
    initPartnersSlider();
  }
  if (bookPartners.length) {
    initBookPartnersSlider();
  }
  if (aboutSlider.length) {
    initAboutSlider();
  }
  initTestimonialsSlider();
  initMeditationSlider();
  initStoreSlider();
  initHelpSlider();
  initBlogSlider();
  showOnScroll($(window).scrollTop());

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
  // SET POST DESCRIPTION LIMIT //
  $('.book-testimonials__card').each(function () {
    const limit = 110;
    let post = $(this);
    let text = post.find('.book-testimonials__text p');
    console.log(text.height());
    let link = $('<span></span>').text('read more').addClass('read-more');

    if (text.height() > limit) {

      text.css({
        'height': limit,
        'overflow': 'hidden'
      });

      post.append(link);
    }
    link.click(function () {
      let trimText = $(this).parent().find('.book-testimonials__text p');
      if (text.height() <= limit) {
        trimText.css({
          'height': 'auto',
          'overflow': 'visible'
        });
        $(this).text('read less')

      } else {
        text.css({
          'height': limit,
          'overflow': 'hidden'
        });
        $(this).text('read more')
      }
    });
  });
  $(window).scroll(function () {
    const scrollValue = $(this).scrollTop();
    showOnScroll(scrollValue);
    scrollValue >= 1 ? closeMenu() : null;
    if (scrollValue >= 100) {
      btnUp.css('opacity', '1');
    } else {
      btnUp.css('opacity', '0');
    }
  });

  $(window).resize(function () {
    if (partners.length) {
      // console.log('lenght')
      initPartnersSlider();
    }
  });
});

function initBookPartnersSlider() {
  bookPartners.slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    dots: false,
    arrows: false,
    infinite: true,
    autoplaySpeed: 0,
    speed: 6000,
    cssEase: 'linear',
    responsive: [{
      breakpoint: 575,
      settings: {
        slidesToShow: 2,
      }
    }]
  });
}

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