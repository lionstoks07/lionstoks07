document.addEventListener("DOMContentLoaded", function () {
    const navToggle = document.getElementById("nav-toggle");
    const navMenu = document.querySelector("nav ul");

    if (navToggle && navMenu) {
        navToggle.addEventListener("click", () => {
            navMenu.classList.toggle("active");
        });
    }
});

const addToCartButtons = document.querySelectorAll(".add-to-cart");

addToCartButtons.forEach(button => {
    button.addEventListener("click", () => {
        alert("Item added to cart!");
    });
});

const contactForm = document.getElementById("contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !message) {
            alert("Please fill in all fields.");
            e.preventDefault();
        }
    });
}

const orderButtons = document.querySelectorAll(".product_buttons");

orderButtons.forEach(button => {
    button.addEventListener("click", function (event) {
        const confirmed = confirm("Do you want to proceed with this order?");
        if (!confirmed) {
            event.preventDefault();
        }
    });
});


const addToCartButtons = document.querySelectorAll(".add-to-cart");

addToCartButtons.forEach(button => {
    button.addEventListener("click", () => {
        alert("Item added to cart!");
    });
});

const contactForm = document.getElementById("contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !message) {
            alert("Please fill in all fields.");
            e.preventDefault();
        }
    });
});

const orderButtons = document.querySelectorAll(".product_buttons");

orderButtons.forEach(button => {
    button.addEventListener("click", function (event) {
        const confirmed = confirm("Do you want to proceed with this order?");
        if (!confirmed) {
            event.preventDefault();
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
  const cartItemsContainer = document.getElementById("cart-items");
  const subtotalEl = document.getElementById("subtotal");
  const totalEl = document.getElementById("total");
  const discountEl = document.getElementById("discount");
  const couponInput = document.getElementById("coupon-code");
  const discountMsg = document.getElementById("discount-msg");

  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let discount = 0;

  function updateCartDisplay() {
    cartItemsContainer.innerHTML = "";
    let subtotal = 0;

    cart.forEach((item, index) => {
      const div = document.createElement("div");
      div.classList.add("cart-item");
      div.innerHTML = `
        <span>${item.name} x${item.qty}</span>
        <span>$${(item.price * item.qty).toFixed(2)}</span>
      `;
      cartItemsContainer.appendChild(div);
      subtotal += item.price * item.qty;
    });

    subtotalEl.textContent = subtotal.toFixed(2);
    discountEl.textContent = discount.toFixed(2);
    totalEl.textContent = (subtotal - discount).toFixed(2);
  }

  document.getElementById("apply-coupon").addEventListener("click", () => {
    const code = couponInput.value.trim().toLowerCase();
    if (code === "tech10") {
      discount = 10;
      discountMsg.textContent = "Coupon applied!";
    } else {
      discount = 0;
      discountMsg.textContent = "Invalid coupon code.";
    }
    updateCartDisplay();
  });

  document.getElementById("checkout-btn").addEventListener("click", () => {
    const isLoggedIn = localStorage.getItem("loggedIn");
    if (isLoggedIn !== "true") {
      alert("Please log in before proceeding to checkout.");
      window.location.href = "login.html";
    } else {
      window.location.href = "checkout.html";
    }
  });

  updateCartDisplay();
});



