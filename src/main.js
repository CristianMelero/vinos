const store = document.querySelector(".store");
const fill = document.querySelector(".fill");
let buyout = document.getElementById("total");
const buy = document.getElementById("buy");
let arrayProductos = JSON.parse(localStorage.getItem("carrito"));
arrayProductos !== null && actualizarCarritoDeCompras(arrayProductos);


const fetchData = async () => {
    try {
        const url = await fetch ("Stock.json");
        const data = await url.json();
        paintData(data);
    }
    catch{
        console.log ("error");
    }
};
fetchData();

const paintData = (data) => {
    Object.values(data).forEach( producto => {
        const div = document.createElement("div");
        div.className = "storeItem";
        const img = document.createElement("img");
        img.className = "image"
        img.setAttribute("src", producto.sourceURL);
        const title = document.createElement("h3");
        title.innerHTML = producto.nombre;
        const price = document.createElement("h4");
        price.innerHTML = "Precio: " + producto.precio;
        const button = document.createElement("button");
        button.addEventListener("click", ()=>{
            buyButton()
        });
        button.innerText = "Agregar al carrito";
        button.className = "btn";
    
        div.appendChild(title);
        div.appendChild(img);
        div.appendChild(price);
        div.appendChild(button);

        store.appendChild(div);
    })
};

const buyButton = () => {
    alert("Gracias por la compra")
}
//-------------FORM----------------//
const email = getElementById("inputEmail")
const name = getElementById("inputName")
const age = getElementById("inputAge")
const comment = getElementById("inputComment")


//-------------HEADER--------------//
document.getElementById("idheader").innerHTML = `
<div class="header-logo">
  <a href="index.html">
    <img src="Images/gg-logo.svg" alt="Logo GG Wines" width="100">
  </a>
</div>
<div class="header-title">
  <p>GG Wines</p>
</div>
<input type="checkbox" id="menu-check">
<label id="menu" for="menu-check">
  <span id="menu-open">&#9776;</span>
  <span id="menu-close">&#11198;</span>
</label>
<nav class="header-navbar">
  <ul>
    <li><a href="index.html">Inicio</a></li>
    <li><a href="quienesSomos.html">Sobre nosotros</a></li>
    <li><a href="catas.html">Catas</a></li>
    <li><a href="tienda.html">Catálogo</a></li>
    <li><a href="contacto.html">Contactanos</a></li> 
  </ul>
</nav>
`
//-------------FOOTER--------------//
document.getElementById("idfooter").innerHTML = `
<div class="footer-container">
<div class="footer-text"> <h2>Contactanos |</h2> </div>
<div>
  <a href="index.html">
    <img src="./Icons/whatsapp.png"> 
  </a>
</div>
<div>
  <a href="index.html">
    <img src="./Icons/instagram.png"> 
  </a>
</div>
<div>
  <a href="index.html">
    <img src="./Icons/twitter.png"> 
  </a>
</div>
<div>
  <a href="index.html">
    <img src="./Icons/gmail.png"> 
  </a>
</div>
</div>
`