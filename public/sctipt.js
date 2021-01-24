const modalOverlay = document.querySelector(".modal-overlay");
const cards = document.querySelectorAll('.card');
const btnClose = document.querySelector( '.close-modal');
const iFrame = modalOverlay.querySelector('iframe');


for ( let card of cards){
  const videoId= card.getAttribute('id');

  card.addEventListener('click', function(){
    modalOverlay.classList.add('active')
    iFrame.src=`https://www.youtube.com/embed/${videoId}`
  })
}

btnClose.addEventListener( 'click', function(){
  modalOverlay.classList.remove('active')
  iFrame.src=` `
})

