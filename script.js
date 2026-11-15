const roles = ["intelligent systems", "AI-powered experiences", "robotics projects", "ideas into reality"];
const typing = document.querySelector(".typing");
let roleIndex = 0, charIndex = 0, deleting = false;
function typeLoop() {
  if (!typing) return;
  const word = roles[roleIndex];
  typing.textContent = word.slice(0, charIndex);
  if (!deleting && charIndex < word.length) charIndex++;
  else if (deleting && charIndex > 0) charIndex--;
  else if (!deleting) { deleting = true; setTimeout(typeLoop, 1050); return; }
  else { deleting = false; roleIndex = (roleIndex + 1) % roles.length; }
  setTimeout(typeLoop, deleting ? 42 : 78);
}
typeLoop();

const header = document.querySelector(".site-header");
const toggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
window.addEventListener("scroll", () => header?.classList.toggle("scrolled", window.scrollY > 20), { passive: true });
toggle?.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(isOpen));
});
navLinks?.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  navLinks.classList.remove("open");
  toggle?.setAttribute("aria-expanded", "false");
}));

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));
document.getElementById("year").textContent = new Date().getFullYear();
