const EDUCATION_MAP_ID = "Education-Map";
const SKILLS_CONTAINER_ID = "skills-container";

function displayEducation() {
    if (document.getElementById(EDUCATION_MAP_ID ).style.display == "none") {
        document.getElementById(EDUCATION_MAP_ID ).style.display = "grid";
        document.getElementById(SKILLS_CONTAINER_ID).style.display = "none";
    }
    else {
        document.getElementById(EDUCATION_MAP_ID ).style.display = "none";
        document.getElementById(SKILLS_CONTAINER_ID).style.display = "none";
    }
    
}

function displaySkills() {
    if (document.getElementById(SKILLS_CONTAINER_ID).style.display == "none") {
    document.getElementById(EDUCATION_MAP_ID).style.display = "none";
    document.getElementById(SKILLS_CONTAINER_ID).style.display = "block";
    }
    else {
        document.getElementById(EDUCATION_MAP_ID ).style.display = "none";
        document.getElementById(SKILLS_CONTAINER_ID).style.display = "none";
    }
}

function expandPL() {
    if (document.getElementById("programming-lang-description").style.display == "none") {
    document.getElementById("PL-IMG").src = "images/Up.png";
    document.getElementById("programming-lang-description").style.display = "grid";
    }
    else {
        document.getElementById("PL-IMG").src = "images/down.png";
        document.getElementById("programming-lang-description").style.display = "none";
    }
}

function expandOthers() {
    if ( document.getElementById("others-description").style.display == "none") {
        document.getElementById("othersIMG").src = "images/Up.png";
    document.getElementById("others-description").style.display = "grid";
    }
    else {
        document.getElementById("othersIMG").src = "images/down.png";
        document.getElementById("others-description").style.display = "none"
    }
}