'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnShowModal = document.querySelectorAll('.show-modal');

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnShowModal.length; i++)
  btnShowModal[i].addEventListener('click', openModal);

overlay.addEventListener('click', closeModal);

btnCloseModal.addEventListener('click', closeModal);

/* here keyboard events are so called global events because 
      they do not happen on one specific element
    (in simple words esc key will not only work on any specific
       element. like: user have to be on a specific element
        then click esc to close the window, we doesn't want
         that, right ? so key event will happen on document so 
         no matter where they happen on the page they will always 
         trigger the event handler. ) */
document.addEventListener('keydown', function (e) {
  /* Information about which key is pressed will be stored in the event 
      that is going to occur as soon as any key is pressed 
      and any time an event like this occurs JavaScript does in fact 
      generate an object and that object contains all the information 
      about the event itself */
  /*  REMEMBER :  we do not call the event listener function we only define here with an e parameter 
                  that's why we say JavaScript call this function when a key down event happens 
                  and when you do so please pass an event object as an argument. */

  // console.log(e.key);

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
