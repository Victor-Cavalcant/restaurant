export const about = () => {
    const content = document.querySelector(".content");
    content.classList.add = "content";
    const title = document.createElement("h1");
    title.classList.add("title")
    title.textContent = "About us";
    content.appendChild(title);
    const aboutUs = document.createElement("div")
    aboutUs.classList.add("aboutUs")
    aboutUs.innerHTML = `
    <div class="cheff">
                <div class="cheffPhoto"></div>
                <p>A fictional restaurant. Stabilished in 2022</p>
            </div>
    </div>
    `

    content.appendChild(aboutUs)

    document.body.appendChild(content);
}