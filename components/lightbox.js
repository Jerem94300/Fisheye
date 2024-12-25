// Importation des modules
import { getPhotographById, getMediaById } from "utils/Api.js";

// Fonction pour créer la Lightbox
export const createLightbox = (data, dataMedia) => {
  console.log("Création de la Lightbox...");

  const lightboxHTML = `
  <div class="lightbox hidden">
    <div class="lightbox__content">
      <div class="content"></div>
      <img src="" alt="Image agrandie" class="lightbox__image hidden" />
      <video controls class="lightbox__video hidden"></video>
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
export const enableLightbox = (dataMedia, data) => {
  console.log("Activation des événements de la Lightbox...");

  const lightbox = document.querySelector(".lightbox");
  const lightboxImage = document.querySelector(".lightbox__image");
  const lightboxVideo = document.querySelector(".lightbox__video");
  const closeBtn = document.querySelector(".lightbox__close");
  const prevBtn = document.querySelector(".lightbox__prev");
  const nextBtn = document.querySelector(".lightbox__next");

  let currentMediaIndex = 0;

  // Sélection des médias dans la galerie
  const medias = document.querySelectorAll(".card__small__picture img, .card__small__video video");
  if (medias.length === 0) {
    console.error("Aucun média trouvé pour la Lightbox.");
    return;
  }
  console.log(`Nombre de médias détectés : ${medias.length}`);

  // Gestion du clic sur les médias pour ouvrir la Lightbox
  medias.forEach((media, index) => {
    media.addEventListener("click", (e) => {
      const src = e.target.src || e.target.querySelector("source")?.src;
      console.log("Média cliqué :", e.target, "Source :", src);
      if (e.target.tagName === "IMG") {
        openLightbox(src, "image");
      } else if (e.target.tagName === "VIDEO") {
        openLightbox(src, "video");
      }
      currentMediaIndex = index;
    });
  });

  // Fonction pour ouvrir la Lightbox
  const openLightbox = (src, type) => {
    if (!src) {
      console.error("Source du média non valide :", src);
      return;
    }

    console.log("Ouverture de la Lightbox avec le média :", src, "Type :", type);
    if (type === "image") {
      lightboxImage.src = src;
      lightboxImage.classList.remove("hidden");
      lightboxVideo.classList.add("hidden");
      lightboxVideo.src = "";
    } else if (type === "video") {
      lightboxVideo.src = src;
      lightboxVideo.classList.remove("hidden");
      lightboxImage.classList.add("hidden");
      lightboxImage.src = "";
    }

    lightbox.classList.remove("hidden");
    lightbox.classList.add("visible");
  };

  // Fermeture de la Lightbox
  closeBtn.addEventListener("click", () => {
    lightbox.classList.remove("visible");
    lightbox.classList.add("hidden");
    lightboxImage.src = "";
    lightboxVideo.src = "";
    console.log("Fermeture de la Lightbox.");
  });

  // Navigation : Média précédent
  prevBtn.addEventListener("click", () => {
    currentMediaIndex = (currentMediaIndex - 1 + medias.length) % medias.length;
    const media = medias[currentMediaIndex];
    const src = media.src || media.querySelector("source")?.src;
    if (media.tagName === "IMG") {
      openLightbox(src, "image");
    } else if (media.tagName === "VIDEO") {
      openLightbox(src, "video");
    }
    console.log("Média précédent affiché :", media);
  });

  // Navigation : Média suivant
  nextBtn.addEventListener("click", () => {
    currentMediaIndex = (currentMediaIndex + 1) % medias.length;
    const media = medias[currentMediaIndex];
    const src = media.src || media.querySelector("source")?.src;
    if (media.tagName === "IMG") {
      openLightbox(src, "image");
    } else if (media.tagName === "VIDEO") {
      openLightbox(src, "video");
    }
    console.log("Média suivant affiché :", media);
  });
};

// Exemple d'intégration avec les données dynamiques
(async () => {
  const data = await getPhotographById();
  const dataMedia = await getMediaById();
  createLightbox(data, dataMedia);
  enableLightbox(dataMedia, data);
})();
