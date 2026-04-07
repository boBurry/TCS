// ── cart-helper.js ───────────────────────────────────────────────────────────
// Include this after data.js and script.js on every page.
// It keeps the cart badge in the header in sync and patches existing card buttons
// so "Details" links go to product-detail.html.

(function () {
  // ── Cart API ────────────────────────────────────────────────────────────────
  window.TCSCart = {
    get() {
      return JSON.parse(localStorage.getItem("tcs_cart") || "[]");
    },
    save(cart) {
      localStorage.setItem("tcs_cart", JSON.stringify(cart));
      TCSCart.updateBadge();
    },
    add(item) {
      const cart = TCSCart.get();
      const existing = cart.find((i) => i.key === item.key);
      if (existing) {
        existing.qty += item.qty || 1;
      } else {
        cart.push({ ...item, qty: item.qty || 1 });
      }
      TCSCart.save(cart);
    },
    totalQty() {
      return TCSCart.get().reduce((s, i) => s + i.qty, 0);
    },
    updateBadge() {
      const qty = TCSCart.totalQty();
      // Look for any element with id="cart-badge"
      const badge = document.getElementById("cart-badge");
      if (badge) {
        badge.textContent = qty;
        badge.classList.toggle("hidden", qty === 0);
      }
    },
  };

  // ── Patch "Details" buttons on index / books / supplies / secondhand pages ──
  // Called after DOM renders (use MutationObserver for dynamically injected cards).

  function patchCards() {
    // Book cards rendered into carousels: data-book-id
    document.querySelectorAll("[data-book-id]").forEach((btn) => {
      const bookId = btn.getAttribute("data-book-id");
      btn.addEventListener("click", () => {
        window.location.href = `product-detail.html?type=book&id=${bookId}`;
      });
    });

    // Supply cards
    document.querySelectorAll("[data-supply-id]").forEach((btn) => {
      const supplyId = btn.getAttribute("data-supply-id");
      btn.addEventListener("click", () => {
        window.location.href = `product-detail.html?type=supply&id=${supplyId}`;
      });
    });

    // Secondhand cards
    document.querySelectorAll("[data-secondhand-id]").forEach((btn) => {
      const shId = btn.getAttribute("data-secondhand-id");
      btn.addEventListener("click", () => {
        window.location.href = `product-detail.html?type=secondhand&id=${shId}`;
      });
    });
  }

  // Run once DOM is ready, then again whenever new nodes are added (carousels).
  document.addEventListener("DOMContentLoaded", () => {
    TCSCart.updateBadge();
    patchCards();

    const observer = new MutationObserver(() => {
      TCSCart.updateBadge();
      patchCards();
    });
    observer.observe(document.body, { childList: true, subtree: true });
  });
})();
