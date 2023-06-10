/*!
* Start Bootstrap - New Age v6.0.7 (https://startbootstrap.com/theme/new-age)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-new-age/blob/master/LICENSE)
*/
//
// Scripts
// 
window.addEventListener('DOMContentLoaded', event => {

  // Toggle the side navigation
  const sidebarToggle = document.body.querySelector('#sidebarToggle');
  if (sidebarToggle) {
    // Uncomment Below to persist sidebar toggle between refreshes
    if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
      document.body.classList.toggle('sb-sidenav-toggled');
    }
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

  // Theme settings save
  const currentTheme = localStorage.getItem("theme");
  if (currentTheme === "dark") {
    document.body.classList.add("dark-theme");
  } else if (currentTheme === "light") {
    document.body.classList.add("light-theme");
  } else {
    // Default theme when no theme is set
    document.body.classList.add("light-theme");
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
  });

  // const event = document.querySelector(".btn-toggle");
  // event.addEventListener("click", function () {
  //   document.body.classList.toggle("dark-theme");
  //   document.body.classList.toggle("light-theme");

  //   if (document.body.classList.contains("light-theme")) {
  //     localStorage.setItem("theme", "light");
  //   } else {
  //     localStorage.setItem("theme", "dark");
  //   }
  // });
});
