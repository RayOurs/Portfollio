// Liste des textes à écrire dans le slider
const texts = [
    "Apprenti administrateur système et réseaux",
    "Étudiant en informatique",
    "Passionné d’informatique",
    "Apprenti DevOps"
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
const speed = 100;
const delayBetweenWords = 2000;

function type() {
    const typewriter = document.getElementById("typewriter");
    const currentText = texts[textIndex];

    if (isDeleting) {
        typewriter.textContent = currentText.substring(0, charIndex--);
        if (charIndex < 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            setTimeout(type, 500);
        } else {
            setTimeout(type, speed / 2);
        }
    } else {
        typewriter.textContent = currentText.substring(0, charIndex++);
        if (charIndex > currentText.length) {
            isDeleting = true;
            setTimeout(type, delayBetweenWords);
        } else {
            setTimeout(type, speed);
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    type();
});

// Gestion des popups
function togglePopup() {
    document.getElementById("popup-overlay").classList.toggle("open");
}

function togglePopup2() {
    document.getElementById("popup-overlay2").classList.toggle("open");
}

function togglePopup(id) {
    const popup = document.getElementById(id);
    popup.classList.toggle('open');
}


window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("div[id^='section']");
    const navLinks = document.querySelectorAll(".header-menu li a");

    let currentSection = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100; // ajustement pour navbar fixe
        if (scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }
    });
});