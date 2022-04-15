const iconMenu = document.getElementById("iconMenu");
const menu = document.getElementById("menuContainer");
const closeIcon = document.getElementById("closeMenu");

function noScroll() {
  window.scrollTo(0.0);
}

const deployMenu = () => {
  if (menu.classList.contains("off")) {
    menu.classList.replace("off", "on");
  }
};

const closeMenu = () => {
  if (menu.classList.contains("on")) {
    menu.classList.replace("on", "off");
  }
};

const preventScroll = (e) => {
  e.preventDefault();
  e.stopPropagation();

  return false;
};

iconMenu.addEventListener("click", deployMenu);
closeIcon.addEventListener("click", closeMenu);
menu.addEventListener("wheel", preventScroll, { passive: false });
