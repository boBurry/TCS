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
  })
  .catch(err => console.error("Error loading header:", err));

// Load footer
fetch("footer.html")
  .then(res => res.text())
  .then(html => {
    document.getElementById("footer").innerHTML = html;
  })
  .catch(err => console.error("Error loading footer:", err));
