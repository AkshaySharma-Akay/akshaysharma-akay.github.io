// ==================================================
let about = document.getElementById("about");
let experience = document.getElementById("experience");
let projects = document.getElementById("projects");
let contact = document.getElementById("contact");
let btnAbout = document.getElementById("btn-about");
let btnExperience = document.getElementById("btn-experience");
let btnProjects = document.getElementById("btn-projects");
let btnContact = document.getElementById("btn-contact");

let menuElements = [about, experience, projects, contact];
// ==============================================================
function change(i){
    console.log("called for index ", i);
    menuElements.forEach((menuItem, index) => {
        if(index !== i){
            menuItem.style.display = "none";
        } else {
            menuItem.style.display = "flex";
        }
    });
}

// ===================================================
btnAbout.addEventListener("click", ()=>{change(0)});
btnExperience.addEventListener("click", ()=>{change(1)});
btnProjects.addEventListener("click", ()=>{change(2);});
btnContact.addEventListener("click", ()=>{change(3);});