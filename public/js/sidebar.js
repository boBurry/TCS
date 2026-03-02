document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const closeSidebarBtn = document.getElementById("close-sidebar-btn");
  const mobileSidebar = document.getElementById("mobile-sidebar");
  const mobileOverlay = document.getElementById("mobile-overlay");

  function openSidebar() {
    mobileSidebar.classList.remove("translate-x-full");
    mobileOverlay.classList.remove("hidden");
    // Prevent scrolling on the main page while sidebar is open
    document.body.classList.add("overflow-hidden");
  }

  function closeSidebar() {
    mobileSidebar.classList.add("translate-x-full");
    mobileOverlay.classList.add("hidden");
    // Restore scrolling
    document.body.classList.remove("overflow-hidden");
  }

  // Attach event listeners
  if (mobileMenuBtn && closeSidebarBtn && mobileSidebar && mobileOverlay) {
    mobileMenuBtn.addEventListener("click", openSidebar);
    closeSidebarBtn.addEventListener("click", closeSidebar);
    // Clicking the dark overlay also closes the menu
    mobileOverlay.addEventListener("click", closeSidebar);
  }
});
