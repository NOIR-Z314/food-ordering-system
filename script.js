
let cart =
JSON.parse(localStorage.getItem("cart")) || [];

// SAVE CART

function saveCart(){

  localStorage.setItem(
    "cart",
    JSON.stringify(cart)
  );

}

// ADD TO CART

function addToCart(item, price){

  const existingItem =
  cart.find(food => food.item === item);

  if(existingItem){

    existingItem.quantity += 1;

  } else {

    cart.push({
      item,
      price,
      quantity:1
    });

  }

  saveCart();

  updateCart();

}

// UPDATE CART

function updateCart(){

  const cartItems =
  document.getElementById("cart-items");

  cartItems.innerHTML = "";

  let total = 0;

  cart.forEach((food,index)=>{

    total += food.price * food.quantity;

    let li =
    document.createElement("li");

    li.innerHTML = `

      <div>
        <h4>${food.item}</h4>

        <p>
          Rs ${food.price}
          × ${food.quantity}
        </p>
      </div>

      <div class="cart-buttons">

        <button onclick="changeQuantity(${index},-1)">
          -
        </button>

        <span>${food.quantity}</span>

        <button onclick="changeQuantity(${index},1)">
          +
        </button>

        <button class="remove-btn"
        onclick="removeItem(${index})">

          Remove

        </button>

      </div>
    `;

    cartItems.appendChild(li);

  });

  document.getElementById("total")
  .innerText = "Rs " + total;

  saveCart();

}

// CHANGE QUANTITY

function changeQuantity(index,change){

  cart[index].quantity += change;

  if(cart[index].quantity <= 0){

    cart.splice(index,1);

  }

  updateCart();

}

// REMOVE ITEM

function removeItem(index){

  cart.splice(index,1);

  updateCart();

}

// CHECKOUT

function checkout(){

  if(cart.length === 0){

    alert("Your cart is empty!");

  } else {

    localStorage.setItem(
      "checkoutCart",
      JSON.stringify(cart)
    );

    window.location.href =
    "checkout.html";

  }

}

// SCROLL TO MENU

function scrollToMenu(){

  document.getElementById("menu")
  .scrollIntoView({
    behavior:"smooth"
  });

}

// LOAD CART

updateCart();
