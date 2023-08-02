const EDUCATION_MAP_ID = "Education-Map";
const SKILLS_CONTAINER_ID = "skills-container";
const EDUCATION_TITLE_ID = "education-title";
const SKILLS_TITLE_ID = "skills-title";
const PROGR_LANG_DESC_ID = "programming-lang-description";
const OTHERS_DESC_ID = "others-description";
const educationMapDOM = document.getElementById(PROGR_LANG_DESC_ID);
const skillsContainerDOM = document.getElementById(skillsContainerDOM);

function displayEducation() {
  document.getElementById(EDUCATION_MAP_ID).style.display = "grid";
  document.getElementById(SKILLS_CONTAINER_ID).style.display = "none";
  document.getElementById(EDUCATION_TITLE_ID).style.color =
    "var(--purple-dark)";
  document.getElementById(EDUCATION_TITLE_ID).style.fontWeight = "bold";
  document.getElementById(SKILLS_TITLE_ID).style.color = "var(--purple-light)";
  document.getElementById(SKILLS_TITLE_ID).style.fontWeight = "normal";
}

function displaySkills() {
  document.getElementById(EDUCATION_MAP_ID).style.display = "none";
  document.getElementById(SKILLS_CONTAINER_ID).style.display = "block";
  document.getElementById(SKILLS_TITLE_ID).style.color = "var(--purple-dark)";
  document.getElementById(SKILLS_TITLE_ID).style.fontWeight = "bold";

  document.getElementById(EDUCATION_TITLE_ID).style.color =
    "var(--purple-light)";
  document.getElementById(EDUCATION_TITLE_ID).style.fontWeight = "normal";
}

function expandPL() {
  if (
    window.getComputedStyle(
      document.getElementById("programming-lang-description")
    ).display === "none"
  ) {
    document.getElementById("PL-IMG").src = "images/Up.png";
    document.getElementById("programming-lang-description").style.display =
      "grid";
  } else {
    document.getElementById("PL-IMG").src = "images/down.png";
    document.getElementById("programming-lang-description").style.display =
      "none";
  }
}

function expandOthers() {
  if (
    window.getComputedStyle(document.getElementById("others-description"))
      .display === "none"
  ) {
    document.getElementById("othersIMG").src = "images/Up.png";
    document.getElementById("others-description").style.display = "grid";
  } else {
    document.getElementById("othersIMG").src = "images/down.png";
    document.getElementById("others-description").style.display = "none";
  }
}
