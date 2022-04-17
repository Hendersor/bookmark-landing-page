const iconMenu = document.getElementById("iconMenu");
const menu = document.getElementById("menuContainer");
const closeIcon = document.getElementById("closeMenu");
const featuresContainer = document.getElementById("featuresContainer");
const allFeaturesImg = document.querySelectorAll(".featureImage");
const allFeaturesInfo = document.querySelectorAll(".featureInfo");

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

// const deployFeatures = (e) => {
//   const id = e.target.id;
//   if (id) {
//     allFeaturesImg.forEach((img) => {
//       img.classList.add("off");
//     });

//     allFeaturesInfo.forEach((info) => {
//       info.classList.add("off");
//     });

//     const infoImage = document.getElementById(id);
//     console.log(infoImage.classList);
//     infoImage.classList.remove("off");
//   }
// };
// featuresContainer.addEventListener("click", deployFeatures);
