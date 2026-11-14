
// =========================================
// MOBILE NAVIGATION
// =========================================

const menuButton = document.getElementById("menuButton");
const navMenu = document.getElementById("navMenu");

if (menuButton && navMenu) {

    menuButton.addEventListener("click", () => {

        const opened = navMenu.classList.toggle("open");

        menuButton.setAttribute(
            "aria-expanded",
            String(opened)
        );

        menuButton.setAttribute(
            "aria-label",
            opened ? "Close navigation" : "Open navigation"
        );

    });


    // Close menu after clicking a navigation link

    navMenu.querySelectorAll("a").forEach((link) => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("open");

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });

}


// =========================================
// AUTOMATIC COPYRIGHT YEAR
// =========================================

const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}
