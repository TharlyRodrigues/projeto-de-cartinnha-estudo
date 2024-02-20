const inputName = document.querySelector(".input_name");
const btnInput = document.querySelector(".btn_input");
const modal = document.querySelector(".modal");
const bntClose = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");

function salvaName() {
  const name = inputName.value;

  document.querySelector(".title").textContent = name;
  document.querySelector(".title2").textContent = name;
}

const verCarta = document.querySelector(".btn_input");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

verCarta.addEventListener("click", salvaName);
btnInput.addEventListener("click", openModal);
bntClose.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
