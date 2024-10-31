// Display a greeting message based on the time of day
function displayGreeting() {
    const greetingElement = document.getElementById("greeting");
    const currentHour = new Date().getHours();

    let greeting;
    if (currentHour < 12) {
        greeting = "Good Morning!";
    } else if (currentHour < 18) {
        greeting = "Good Afternoon!";
    } else {
        greeting = "Good Evening!";
    }

    greetingElement.textContent = `${greeting} I'm Simran, an aspiring Software Development Engineer.`;
}

// Smooth scroll for navigation links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
        window.scrollTo({
            top: targetSection.offsetTop - 60,
            behavior: "smooth"
        });
    });
});

// Initialize the greeting message when the page loads
window.addEventListener("DOMContentLoaded", displayGreeting);
