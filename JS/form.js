//-------------FORM----------------//
const name = document.getElementById("inputName");
const age = document.getElementById("inputAge");
const email = document.getElementById("inputEmail");
const comment = document.getElementById("inputComment");
const form = document.getElementById("form");

form.addEventListener("submit", e => {
  e.preventDefault();

  ( name.value === "" || age.value === "Elige un rango de edad" || email.value === "" || comment.value === "") && alert("Llena todos los apartados antes de continuar");
})
