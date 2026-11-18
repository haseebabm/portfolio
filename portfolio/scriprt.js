
document.addEventListener("DOMContentLoaded", function () {

    // Display current year in footer
    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }

    // Mobile navigation menu
    const toggle = document.querySelector(".menu-toggle");

    const links = document.querySelector(".nav-links");

    if (toggle && links) {

        toggle.addEventListener("click", function () {

            const isOpen = links.classList.toggle("open");

            toggle.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

            toggle.textContent = isOpen ? "✕" : "☰";

        });

    }

});
