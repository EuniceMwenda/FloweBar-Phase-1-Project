const products = [{
image: 'Images/valentines.jpg',
name: 'Red Forever Roses',
price: 6000
},{
  image: 'Images/newtulips.jpg',
  name: 'Tulips bouquet',
  price: 6000
},{
  image: 'Images/purple.jpg',
  name: 'Color of love Bouquet',
  price: 4500
},{
  image: 'Images/white.webp',
  name: 'white Bouquet',
  price: 5000
},{
  image: 'Images/mixed.jpg',
  name: 'Abundance beauty',
  price: 3500
},{
  image: 'Images/chocolate.jpg',
  name: 'Lavish Flower Box',
  price: 5000
}];

const cart = [];

let productsHTML ='';

products.forEach((product)  => {
  productsHTML += ` 
  
  <div class="box">
  <img class="produt-image"
  src="${product.image}" >
  <h3 class="produt-name">${product.name}</h3>
  <div class="price">${product.price}</div>
  <a href="#" class="btn"  onclick="addToCart('${product.name}')" >add to cart</a>
</div> 
  
  `; 
  const productName =product.name
cart.push(
  {
    productName:productName,
    quantity: 1
  }
)
  
});



document.querySelector("#items_container").innerHTML=productsHTML

function addToCart(name){
  console.log(cart);
 
}

