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


window.addEventListener("DOMContentLoaded", displayGreeting);
