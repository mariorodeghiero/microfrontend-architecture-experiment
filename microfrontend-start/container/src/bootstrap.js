import { mount as productsMount } from "products/ProductsIndex";
import { mount as cartMount } from "cart/CartShow";

console.log("Hello from container");

productsMount(document.querySelector("#microFE-products"));
cartMount(document.querySelector("#microFE-cart"));
