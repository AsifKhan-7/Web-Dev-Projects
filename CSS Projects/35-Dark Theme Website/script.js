const currentYear = new Date().getFullYear();
document.getElementById("current-year").textContent = currentYear;

// ========================================
// MOBILE MENU TOGGLE FUNCTIONALITY
// ========================================
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".navbar__menu-toggle");
  const mobileMenu = document.querySelector(".navbar__center");
  const hamburger = document.querySelector(".hamburger");

  menuToggle.addEventListener("click", function () {
    const isOpen = mobileMenu.classList.contains("mobile-menu-open");

    if (isOpen) {
      // Close menu
      mobileMenu.classList.remove("mobile-menu-open");
      hamburger.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
    } else {
      // Open menu
      mobileMenu.classList.add("mobile-menu-open");
      hamburger.classList.add("active");
      menuToggle.setAttribute("aria-expanded", "true");
    }
  });

  // Close menu when clicking outside
  document.addEventListener("click", function (event) {
    const isClickInsideNav =
      mobileMenu.contains(event.target) || menuToggle.contains(event.target);

    if (
      !isClickInsideNav &&
      mobileMenu.classList.contains("mobile-menu-open")
    ) {
      mobileMenu.classList.remove("mobile-menu-open");
      hamburger.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });

  // Close menu when pressing Escape key
  document.addEventListener("keydown", function (event) {
    if (
      event.key === "Escape" &&
      mobileMenu.classList.contains("mobile-menu-open")
    ) {
      mobileMenu.classList.remove("mobile-menu-open");
      hamburger.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });
});
