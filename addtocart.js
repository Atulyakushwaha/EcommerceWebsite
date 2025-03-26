import { getCartProductFromLS } from "./getCartProducts";

export const addToCart=(event,id,stock)=>{

    let arrLocalStorageProducts=getCartProductFromLS();
    const currentProduct=document.querySelector(`#card${id}`);
    console.log(currentProduct);
    const quantity=currentProduct.querySelector(".productQuantity").innerText;
    let price=currentProduct.querySelector(".productPrice").innerText;
    console.log(`${quantity} ss ${price}`)
    price=price.replace("$","");
   price=price*quantity;

 arrLocalStorageProducts.push({id,quantity,price});
 localStorage.setItem("cartProductLS",JSON.stringify(arrLocalStorageProducts));

}