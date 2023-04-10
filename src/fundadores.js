function openModal(id) {
  document.getElementById(id).classList.add("open");
  document.body.classList.add("modal-open");
}

function closeModal(id) {
  document.getElementById(id).classList.remove("open");
  document.body.classList.remove("modal-open");
}

window.addEventListener("load", function () {

  const btnsClose = document.querySelectorAll(".close-modal");

  btnsClose.forEach((btn) => {
    btn.addEventListener("click", function() {
      closeModal(btn?.parentElement?.parentElement?.id)
    });
  });

  const btnModals = document.querySelectorAll(".btn-modal");

  btnModals.forEach((btn) => {
    btn.addEventListener("click", function () {
      openModal(btn.getAttribute("modal"))
    });
  });
});
