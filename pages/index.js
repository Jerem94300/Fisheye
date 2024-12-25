import { getPhotographes, getmedias } from "utils/Api.js";
import { Header } from "components/Header.js";
import { Main } from "components/Main.js";


const displayData = (data, NewData) => {
    const body = document.querySelector('body');
    body.innerHTML = `
     <div class="container">

    ${Header()}
    ${Main(data, NewData)}

    
    
    
        </div>

    
    `;


}




(async () => {
   


    // Récupération des photographes
    const data = await getPhotographes();
    const NewData = await getmedias();
   

    displayData(data, NewData);
    


})();