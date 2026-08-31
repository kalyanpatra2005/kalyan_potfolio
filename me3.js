/* =====================================================
   PRELOADER
===================================================== */

window.addEventListener("load", () => {

    const preloader = document.getElementById("preloader");

    setTimeout(() => {
        preloader.classList.add("hide");
    }, 500);

});


/* =====================================================
   TYPING ANIMATION
===================================================== */

const typingElement = document.getElementById("typing");

const words = [
   
    "Frontend Developer",
    "Web Developer",
    ];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typingElement.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {
                wordIndex = 0;
            }

        }

    }

    setTimeout(typeEffect, deleting ? 50 : 90);
}

typeEffect();


/* =====================================================
   MOBILE MENU
===================================================== */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("open");

    const icon = menuBtn.querySelector("i");

    if (navLinks.classList.contains("open")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");
    } else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
    }

});


/* Close menu after clicking */

document.querySelectorAll(".nav-link").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("open");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");

    });

});


/* =====================================================
   DARK / LIGHT MODE
===================================================== */

const themeToggle = document.getElementById("themeToggle");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {

    document.body.classList.add("dark");

    themeToggle.innerHTML =
        '<i class="fas fa-sun"></i>';

}

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    const isDark =
        document.body.classList.contains("dark");

    localStorage.setItem(
        "theme",
        isDark ? "dark" : "light"
    );

    themeToggle.innerHTML = isDark
        ? '<i class="fas fa-sun"></i>'
        : '<i class="fas fa-moon"></i>';

});


/* =====================================================
   PARTICLES
===================================================== */

const particles = document.getElementById("particles");

for (let i = 0; i < 45; i++) {

    const particle = document.createElement("span");

    particle.classList.add("particle");

    particle.style.left =
        Math.random() * 100 + "%";

    particle.style.animationDuration =
        (8 + Math.random() * 15) + "s";

    particle.style.animationDelay =
        Math.random() * 10 + "s";

    particle.style.opacity =
        Math.random() * .35;

    particles.appendChild(particle);

}


/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealElements =
    document.querySelectorAll(".reveal");

const revealObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    revealObserver.unobserve(entry.target);

                }

            });

        },

        {
            threshold: .12
        }

    );

revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =====================================================
   SKILL BARS
===================================================== */

const skillBars =
    document.querySelectorAll(".skill-bar span");

const skillObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    const width =
                        entry.target.dataset.width;

                    entry.target.style.width = width;

                    skillObserver.unobserve(entry.target);

                }

            });

        },

        {
            threshold: .5
        }

    );

skillBars.forEach(bar => {

    skillObserver.observe(bar);

});


/* =====================================================
   PROJECT FILTER
===================================================== */

const filterButtons =
    document.querySelectorAll(".filter-btn");

const projectCards =
    document.querySelectorAll(".project-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        const filter =
            button.dataset.filter;

        projectCards.forEach(card => {

            if (filter === "all") {

                card.classList.remove("hidden");

            } else {

                const categories =
                    card.dataset.category.split(" ");

                if (categories.includes(filter)) {
                    card.classList.remove("hidden");
                } else {
                    card.classList.add("hidden");
                }

            }

        });

    });

});


/* =====================================================
   COUNTER ANIMATION
===================================================== */

const counters =
    document.querySelectorAll(".counter");

const counterObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) return;

                const counter = entry.target;

                const target =
                    Number(counter.dataset.target);

                let current = 0;

                const duration = 1200;

                const increment =
                    target / (duration / 30);

                const updateCounter = () => {

                    current += increment;

                    if (current < target) {

                        counter.textContent =
                            Math.ceil(current);

                        setTimeout(updateCounter, 30);

                    } else {

                        counter.textContent = target + "+";

                    }

                };

                updateCounter();

                counterObserver.unobserve(counter);

            });

        },

        {
            threshold: .7
        }

    );

counters.forEach(counter => {

    counterObserver.observe(counter);

});


/* =====================================================
   ACTIVE NAVIGATION
===================================================== */

const sections =
    document.querySelectorAll("section[id]");

const navItems =
    document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + current
        ) {

            link.classList.add("active");

        }

    });

});


/* =====================================================
   BACK TO TOP
===================================================== */

const backToTop =
    document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

/* =====================================================
   EMAILJS INITIALIZATION
===================================================== */

emailjs.init({
    publicKey: "VFiUirtTbryHMH6lj"
});


/* =====================================================
   CONTACT FORM
===================================================== */

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

const myEmail = "kalyanpatra2005@gmail.com";


contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    formMessage.textContent = "Sending message...";

    emailjs.sendForm(
        "service_4xldlvp",
        "template_undzaye",
        contactForm
    )
    .then(function() {

        formMessage.textContent =
            "Message sent successfully!";

        contactForm.reset();

    })
    .catch(function(error) {

        console.error("EmailJS Error:", error);

        formMessage.textContent =
            "Failed to send message. Please try again.";

    });

});
/* =====================================================
   CURRENT YEAR
===================================================== */

document.getElementById("year").textContent =
    new Date().getFullYear();