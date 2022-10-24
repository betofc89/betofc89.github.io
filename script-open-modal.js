const btnConfig = document.getElementsByClassName("config-button")[0];
const modalBackdrop = document.getElementsByClassName("modal-backdrop")[0];
const closeButton = document.getElementsByClassName("modal-close-button")[0];

btnConfig.onclick = function () {
  modalBackdrop.style.display = "block";
  btnConfig.classList.add("rotate360deg");
};

closeButton.onclick = function () {
  modalBackdrop.style.display = "none";
  btnConfig.classList.remove("rotate360deg");
};

window.onclick = function (event) {
  if (event.target == modalBackdrop) {
    modalBackdrop.style.display = "none";
    btnConfig.classList.remove("rotate360deg");
  }
};
