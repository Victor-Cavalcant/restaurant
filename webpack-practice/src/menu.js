
export const menu = () => {
    const content = document.querySelector(".content");
    content.classList.add = "content";
    const title = document.createElement("h1");
    title.classList.add("title")
    title.textContent = "Menu";
    content.appendChild(title);

    const description = document.createElement("h3")
    description.textContent ="PLATES";
    content.appendChild(description)
    
    document.body.appendChild(content);
}
   