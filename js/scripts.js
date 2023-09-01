/*!
* Start Bootstrap - New Age v6.0.7 (https://startbootstrap.com/theme/new-age)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-new-age/blob/master/LICENSE)
*/
//
// Scripts
// 
window.addEventListener('DOMContentLoaded', event => {

  //track window
  function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  function handleScroll() {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((element) => {
      if (isElementInViewport(element)) {
        element.classList.add('visible');
      }
    });
  }
  
  // Attach the scroll event listener
  window.addEventListener('scroll', handleScroll);
  

  // Toggle the side navigation
  const sidebarToggle = document.body.querySelector('#sidebarToggle');
  if (sidebarToggle) {
    // Uncomment Below to persist sidebar toggle between refreshes
    // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
    //   document.body.classList.toggle('sb-sidenav-toggled');
    // }
    sidebarToggle.addEventListener('click', event => {
      event.preventDefault();
      document.body.classList.toggle('sb-sidenav-toggled');
      localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
    });
  }

  // Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector('#mainNav');
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: '#mainNav',
      offset: 74,
    });
  };

  // Menu clicked
  const button = document.querySelector('.navbar-toggler');
  let isFlipped = false; // Track the state of the button
  
  button.addEventListener('click', function() {
    isFlipped = !isFlipped; // Toggle the state
  
    // Apply the 'flipped' class based on the state
    if (isFlipped) {
      this.classList.add('flipped');
    } else {
      this.classList.remove('flipped');
    }
  });

  // Set theme
  function setMode(mode) {
    const body = document.querySelector('body');
    body.classList.remove('light-mode', 'dark-mode', 'auto-mode');
    body.classList.add(mode + '-mode');
}

  // Theme settings save
  const currentTheme = localStorage.getItem("theme");
  if (currentTheme === "dark") {
    document.body.classList.add("dark-mode");
  } else if (currentTheme === "light") {
    document.body.classList.add("light-mode");
  } else {
    // Default theme when no theme is set
    document.body.classList.add("auto-mode");
  }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector('.navbar-toggler');
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll('#navbarResponsive .nav-link')
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener('click', () => {
      if (window.getComputedStyle(navbarToggler).display !== 'none') {
        navbarToggler.click();
      }
    });
  });

  // Get all the image containers
  const imageContainers = document.querySelectorAll('.image-container');

  // Attach a click event listener to each image container
  imageContainers.forEach(container => {
    container.addEventListener('click', () => {
      container.classList.toggle('hide');
    });
  });

  // iphone screenshot
  var deviceWrappers = document.querySelectorAll(".device-wrapper");

  deviceWrappers.forEach(function(wrapper) {
    var images = wrapper.querySelectorAll(".device-image");
  
    wrapper.addEventListener("mouseenter", function() {
      images[0].style.transition = "opacity 0.5s ease";
      images[0].style.opacity = 0;
      images[1].style.transition = "opacity 0.5s ease";
      images[1].style.opacity = 1;
    });
  
    wrapper.addEventListener("mouseleave", function() {
      images[0].style.transition = "opacity 0.5s ease";
      images[0].style.opacity = 1;
      images[1].style.transition = "opacity 0.5s ease";
      images[1].style.opacity = 0;
    });
  
    wrapper.addEventListener("click", function() {
      var currentOpacity = parseFloat(images[0].style.opacity);
      var nextOpacity = 1 - currentOpacity;
      
      images[0].style.transition = "opacity 0.5s ease";
      images[0].style.opacity = nextOpacity;
      images[1].style.transition = "opacity 0.5s ease";
      images[1].style.opacity = currentOpacity;
    });
  });
});

function search_items() {
  let input = document.getElementById('searchbar').value
  input=input.toLowerCase();
  let x = document.getElementsByClassName('nav-link');
    
  for (i = 0; i < x.length; i++) { 
      if (!x[i].innerHTML.toLowerCase().includes(input)) {
          x[i].style.display="none";
      }
      else {
          x[i].style.display="list-item";                 
      }
  }
}

(function ($) {
  "use strict";

  // Spinner
  var spinner = function () {
      setTimeout(function () {
          if ($('#spinner').length > 0) {
              $('#spinner').removeClass('show');
          }
      }, 1);
  };
  spinner();
  
  
  // Initiate the wowjs
  new WOW().init();


  // Sticky Navbar
  $(window).scroll(function () {
      if ($(this).scrollTop() > 300) {
          $('.sticky-top').css('top', '0px');
      } else {
          $('.sticky-top').css('top', '-100px');
      }
  });
  
  
  // Back to top button
  $(window).scroll(function () {
      if ($(this).scrollTop() > 300) {
          $('.back-to-top').fadeIn('slow');
      } else {
          $('.back-to-top').fadeOut('slow');
      }
  });
  $('.back-to-top').click(function () {
      $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
      return false;
  });


  // Header carousel
  $(".header-carousel").owlCarousel({
      autoplay: true,
      smartSpeed: 1500,
      items: 1,
      dots: true,
      loop: true,
      nav : true,
      navText : [
          '<i class="bi bi-chevron-left"></i>',
          '<i class="bi bi-chevron-right"></i>'
      ]
  });


  // Testimonials carousel
  $(".testimonial-carousel").owlCarousel({
      autoplay: true,
      smartSpeed: 1000,
      center: true,
      margin: 24,
      dots: true,
      loop: true,
      nav : false,
      responsive: {
          0:{
              items:1
          },
          768:{
              items:2
          },
          992:{
              items:3
          }
      }
  });
  
})(jQuery);

