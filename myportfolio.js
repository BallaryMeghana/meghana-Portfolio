// MOBILE MENU

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

// TYPING EFFECT

const roles = [
    "Java Full Stack Developer",
    "Spring Boot Developer",
    "React.js Developer",
    "Software Engineer"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

const typingText = document.getElementById("typing-text");

function typeEffect() {

    const current = roles[roleIndex];

    if(!deleting){

        typingText.textContent =
        current.substring(0,charIndex+1);

        charIndex++;

        if(charIndex === current.length){

            deleting = true;

            setTimeout(typeEffect,1500);

            return;
        }

    }else{

        typingText.textContent =
        current.substring(0,charIndex-1);

        charIndex--;

        if(charIndex === 0){

            deleting = false;

            roleIndex++;

            if(roleIndex >= roles.length){
                roleIndex = 0;
            }
        }
    }

    setTimeout(typeEffect,deleting ? 60 : 120);
}

typeEffect();

// REVEAL ANIMATION

const sections = document.querySelectorAll("section");

sections.forEach(section => {
    section.classList.add("reveal");
});

function revealSections(){

    sections.forEach(section => {

        const top =
        section.getBoundingClientRect().top;

        if(top < window.innerHeight - 100){

            section.classList.add("active");
        }
    });
}

window.addEventListener("scroll",revealSections);

revealSections();

// NAVBAR SHADOW

window.addEventListener("scroll",()=>{

    const navbar =
    document.querySelector(".navbar");

    if(window.scrollY > 50){

        navbar.style.boxShadow =
        "0 4px 20px rgba(0,0,0,0.4)";

    }else{

        navbar.style.boxShadow = "none";
    }
});

// SCROLL TOP BUTTON

const topBtn =
document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

    if(window.scrollY > 300){

        topBtn.style.display = "block";

    }else{

        topBtn.style.display = "none";
    }
});

topBtn.addEventListener("click",()=>{

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
});