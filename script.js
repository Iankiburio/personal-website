// Function to display a dynamic greeting
function displayGreeting() {
    let now = new Date();
    let hour = now.getHours();
    let greeting;

    if (hour < 12) {
        greeting = "Good morning! Welcome to my website! 🌞";
    } else if (hour < 18) {
        greeting = "Good afternoon! Hope you're having a great day! ☀️";
    } else {
        greeting = "Good evening! Thanks for visiting my website! 🌙";
    }

    document.getElementById("greeting").innerText = greeting;
}

// Function to toggle dark mode
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    // Save user preference to localStorage
    let isDarkMode = document.body.classList.contains("dark-mode");
    localStorage.setItem("darkMode", isDarkMode);
}

// Apply dark mode if previously selected by the user
function applyDarkModePreference() {
    let isDarkMode = localStorage.getItem("darkMode") === "true";
    if (isDarkMode) {
        document.body.classList.add("dark-mode");
    }
}

// Run functions when page loads
window.onload = function () {
    displayGreeting();
    applyDarkModePreference();
    
    // Ensure dark mode toggle button works
    document.getElementById("darkModeToggle").addEventListener("click", toggleDarkMode);
};
