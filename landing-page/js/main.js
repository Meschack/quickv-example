/*===================================================
Project: flex-it - IT Solutions & Business Services Responsive HTML5 Bootstrap5  landing-page Template 
Auther: aminThemes
Version: 1.0
Last change: 30 November 2022
Template Description: IT Solutions & Business Services Responsive HTML5 Bootstrap5  landing-page Template 
====================================================*/

//GLOBAL VARIBALES

//selector constants
var root = $("html, body");
const main_window = $(window),
  pageBody = $("body"),
  bdyOnePage = $("body.landing-page-demo "),
  hasSubMenu = $(".has-sub-menu"),
  pageHeader = $("#page-header"),
  navMain = $("#main-nav"),
  toTopBtn = $(".back-to-top"),
  heroVegasSlider = $(".page-hero.hero-vegas-slider"),
  tabLink = $(".ma-tabs .tabs-links .tab-link"),
  portfolioGroup = $(".portfolio .portfolio-group");

$(function () {
  ("use strict");

  // Start open/close navbar search box
  $(".header-search-box form").on("click", function (e) {
    e.stopPropagation();
  });

  $(".header-search-btn").on("click", function () {
    $(".header-search-box").addClass("show");

    setTimeout(function () {
      $(".search-input").focus();
    }, 1000);
  });

  /* ********* Start dark mode switcher ***********/

  const modeSwitcher = $(".mode-switcher");
  const themeStoredKey = "ThemeColor";
  const darkTheme_class = "dark-theme";
  const lightTheme_class = "light-theme";
  const themeStoredItem = localStorage.getItem(themeStoredKey);

  /*********  Custom functions Area *********/

  function setThemeMode(themeColor) {
    if (themeColor === darkTheme_class) {
      pageBody.addClass(darkTheme_class);
      modeSwitcher.addClass(darkTheme_class).removeClass(lightTheme_class);
      localStorage.setItem(themeStoredKey, darkTheme_class);
      localStorage.removeItem(lightTheme_class);
    }
    if (themeColor === lightTheme_class) {
      pageBody.removeClass(darkTheme_class);
      modeSwitcher.addClass(lightTheme_class).removeClass(darkTheme_class);
      localStorage.setItem(themeStoredKey, lightTheme_class);
      localStorage.removeItem(darkTheme_class);
    }
  }

  /* *******  Set the theme according to the local storage value ********/
  // if local storge not set or the body has class value of .dark-theme THEN default theme is dark
  if (!themeStoredItem && !pageBody.hasClass(darkTheme_class)) {
    setThemeMode(darkTheme_class);
  }
  // the only case to be light mode is when the local storge has he value of light-theme
  if (themeStoredItem === lightTheme_class) {
    setThemeMode(lightTheme_class);
  }

  // if local storge or the body has class value of .dark-theme
  if (
    themeStoredItem === darkTheme_class ||
    pageBody.hasClass(darkTheme_class)
  ) {
    setThemeMode(darkTheme_class);
  }

  /* ******* Set the theme by clicking the theme switcher ********/
  $(modeSwitcher).on("click", function () {
    if ($(this).is("." + darkTheme_class)) {
      setThemeMode(lightTheme_class);
    } else if ($(this).is("." + lightTheme_class)) {
      setThemeMode(darkTheme_class);
    }
  });

  /********************************
   *  START #page-header js rules
   *********************************/

  /* *******  start open/close navbar search box   ********/
  $(".header-search-box .close-search , .header-search-box").on("click", () => {
    $(".header-search-box").removeClass("show");
  });

  if (navMain) {
    $(bdyOnePage).scrollspy({
      target: navMain,
      offset: navMain.innerHeight() + 1,
    });
  }

  // make the menu stick on top whlie reloading
  if ($(this).scrollTop() > 50) {
    if (!$(pageHeader).hasClass("is-sticky")) {
      pageHeader.addClass("is-sticky");
    }
  }

  /* *******  make the menu stick on top upon the page scrolling   ********/
  main_window.on("scroll", function () {
    if ($(this).scrollTop() > 50) {
      if (!$(pageHeader).hasClass("is-sticky")) {
        pageHeader.addClass("is-sticky");
      }
    } else {
      if ($(pageHeader).hasClass("is-sticky")) {
        pageHeader.removeClass("is-sticky");
      }
    }
  });

  /* *******  show/hide navbar links menu  ********/
  $(".menu-toggler").on("click", function () {
    pageHeader.find(".show:not(.menu-wrapper) ").removeClass("show");
    pageHeader.find(".menu-wrapper").toggleClass("show");
    $(".menu-toggler").toggleClass("close-menu");
  });

  /* ******* close the currnt opend menu when click on its wrapper ********/
  $(".links-list").on("click", function (e) {
    e.stopPropagation();
  });

  $(".menu-wrapper").on("click", function () {
    $(this).removeClass("show");
    if ($(".menu-toggler").hasClass("close-menu")) {
      $(".menu-toggler").removeClass("close-menu");
    }
  });

  /* ******* showing navbar sub-menus on mobile ********/
  hasSubMenu.on("click", function (e) {
    e.stopPropagation();
    if (!(main_window.innerWidth() > 1199)) {
      $(this).children(".sub-menu").slideToggle();
    }
  });

  /* ******* Start Smooth Scrolling To page sections Area********/
  $(".landing-page-demo .menu-navbar .menu-link").on("click", function (e) {
    const link = $(this).attr("href");
    let currentMainNavHeight = navMain.innerHeight();
    if (link.charAt(0) === "#") {
      e.preventDefault();
      const target = this.hash;
      $(root).animate(
        {
          scrollTop: $(target).offset().top - currentMainNavHeight + 1,
        },
        500
      );

      if (!$(this).parent(".menu-item").hasClass("has-sub-menu")) {
        // to close the menu after going to crossponding section
        if ($(".menu-wrapper").hasClass("show")) {
          $(".menu-wrapper").removeClass("show");
        }

        // to change the menu toggler buttn icon
        if ($(".menu-toggler").hasClass("close-menu")) {
          $(".menu-toggler").removeClass("close-menu");
        }
      }
    }
  });

  /*********************************
   END #page-header js rules
  *********************************/

  // Start Smooth Scrolling To Window Top When Clicking on Back To Top Button
  $(toTopBtn).on("click", function () {
    root.css("scroll-behavior", "smooth").scrollTop(0);
  });
  // End Smooth Scrolling To Window Top When Clicking on Back To Top Button

  /* ********* set the Background Image path and opacity for elements that has the  a vlaue for data-bg-img attribute***********/
  const bg_img = $("*");
  bg_img.each(function () {
    if ($(this).attr("data-bg-img")) {
      $(this).css("background-image", `url(${$(this).attr("data-bg-img")}`);
    }
    if ($(this).attr("data-bg-opacity")) {
      $(this).css("opacity", `${$(this).attr("data-bg-opacity")}`);
    }
  });

  main_window.on("scroll", function () {
    if ($(this).scrollTop() > 50) {
      //show back to top btn
      toTopBtn.addClass("show");
    } else {
      //hide back to top btn
      toTopBtn.removeClass("show");
    }
  });

  /* ********************************
    Start Vendors plugins options Area 
    *********************************/

  // Setup Quickv
  const qv = new Quickv();
  qv.init();

  //initialize swiper [Hero Section] //fade slider
  if ($(".hero-swiper-slider.fade-effect .swiper-container").length) {
    const heroSlider = new Swiper(
      ".hero-swiper-slider.fade-effect .swiper-container",
      {
        speed: 1000,
        loop: true,
        reverseDirection: true,
        effect: "fade",
        fadeEffect: {
          crossFade: true,
        },
        on: {
          init: function () {
            let thisSlider = this;
            $(".slides-count").html("0" + (this.slides.length - 2));
            $(".curent-slide").html("0" + (this.realIndex + 1));
          },
          slideChange: function () {
            $(".curent-slide").html("0" + (this.realIndex + 1));
          },
        },
        autoplay: {
          delay: 5000,
          disableOnInteraction: true,
        },
        pagination: {
          el: ".hero-swiper-slider.fade-effect .swiper-pagination",
          type: "bullets",
          clickable: true,
        },
        navigation: {
          nextEl: ".hero-swiper-slider.fade-effect .swiper-button-next",
          prevEl: ".hero-swiper-slider.fade-effect .swiper-button-prev",
        },
      }
    );
  }
  if ($(".hero-swiper-slider.slide-effect .swiper-container").length) {
    const heroSlider = new Swiper(
      ".hero-swiper-slider.slide-effect .swiper-container",
      {
        speed: 1000,
        loop: true,
        reverseDirection: true,
        effect: "slide",
        fadeEffect: {
          crossFade: true,
        },
        on: {
          init: function () {
            let thisSlider = this;
            $(".slides-count").html("0" + (this.slides.length - 2));
            $(".curent-slide").html("0" + (this.realIndex + 1));
          },
          slideChange: function () {
            $(".curent-slide").html("0" + (this.realIndex + 1));
          },
        },
        autoplay: {
          delay: 5000,
          disableOnInteraction: true,
        },
        pagination: {
          el: ".hero-swiper-slider.slide-effect .swiper-pagination",
          type: "bullets",
          clickable: true,
        },
        navigation: {
          nextEl: ".hero-swiper-slider.slide-effect .swiper-button-next",
          prevEl: ".hero-swiper-slider.slide-effect .swiper-button-prev",
        },
      }
    );
  }

  /* *******  loading  wow.js  Options ********/
  const wow = new WOW({
    animateClass: "animated",
    offset: 100,
  });
  wow.init();

  /* *******  loading fancybox.js library ********/
  if ($("*").fancybox) {
    $().fancybox({
      selector: '[data-fancybox=".show-in-fancybox "]:visible',
      loop: true,
      buttons: ["zoom", "close"],
    });
  }

  /* *******  loading tilt.js library ********/
  if (jQuery().tilt) {
    $("[data-tilt]").tilt({
      perspective: 1000,
    });
  }

  /* *******  Start particles.js ********/
  if ($(".particles-js.dots").length) {
    // constant to hold the particals options
    const customParticlesOptions = {
      particles: {
        number: {
          value: 150,
          density: {
            enable: true,
            value_area: 500,
          },
        },
        color: {
          value: "#ff0000",
        },
        shape: {
          type: "triangle",
          polygon: {
            nb_sides: 5,
          },
          image: {
            src: "img/github.svg",
            width: 100,
            height: 100,
          },
        },
        opacity: {
          value: 0.5,
          random: true,
          anim: {
            enable: true,
            speed: 1,
            opacity_min: 0,
            sync: false,
          },
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: true,
            speed: 5,
            size_min: 0.3,
            sync: false,
          },
        },
        line_linked: {
          enable: false,
          distance: 150,
          color: "#ffffff",
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 5,
          direction: "none",
          random: true,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200,
          },
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: false,
            mode: "bubble",
          },
          onclick: {
            enable: false,
            mode: "repulse",
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 400,
            line_linked: {
              opacity: 1,
            },
          },
          bubble: {
            distance: 250,
            size: 0,
            duration: 2,
            opacity: 0,
            speed: 3,
          },
          repulse: {
            distance: 400,
            duration: 0.4,
          },
          push: {
            particles_nb: 4,
          },
          remove: {
            particles_nb: 2,
          },
        },
      },
      retina_detect: true,
    };
    particlesJS("particles-js", customParticlesOptions);
  }

  /************************************
    End Vendors plugins options Area 
     ******************************** */
});

/* *******************
Set project stats
**********************/

const repoOwner = "quick-v";
const repoName = "quickv";

const apiUrl = `https://api.github.com/repos/${repoOwner}/${repoName}`;

// Première requête pour récupérer les informations de base du repo
fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    const starsCount = data.stargazers_count;
    const forksCount = data.forks_count;

    // Afficher les nombres d'étoiles et de forks sur votre page
    document.getElementById("starsCount").innerText = starsCount;
    document.getElementById("forksCount").innerText = forksCount;

    // Deuxième requête pour récupérer la liste des contributeurs
    const contributorsUrl = data.contributors_url;
    return fetch(contributorsUrl);
  })
  .then((response) => response.json())
  .then((contributorsData) => {
    const contributorsCount = contributorsData.length;

    // Afficher le nombre de contributeurs sur votre page
    document.getElementById("contributorsCount").innerText = contributorsCount;
  })
  .catch((error) => {
    console.error("An error occured while getting project's stats :", error);
  });
