const btnConfig = document.getElementsByClassName("config-button")[0];
const modalBackdrop = document.getElementsByClassName("modal-backdrop")[0];
const closeButton = document.getElementsByClassName("modal-close-button")[0];

// console.log(window.innerWidth);

btnConfig.onclick = function () {
  modalBackdrop.style.display = "block";
  btnConfig.classList.add("rotate360deg");
  disableScroll();
};

closeButton.onclick = function () {
  modalBackdrop.style.display = "none";
  btnConfig.classList.remove("rotate360deg");
  enableScroll();
};

window.onclick = function (event) {
  if (event.target == modalBackdrop) {
    modalBackdrop.style.display = "none";
    btnConfig.classList.remove("rotate360deg");
    enableScroll();
  }
};

function disableScroll() {
  if (window.innerWidth <= 600) {
    /* Scroll will only be disable if the width of the screen is less or equal than 600px.
    600 was choosen because it is defined in the modal-backdrop style. */
    document.body.classList.add("stop-scrolling");
  }
}

function enableScroll() {
  document.body.classList.remove("stop-scrolling");
}
