function displayEducation() {
    if (document.getElementById("Education-Map").style.display == "none") {
        document.getElementById("Education-Map").style.display = "grid";
        document.getElementById("skills-container").style.display = "none";
    }
    else {
        document.getElementById("Education-Map").style.display = "none";
        document.getElementById("skills-container").style.display = "none";
    }
    
}

function displaySkills() {
    if (document.getElementById("skills-container").style.display == "none") {
    document.getElementById("Education-Map").style.display = "none";
    document.getElementById("skills-container").style.display = "block";
    }
    else {
        document.getElementById("Education-Map").style.display = "none";
        document.getElementById("skills-container").style.display = "none";
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