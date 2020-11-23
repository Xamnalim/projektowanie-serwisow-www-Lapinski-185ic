const header = document.querySelector("header");
header.classList.replace("bg-secondary", "bg-primary");
header.classList.remove("text-dark");
header.style.color = "white";

const newArticle = document.createElement("article");
newArticle.innerHTML = `
<div class = "row">
    <div class="col"><h2>Artykuł dodany przez JS</h2></div>
</div>
<div class = "row">
    <div class="col">Powstał on w wyniku działania kodu zapisanego w pliku main.js. 
    Najpierw został utworzony element "article". Jego wnętrze zostało uzupełnione poprzez metodę innerHTML. 
    Poza tekstem który właśnie czytasz zostały dodane również dwa wiersze (div class="row") 
    z jedną kolumną każdy (div class="col"). Pierwszy zawiera tytuł artykułu którego właśnie czytasz, a w drugim jego treść. 
    Korzystając z okazji dostępu do elementu wstawiłem mu również klasę "text-justify" - 
    tak żeby przyjemniej się go czytało. Po dokonaniu wszystkich zmian dodałem go jako kolejne dziecko kontenera.
    </div>
</div>`
const container = document.querySelector(".container")
container.appendChild(newArticle);

const clonedArticle = newArticle.cloneNode(true);
clonedArticle.querySelector("h2").innerText = "Sklonowany artykuł";
container.appendChild(clonedArticle);

const allPElements = document.querySelectorAll(".col");
allPElements[1].lastElementChild.remove();

const galleryTitle = document.querySelectorAll("h2")[1];
galleryTitle.insertAdjacentHTML("afterbegin", "<i>Animowana </i>");

const galleryDescription = document.createElement("span");
galleryDescription.innerText = "obrazek zmienia się co 3 sek"; 
galleryTitle.insertAdjacentElement("afterend", galleryDescription);

const articles = document.querySelectorAll("article");
for(const article of articles){
    article.classList.add("text-justify");
}
articles[0].removeChild(articles[0].querySelector("#toRemove"));


const footer = document.createElement("footer");
footer.textContent = "Maksymilian Łapiński 185IC_B2 21698";
footer.style.setProperty("background-color", "#0275D8");
footer.style.setProperty("color", "white");
footer.style.setProperty("text-align", "center");

const text = document.createTextNode("©");
footer.append(text);

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })
footer.setAttribute("data-toggle", "tooltip");
footer.setAttribute("data-placement", "top");
footer.setAttribute("title", "Wszelkie prawa zastrzeżone");
container.appendChild(footer);

//prosta galeria podmieniajaca parametr src znacznika img
const animatedGallery = () => {
    "use strict"
    let imgNum = 0;
    const img = document.querySelector("#gallery-img");
    
    return () => {
        if(imgNum == 5) imgNum = -1;
        img.setAttribute("src", `images/img_${++imgNum}.jpg`);
    }
}

changeGalleryImg = animatedGallery();
const galleryInterval = setInterval(changeGalleryImg, 3000);



