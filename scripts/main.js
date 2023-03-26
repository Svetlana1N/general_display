const buttons = document.getElementsByClassName('modal_button');
for(let button of buttons){
    button.addEventListener('click', openModal);
};
const modalContainer = document.getElementById('modal-container');
modalContainer.addEventListener('click', closeModal);



function openModal() {
    const el = document.getElementById('modal-container');
   // const classes = el.classList;
    el.classList.add('active');
}


function closeModal(event) {
    if (event.target.id == 'modal-container'){
        if(!modalContainer.classList.contains('active')) return;
        modalContainer.classList.remove('active');
    }
    
}