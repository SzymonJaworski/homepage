{
    const toggleBackground = () => {
        const body = document.body;
        const buttonName = document.querySelector(".js-buttonName");

        body.classList.toggle("backgroundImage");
        buttonName.innerText = body.classList.contains("backgroundImage") ? "Usuń" : "Dodaj";
    };

    const init = () => {
        const button = document.querySelector(".js-button");
        button.addEventListener("click", toggleBackground);
    };

    init();
}