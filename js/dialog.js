const openDialogBtn = document.getElementById("open-dialog");
const closeDialogBtn = document.querySelector(".close");
const dialog = document.getElementById("my-dialog");

openDialogBtn.addEventListener("click", () => {
  dialog.showModal();
});

closeDialogBtn.addEventListener("click", () => {
  dialog.close();
  
});
