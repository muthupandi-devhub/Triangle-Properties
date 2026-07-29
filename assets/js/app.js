document.addEventListener("DOMContentLoaded", () => {

    lucide.createIcons();

    console.log("Triangle Properties Loaded");

});

document.addEventListener("DOMContentLoaded", () => {

    lucide.createIcons();

    const header = document.getElementById("header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 60) {

                header.classList.add(
                    "bg-white",
                    "shadow-lg"
                );

            header.classList.remove(
                "bg-transparent"
            );

            document
                .querySelectorAll(".nav-link")
                .forEach(link => {

                    link.classList.remove("text-white");

                    link.classList.add("text-primary");

                });

            document
                .querySelector(".logo-text")
                .classList.replace(
                    "text-white",
                    "text-primary"
                );

            document
                .querySelector(".logo-subtitle")
                .classList.replace(
                    "text-gray-300",
                    "text-gray-500"
                );

        } else {

            header.classList.remove(
                "bg-white",
                "shadow-lg"
            );

            header.classList.add(
                "bg-transparent"
            );

            document
                .querySelectorAll(".nav-link")
                .forEach(link => {

                    link.classList.remove("text-primary");

                    link.classList.add("text-white");

                });

            document
                .querySelector(".logo-text")
                .classList.replace(
                    "text-primary",
                    "text-white"
                );

            document
                .querySelector(".logo-subtitle")
                .classList.replace(
                    "text-gray-500",
                    "text-gray-300"
                );

        }

    });

}); 

/* ================= FAQ ================= */

document.querySelectorAll(".faq-btn").forEach(button => {

    button.addEventListener("click", () => {

        const content = button.nextElementSibling;

        const icon = button.querySelector(".faq-icon");

        document.querySelectorAll(".faq-content").forEach(item => {

            if (item !== content) {

                item.classList.add("hidden");

            }

        });

        document.querySelectorAll(".faq-icon").forEach(item => {

            if (item !== icon) {

                item.setAttribute("data-lucide", "plus");

            }

        });

        if (content.classList.contains("hidden")) {

            content.classList.remove("hidden");

            icon.setAttribute("data-lucide", "minus");

        } else {

            content.classList.add("hidden");

            icon.setAttribute("data-lucide", "plus");

        }

        lucide.createIcons();

    });

});

/* ================= Counter Animation ================= */

const counters = document.querySelectorAll(".counter");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const counter = entry.target;

        const target = +counter.dataset.target;

        let current = 0;

        const increment = target / 80;

        const update = () => {

            current += increment;

            if (current < target) {

                counter.innerText = Math.ceil(current) + "+";

                requestAnimationFrame(update);

            } else {

                counter.innerText = target + "+";

            }

        };

        update();

        observer.unobserve(counter);

    });

}, {
    threshold: 0.4
});

counters.forEach(counter => observer.observe(counter));

window.addEventListener("scroll", () => {

    const scrollBtn = document.getElementById("scrollTopBtn");

    if (!scrollBtn) return;

    if (window.scrollY > 300) {

        scrollBtn.classList.remove("hidden");

    } else {

        scrollBtn.classList.add("hidden");

    }

});

document.addEventListener("click", (e) => {

    const btn = e.target.closest("#scrollTopBtn");

    if (!btn) return;

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});