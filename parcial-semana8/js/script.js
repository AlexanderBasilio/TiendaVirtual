document.addEventListener("DOMContentLoaded", function () {
    fetch(`js/perfiles.json`)
      .then((response) => response.json())
      .then((data) => {
        const tableHTML = `
          <table class="table table-hover">
              <tr>
                  <th>ID</th>
                  <th>Nombre</th>
                  <th>Precio</th>
                  <th>Stock</th>
                  <th>Categoría</th>
                  <th>Descripción</th>
                  <th>Marca</th>
                  <th>Disponibilidad</th>
                  <th>Imagen</th>
                  <th></th>
              </tr>
  
              ${data.perfiles
                .map(
                  (perfil) => `
              <tr class="text text-center align-middle">
                  <td>${perfil.id}</td>
                  <td>${perfil.nombre}</td>
                  <td>${perfil.precio}</td>
                  <td>${perfil.stock}</td>
                  <td>${perfil.categoria}</td>
                  <td>${perfil.descripcion}</td>
                  <td>${perfil.marca}</td>
                  <td>${perfil.disponibilidad}</td>
                  <td> <img class="img-fluid" width="250px" src="${perfil.imagen}"> </td>
                  <td> <button class="btn btn-primary btn-comprar" data-id="${perfil.id}">Comprar</button> <button class="btn btn-outline-primary btn-wishlist">Agregar al wishlist</button> </td>
              </tr>
              `
                )
                .join("")}
          </table>
        `;
        document.getElementById("tabla").innerHTML = tableHTML;
  
        // Obtener todos los botones de "Comprar"
        const comprarBtns = document.querySelectorAll(".btn-comprar");
  
        // Agregar un event listener a cada botón de "Comprar"
        comprarBtns.forEach((btn) => {
          btn.addEventListener("click", (e) => {
            // Obtener el ID del producto seleccionado
            const productId = e.target.dataset.id;
  
            // Almacenar el ID del producto en el almacenamiento local (localStorage)
            localStorage.setItem("selectedProductId", productId);
  
            // Redirigir al usuario al archivo checkout.html
            window.location.href = "checkout.html";
          });
        });
      });
  });
  