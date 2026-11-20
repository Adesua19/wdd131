const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Salt Lake Utah",
        location: "Salt Lake City, Utah, United States",
        dedicated: "1893, April, 6",
        area: 382207,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/400x250/salt-lake-temple-37762.jpg"
    },
    {
        templeName: "Accra Ghana",
        location: "Accra, Ghana",
        dedicated: "2004, January, 11",
        area: 17500,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-13760-main.jpg"



    
    },
    {
        templeName: "Bern Switzerland",
        location: "Münchenbuchsee, Switzerland",
        dedicated: "1955, September, 11",
        area: 35546,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/bern-switzerland/400x250/bern-switzerland-temple-lds-784288-wallpaper.jpg"
    }
];

const menuButton = document.querySelector("#menu");
const navElement = document.querySelector("nav");

if (menuButton && navElement) {
    menuButton.addEventListener("click", () => {
        menuButton.classList.toggle("open");
        navElement.classList.toggle("open");
    });
}

const cardsContainer = document.querySelector("#temple-cards");
const pageHeading = document.querySelector("main h1");
const navLinks = document.querySelectorAll("nav a[data-filter]");

function getDedicatedYear(dedicatedString) {
    return parseInt(dedicatedString.split(",")[0].trim(), 10);
}

function createTempleCard(temple) {
    const card = document.createElement("article");
    card.classList.add("temple-card");

    const nameHeading = document.createElement("h2");
    nameHeading.textContent = temple.templeName;

    const locationPara = document.createElement("p");
    const locationLabel = document.createElement("span");
    locationLabel.textContent = "Location:";
    locationPara.append(locationLabel, ` ${temple.location}`);

    const dedicatedPara = document.createElement("p");
    const dedicatedLabel = document.createElement("span");
    dedicatedLabel.textContent = "Dedicated:";
    dedicatedPara.append(dedicatedLabel, ` ${temple.dedicated}`);

    const areaPara = document.createElement("p");
    const areaLabel = document.createElement("span");
    areaLabel.textContent = "Size:";
    areaPara.append(areaLabel, ` ${temple.area} sq ft`);

    const image = document.createElement("img");
    image.src = temple.imageUrl;
    image.alt = `${temple.templeName} Temple`;
    image.loading = "lazy";
    image.width = 400;
    image.height = 250;

    card.append(nameHeading, locationPara, dedicatedPara, areaPara, image);
    return card;
}

function renderTemples(templeList) {
    if (!cardsContainer) {
        return;
    }
    cardsContainer.innerHTML = "";
    const fragment = document.createDocumentFragment();
    templeList.forEach((temple) => {
        fragment.appendChild(createTempleCard(temple));
    });
    cardsContainer.appendChild(fragment);
}

function applyFilter(filterKey, labelText) {
    let filteredList = temples;

    if (filterKey === "old") {
        filteredList = temples.filter((temple) => getDedicatedYear(temple.dedicated) < 1900);
    } else if (filterKey === "new") {
        filteredList = temples.filter((temple) => getDedicatedYear(temple.dedicated) > 2000);
    } else if (filterKey === "large") {
        filteredList = temples.filter((temple) => temple.area > 90000);
    } else if (filterKey === "small") {
        filteredList = temples.filter((temple) => temple.area < 10000);
    }

    if (pageHeading && labelText) {
        pageHeading.textContent = labelText;
    }

    renderTemples(filteredList);
}

navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();

        navLinks.forEach((item) => item.classList.remove("active"));
        link.classList.add("active");

        const filterKey = link.dataset.filter;
        const labelText = link.textContent.trim();
        applyFilter(filterKey, labelText);

        if (menuButton && navElement) {
            menuButton.classList.remove("open");
            navElement.classList.remove("open");
        }
    });
});

renderTemples(temples);

const currentYearSpan = document.querySelector("#currentyear");
if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
}

const lastModifiedPara = document.querySelector("#lastModified");
if (lastModifiedPara) {
    lastModifiedPara.textContent = `Last Modification: ${document.lastModified}`;
}