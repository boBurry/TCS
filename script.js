// Load header
fetch("header.html")
  .then(res => res.text())
  .then(html => {
    document.getElementById("header").innerHTML = html;

    // Init hamburger AFTER header is injected into the DOM
    const toggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("mobile-menu");

    if (toggle && menu) {
      toggle.addEventListener("click", () => {
        const isOpen = menu.style.maxHeight && menu.style.maxHeight !== "0px";
        menu.style.maxHeight = isOpen ? "0px" : "400px";
        const icon = toggle.querySelector(".material-symbols-outlined");
        if (icon) icon.textContent = isOpen ? "menu" : "close";
      });
    }

    // ── Active nav highlight ─────────────────────────────────────────────
    const page = window.location.pathname.split("/").pop() || "index.html";
    const categoryPages = ["books.html", "supplies.html", "secondhand.html", "aboutus.html"];

    if (categoryPages.includes(page)) {
      // Desktop — remove underline from Home
      const homeLink = document.querySelector('nav a.relative');
      if (homeLink) {
        homeLink.querySelector("span.absolute")?.remove();
        homeLink.classList.remove("text-stone-900");
        homeLink.classList.add("text-stone-400");
      }

      // Desktop — add underline to Category button
      const categoryBtn = document.querySelector('nav .group > button');
      if (categoryBtn) {
        categoryBtn.classList.remove("text-stone-400");
        categoryBtn.classList.add("text-stone-900");
        categoryBtn.style.position = "relative";
        const underline = document.createElement("span");
        underline.className = "absolute bottom-0 left-3 right-3 h-0.5 bg-orange-400 rounded-full";
        categoryBtn.appendChild(underline);
      }

      // Mobile — remove underline from Home
      const mobileHome = document.querySelector('#mobile-menu a.border-b-2');
      if (mobileHome) {
        mobileHome.classList.remove("text-stone-900", "border-b-2", "border-orange-400");
        mobileHome.classList.add("text-stone-400");
      }

      // Mobile — add underline to Category button
      const mobileCatBtn = document.querySelector('#mobile-menu div > button');
      if (mobileCatBtn) {
        mobileCatBtn.classList.remove("text-stone-400");
        mobileCatBtn.classList.add("text-stone-900", "border-b-2", "border-orange-400");
      }
    }
  })
  .catch(err => console.error("Error loading header:", err));

// Load footer
fetch("footer.html")
  .then(res => res.text())
  .then(html => {
    document.getElementById("footer").innerHTML = html;
  })
  .catch(err => console.error("Error loading footer:", err));

// Carousel scroll
function scrollCarousel(id, direction) {
  const carousel = document.getElementById(id);
  if (carousel) {
    carousel.scrollBy({ left: direction * 240, behavior: "smooth" });
  }
}
