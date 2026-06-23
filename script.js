const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.style.background = "#000";
    } else {
        header.style.background = "#222";
    }
});

const text = "Full Stack Developer";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 100);
    }
}

typeEffect();
function showInfo(skill){
    const info = document.getElementById("skill-info");

    if(skill === "html"){
        info.innerText = "HTML is used to create the structure of web pages.";
    }
    else if(skill === "css"){
        info.innerText = "CSS is used to style and design web pages.";
    }
    else if(skill === "js"){
        info.innerText = "JavaScript adds interactivity and dynamic behavior to websites.";
    }
    else if(skill === "react"){
        info.innerText = "React is a JavaScript library used to build user interfaces.";
    }
    else if(skill === "node"){
        info.innerText = "Node.js allows JavaScript to run on the server side.";
    }
    else if(skill === "mongodb"){
        info.innerText = "MongoDB is a NoSQL database used to store application data.";
    }
}