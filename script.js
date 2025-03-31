document.addEventListener("DOMContentLoaded", function () {
    AOS.init({ offset: 0 });

    function hamburg() {
        const navbar = document.querySelector(".dropdown");
        if (navbar) {
            navbar.style.transform = "translateY(0px)";
        }
    }

    function cancel() {
        const navbar = document.querySelector(".dropdown");
        if (navbar) {
            navbar.style.transform = "translateY(-500px)";
        }
    }

    const typingText = document.querySelector("#typing-text");
    if (typingText) {
        new Typed("#typing-text", {
            strings: ["Python Developer", "ML Enthusiast", "Learner"],
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 800,
            loop: true
        });
    }

    let lastScrollTop = 0;
    const logo = document.querySelector(".logo");
    if (logo) {
        window.addEventListener("scroll", function () {
            let scrollTop = window.scrollY || document.documentElement.scrollTop;
            
            logo.style.opacity = scrollTop > lastScrollTop ? "0" : "1";
            logo.style.pointerEvents = scrollTop > lastScrollTop ? "none" : "auto";
            
            lastScrollTop = scrollTop;
        });
    }

    // Contact Form Submission
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", async function (event) {
            event.preventDefault();

            let formData = new FormData(this);

            try {
                let response = await fetch(this.action, {
                    method: "POST",
                    body: formData
                });

                let result = await response.json();

                if (result.success) {
                    let successMessage = document.getElementById("successMessage");
                    if (successMessage) {
                        successMessage.style.display = "block";
                        this.reset();
                        setTimeout(() => {
                            successMessage.style.display = "none";
                        }, 3000);
                    }
                }
            } catch (error) {
                console.error("Error submitting form:", error);
            }
        });
    }
});
