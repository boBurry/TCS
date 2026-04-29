// ── Auth helpers ─────────────────────────────────────────────────────────────
function isLoggedIn() {
  return localStorage.getItem("tcs_user") !== null;
}

function getUser() {
  return JSON.parse(localStorage.getItem("tcs_user"));
}

function logout() {
  localStorage.removeItem("tcs_user");
  window.location.href = "login.html";
}

// ── Load translations.js dynamically (if not already loaded) ─────────────────
(function () {
  if (!window.TRANSLATIONS) {
    const s = document.createElement("script");
    s.src = "translations.js";
    s.onload = () => {
      i18n.apply();
      syncLangButtons();
    };
    document.head.appendChild(s);
  }
})();

// Load header
fetch("../components/header.html")
  .then((res) => res.text())
  .then((html) => {
    document.getElementById("header").innerHTML = html;

    // Apply translations into the freshly-injected header
    if (window.i18n) {
      i18n.apply();
      syncLangButtons();
    }

    const page = window.location.pathname.split("/").pop() || "index.html";

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

    // ── Auth: redirect profile icon to login if not logged in ────────────────
    const profileLink = document.querySelector("a[href='profile.html']");
    if (profileLink) {
      profileLink.addEventListener("click", (e) => {
        if (!isLoggedIn()) {
          e.preventDefault();
          window.location.href = "login.html";
        }
      });
    }

    // ── Auth: protect profile page ───────────────────────────────────────────
    if (page === "profile.html" && !isLoggedIn()) {
      window.location.href = "login.html";
    }

    // ── Auth: show orange profile icon if logged in ───────────────────────────
    if (isLoggedIn()) {
      const profileIcon = document.querySelector(
        "a[href='profile.html'] .material-symbols-outlined",
      );
      if (profileIcon) {
        profileIcon.classList.add("text-orange-400");
        profileIcon.closest("a")?.classList.remove("text-stone-500");
      }
    }

    // ── Active nav highlight ─────────────────────────────────────────────────
    const categoryPages = [
      "books.html",
      "supplies.html",
      "secondhand.html",
      "aboutus.html",
    ];

    if (page === "profile.html") {
      const homeLink = document.querySelector("nav a.relative");
      if (homeLink) {
        homeLink.querySelector("span.absolute")?.remove();
        homeLink.classList.remove("text-stone-900");
        homeLink.classList.add("text-stone-400");
      }
      const profileIcon = document.querySelector(
        "a[href='profile.html'] .material-symbols-outlined",
      );
      if (profileIcon) {
        profileIcon.classList.add("text-orange-400");
        profileIcon.closest("a")?.classList.remove("text-stone-500");
      }
      const mobileHome = document.querySelector("#mobile-menu a.border-b-2");
      if (mobileHome) {
        mobileHome.classList.remove(
          "text-stone-900",
          "border-b-2",
          "border-orange-400",
        );
        mobileHome.classList.add("text-stone-400");
      }
    }

    if (categoryPages.includes(page)) {
      const homeLink = document.querySelector("nav a.relative");
      if (homeLink) {
        homeLink.querySelector("span.absolute")?.remove();
        homeLink.classList.remove("text-stone-900");
        homeLink.classList.add("text-stone-400");
      }
      const categoryBtn = document.querySelector("nav .group > button");
      if (categoryBtn) {
        categoryBtn.classList.remove("text-stone-400");
        categoryBtn.classList.add("text-stone-900");
        categoryBtn.style.position = "relative";
        const underline = document.createElement("span");
        underline.className =
          "absolute bottom-0 left-3 right-3 h-0.5 bg-orange-400 rounded-full";
        categoryBtn.appendChild(underline);
      }
      const mobileHome = document.querySelector("#mobile-menu a.border-b-2");
      if (mobileHome) {
        mobileHome.classList.remove(
          "text-stone-900",
          "border-b-2",
          "border-orange-400",
        );
        mobileHome.classList.add("text-stone-400");
      }
      const mobileCatBtn = document.querySelector("#mobile-menu div > button");
      if (mobileCatBtn) {
        mobileCatBtn.classList.remove("text-stone-400");
        mobileCatBtn.classList.add(
          "text-stone-900",
          "border-b-2",
          "border-orange-400",
        );
      }
    }

    // Inside fetch("header.html").then((html) => { ... })

    const searchInput = document.getElementById("search-input");
    const searchResults = document.getElementById("search-results");

    if (searchInput && searchResults) {
      searchInput.addEventListener("input", (e) => {
        const query = e.target.value.toLowerCase().trim();
        searchResults.innerHTML = ""; // Clear existing results

        if (query.length < 1) {
          searchResults.classList.add("hidden");
          return;
        }

        // Combine BOOKS and SUPPLIES for a global search
        const allProducts = [
          ...BOOKS.map((b) => ({ ...b, img: b.cover, type: "books" })),
          ...SUPPLIES.map((s) => ({ ...s, type: "supplies" })),
        ];

        // Filter based on the title
        const matches = allProducts.filter((item) =>
          item.title.toLowerCase().includes(query),
        );

        if (matches.length > 0) {
          matches.forEach((item) => {
            const resultItem = document.createElement("a");
            // Link to the correct page based on type
            resultItem.href = `${item.type}.html?id=${item.id}`;
            resultItem.className =
              "flex items-center gap-3 p-3 hover:bg-stone-50 border-b border-stone-100 last:border-0 transition-colors";

            resultItem.innerHTML = `
          <img src="${item.img || item.cover}" class="w-10 h-12 object-cover border border-stone-100">
          <div class="flex flex-col">
            <span class="text-[10px] font-bold text-stone-900 uppercase leading-tight">${item.title}</span>
            <span class="text-[10px] font-bold text-orange-500 mt-0.5">$${item.price.toFixed(2)}</span>
          </div>
        `;
            searchResults.appendChild(resultItem);
          });
          searchResults.classList.remove("hidden");
        } else {
          // Show "No results" or keep hidden
          searchResults.classList.add("hidden");
        }
      });

      // Hide dropdown when clicking outside the search wrapper
      document.addEventListener("click", (e) => {
        const wrapper = document.querySelector(
          ".relative.hidden.md\\:flex.items-center",
        );
        if (wrapper && !wrapper.contains(e.target)) {
          searchResults.classList.add("hidden");
        }
      });
    }
  })

  .catch((err) => console.error("Error loading header:", err));

// Load footer
fetch("../components/footer.html")
  .then((res) => res.text())
  .then((html) => {
    document.getElementById("footer").innerHTML = html;

    // Apply translations into the footer
    if (window.i18n) i18n.apply();

    const page = window.location.pathname.split("/").pop() || "index.html";
    const isHome = page === "index.html" || page === "";
    if (!isHome) {
      const mapWrapper = document.querySelector("#contact iframe");
      if (mapWrapper)
        mapWrapper.closest(".col-span-2.md\\:col-span-4").remove();
    }

    if (window.location.hash === "#contact") {
      const el = document.getElementById("contact");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  })
  .catch((err) => console.error("Error loading footer:", err));

// ── Sync all lang-btn active states ──────────────────────────────────────────
function syncLangButtons() {
  if (!window.i18n) return;
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("lang-active", btn.dataset.lang === i18n.current);
  });
}

// Carousel scroll
function scrollCarousel(id, direction) {
  const carousel = document.getElementById(id);
  if (carousel) {
    carousel.scrollBy({ left: direction * 240, behavior: "smooth" });
  }
}

// Lead Website Icon
const webLogo = document.createElement("link");
webLogo.rel = "icon";
webLogo.type = "/image/png";
webLogo.href = "assets/webLogo.png";
document.head.appendChild(webLogo);
