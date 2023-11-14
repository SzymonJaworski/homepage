let buttonElement = document.querySelector(".js-changeBackground");
let body = document.querySelector(".backgroundImage");
let nextName = document.querySelector(".js-nextName");

buttonElement.addEventListener("click", () => {
    body.classList.toggle("backgroundImage");
    nextName.innerText = body.classList.contains("backgroundImage") ? "Usuń" : "Dodaj";
});