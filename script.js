const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.style.background = "#000";
    } else {
        header.style.background = "#222";
    }
});
function showIntro() {
  const introText = document.getElementById("introText");
  introText.classList.toggle("hidden");
}
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
        info.innerText = "HTML is a markup language used to structure content on web pages. It uses tags (like <div>, <p>, <img>) to define elements such as headings, paragraphs, images, links, and forms, which browsers render as visible pages.";
    }
    else if(skill === "css"){
        info.innerText = " CSS is a stylesheet language used to style HTML elements — controlling colors, fonts, spacing, and layout. While HTML provides structure, CSS makes the website visually appealing and responsive across devices.";
    }
    else if(skill === "js"){
        info.innerText = "JavaScript a programming language that adds interactivity to web pages, enabling features like button clicks, form validation, and animations. It runs directly in the browser and can manipulate the DOM; it's also used on the backend via Node.js.";
    }
    else if(skill === "react"){
        info.innerText = " React is a JavaScript library developed by Meta (Facebook) for building user interfaces. It follows a component-based architecture, breaking the UI into small, reusable pieces, and uses a Virtual DOM for fast, efficient rendering.";
    }
    else if(skill === "node"){
        info.innerText = "Node is a JavaScript runtime environment that allows JavaScript to run outside the browser, typically on the server side. Built on Chrome's V8 engine, it's non-blocking and event-driven, enabling developers to build backend servers, APIs, and database-connected applications using JavaScript.";
    }
    else if(skill === "mongodb"){
        info.innerText = " Mongodb is a NoSQL database that stores data as JSON-like documents (in BSON format) instead of traditional tables and rows, using collections and documents. It offers a flexible schema, meaning each document's structure can vary, and is commonly used with Node.js in the MERN stack.";
    }
}