document.addEventListener('DOMContentLoaded', function () {
  // Initialize Glide Carousel
  new Glide('.glide', {
    type: 'carousel', // Set carousel type
    autoplay: 5000, // Autoplay interval in milliseconds (5 seconds)
    hoverpause: false, // Pause autoplay on hover
    animationDuration: 800, // Animation duration in milliseconds
    animationTimingFunc: 'ease-in-out' // Animation timing function
}).mount();

 // Populate Featured Products
 const productsContainer = document.querySelector('.product-grid');

 // Sample Product Data 
 const products = [
     {
         name: 'Chair',
         image: 'assets/images/chair.png',
         price: '$99'
     },
     {
         name: 'Table',
         image: 'assets/images/table.png',
         price: '$199'
     },
     {
         name: 'Sofa',
         image: 'assets/images/sofa.webp',
         price: '$499'
     }
 ];

 // Function to create a product element
 function createProductElement(product) {
     const productElement = document.createElement('div');
     productElement.classList.add('product');

     const productImage = document.createElement('img');
     productImage.src = product.image;
     productImage.alt = product.name;

     const productName = document.createElement('h3');
     productName.textContent = product.name;

     const productPrice = document.createElement('p');
     productPrice.textContent = `Price: ${product.price}`;

     // Append elements to product container
     productElement.appendChild(productImage);
     productElement.appendChild(productName);
     productElement.appendChild(productPrice);

     return productElement;
 }

 // Render each product in the product grid
 products.forEach(product => {
     const productElement = createProductElement(product);
     productsContainer.appendChild(productElement);
 });

  // Example Animation using Anime.js for the header
  anime({
      targets: 'header',
      translateY: [-50, 0],
      opacity: [0, 1],
      easing: 'easeInOutQuad',
      duration: 1000,
      delay: 500
  });

  // Initialize AOS (Animate On Scroll)
  AOS.init({
      duration: 800,
      easing: 'ease-out',
      once: true // Only animate elements once
  });
});

