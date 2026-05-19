let cart = [];
let total = 0;

function addToCart(item, price) {

  cart.push({ item, price });

  total += price;

  updateCart();

}

function updateCart() {

  const cartItems = document.getElementById("cart-items");

  cartItems.innerHTML = "";

  cart.forEach((food) => {

    let li = document.createElement("li");

    li.innerHTML = `
      ${food.item}
      <span>Rs ${food.price}</span>
    `;

    cartItems.appendChild(li);

  });

  document.getElementById("total").innerText = "Rs " + total;

}

function checkout() {

  if(cart.length === 0) {

    alert("Your cart is empty!");

  } else {

    alert(
      "Order placed successfully!\nTotal Bill: Rs " + total
    );

    cart = [];
    total = 0;

    updateCart();

  }

}

function scrollToMenu() {

  document.getElementById("menu")
    .scrollIntoView({ behavior: "smooth" });

}
















 
