/* =========================================
   GOKUL PORTFOLIO - JAVASCRIPT
   VIOLET × LIGHT GREEN NEON
========================================= */


/* =========================================
   MOBILE MENU
========================================= */

const menuBtn = document.getElementById("menuBtn");
const nav = document.querySelector(".navbar nav");

if (menuBtn && nav) {

    menuBtn.addEventListener("click", () => {

        nav.classList.toggle("active");

        if (nav.classList.contains("active")) {
            menuBtn.textContent = "✕";
        } else {
            menuBtn.textContent = "☰";
        }

    });

}


/* =========================================
   CLOSE MOBILE MENU
========================================= */

const navLinks =
    document.querySelectorAll(".navbar nav a");

navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        if (nav) {
            nav.classList.remove("active");
        }

        if (menuBtn) {
            menuBtn.textContent = "☰";
        }

    });

});

/* =========================================
   CONTACT FORM
========================================= */

const contactForm = document.querySelector(".contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", (event) => {

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !subject || !message) {
            event.preventDefault();
            alert("Please fill in all the fields.");
            return;
        }

        // Do NOT prevent the form submission.
        // Formspree will receive the form.
    });

}
/* =========================================
   SCROLL REVEAL
========================================= */

const sections =
    document.querySelectorAll(".section");

const revealSection = () => {

    sections.forEach((section) => {

        const sectionTop =
            section.getBoundingClientRect().top;

        if (sectionTop < window.innerHeight - 100) {

            section.classList.add("show");

        }

    });

};

window.addEventListener(
    "scroll",
    revealSection
);

revealSection();


/* =========================================
   NAVBAR SCROLL EFFECT
========================================= */

const navbar =
    document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (!navbar) return;

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


/* =========================================
   ACTIVE NAVIGATION
========================================= */

const allSections =
    document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {

    let currentSection = "";

    allSections.forEach((section) => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active-link");

        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {

            link.classList.add("active-link");

        }

    });

});


/* =========================================
   TYPING EFFECT
========================================= */

const typingText =
    document.querySelector(".hero h2");

if (typingText) {

    const originalText =
        typingText.textContent.trim();

    typingText.textContent = "";

    let characterIndex = 0;

    function typeText() {

        if (
            characterIndex <
            originalText.length
        ) {

            typingText.textContent +=
                originalText.charAt(
                    characterIndex
                );

            characterIndex++;

            setTimeout(
                typeText,
                70
            );

        }

    }

    setTimeout(
        typeText,
        700
    );

}


/* =========================================
   MOUSE GLOW EFFECT
========================================= */

document.addEventListener(
    "mousemove",
    (event) => {

        document.documentElement.style.setProperty(
            "--mouse-x",
            `${event.clientX}px`
        );

        document.documentElement.style.setProperty(
            "--mouse-y",
            `${event.clientY}px`
        );

    }
);


/* =========================================
   SKILLS PROGRESS ANIMATION
========================================= */

const skillSection =
    document.querySelector("#skills");

const skillProgressBars =
    document.querySelectorAll(
        ".skill-progress"
    );

let skillsAnimated = false;

const animateSkills = () => {

    if (
        skillsAnimated ||
        !skillSection
    ) {
        return;
    }

    const sectionPosition =
        skillSection.getBoundingClientRect().top;

    const screenPosition =
        window.innerHeight * 0.80;

    if (sectionPosition < screenPosition) {

        skillsAnimated = true;

        skillProgressBars.forEach(
            (bar, index) => {

                const targetWidth =
                    getComputedStyle(bar)
                        .getPropertyValue(
                            "--skill-width"
                        )
                        .trim();

                setTimeout(() => {

                    bar.style.width =
                        targetWidth;

                }, index * 150);

            }
        );

    }

};

window.addEventListener(
    "scroll",
    animateSkills
);

animateSkills();


/* =========================================
   INTERNSHIPS
========================================= */

const internshipCards =
    document.querySelectorAll(".internship-card");

if (internshipCards.length > 0) {

    const internshipObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "show-internship"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.1
            }
        );

    internshipCards.forEach((card) => {

        internshipObserver.observe(card);

    });

}



/* =========================================
   PROJECTS ANIMATION
========================================= */

const projectCards = document.querySelectorAll(".project-card");

if (projectCards.length > 0) {

    const projectObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show-project");

                    observer.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.1
        }
    );

    projectCards.forEach((card) => {
        projectObserver.observe(card);
    });
}

/* =========================================
   CERTIFICATIONS
========================================= */

const certificationItems =
    document.querySelectorAll(
        ".certification-item"
    );

if (certificationItems.length > 0) {

    const certificationObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "show-certification"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.1
            }
        );

    certificationItems.forEach((item) => {

        certificationObserver.observe(item);

    });

}



/* =========================================
   SCROLL TO TOP
========================================= */

const topButton =
    document.getElementById(
        "scrollTopBtn"
    );

if (topButton) {

    window.addEventListener(
        "scroll",
        () => {

            if (window.scrollY > 300) {

                topButton.classList.add(
                    "show"
                );

            } else {

                topButton.classList.remove(
                    "show"
                );

            }

        }
    );


    topButton.addEventListener(
        "click",
        () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );

}
