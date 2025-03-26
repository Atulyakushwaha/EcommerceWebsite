import { addToCart } from "./addtocart";
import { homeQuantityToggle } from "./homeQuantityToggle";

const productsContainer=document.querySelector("#productContainer");
const productTemplate=document.querySelector("#productTemplate");



export const showProductContainer=(products)=>{
    if(!products){
        return false;
    };
    products.forEach((curprod) => {
        const {brand ,category,description,id,image,name,price,stock}=curprod;
        const productClone=document.importNode(productTemplate.content,true); //clone the template
        productClone.querySelector(".productName").textContent=name;
        productClone.querySelector(".productImage").src=image;
        productClone.querySelector(".productDescription").textContent=description;
        productClone.querySelector(".category").textContent=category;
        productClone.querySelector('#cardValue').setAttribute("id",`card${id}`);
        productClone.querySelector(".productStock").textContent=stock;
        productClone.querySelector(".productImage").alt=name;
        productClone.querySelector(".productPrice").textContent=`$${price}`;
        productClone.querySelector(".productActualPrice").textContent=`$${price*4}`;
        productClone.querySelector(".stockElement").addEventListener("click",(event)=>{
            homeQuantityToggle(event,id,stock);
        
        });
        productClone.querySelector(".add-to-cart-button").addEventListener("click",(event)=>{
            addToCart(event,id,stock);
        });

        productsContainer.append(productClone);
    });
}