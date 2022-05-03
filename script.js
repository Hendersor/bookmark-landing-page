const iconMenu = document.getElementById("iconMenu");
const menu = document.getElementById("menuContainer");
const closeIcon = document.getElementById("closeMenu");
const featuresContainer = document.getElementById("featuresContainer");
const allFeatures = document.querySelectorAll(".mainFeatureContainer");
const allQuestions = document.getElementById("allQuestions");
const questions = document.querySelectorAll(".questionContainer");
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
    element.classList.add("animation");
  }
};

featuresContainer.addEventListener("click", deployFeature);
const allArrows = document.querySelectorAll(".question img");

questions.forEach((question) => {
  const btn = question.querySelector(".question img");

  btn.addEventListener("click", (e) => {
    questions.forEach((rmv) => {
      if (rmv != question) {
        rmv.classList.remove("showText");
      }
    });

    allArrows.forEach((icn) => {
      if (icn != btn) {
        icn.classList.remove("rotate");
      }
    });

    e.target.classList.toggle("rotate");
    question.classList.toggle("showText");
  });
});
