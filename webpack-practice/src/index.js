import "./styles.css";
import {home} from "./home.js"
import { menu } from "./menu.js";
import { about } from "./about.js";

const homebtn = document.querySelector(".homebtn");
const menubtn = document.querySelector(".menubtn");
const aboutbtn = document.querySelector(".aboutbtn");

const content = document.querySelector(".content");
    content.classList.add = "content";
    const title = document.createElement("h1");
    title.classList.add("title")
    title.textContent = "Aroma Restaurant";
    content.appendChild(title);

    const description = document.createElement("h3")
    description.textContent ="An exquisite culinary experience";
    content.appendChild(description)
    
    document.body.appendChild(content);


    homebtn.addEventListener("click", () => {
        content.innerHTML = "";
        home()
    })
    
    aboutbtn.addEventListener("click", () => {
        content.innerHTML = "";
        about()
    })
    
    menubtn.addEventListener("click", () => {
        content.innerHTML = "";
        menu()
    })
