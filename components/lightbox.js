import { getPhotographById, getmedias, getMediaById } from "../utils/Api.js";

// Fonction pour créer la Lightbox
export const createLightbox = (data, dataMedia) => {


  console.log("Création de la Lightbox...");

  const lightboxHTML = `
  <div class="lightbox hidden">
    <div class="lightbox__content">
      <div class="content"></div> <!-- Conteneur dynamique -->
      <button class="lightbox__close">X</button>
      <button class="lightbox__prev">❮</button>
      <button class="lightbox__next">❯</button>
    </div>
  </div>
`;
  document.body.insertAdjacentHTML("beforeend", lightboxHTML);
  console.log("Lightbox injectée dans le DOM :", document.querySelector(".lightbox"));
};

// Fonction pour activer les événements de la Lightbox
export const enableLightbox = (dataMedia) => {
  console.log("Activation des événements de la Lightbox...");

  const lightbox = document.querySelector(".lightbox");
  const lightboxImage = document.querySelector(".lightbox__image");
  const closeBtn = document.querySelector(".lightbox__close");
  const prevBtn = document.querySelector(".lightbox__prev");
  const nextBtn = document.querySelector(".lightbox__next");

  let currentImageIndex = 0;

  // Fonction pour ouvrir la Lightbox
  function openLightbox(index) {
    const media = dataMedia[index];
    if (!media) {
      console.error(`Pas de média disponible pour l'index ${index}`);
      return;
    }
  
    const lightboxContent = document.querySelector(".lightbox .content");
  
    // Charger une image ou une vidéo selon le type
    if (media.image) {
      lightboxContent.innerHTML = `
        <img src="/assets/images/photographers/samplePhotos-Small/${media.image}" alt="${media.title || "Image"}" />
      `;
    } else if (media.video) {
      lightboxContent.innerHTML = `
        <video controls autoplay muted loop>
          <source src="/assets/videos/${media.video}" type="video/mp4" />
          Votre navigateur ne supporte pas la vidéo.
        </video>
      `;
    } else {
      console.error("Type de média inconnu");
    }
  
    // Afficher la Lightbox
    document.querySelector(".lightbox").classList.remove("hidden");
  }
  

  // Fonction pour fermer la Lightbox
  const closeLightbox = () => {
    console.log("Fermeture de la Lightbox");
    lightbox.classList.add("hidden"); // Cacher la lightbox
    lightbox.classList.remove("visible");
  };

  // Fonction pour afficher l'image précédente
  const showPrevImage = () => {
    currentImageIndex = (currentImageIndex - 1 + dataMedia.length) % dataMedia.length;
    openLightbox(currentImageIndex);
  };

  // Fonction pour afficher l'image suivante
  const showNextImage = () => {
    currentImageIndex = (currentImageIndex + 1) % dataMedia.length;
    openLightbox(currentImageIndex);
  };

  // Ajout des événements sur les boutons de la Lightbox
  closeBtn.addEventListener("click", closeLightbox);
  prevBtn.addEventListener("click", showPrevImage);
  nextBtn.addEventListener("click", showNextImage);

  // Ajouter un événement pour fermer la lightbox en cliquant à l'extérieur
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      closeLightbox();
      console.log("Lightbox fermée en cliquant à l'extérieur");
    }
  });

  // Ajouter un événement pour chaque vignette
  const mediaElements = document.querySelectorAll(".picture__small__item, .card__small__video");
  mediaElements.forEach((mediaElement, index) => {
    mediaElement.addEventListener("click", () => openLightbox(index));
    console.log(`Événement ajouté à l'élément ${index}`);
  });
  

  console.log("Événements de la Lightbox activés");
};