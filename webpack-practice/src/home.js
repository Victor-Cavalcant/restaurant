export const home = () => {
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
}