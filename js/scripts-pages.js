window.addEventListener("DOMContentLoaded", (event) => {
  // Activate SimpleLightbox
  new SimpleLightbox({
    elements: "#portfolio a.portfolio-box",
  });

  let navToggle = document.querySelector(".nav-toggle");
  let bars = document.querySelectorAll(".bar");

  function toggleHamburger(e) {
    bars.forEach((bar) => bar.classList.toggle("barx"));
  }

  navToggle.addEventListener("click", toggleHamburger);

  //------------------------------------

  // Shrink the navbar when page is scrolled
  document.addEventListener("scroll", navbarShrink);

  // Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector("#mainNav");
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#mainNav",
      rootMargin: "0px 0px -40%",
    });
  }

  //------------------------------------

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll("#navbarResponsive .nav-link")
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });

  //------------------------------------
});
