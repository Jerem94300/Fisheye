
export const Modal = (data) => {
    
    return`
      <div class="modal">
      <div class="modal__header">
            <div class="modal__block__name">
                <h1 class="modal__title">Contactez-moi</h1>
                <h2 class="modal__name">${data.name}</h1>
            </div>
            <div class="cross__escape">
                <i class="fa-regular fa-circle-xmark cross__item"></i>
            </div>
        </div>



            <form action="" class="form">
            <div class="form__group">
                <label for="firstName">Prénom</label>
                <input type="text" name="firstName" class="form__control">
            </div>
            <div class="form__group">
                <label for="lastName">Nom</label>
                <input type="text" name="firstName" class="form__control">
            </div>
            <div class="form__group">
                <label for="email">Email</label>
                <input type="email" name="email" class="form__control">
            </div>
            <div class="form__group">
                <label for="message">Votre message</label>
                <textarea name="message" id="textarea" class="form__control"></textarea>
            </div>
            <div class="button__send">
            <a href="photographe.html" class="link__send">Envoyer</a>
            </div>
        
            </form>
        </div>


      
    
    `
}

export const modalIn = () => {

    const btnContactMe = document.querySelector('.btn__contact');
    
    const modal = document.querySelector('.modal');
    modal.style.display = "none"

    btnContactMe.addEventListener('click',(event) => {
        event.preventDefault();
        console.log('click');

        modal.classList.add('modalIn');
        modal.style.display = "flex"

        


    })

    const cross = document.querySelector('.cross__escape');

    cross.addEventListener('click',() => {
        modal.style.display = "none"
    })






}