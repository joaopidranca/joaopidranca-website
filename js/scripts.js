document.addEventListener("DOMContentLoaded", (event) => {
  // Activate SimpleLightbox
  new SimpleLightbox({
    elements: "#portfolio a.portfolio-box",
  });

  let navToggle = document.querySelector(".nav-toggle");
  let bars = document.querySelectorAll(".bar");

  function toggleHamburger(e) {
    bars.forEach((bar) => bar.classList.toggle("barx"));
    document.querySelector("#mainNav").style.backgroundColor = "white";
    document.querySelector("#mainNavOpa").style.opacity = "1";
  }

  navToggle.addEventListener("click", toggleHamburger);

  // -------------------------------------------------

  // Show / hide divs projects

  $("#VIDEOS-SOLTOS").show();
  $("#fotografias").hide();
  $("#curtas").hide();
  $("#artisticos").hide();
  $("#reportagens").hide();

  $("#button-reportagens").on("click", function () {
    $("#VIDEOS-SOLTOS").hide();
    $("#fotografias").hide();
    $("#curtas").hide();
    $("#artisticos").hide();
    $("#reportagens").show();
  });

  $("#button-artisticos").on("click", function () {
    $("#VIDEOS-SOLTOS").hide();
    $("#fotografias").hide();
    $("#curtas").hide();
    $("#artisticos").show();
    $("#reportagens").hide();
  });

  $("#button-curtas").on("click", function () {
    $("#VIDEOS-SOLTOS").hide();
    $("#fotografias").hide();
    $("#curtas").show();
    $("#artisticos").hide();
    $("#reportagens").hide();
  });

  $("#button-fotos").on("click", function () {
    $("#VIDEOS-SOLTOS").hide();
    $("#fotografias").show();
    $("#curtas").hide();
    $("#artisticos").hide();
    $("#reportagens").hide();
  });

  // ----------------------------------------------------------

  // Navbar shrink function
  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector("#mainNav");
    if (!navbarCollapsible) {
      return;
    }

    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove("navbar-shrink");
    } else {
      navbarCollapsible.classList.add("navbar-shrink");
    }
  };

  // Shrink the navbar
  navbarShrink();

  document.addEventListener("scroll", navbarShrink);

  // -------------------------------------------------

  var navbarShowWhite = function () {
    const navbarShowWhite = document.body.querySelector("#mainNav");
    if (!navbarShowWhite) {
      return;
    }

    if (window.scrollY === 0) {
      navbarShowWhite.style.backgroundColor = "transparent";
    } else {
      navbarShowWhite.style.backgroundColor = "white";
    }
  };

  // transparent and white navbar on scroll
  navbarShowWhite();

  document.addEventListener("scroll", navbarShowWhite);

  // -------------------------------------------------

  var navbarOpacity = function () {
    const navbarOpacity = document.body.querySelector("#mainNavOpa");
    if (!navbarOpacity) {
      return;
    }

    if (window.scrollY === 0) {
      navbarOpacity.style.opacity = "0";
    } else {
      navbarOpacity.style.opacity = "1";
    }
  };

  // 0 / 1 opacity navbar title joão pidrança
  navbarOpacity();

  document.addEventListener("scroll", navbarOpacity);

  // ----------------------------------------------------------

  // Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector("#mainNav");
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#mainNav",
      rootMargin: "0px 0px -40%",
    });
  }

  // ----------------------------------------------------------

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector(".nav-toggle");
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

// -----------------------------------------------------------------------------------
