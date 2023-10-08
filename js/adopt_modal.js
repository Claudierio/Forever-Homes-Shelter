
var adopt_modal = document.getElementById("adopt_modal");
var Adopt_Modal = document.querySelector(".Adopt_Modal");

  function openAdoptModal() {
    Adopt_Modal.style.display = "block";
    Adopt_Modal.classList.add("custom-modal-enter");
}

function closeAdoptModal() {
  Adopt_Modal.classList.remove("custom-modal-enter");
  Adopt_Modal.classList.add("custom-modal-exit");

  setTimeout(function () {
    adopt_modal.style.display = "none";
    Adopt_Modal.classList.remove("custom-modal-exit");
  }, 300);
}


