/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */
const products = [
/* Create 3 or more product objects using object literal notation 
   Each product should include five properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart should start at zero (number)
   - productId: unique id for the product (number)
   - image: picture of product (url string)
*/
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
  }
];

/* Images provided in /images folder. All images from Unsplash.com
   - cherry.jpg by Mae Mu
   - orange.jpg by Mae Mu
   - strawberry.jpg by Allec Gomes
*/
// TODO: Add Donut Peaches, add Dragonfruit, add Coconuts

/* Declare an empty array named cart to hold the items in the cart */
const cart = [];

/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/
function addProductToCart(productId) {
  // Find the product by productId in the products array
let product = products.find(product => product.productId === productId);
// If product exists in the cart, increase the quantity
product.quantity += 1;

if (!cart.includes(product)) {

  cart.push(product);
}
}

/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/

function increaseQuantity(productId) {
  // Find the product in the cart by productId
  const product = products.find((product) => product.productId === productId);
    // If the product is found, increase quantity
    ++product.quantity;
  }

/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/

function decreaseQuantity(productId) {
  // Find the product in the cart by productId
  const product = products.find((product) => product.productId === productId);
    // Decrease the product quantity
    --product.quantity;

    // If the quantity reaches 0, remove product from the cart
    if (product.quantity === 0) {
      removeProductFromCart(productId);
    }  
  }

/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/

/** Function to remove product from the cart based on productId */
function removeProductFromCart(productId) {
  // Filter out the product by productId from the cart
  const index = cart.findIndex((product) => product.productId === productId);

  // If the product is found, update the quantity to 0
  if (index !== 1) {

    cart[index].quantity = 0;

    cart.splice(index, 1);

  }
}

/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total cost of all products
  - cartTotal should return the total cost of the products in the cart
  Hint: price and quantity can be used to determine total cost
*/

/** Function named cartTotal that returns the total cost of all items in the cart
 * Calculates the total cost of all items in the cart
 * 
 * @return {number} The total cost of all items in the cart
*/
function cartTotal() {
  let totalCost = 0;

  // Iterate through the cart and calculate the total cost
  for (let i = 0; i < cart.length; i++) {
    totalCost += cart[i].price * cart[i].quantity;
  }

  // Return the total cost of all items in the cart
  return totalCost;
}

/* Create a function called emptyCart that empties the products from the cart */

/** Function to empty all products from the cart */
function emptyCart() {
  // Set the cart array to empty
  cart = [];
}

/* Create a function named pay that takes in an amount as an argument
  - amount is the money paid by customer
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
  Hint: cartTotal function gives us cost of all the products in the cart  
*/

// Global variable to track total amount
let totalPaid = 0;

/** Function to pay for items in the cart */
function pay(amount) {
  // Get the total amount of the products in the cart
  totalPaid += amount;

  let change = totalPaid - cartTotal; // Calculate the change to be returned

  // If the amount paid is greater than the total, return the total amount due to customer
  return change;
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
  return amount * (rates[currency] || 0);
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
   emptyCart,
   pay,
   /* Uncomment the following line if completing the currency converter bonus */
   currency,
}
