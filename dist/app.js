const bandNameInput = document.querySelector("#name");
const addBandButton = document.querySelector("button");
const bandsContainerElement = document.querySelector(".bands"); // klasa dla <ul>
const bands = [{ name: "Metallica", liked: false },
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
        const bandElement = document.createElement("li");
        const id = `band-${index}`;
        const labelElement = document.createElement("label");
        labelElement.innerText = band.name;
        labelElement.setAttribute("for", id);
        const checkboxElement = document.createElement("input");
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
const addBand = (band) => {
    bands.push(band);
};
addBandButton.addEventListener("click", (event) => {
    event.preventDefault();
    bands.push({ name: String(bandNameInput.value), liked: false });
    renderBands();
});
renderBands();
