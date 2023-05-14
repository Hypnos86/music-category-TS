// <li>
// <label for="band-1">Metallica</label>
// <input id="band-1" type="checkbox" name="Metallica">
// </li>
interface Band {
    name: string
    liked: boolean
}


const bandNameInput: HTMLLIElement = document.querySelector("#name");

const addBandButton: HTMLElement = document.querySelector("button");

const bandsContainerElement: HTMLElement = document.querySelector(".bands"); // klasa dla <ul>

const bands: Band[] = [{ name: "Metallica", liked: false },
 { name: "Nirvana", liked: false },
{ name: "Peja", liked: true },

];

const renderBands = () => {
    // <li>
    // <label for="band-1">Metallica</label>
    // <input id="band-1" type="checkbox" name="Metallica">
    // </li>

    bandsContainerElement.innerText = "";
    bands.forEach((band, index) => {
        const bandElement: HTMLElement = document.createElement("li");
        const id: string = `band-${index}`;

        const labelElement: HTMLLabelElement = document.createElement("label");
        labelElement.innerText = band.name;
        labelElement.setAttribute("for", id);

        const checkboxElement: HTMLInputElement = document.createElement("input");
        checkboxElement.type = "checkbox";
        checkboxElement.name = band.name;
        checkboxElement.id = id;
        checkboxElement.checked = band.liked;
        checkboxElement.addEventListener("change", () => {
            band.liked = !band.liked;
        });

        // bandElement.innerText = band.name;
        // bandsContainerElement.appendChild(bandElement);
        bandElement.appendChild(labelElement);
        bandElement.appendChild(checkboxElement);

        bandsContainerElement.appendChild(bandElement);
    });

};

const addBand = (band: Band) => {
    bands.push(band);
};

addBandButton.addEventListener("click", (event: Event) => {
    event.preventDefault();
    bands.push({name: String(bandNameInput.value), liked: false});
    renderBands();
});


renderBands();