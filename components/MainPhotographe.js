import { getPhotographById, getmedias, getMediaById } from "utils/Api.js";
import { Dropdown } from "Dropdown.js";

export const MainPhotographe = (data, dataMedia) => {



  console.log(dataMedia);
  if (!dataMedia || !Array.isArray(dataMedia) || dataMedia.length === 0) {
    console.error("dataMedia est vide ou non défini !");
    return `<p>Erreur : Aucun média trouvé pour ce photographe.</p>`;
  }

  console.log(data); // Debug pour `data` aussi si nécessaire
  // console.log(dataMedia[0].image);

  let photographCard = "";

  photographCard += `

      <div class="card__photographe">
        <div class="name__location">
            <div class="name">${data.name}</div>
            <div class="location__photograph">
            <div class="town">${data.city},&nbsp</div>
            <div class="country">${data.country}</div>
          </div>
        <div class="description__photographe">${data.tagline}</div>
        </div>
        <div class="btn__contact">
        <button class="btn__contact">Contactez-moi</button>
        </div>
        <div class="picture__photographe">
        <img class="picture__item" src="/assets/images/photographers/thumbnails/${data.portrait}" alt="">
        </div>
      </div>


      
      <div class="filter">
        <p class="text__filter">Trier par</p>
        <div class="block__filter">
            <div class="block__popular">
                    <a class="link__filter" href="#">Popularité</a>
                        <i class="fa-solid fa-chevron-down chevron__down"></i>
                        <i class="fa-solid fa-chevron-up chevron__up"></i>
            </div>
            <hr>
                <div class="block__date">
                        <a class="link__filter" href="#">Date</a>
                </div>
            <hr>
                <div class="block__titre">
                        <a class="link__filter" href="#">Titre</a>
                </div>
        </div>
    </div>`;


  let photographeGrid = "";

  dataMedia.forEach((element) => {
    if (element.video) {
      photographeGrid += `
        <div class="card__small__video">
          <video poster="/assets/images/photographers/samplePhotos-Small/${data.name}/${element.image}" autoplay muted loop>
            <source class="video__content" src="/assets/images/photographers/samplePhotos-Small/${data.name}/${element.video}" type="video/mp4">
            <source class="video__content" src="/assets/images/photographers/samplePhotos-Small/${data.name}/${element.video.replace('.mp4', '.webm')}" type="video/webm">
            Votre navigateur ne supporte pas la vidéo.
          </video>
           <div class="block__legend">
            <div class="picture__legend">${element.title}</div>
            <div class="like__block">
              <div class="number__like">${element.likes}</div>
              <div class="like__image"><i class="fa-solid fa-heart heart"></i></div>
            </div>
          </div>
        </div>
      `;
    } else {
      photographeGrid += `
        <div class="card__small__picture">
          <img
            src="/assets/images/photographers/samplePhotos-Small/${data.name}/${element.image}"
            alt="${element.title}"
            class="picture__small__item"
          />
          <div class="block__legend">
            <div class="picture__legend">${element.title}</div>
            <div class="like__block">
              <div class="number__like">${element.likes}</div>
              <div class="like__image"><i class="fa-solid fa-heart heart"></i></div>
            </div>
          </div>
        </div>
      `;
    }
  });

    return `
   
         <main class="main">
    
         ${photographCard}
        
          <div class="grid__content">

            <div class="photos__small__block">
              ${photographeGrid}
            </div>
          </div>

    
          </main>
    
      
    
    
    `;



};

export const filterUse = () => {
  const blockFilter = document.querySelector(".block__filter");
  const filterPopular = document.querySelector(".block__popular");
  const filterDate = document.querySelector(".block__date");
  const filterTitle = document.querySelector(".block__title");
  const chevronDown = document.querySelector(".chevron__down");
  const chevronUp = document.querySelector(".chevron__up");
  const dropdown = document.querySelector(".dropdown__content");

  // Ouverture du dropdown
  chevronDown.addEventListener("click", function () {
    console.log("click chevron down");
    dropdown.classList.add("show"); // Ajoute la classe "show" pour ouvrir le menu
    chevronDown.style.display = "none"; // Cache le chevron bas
    chevronUp.style.display = "block"; // Affiche le chevron haut
  });

  // Fermeture du dropdown
  chevronUp.addEventListener("click", function () {
    console.log("click chevron up");
    dropdown.classList.remove("show"); // Retire la classe "show" pour fermer le menu
    chevronDown.style.display = "block"; // Affiche le chevron bas
    chevronUp.style.display = "none"; // Cache le chevron haut
  });

  // Gestion des clics sur "Date"
  filterDate.addEventListener("click", function () {
    console.log("click sur Date");
  });

  // Gestion des clics sur "Titre"
  filterTitle.addEventListener("click", function () {
    console.log("click sur Titre");
  });
};
