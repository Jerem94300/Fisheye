const BASE_URL = "data/photographers.json";

export const getData = async () => {
  try {
    const response = await fetch(BASE_URL);

    return response.json();
  } catch (error) {
    return new Error("Problème de récupération de data");
  }
};

// récupération des photographes
export const getPhotographes = async () => {
  const data = await getData();
  return data.photographers;
};

// recupération du photographe par id via URL

export const getPhotographById = async () => {
  // console.log(`getPhotographById`);

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  // récupération de l'id dans  URL

  const id = urlParams.get("id");
  const photographes = await getPhotographes();

  // filtre du resultat

  const data = photographes.filter((photographe) => {
    if (photographe.id == id) {
      return photographe;
    }

    // console.log(photographe.id);
  });

  return data[0];
};

// ------------medias-------------------------

// récupération des media
export const getmedias = async () => {
  const Newdata = await getData();

  return Newdata.media;
};

// for (const key in NewData) {

//     NewData[key]= JSON.parse(NewData[key]);
//   }

export const getMediaById = async () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  // recupération id dans URL

  const id = urlParams.get("id");
  const media = await getmedias();

  // console.log(media);

  // filtre id Media

  const dataMedia = media.filter((media) => {
    if (media.photographerId == id) {
      return media;
    }
  });


  return dataMedia;
};

