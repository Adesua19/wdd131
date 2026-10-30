const currentYearSpan = document.querySelector("#currentyear");
const today = new Date();
currentYearSpan.textContent = today.getFullYear();

const lastModifiedParagraph = document.querySelector("#lastModified");
lastModifiedParagraph = `Last Modification: ${ document.lastModified }`;