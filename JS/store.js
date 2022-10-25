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
        const title = document.createElement("h4");
        title.innerHTML = producto.nombre;
        const price = document.createElement("h5");
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
    success();
}

function success () {
    Swal.fire(
        'Gracias!',
        'Se agrego al carrito correctamente, aunque por ahora no hay',
        'success'
    )
};

function error () {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: `Actualmente no contamos con carrito de compras...`,
    })
};