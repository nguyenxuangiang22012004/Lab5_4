// Sample data for products
const products = [
  { name: "Fern", price: "$15", image: "https://9xgarden.com/wp-content/uploads/2020/04/cay-canh-de-ban-lam-viec-tphcm-9xgarden-6.jpg" },
  { name: "Snake Plant", price: "$20", image: "https://homeoffice.com.vn/images/companies/1/SEO/Blog/Phong%20Th%E1%BB%A7y/C%C3%A2y%20%C4%91%E1%BB%83%20b%C3%A0n%20l%C3%A0m%20vi%E1%BB%87c/cay-canh-de-ban-lam-viec-theo-phong-thuy.jpg" },
  { name: "Pothos", price: "$18", image: "https://channel.vcmedia.vn/2020/11/17/1232629621627461155200694416625386559937659n-16055946677772003557807.jpg" },
  { name: "Bonsai", price: "$12", image: "https://homeoffice.com.vn/images/companies/1/SEO/Blog/Phong%20Th%E1%BB%A7y/C%C3%A2y%20%C4%91%E1%BB%83%20b%C3%A0n%20l%C3%A0m%20vi%E1%BB%87c/cay-de-ban-lam-viec-theo-phong-thuy-may-man.jpg" },
  { name: "Hello", price: "$28", image: "https://homeoffice.com.vn/images/companies/1/SEO/Blog/Phong%20Th%E1%BB%A7y/C%C3%A2y%20%C4%91%E1%BB%83%20b%C3%A0n%20l%C3%A0m%20vi%E1%BB%87c/cay-de-ban-lam-viec-theo-phong-thuy-may-man.jpg" },
  { name: "Goodbye", price: "$38", image: "https://bizweb.dktcdn.net/100/275/164/files/cay-la-xe-01-02.jpg?v=1695348682413" },
  // Add more products as needed
  // Add more products as needed
  // Add more products as needed
  // Add more products as needed
];

// Global variables
let cart = [];

// Function to display products on the page
function displayProducts() {
  const productsSection = document.getElementById('products');
  products.forEach(product => {
    const card = document.createElement('div');
    card.classList.add('card');

    const image = document.createElement('img');
    image.src = product.image;
    image.alt = product.name;
    card.appendChild(image);

    const productName = document.createElement('h2');
    productName.textContent = product.name;
    card.appendChild(productName);

    const productPrice = document.createElement('p');
    productPrice.textContent = `Price: $${product.price}`;
    card.appendChild(productPrice);

    const addToCartButton = document.createElement('button');
    addToCartButton.textContent = 'Add to Cart';
    addToCartButton.addEventListener('click', () => addToCart(product));
    card.appendChild(addToCartButton);

    productsSection.appendChild(card);
  });
}

// Function to add a product to the cart
function addToCart(product) {
  cart.push(product);
  updateCart();
}

// Function to update the cart display
function updateCart() {
  const cartItems = document.getElementById('cart-items');
  cartItems.innerHTML = '';
  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item.name;
    cartItems.appendChild(li);
  });
}

// Function to show the cart modal
function showCart() {
  const cartModal = document.getElementById('cart');
  cartModal.style.display = 'block';
}

// Function to close the cart modal
function closeCart() {
  const cartModal = document.getElementById('cart');
  cartModal.style.display = 'none';
}

// Function to process checkout
function checkout() {
  // Implement your checkout logic here
  alert('Checkout functionality is not implemented yet!');
}

// Call the function to display products when the page loads
document.addEventListener('DOMContentLoaded', displayProducts);
