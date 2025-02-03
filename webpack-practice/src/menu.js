
export const menu = () => {
    function adjustBodySize() {
        document.body.style.width = "100%";
        document.body.style.height = "auto";
      }
      
      window.addEventListener("resize", adjustBodySize);
      window.addEventListener("load", adjustBodySize);
      
      adjustBodySize();

    const content = document.querySelector(".content");
    content.classList.add = "content";
    const title = document.createElement("h1");
    title.classList.add("title")
    title.textContent = "Menu";
    content.appendChild(title);

    const dishes = document.createElement("div")
    dishes.classList.add("dishes")
    dishes.innerHTML = `
    <div class="dish">
                <div class="brunch"></div>
                <p>brunch</p>
            </div>
            <div class="dish">
                <div class="steak"></div>
                <p>steak</p>
            </div>
            <div class="dish">
                <div class="vegetarian"></div>
                <p>vegetarian</p>
    </div>
    `

    content.appendChild(dishes)

    document.body.appendChild(content);
}