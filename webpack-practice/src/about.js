export const about = () => {
    const content = document.querySelector(".content");
    content.classList.add = "content";
    const title = document.createElement("h1");
    title.classList.add("title")
    title.textContent = "About us";
    content.appendChild(title);

    const description = document.createElement("h3")
    description.textContent ="Lorem ipsum";
    content.appendChild(description)
    
    document.body.appendChild(content);
}