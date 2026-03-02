document.addEventListener("DOMContentLoaded", () => {
  const increaseButtons = document.querySelectorAll(".increase-btn");
  const decreaseButtons = document.querySelectorAll(".decrease-btn");

  increaseButtons.forEach((btn) => {
    btn.addEventListener("click", function () { updateQuantity(this, 1); });
  });
  decreaseButtons.forEach((btn) => {
    btn.addEventListener("click", function () { updateQuantity(this, -1); });
  });

  function updateQuantity(btn, change) {
    const container = btn.parentElement;
    const qtyDisplay = container.querySelector(".qty-display");
    let currentQty = parseInt(qtyDisplay.textContent);

    if (currentQty + change >= 1) {
      currentQty += change;
      qtyDisplay.textContent = currentQty;
      const price = parseFloat(btn.getAttribute("data-price"));
      const itemTotalDisplay = container.parentElement.querySelector(".item-total");
      itemTotalDisplay.textContent = "$" + (price * currentQty).toFixed(2);
      updateCartTotals();
    }
  }

  function updateCartTotals() {
    let newTotal = 0;
    document.querySelectorAll(".item-total").forEach((item) => {
      newTotal += parseFloat(item.textContent.replace("$", ""));
    });
    document.getElementById("subtotal").textContent = "$" + newTotal.toFixed(2);
    document.getElementById("grand-total").textContent = "$" + newTotal.toFixed(2);
  }
});
