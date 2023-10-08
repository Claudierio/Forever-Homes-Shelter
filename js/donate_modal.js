var donate_modal = document.getElementById("donate_modal");
var Donate_Modal = document.querySelector(".Donate_Modal");

  function openModal() {
    donate_modal.style.display = "block";
    Donate_Modal.classList.add("custom-modal-enter");
}

function closeModal() {
  Donate_Modal.classList.remove("custom-modal-enter");
  Donate_Modal.classList.add("custom-modal-exit");

  setTimeout(function () {
    donate_modal.style.display = "none";
    Donate_Modal.classList.remove("custom-modal-exit");
  }, 300);
}


