document.addEventListener("DOMContentLoaded", function () {
    
    const selectedProductId = localStorage.getItem("selectedProductId");
  
    
    const productIdElement = document.getElementById("productId");
    productIdElement.textContent = `Producto seleccionado: ${selectedProductId}`;
  
    
    console.log("selectedProductId: ", selectedProductId);
  
    
    localStorage.removeItem("selectedProductId");
  });
  