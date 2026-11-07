const currentYearSpan = document.querySelector("#currentyear");
const lastModifiedParagraph = document.querySelector("#lastModified");

const today = new Date();
if (currentYearSpan) {
    currentYearSpan.textContent = today.getFullYear();
}
if (lastModifiedParagraph) {
    lastModifiedParagraph.textContent = `Last Modification: ${document.lastModified}`;
}

const hamButton = document.querySelector("#menu");
const navigation = document.querySelector("nav");

if (hamButton && navigation) {
    hamButton.addEventListener("click", () => {
        navigation.classList.toggle("open");
        hamButton.classList.toggle("open");
    });
}