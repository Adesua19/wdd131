const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Load saved chapters from localStorage, or start with an empty array
let chaptersArray = getChapterList() || [];

// Display any previously saved chapters when the page loads
chaptersArray.forEach((chapter) => {
    displayList(chapter);
});

// Handle adding a new chapter
button.addEventListener('click', () => {
    if (input.value.trim() !== '') {
        const chapterName = input.value.trim();
        displayList(chapterName);        // Show it in the <ul>
        chaptersArray.push(chapterName);  // Add it to the array
        setChapterList();                 // Save updated array to localStorage
        input.value = '';                 // Clear the input field
        input.focus();                    // Return cursor to input
    } else {
        input.focus();
    }
});

// Build and append a list item with a delete button
function displayList(item) {
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');

    li.textContent = item;
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete');
    deleteButton.setAttribute('aria-label', `Remove ${item}`);

    li.append(deleteButton);
    list.append(li);

    deleteButton.addEventListener('click', () => {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    });
}

// Save chaptersArray as a JSON string in localStorage
function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

// Retrieve and parse chaptersArray from localStorage
function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}

// Remove a chapter from chaptersArray and update localStorage
function deleteChapter(chapter) {
    // Remove the trailing '❌' character added with textContent
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList();
}