const currentYearSpan = document.querySelector("#currentyear");
const lastModifiedParagraph = document.querySelector("#lastModified");

const today = new Date();
if (currentYearSpan) {
    currentYearSpan.textContent = today.getFullYear();
}

if (lastModifiedParagraph) {
    lastModifiedParagraph.textContent = document.lastModified;
}

const temperatureElement = document.querySelector("#temp")
const windSpeedElement = document.querySelector("#wind")
const windChillElement = document.querySelector("#windchill")

const temperature = parseFloat(temperatureElement.textContent);
const windSpeed = parseFloat(windSpeedElement.textContent);

const calculateWindChill = (temp, speed) =>
    (13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16).toFixed(1));

if (temperature <= 10 && windSpeed > 4.8) {
    windChillElement.textContent = `${calculateWindChill(temperature, windSpeed)} °C`;
} else { 
    windChillElement.textContent = "N/A";
}