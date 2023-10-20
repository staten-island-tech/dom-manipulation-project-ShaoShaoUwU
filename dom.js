/* DOMSelectors = {
    form: document.querySelector("#form"),
    firstName: document.querySelector(".first-name"),
    h2s: document.querySelectorAll("h2"),
};

DOMSelectors.form.addEventListener("submit", function (event){
    event.preventDefault();
    DOMSelectors.h2s.forEach(
        (header) => (header.textContent = DOMSelectors.firstName.value)
    );
}); 
 */

function card(Champ){
    document.querySelector(".gallery").insertAdjacentElement(
        "beforend",
        `<div class="card">
        <h2 class="card-title">${Champ.name}</h2>
        <div>`
    );
};
DOMSelectors.form.addEventListener("submit", function(event) {
    event.preventDefault();
});