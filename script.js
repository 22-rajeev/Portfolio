function hamburg() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(0px)";
}

function cancel() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(-500px)";
}

var typed = new Typed("#typing-text", {
    strings: ["Python Developer", "ML Enthusiast", "Learner"],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 800,
    loop: true
});

let lastScrollTop = 0;
const logo = document.querySelector(".logo");

window.addEventListener("scroll", function () {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Scrolling down
        logo.style.opacity = "0";
        logo.style.pointerEvents = "none"; // Prevents interaction
    } else if (scrollTop < lastScrollTop - 20 || scrollTop === 0) {
        // Scrolling up significantly or reaching the top
        logo.style.opacity = "1";
        logo.style.pointerEvents = "auto";
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Prevents negative values
});
