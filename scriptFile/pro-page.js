let sideBar = document.querySelector(".side-bar");
let open = document.querySelector(".openMenu")

function closeMenu(){
  sideBar.style.display = "none"
  open.style.display = "block"
}

function openMenu(){
  sideBar.style.display = "block"
  open.style.display = "none"
}