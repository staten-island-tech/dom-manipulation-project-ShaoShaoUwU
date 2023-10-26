
    const DOMSelectors = {
        form: document.querySelector("#form"),
        ChampName: document.querySelector(".Champ-Name"),
        ChampImage: document.querySelector("#ChampImage"),
        ChampTitle: document.querySelector("#ChampTitle"),
        gallery: document.querySelector("#gallery")
    };

    function card(Champ) {
        DOMSelectors.gallery.insertAdjacentHTML(
            "beforeend",
            `<div id="gallery">
                <h2 class="card-title">${Champ.ChampName.value}</h2>
                <img src="${Champ.ChampImage.value}" alt="Champion Image" />
                <h3>${Champ.ChampTitle.value}</h3>
            </div>`
        );
    };

    DOMSelectors.form.addEventListener("submit", function(event) {
        event.preventDefault();
        card(DOMSelectors);
    });
