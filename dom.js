const DOMSelectors = {
    form: document.querySelector("#form"),
    ChampName: document.querySelector(".Champ-Name"),
    h2s: document.querySelectorAll("h2"),
};

DOMSelectors.form.addEventListener("submit", function (event){
    event.preventDefault();
    DOMSelectors.h2s.forEach(
        (header) => (header.textContent = DOMSelectors.ChampName.value)
    );
});

function card(Champ) {
    document.querySelector("#gallery").insertAdjacentHTML(
        "beforeend",
        `<div class="card">
            <h2 class="card-title">${Champ.ChampName.value}</h2>
        </div>`
    );
}

DOMSelectors.form.addEventListener("submit", function(event) {
    event.preventDefault();
    card(DOMSelectors);
});