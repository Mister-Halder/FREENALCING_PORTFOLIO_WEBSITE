// Navbar shadow on scroll
window.addEventListener("scroll", () => {
    const nav = document.querySelector(".navbar");
    nav.style.boxShadow =
        window.scrollY > 50
            ? "0 6px 25px rgba(0,0,0,0.5)"
            : "none";
});

// See More Toggle (GRID SAFE)
const seeMoreBtn = document.getElementById("seeMoreBtn");
const hiddenCards = document.querySelectorAll(".card.hidden");

let expanded = false;

seeMoreBtn.addEventListener("click", () => {
    expanded = !expanded;

    hiddenCards.forEach(card => {
        card.style.display = expanded ? "block" : "none";
    });

    seeMoreBtn.textContent = expanded ? "Show Less" : "+ See More";
});