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
    <img src="./Icons/whatsapp.png" alt="WhatsApp"> 
  </a>
</div>
<div>
  <a href="index.html">
    <img src="./Icons/instagram.png" alt="Instagram"> 
  </a>
</div>
<div>
  <a href="index.html">
    <img src="./Icons/twitter.png" alt="Twitter"> 
  </a>
</div>
<div>
  <a href="index.html">
    <img src="./Icons/gmail.png" alt="Correo electrónico"> 
  </a>
</div>
</div>
`
