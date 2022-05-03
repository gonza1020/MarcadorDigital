const d = document;

const {ipcRenderer} = require("electron");




ipcRenderer.on("async-reply", (e,arg)=>{
    console.log(arg);
})

const $productForm = d.getElementById("productForm"),
    $productName = d.getElementById("productName"),
    $productPrice = d.getElementById("productPrice"),
    $productDescription = d.getElementById("productDescription");

$productForm.addEventListener("submit", e =>{
    e.preventDefault();
     const newProduct = {
         name: $productName.value,
         price: $productPrice.value,
         description: $productDescription.value,
     }
    ipcRenderer.send("async-msg",newProduct)
    console.log($productName.value); 
    console.log($productPrice.value); 
    console.log($productDescription.value);

})