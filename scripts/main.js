var btnMobile = document.querySelector(".header__mobile");
var overlayEle = document.querySelector(".sidebar-mobile__overlay");
var closeBtn = document.querySelector(".sidebar-mobile__close");
// Handler toggle
function handleMenu() {
  var sidebarEle = document.querySelector(".sidebar-mobile");
  var open = sidebarEle.classList.contains("sidebar-mobile--open");

  if (!open) {
    sidebarEle.classList.add("sidebar-mobile--open");
    document.body.style.overflowY = "hidden";
  } else {
    sidebarEle.classList.remove("sidebar-mobile--open");
    document.body.style.overflowY = "visible";
  }
}

// Toggle on off side bar
btnMobile.addEventListener("click", () => handleMenu());
overlayEle.addEventListener("click", () => handleMenu());
closeBtn.addEventListener("click", () => handleMenu());
