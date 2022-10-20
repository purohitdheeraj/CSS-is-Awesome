// span
let displayCount = document.getElementById("display-count");

// entries access
let lastEntries = document.getElementById("last-entries");

// store
let count = 0;

// increment on click
function increment() {
	count += 1;
	displayCount.textContent = count;
}

// save it in previous entries
function save() {
	lastEntries.textContent += count + " - ";
	count = 0;
	displayCount.textContent = count;
}

// Yay! we completed the passenger app :->
