const currentYear = new Date().getFullYear();
document.getElementById("current-year").textContent = currentYear;

function toggleMobileMenu() {
  const mobileMenu = document.getElementById("mobileMenu");
  mobileMenu.classList.toggle("active");
}

function closeMobileMenu() {
  const mobileMenu = document.getElementById("mobileMenu");
  mobileMenu.classList.remove("active");
}

function handleProfile() {
  alert(
    "Profile clicked! This would typically open a user menu or profile page."
  );
}

function handleSettings() {
  alert(
    "Settings clicked! This would typically open a settings panel or page."
  );
}

function handleExplore() {
  alert(
    "Explore Courses clicked! This would typically navigate to the courses section."
  );
}

// Close mobile menu when clicking outside
document.addEventListener("click", function (event) {
  const navbar = document.querySelector(".navbar");
  const mobileMenu = document.getElementById("mobileMenu");

  if (
    !navbar.contains(event.target) &&
    mobileMenu.classList.contains("active")
  ) {
    closeMobileMenu();
  }
});

// Handle window resize
window.addEventListener("resize", function () {
  if (window.innerWidth > 768) {
    closeMobileMenu();
  }
});

// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});
