// sirve para implementar js a futuro es un espcaio donde se puede usar de modo practico asi como tmb se hacen pruebas de js

const btnCart = document.querySelector(".container-cart-icon");
const containerCartProducts = document.querySelector(
  ".container-cart-products"
);
// new
const offcanvasBody = document.querySelector(".offcanvas-body");

btnCart.addEventListener("click", () => {
  containerCartProducts.classList.toggle("hidden-cart");
});

/* ========================= */
const cartInfo = document.querySelector(".cart-product");
const rowProduct = document.querySelector(".row-product");

// Lista de todos los contenedores de productos
const productsList = document.querySelector(".container-items");

// Variable de arreglos de Productos
let allProducts = [];

const valorTotal = document.querySelector(".total-pagar");

const countProducts = document.querySelector("#contador-productos");

const cartEmpty = document.querySelector(".cart-empty");
const cartTotal = document.querySelector(".cart-total");

productsList.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-add-cart")) {
    const product = e.target.parentElement;

    const infoProduct = {
      quantity: 1,
      title: product.querySelector("h2").textContent,
      price: product.querySelector("p").textContent,
    };

    const exits = allProducts.some(
      (product) => product.title === infoProduct.title
    );

    if (exits) {
      const products = allProducts.map((product) => {
        if (product.title === infoProduct.title) {
          product.quantity++;
          return product;
        } else {
          return product;
        }
      });
      allProducts = [...products];
    } else {
      allProducts = [...allProducts, infoProduct];
    }

    showHTML();
  }
});

rowProduct.addEventListener("click", (e) => {
  if (e.target.classList.contains("icon-close")) {
    const product = e.target.parentElement;
    const title = product.querySelector("p").textContent;

    allProducts = allProducts.filter((product) => product.title !== title);

    console.log(allProducts);

    showHTML();
  }
});

// Funcion para mostrar  HTML
const showHTML = () => {
  if (!allProducts.length) {
    cartEmpty.classList.remove("hidden");
    rowProduct.classList.add("hidden");
    cartTotal.classList.add("hidden");
  } else {
    cartEmpty.classList.add("hidden");
    rowProduct.classList.remove("hidden");
    cartTotal.classList.remove("hidden");
  }

  // new
  let productsListHTML = "";

  allProducts.forEach((product) => {
    productsListHTML += `${product.quantity} x ${product.title} - ${product.price}<br>`;
  });

  // Establece el contenido de la etiqueta <p> en offcanvas-body
  offcanvasBody.innerHTML = productsListHTML;

  // Limpiar HTML
  rowProduct.innerHTML = "";

  let total = 0;
  let totalOfProducts = 0;

  allProducts.forEach((product) => {
    const containerProduct = document.createElement("div");
    containerProduct.classList.add("cart-product");

    containerProduct.innerHTML = `
            <div class="info-cart-product">
                <span class="cantidad-producto-carrito">${product.quantity}</span>
                <p class="titulo-producto-carrito">${product.title}</p>
                <span class="precio-producto-carrito">${product.price}</span>
            </div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="icon-close"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                />
            </svg>
        `;

    rowProduct.append(containerProduct);

    total = total + parseInt(product.quantity * product.price.slice(1));
    totalOfProducts = totalOfProducts + product.quantity;
  });

  valorTotal.innerText = `$${total}`;
  countProducts.innerText = totalOfProducts;
};

// funciones para el stepper para que pueda avanzar y retroceder

function showNextStep(nextStepId) {
  $('.nav-tabs a[href="#' + nextStepId + '"]').tab("show");
}

function showPreviousStep(previousStepId) {
  $('.nav-tabs a[href="#' + previousStepId + '"]').tab("show");
}

//

// array de los productos, para ahorrar codigo html la neta wey
const productos = [
  {
    id: 1,
    nombre: "Honor X8",
    precio: "$249.99",
    imagen: "https://www.notebookcheck.net/uploads/tx_nbc2/Honor8X__1_.jpg",
  },
  {
    id: 2,
    nombre: "POCO M5s",
    precio: "$359.99",
    imagen:
      "https://th.bing.com/th/id/OIP.zHW6n5ngn98PCiyyd6wUvQHaHa?pid=ImgDet&rs=1",
  },
  {
    id: 3,
    nombre: "Huawei P60 Pro",
    precio: "$349.99",
    imagen:
      "https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/phones/p60-pro/images/hero/huawei-p60-pro-kv.webp",
  },
  {
    id: 4,
    nombre: "Honor Magic5 Pro",
    precio: "$219.99",
    imagen:
      "https://th.bing.com/th/id/OIP.AvwvUDD2YYf6yfIfqB1VOgHaFA?pid=ImgDet&rs=1",
  },
  {
    id: 5,
    nombre: "Xiaomi Redmi 12C",
    precio: "$139.99",
    imagen: "https://staticcontent.eways.ir/upload/ProductPictures/820430.jpg",
  },
  {
    id: 6,
    nombre: "Huawei Y90",
    precio: "$399.99",
    imagen:
      "https://www.pinoytechnoguide.com/wp-content/uploads/2022/08/Huawei-nova-Y90-large.jpg",
  },
];

// hasta aqui

// aca se sintetiza el codigo para que no se repita tanto en el html,como funciona:
// con js haremos los div y pondremos clases para leugo ponerle los atributos y hasta botones mi king color kon
// antes que me olvide esto para que no se repita o no haya error esta con un id, lo cual nos sirve para lolamarlo al carrito
// sin la mera necesidad de estar trayendo texto escrito si no informacion del array 7u7   profe queiro mi 20
const productContainer = document.getElementById("product-container");

productos.forEach((producto) => {
  const productDiv = document.createElement("div");
  productDiv.classList.add("item");

  const figure = document.createElement("figure");
  const img = document.createElement("img");
  img.src = producto.imagen;
  img.alt = "producto";
  figure.appendChild(img);

  const infoDiv = document.createElement("div");
  infoDiv.classList.add("info-product");

  const h2 = document.createElement("h2");
  h2.textContent = producto.nombre;

  const price = document.createElement("p");
  price.classList.add("price");
  price.textContent = producto.precio;

  const addToCartButton = document.createElement("button");
  addToCartButton.classList.add("btn-add-cart");
  addToCartButton.textContent = "Añadir al carrito";

  const buyButton = document.createElement("button");
  buyButton.classList.add("btn", "btn-primary");
  buyButton.textContent = "Comprar";
  buyButton.setAttribute("data-bs-toggle", "modal");
  buyButton.setAttribute("data-bs-target", "#exampleModal");

  buyButton.setAttribute("data-product-id", producto.id);

  infoDiv.appendChild(h2);
  infoDiv.appendChild(price);
  infoDiv.appendChild(addToCartButton);
  infoDiv.appendChild(buyButton);

  productDiv.appendChild(figure);
  productDiv.appendChild(infoDiv);

  productContainer.appendChild(productDiv);
});
// hasta aqui oni chan

// esto sirve para qeu la informacion que quiera del array vaya al stepper

const comprarButtons = document.querySelectorAll(
  '[data-bs-target="#exampleModal"]'
);
comprarButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const productId = event.target.getAttribute("data-product-id");
    const product = getProductById(productId);

    document.getElementById("product-name").textContent = product.nombre;
    document.getElementById("product-price").textContent = product.precio;

    document.getElementById("product-image").src = product.imagen;
  });
});

function getProductById(productId) {
  return productos.find((product) => product.id == productId);
}
// yamete kudasai profe-kun

// codigo agregado para el checkbox y la wea de funcionalidad de compra Bv

function showAlert() {
  if (document.getElementById("terminosYCondiciones").checked) {
    if (confirm("Compra realizada")) {
      window.location.href = "index.html";
    }
  } else {
    alert(
      "Por favor, acepta los términos y condiciones para finalizar la compra."
    );
  }
}

function mostrarAlertaCompraExitosa() {
  if (document.getElementById("terminosYCondiciones2").checked) {
    alert("Compra realizada exitosamente. ¡Gracias por tu compra!");
  } else {
    alert("Por favor, acepta los términos y condiciones para finalizar la compra.");
  }
}

document.getElementById("comprar").addEventListener("click", mostrarAlertaCompraExitosa);

// slds. cordiales pues profesorsito gaaaaaaaaaaaaa

// esto solo sirve para que los dos div que estan en offcanvas en la aprte inferior pase uno a uno na mas 

const datosPersonales = document.getElementById("datosPersonales");
const formaDePago = document.getElementById("formaDePago");
const siguienteDatosPersonales = document.getElementById("siguienteDatosPersonales");
const anteriorFormaDePago = document.getElementById("anteriorFormaDePago");
const comprar = document.getElementById("comprar");


siguienteDatosPersonales.addEventListener("click", () => {
  datosPersonales.style.display = "none";
  formaDePago.style.display = "block";
});

anteriorFormaDePago.addEventListener("click", () => {
  formaDePago.style.display = "none";
  datosPersonales.style.display = "block";
});

comprar.addEventListener("click", () => {

});
// hasta aqui 