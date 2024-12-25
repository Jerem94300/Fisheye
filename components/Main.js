import { getPhotographById, getMediaById } from "/utils/Api.js";

export const Main = (data, NewData) => {
  // console.log(data);
  // console.log(NewData.media);


 
  
  
  

  let cards = "";
  

  for (const key in data) {


    cards += `


    <div class="card__content">
        <a href="photographe.html?id=${data[key].id}" class="photographe__link" >
            <img src="assets/images/photographers/thumbnails/${data[key].portrait}" alt="" class="card__picture"></a>
          <h2 class="title__h2">${data[key].name}</h2>
          <div class="location">
            <p class="town">${data[key].city}</p>
            <p class="country">${data[key].country}</p>
          </div>
          <div class="description">${data[key].tagline}</div>
          <div class="price">${data[key].price}/jour</div>
     </div>
    
    `;
    
    
  }

 


  return `


           <main class="main">
            <div class="card__grid">


           ${cards}
          
            </div>
            </main>


    `;
};
