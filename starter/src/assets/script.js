/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */
const products = [
  {
    name: "Bing Cherries",
    price: 3,
    quantity: 0,
    productId: 1,
    image: "./images/cherry.jpg"
  },
  {
    name: "Cara Cara Navel Oranges",
    price: 8,
    quantity: 0,
    productId: 2,
    image: "./images/orange.jpg"
  },
  {
    name: "Sweetest Batch Strawberries",
    price: 6,
    quantity: 0,
    productId: 3,
    image: "./images/strawberry.jpg"
  },
];

/* Create 3 or more product objects using object literal notation 
   Each product should include five properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart should start at zero (number)
   - productId: unique id for the product (number)
   - image: picture of product (url string)
*/

/* Images provided in /images folder. All images from Unsplash.com
   - cherry.jpg by Mae Mu
   - orange.jpg by Mae Mu
   - strawberry.jpg by Allec Gomes
*/
// TODO: Add Donut Peaches, add Dragonfruit, add Coconuts

/* Declare an empty array named cart to hold the items in the cart */
let cart = [];

/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/

/** 
 * Function to render product to cart 
 * @param {Array} cartItems - an array of objects representing items in the cart
 * The function takes an array of objects representing items in the cart 
 * and renders them in the .cart container
 */
function renderCart(cartItems = []) {
  const cartContainer = document.querySelector('.cart');
  if (!cartContainer) {
    throw new Error('Cart container not found');
  }
  cartContainer.innerHTML = '';
  if (!cartItems.length) {
    return;
  }
  cartItems.forEach(cartItem => {
    if (!cartItem) {
      throw new Error('CartItem is null or undefined');
    }
    const div = document.createElement('div');
    div.innerHTML = `
      <div data-productId='${cartItem.productId}'>
        <h3>${cartItem.name}</h3>
        <p>price: ${currencySymbol}${cartItem.price}</p>
        <p>quantity: ${cartItem.quantity}</p>
        <p>total: ${currencySymbol}${cartItem.price * cartItem.quantity}</p>
        <button class="qup">+</button>
        <button class="qdown">-</button>
        <button class="remove">remove</button>
      </div>
    `;
    cartContainer.append(div);
    const qupButton = div.querySelector('.qup');
    const qdownButton = div.querySelector('.qdown');
    const removeButton = div.querySelector('.remove');

    if (!qupButton || !qdownButton || !removeButton) {
      throw new Error('Cart item buttons not found');
    }

    qupButton.addEventListener('click', () => {
      // Increase quantity by 1
      cartItem.quantity++;
      renderCart(cartItems);
    });

    qdownButton.addEventListener('click', () => {
      // Decrease quantity by 1
      cartItem.quantity--;
      renderCart(cartItems);
    });

    removeButton.addEventListener('click', () => {
      // Remove item from cart
      newCartItems = cartItems.filter(item => item.productId !== cartItem.productId);
      renderCart(newcartItems);
    });
  });
}
// TODO: Add event listeners for buttons

// Example usage:
const cartItems = [
  { name: 'Product 1', price: 3, quantity: 1 },
  { name: 'Product 2', price: 8, quantity: 2},
];

renderCart(cartItems);

/** Function to add product to cart based on productId and increase product quantity */
function addProductToCart(productId) {
  // Find the product by productId in the products array
const product = products.find(p => p.productId === productId);

// Check if product is already in the cart
const cartItem = cart.find(p => p.productId === productId);

if (cartItem) {
  // If product exists in the cart, increase the quantity
  cart.cartItem.quantity += 1;
  renderCart(); // Call renderCart after the quantity updates
} else {
  // If product doesn't exist in the cart, add a quantity of 1
  cart.push({
    ...product,  // Copy all properties of the product
    quantity: 1  // Add a quantity property to the cart item
  });
  renderCart(); // Call renderCart after a new product is added to cart
}
}

/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/

function increaseQuantity(productId) {
  // Find the product in the cart by productId
  const cartItem = cart.find(p => p.productId === productId);

  if (cartItem) {
    // If the product is found, increase quantity
    cartItem.quantity += 1;
  }
  renderCart(); // Call renderCart to reflect updated quantity in cart
}

/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/

function decreaseQuantity(productId) {
  // Find the product in the cart by productId
  const cartItem = cart.find(p => p.productId === productId);

  if (cartItem) {
    // Decrease the product quantity by 1
    cartItem.quantity -= 1;

    // If the quantity reaches 0, remove product from the cart
    if (cartItem.quantity === 0) {
      removeProductFromCart(productId);
    }  
  }

  renderCart(); // Call renderCart to reflect updated quantity
}

/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/

/** Function to remove product from the cart based on productId */
function removeProductFromCart(productId) {
  // Filter out the product by productId from the cart
  cart = cart.filter(p => p.productId !== productId);

  renderCart(); // Re-render cart to reflect updated quantity
}

/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total cost of all products
  - cartTotal should return the total cost of the products in the cart
  Hint: price and quantity can be used to determine total cost
*/

// Global variable to track total amount
let totalPaid = 0;

/** Function that calculates and relfects the total cost of items in the cart 
 * 
 * @return {number} The total of all items in the cart
*/
function cartTotal(productId) {
  let cartTotal = 0;

  // Iterate through the cart and calculate the total cost of all products
  cart.forEach(item => {
    cartTotal += item.price * item.quantity;
  });

  // Return the total cost of products in the cart
  return balance;
}

/* Create a function called emptyCart that empties the products from the cart */

/** Function to empty all products from the cart */
function emptyCart() {
  // Set the cart array to empty
  cart = [];

  renderCart(); // Re-render cart to relfect empty cart state
}

/* Create a function named pay that takes in an amount as an argument
  - amount is the money paid by customer
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
  Hint: cartTotal function gives us cost of all the products in the cart  
*/

/** Calculates the change due to the customer after payment
 * 
 * @param {number} paidAmount - The amount paid by customer
 * @return {number} - The change due to the customer
*/
function calculateChange(paidAmount) {
  const cartTotalAmount = cartTotal();
  const balance = paidAmount - cartTotalAmount;

  totalPaid += balance >= 0 ? cartTotalAmount : paidAmount;

  return balance;
}

/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/

/** Function to switch between currencies (USD, EUR, and YEN)
 * 
 * @param {number} amount - Amount of money to convert
 * @param {string} currency - Target currency to switch to ("USD", "EUR", "YEN")
 * @return {number} - Converted amount in chosen currency
 */
function currency(amount, currency) {
  // Example exchange rates
  const rates = {
    USD: 1, // Base currency
    EUR: 0.90, // 1 USD = 0.90 EUR
    YEN: 140.3 // 1 USD = 140.3 YEN
  };

  // Multiply the amount by the target currency exchange rate
  if (rates[currency]) {
    return amount * rates[currency];
  } else {
    throw new Error("Unsupported currency"); // Throws an error if the currency is not supported
  }
}

/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

module.exports = {
   products,
   cart,
   addProductToCart,
   increaseQuantity,
   decreaseQuantity,
   removeProductFromCart,
   cartTotal,
   pay, 
   emptyCart,
   /* Uncomment the following line if completing the currency converter bonus */
   currency
}
