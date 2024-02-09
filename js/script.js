// JavaScript logic goes here
const header=document.querySelector("header");
window.addEventListener("scroll",function(){
header.classList.toggle("sticky",this.window.scrollY>0);

})
//----------------------------------------------------------------------
let carts =document.querySelectorAll('.add-cart');
 
let prodcts=[
    {
        id: 1,
        name: 'Product 1',
        price: 29.99,
        description: 'Description for Product 2',
        inCart :0,
    },
    {
        id: 2,
        name: 'Product 2',
        price: 500,
        description: 'Description for Product 2',
        inCart :0,
    },
    {
        id: 3,
        name: 'Product 3',
        price: 29.99,
        description: 'Description for Product 2',
        inCart :0,
    },
    {
        id: 4,
        name: 'Product 4',
        price: 29.99,
        description: 'Description for Product 2',
        inCart :0,
    },
    {
        id: 5,
        name: 'Product 5',
        price: 29.99,
        description: 'Description for Product 2',
        inCart :0,
    },
    {
        id: 6,
        name: 'Product 6',
        price: 500,
        description: 'Description for Product 2',
        inCart :0,
    },
    {
        id: 7,
        name: 'Product 7',
        price: 29.99,
        description: 'Description for Product 2',
        inCart :0,
    },
    {
        id: 8,
        name: 'Product 8',
        price: 29.99,
        description: 'Description for Product 2',
        inCart :0,
    },

]

for(let i =0 ;i< carts.length; i++){
  carts[i].addEventListener('click',()=>{
    cartNumbers(prodcts[i]);
    totalCost(prodcts[i]);
  });
}

function onLoadCartNumber(){
    let productNumbers = localStorage.getItem('cartNumbers');
    if (productNumbers){
        document.querySelector('.cart span ').textContent= productNumbers ;}
}


function cartNumbers( prodct){
    console.log("product is", prodct);

    let productNumbers = localStorage.getItem('cartNumbers')
   
    productNumbers=parseInt(productNumbers);
     if (productNumbers){
        localStorage.setItem('cartNumbers',productNumbers  +1)
        document.querySelector('.cart span ').textContent= productNumbers +1;

     } else{
        localStorage.setItem('cartNumbers', 1)
        document.querySelector('.cart span ').textContent=1;

     }

     setItems(prodct);
    
}
function setItems(prodct){
    let cartItems=localStorage.getItem('productsInCart');
    cartItems=JSON.parse(cartItems);
    // console.log("my cart items are", cartItems);

    if(cartItems!=null){
       if( cartItems[prodct.name]==undefined)
       {
        cartItems={
            ...cartItems,
            [prodct.name]:prodct
        }

       }
        cartItems[prodct.name].inCart +=1;
    } else{
        prodct.inCart=1;
        cartItems={
            [prodct.name]:prodct
        }
    }
localStorage.setItem("productsInCart", JSON.stringify(cartItems))

}

//----------------------------------------------------
function totalCost(prodct){
    console.log('price',prodct.price);
    let cartCost =localStorage.getItem('totalCost')
    console.log("my cart",cartCost);
   
    if(cartCost!=null){
        cartCost=parseInt(cartCost);
        localStorage.setItem('totalCost', cartCost+prodct.price)
    }else{
        localStorage.setItem('totalCost',prodct.price)
    }
}
function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".products");
    console.log("Cart items:", cartItems);

    if (cartItems && productContainer) {
        productContainer.innerHTML = '';

        Object.values(cartItems).forEach(item => {
            productContainer.innerHTML += `
            <div class="product">
                <ion-icon name="close-circle"></ion-icon>
                <img src="imgs/${item.id}.jpg" alt="${item.name}">
                <span class="product-name">${item.name}</span>
                <span class="price">$${item.price}</span>
                <div class="quantity">${item.inCart}</div>
                <span class="total">$${(item.price * item.inCart).toFixed(2)}</span>
            </div>`;
        });
    }
}


function calculateTotalCost() {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    let totalCost = 0;

    if (cartItems) {
        Object.values(cartItems).forEach(item => {
            totalCost += item.price * item.inCart;
        });
    }

    return totalCost;
}
//*************************************************************************** */

const details=document.getElementById("productDetails");
for (let i = 0; i < details.length; i++) {
    details[i].addEventListener('click', () => {
        cartNumbers(prodcts[i]);
        totalCost(prodcts[i]);

        localStorage.setItem('selectedProduct', JSON.stringify(prodcts[i]));

        window.location.href = 'productDetails.html';
    });
}



//-------------------------------------------------------------------------------------


onLoadCartNumber();


//------------------------------------------------------------------------

let slideImages = document.querySelectorAll('.slides img');
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
let dots = document.querySelectorAll('.dot');
var counter = 0;

next.addEventListener('click', slideNext);

function slideNext(){
slideImages[counter].style.animation = 'next1 0.5s ease-in forwards';
if(counter >= slideImages.length-1){
counter = 0;
}
else{
counter++;
}
slideImages[counter].style.animation = 'next2 0.5s ease-in forwards';

}
// Code for prev button

prev.addEventListener('click', slidePrev);

function slidePrev(){
slideImages[counter].style.animation = 'prev1 0.5s ease-in forwards';
if(counter == 0){
counter =  slideImages.length-1;
}
else{
counter--;
}
slideImages[counter].style.animation = 'prev2 0.5s ease-in forwards';

}
//auto slideing
function autoSliding(){
    deletInterval= setInterval(timer,1000);
    function timer(){
        slideNext();
    }
}
autoSliding();

const container = document.querySelector('.slid-continer'); 
container.addEventListener('mouseover', function(){
clearInterval(deletInterval);
}) ;

container.addEventListener('mouseout',autoSliding());


//-----------------------------------------------

//-------------------------------------------------------------------

// Function to scroll to top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

