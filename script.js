const iconMenu = document.getElementById("iconMenu");
const menu = document.getElementById("menuContainer");
const closeIcon = document.getElementById("closeMenu");
const featuresContainer = document.getElementById("featuresContainer");
const allFeatures = document.querySelectorAll(".mainFeatureContainer");
const allQuestions = document.getElementById("allQuestions");
const answer = document.querySelectorAll(".answer");
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

const deployFeature = (e) => {
  const id = e.target.dataset.id;
  if (id) {
    allFeatures.forEach((feature) => {
      feature.classList.add("off");
    });
    const element = document.getElementById(id);
    element.classList.remove("off");
  }
};

featuresContainer.addEventListener("click", deployFeature);

const deployAnswer = (e) => {
  const id = e.target.dataset.id;
  if (id) {
    answer.forEach((ans) => {
      ans.classList.add("off");
    });
    const deploy = document.getElementById(id);
    deploy.classList.remove("off");
  }
};
allQuestions.addEventListener("click", deployAnswer);
