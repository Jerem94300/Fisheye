import { Header } from "./Header.js";
import { getPhotographById, getMediaById } from "../utils/Api.js";
import { MainPhotographe } from "./MainPhotographe.js";
import { createLightbox,enableLightbox } from "./lightbox.js";
import { Modal, modalIn } from "./modal.js";
import { filterUse } from "./MainPhotographe.js";
import { Footer } from "./footer.js";


export const displayData = (data, dataMedia) => {
  const body = document.querySelector("body");

  body.innerHTML = `
             ${Modal(data)}


        <div class="container">

     ${Header()}
     ${MainPhotographe(data, dataMedia)}
     ${Footer()}

        </div>


  
    `;
    modalIn(data);
    createLightbox(data, dataMedia)
    enableLightbox(data, dataMedia)
    filterUse();
   


};

(async () => {
  // recup des photographes
  const data = await getPhotographById();

  // recup des medias
  const dataMedia = await getMediaById();

  displayData(data, dataMedia);
})();
