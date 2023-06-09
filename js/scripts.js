/*!
* Start Bootstrap - New Age v6.0.7 (https://startbootstrap.com/theme/new-age)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-new-age/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Dark mode logic
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme === "dark") {
      document.body.classList.add("dark-theme");
      btn.innerHTML = '<i class="fas fa-sun"></i> Toggle Theme';
    } else if (currentTheme === "light") {
      document.body.classList.add("light-theme");
      btn.innerHTML = '<i class="fas fa-moon"></i> Toggle Theme';
    }

    btn.addEventListener("click", function () {
      document.body.classList.toggle("dark-theme");
      document.body.classList.toggle("light-theme");

      if (document.body.classList.contains("light-theme")) {
        btn.innerHTML = '<i class="fas fa-moon"></i> Toggle Theme';
        localStorage.setItem("theme", "light");
      } else {
        btn.innerHTML = '<i class="fas fa-sun"></i> Toggle Theme';
        localStorage.setItem("theme", "dark");
      }
    });

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

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

    const btn = document.querySelector(".btn-toggle");

    // Get all the image containers
    const imageContainers = document.querySelectorAll('.image-container');

    // Attach a click event listener to each image container
    imageContainers.forEach(container => {
      container.addEventListener('click', () => {
        container.classList.toggle('hide');
      });
    });
});
