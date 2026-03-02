// Wait for the HTML to fully load before running the script
document.addEventListener("DOMContentLoaded", () => {
  // Select all plus and minus buttons
  const increaseButtons = document.querySelectorAll(".increase-btn");
  const decreaseButtons = document.querySelectorAll(".decrease-btn");

  // Add click events to all plus buttons
  increaseButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      updateQuantity(this, 1);
    });
  });

  // Add click events to all minus buttons
  decreaseButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      updateQuantity(this, -1);
    });
  });

  // Core function to handle the math
  function updateQuantity(btn, change) {
    const container = btn.parentElement;
    const qtyDisplay = container.querySelector(".qty-display");
    let currentQty = parseInt(qtyDisplay.textContent);

    // Prevent the quantity from dropping below 1
    if (currentQty + change >= 1) {
      currentQty += change;
      qtyDisplay.textContent = currentQty; // Update the UI number

      // Calculate the new item total
      const price = parseFloat(btn.getAttribute("data-price"));
      const itemTotalDisplay =
        container.parentElement.querySelector(".item-total");
      itemTotalDisplay.textContent = "$" + (price * currentQty).toFixed(2);

      // Recalculate the cart totals
      updateCartTotals();
    }
  }

  // Function to calculate Subtotal and Grand Total
  function updateCartTotals() {
    let newTotal = 0;
    const allItemTotals = document.querySelectorAll(".item-total");

    // Loop through every item total on the page and add them up
    allItemTotals.forEach((item) => {
      // Remove the '$' sign and convert string to a float
      const value = parseFloat(item.textContent.replace("$", ""));
      newTotal += value;
    });

    // Update the Subtotal and Grand Total UI elements
    document.getElementById("subtotal").textContent = "$" + newTotal.toFixed(2);
    document.getElementById("grand-total").textContent =
      "$" + newTotal.toFixed(2);
  }
});
