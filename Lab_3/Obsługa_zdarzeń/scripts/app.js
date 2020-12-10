document.addEventListener("DOMContentLoaded", () => {

    const txtArea = document.querySelector("textarea");
    txtArea.addEventListener("focus", () => console.log("focus ->  ➡🔤 wszedłeś do pola tekstowego"));
    txtArea.addEventListener("blur", () => console.log("blur -> 🔤➡ wyszedłeś z pola tekstowego"));
    txtArea.addEventListener("copy", () => console.log("copy -> 🗒 skopiowałeś coś z pola tekstowego"));
    txtArea.addEventListener("cut", () => console.log("cut -> ✂ wyciąłeś coś z pola tekstowego"));
    txtArea.addEventListener("paste", () => console.log("paste -> 📝 wkleiłeś coś do pola tekstowego"));

    genGoogleLink = function (str) {
        const google = "https://www.google.com/search?q=";
        str = str.replace(/ /g, "+");
        return google + str;
    }

    const btn = document.querySelector("button");
    btn.addEventListener("click", () => {
        console.log("click -> wyszukałeś frazę wpisaną w polu tekstowym 🕵✔");
        window.open(genGoogleLink(txtArea.value), '_blank');
    });

    const img = document.querySelector("img");

    playWithCat = function () {
        console.log("dblclick -> podrapałeś kotka 😻");
        img.removeEventListener("dblclick", playWithCat);
        console.log("✖ usunięto event dblclick ✖");
        console.log("*kotek już nie ma ochoty na pieszczoty*");
    }

    img.addEventListener("dblclick", playWithCat);

    const sel = document.querySelector("select");
    sel.addEventListener("change", () => console.log("change -> wybrałeś " + sel.children[sel.value].innerText));

    const radios = document.querySelectorAll(".form-check-input");
    radios.forEach(el => {
        if (el.id === "pepsiRadioButton") {
            el.addEventListener("input", () => console.log("input -> pepsi 🥤 kupisz w KFC 🍗"));
        } else {

            el.addEventListener("input", () => console.log("input -> colę 🥤 kupisz w Mc Donalds 🍟"));
        }
    })

    document.addEventListener("keyup", e => {
        switch (e.key) {
            case "ArrowUp":
                console.log("keyup -> ⬆");
                break;
            case "ArrowDown":
                console.log("keyup -> ⬇");
                break;
            case "ArrowLeft":
                console.log("keyup -> ⬅");
                break;
            case "ArrowRight":
                console.log("keyup -> ➡");
                break;
            default:
                break;

        }
    });
});

