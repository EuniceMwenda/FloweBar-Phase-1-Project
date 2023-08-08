let allProducts=[]
let cart=[]

let cartItem=document.querySelector("#cartItems")


function setCartItems(){
  cartItem.innerHTML=cart.length
}




fetch("https://perenual.com/api/species-list?page=1&key=sk-XaA264d253686b4da1801",{
  method:"Get",
  Headers:{
    contentType:"application/json",
  }
})
.then(function (response){
  return response.json();
})
.then(function (data){
  console.log(data)
  let docs=data.data
  let productsHTML ='';
  allProducts=docs

  for(i=0;i<docs.length;i++){
    let doc=docs[i]
    console.log()

    if(doc.default_image===null || !doc.default_image.thumbnail){
      continue
    }

    productsHTML += ` 
  
    <div class="box">
    <img class="produt-image"
    src="${doc.default_image.thumbnail}" >
    <h3 class="produt-name">${doc.common_name}</h3>
    <div class="price">Ksh ${Math.floor((Math.random() * 1000) + 200)}</div>
    <a href="#" class="btn add-item-to-cart"  onclick="addToCart('${doc.id}')" >add to cart</a>
  </div> 
    
    `; 
  }
  document.querySelector("#items_container").innerHTML=productsHTML
  const btnaddTocart = document.querySelectorAll('.add-item-to-cart');

btnaddTocart.forEach(btn => {
  btn.addEventListener('click', function handleClick(event) {
    console.log('button clicked', event);
  });
});
  
});


const navbar = document.querySelectorAll('.navbar');

navbar.forEach(navbar => {
  navbar.addEventListener('click', function handleClick(event) {
    console.log('navbar clicked', event);

    navbar.setAttribute('style', 'background-color: green;');
  });
});

const button = document.getElementById('myemail');

button.addEventListener('click', function() {
  alert('Input email');
});



function addToCart(id){
  
cart.push(id)
console.log(cart)
setCartItems()
}