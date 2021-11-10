// select modal-btn,modal-overlay,close-btn
const modalBtn = document.querySelector(".modal-btn");
const closelBtn = document.querySelector(".close-btn");
const modalOverlay = document.querySelector(".modal-overlay");

// when user clicks modal-btn add .open-modal to modal-overlay
modalBtn.addEventListener('click',function(){
    modalOverlay.classList.add("open-modal");
});

// when user clicks close-btn remove .open-modal from modal-overlay
closelBtn.addEventListener('click',function(){
    modalOverlay.classList.remove("open-modal");

});
