import { getPhotographes, getmedias } from "../utils/Api.js";
import { Header } from "../components/Header.js";
import { Main } from "../components/Main.js";
import { Footer } from "../components/footer.js";


const displayData = (data, NewData) => {
    const body = document.querySelector('body');
    body.innerHTML = `
    ${Header()}
     <div class="container">

    
    ${Main(data, NewData)}
   

    
    
    
        </div>
    ${Footer()}

    
    `;


}




(async () => {
   


    // Récupération des photographes
    const data = await getPhotographes();
    const NewData = await getmedias();
   

    displayData(data, NewData);
    


})();