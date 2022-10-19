//-------------HEADER--------------//
document.getElementById("idheader").innerHTML = `
<div class="header-logo">
  <a href="index.html">
    <img src="Images/gg-logo.svg" alt="Logo GG Wines" width="100">
  </a>
</div>
<div class="header-title">
  GG Wines
</div>
<input type="checkbox" id="menu-check">
<label id="menu" for="menu-check">
  <span id="menu-open">&#9776;</span>
  <span id="menu-close">&#11198;</span>
</label>
<nav class="header-navbar">
  <ul id="list-header">
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
const email = document.getElementById("inputEmail");
const name = document.getElementById("inputName")
const age = document.getElementById("inputAge")
const comment = document.getElementById("inputComment")

//-------------SLIDER--------------//
const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider__section");
let sliderSectionLast = sliderSection[sliderSection.length -1];

const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");

slider.insertAdjacentElement('afterbegin',sliderSectionLast);

function Next() {
    let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition ="none";
        slider.insertAdjacentElement('beforeend',sliderSectionFirst);
        slider.style.marginLeft = "-100%";
    }), 500;
}
function Prev() {
   let sliderSection = document.querySelectorAll(".slider__section");
   let sliderSectionLast = sliderSection[sliderSection.length -1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition ="none";
        slider.insertAdjacentElement('afterbegin',sliderSectionLast);
        slider.style.marginLeft = "-100%";
    }), 500;
}

btnRight.addEventListener('click', function(){
    Next();
});

btnLeft.addEventListener('click', function(){
    Prev();
});
//-------------FIN_SLIDER--------------//