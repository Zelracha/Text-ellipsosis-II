console.log("Inside 3rd Project index")

function getDescription(text) {
    return text.substring(0, 10) + "..."
}

const input = document.querySelector("#input");
const output = document.querySelector("#output");

input.addEventListener("input", (event) => {
    output.textContent = getDescription(event.currentTarget.value);
});