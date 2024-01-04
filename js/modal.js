const modal = document.querySelector('.backdrop');
const headerModalBtnOpen = document.querySelector('.header__button');
const heroModalBtnOpen = document.querySelector('.hero-section__button');
const modalBtnClose = document.querySelector('.modal-btn-close');

const toggleModal = () => modal.classList.toggle('is-hidden');

headerModalBtnOpen.addEventListener('click', toggleModal);
heroModalBtnOpen.addEventListener('click', toggleModal);
modalBtnClose.addEventListener('click', toggleModal);
