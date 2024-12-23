import { getPhotographById, getmedias, getMediaById } from "../utils/Api.js";

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
             <p class="text__popular">Popularité</p>
                  
            <i class="fa-solid fa-chevron-down"></i>

      </div>
      <div class="block__date">
             <p class="text__popular">Date</p>
      </div>
      <div class="block__date">
             <p class="text__popular">Titre</p>
      </div>

      
      </div>
      </div>`;



  let photographeGrid = "";

  dataMedia.forEach((element) => {
    if (element.video) {
      photographeGrid += `
        <div class="card__small__video">
          <video controls poster="/assets/images/photographers/samplePhotos-Small/${data.name}/${element.image}" autoplay muted loop>
            <source class="video__content" src="/assets/images/photographers/samplePhotos-Small/${data.name}/${element.video}" type="video/mp4">
            <source class="video__content" src="/assets/images/photographers/samplePhotos-Small/${data.name}/${element.video.replace('.mp4', '.webm')}" type="video/webm">
            Votre navigateur ne supporte pas la vidéo.
          </video>
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
