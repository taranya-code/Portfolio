// Typing Animation
const roles = ["Web Developer", "Computer Science Student", "AI & Machine Learning Enthusiast", "Tech Innovator in Progress"];
let i = 0, j = 0, current = "", deleting = false;
const typingElement = document.querySelector(".typing");

function typeEffect() {
    if (!deleting && j <= roles[i].length) {
        current = roles[i].substring(0, j++);
    } else if (deleting && j >= 0) {
        current = roles[i].substring(0, j--);
    }

    typingElement.textContent = current;

    if (j === roles[i].length + 1) deleting = true;
    if (j === 0 && deleting) {
        deleting = false;
        i = (i + 1) % roles.length;
    }

    setTimeout(typeEffect, deleting ? 70 : 120);
}
typeEffect();


// Scroll Reveal Animation
window.addEventListener("scroll", () => {
    document.querySelectorAll(".reveal").forEach((el) => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            el.classList.add("active");
        }
    });
});

// Image Modal Popup
const modal = document.getElementById("imgModal");
const modalImg = document.getElementById("modalImage");
const captionText = document.getElementById("caption");

document.querySelectorAll(".cert-img").forEach(img => {
    img.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
});

// Close modal when clicking X
document.querySelector(".close").onclick = function() {
    modal.style.display = "none";
};

// Close modal when clicking outside the image
modal.onclick = function(e) {
    if (e.target === modal) modal.style.display = "none";
};
