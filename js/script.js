let button = document.querySelector(".js-button");
let body = document.body;
let buttonName = document.querySelector(".js-buttonName");

button.addEventListener("click", () => {
    body.classList.toggle("backgroundImage");
    buttonName.innerText = body.classList.contains("backgroundImage") ? "Usuń" : "Dodaj";
});