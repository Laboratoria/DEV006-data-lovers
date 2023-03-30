function openModal(id) {
  document.getElementById(id).classList.add('open');
  document.body.classList.add("modal-open");
}
// close currently open modal
function closeModal() {
  document.querySelector(".modal").classList.remove('open');
  document.body.classList.remove("modal-open");
}
window.addEventListener("load", function() {
// close modas on background click
  document.querySelector(".close-modal").addEventListener("click", () => {
    closeModal();
  });
  document.getElementById("1a").addEventListener("click", () => {
    openModal("history-modal");
  });
});