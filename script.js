// Navbar link click message
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        alert(`You clicked on ${link.textContent}`);
    });
});

// Search Form
const searchForm = document.querySelector("form");

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const searchInput = searchForm.querySelector("input");

    if (searchInput.value.trim() === "") {
        alert("Please enter a location");
    } else {
        alert(`Searching properties in ${searchInput.value}`);
    }
});

// Property Card Hover Effect
const propertyCards = document.querySelectorAll(
    "section:nth-of-type(2) div"
);

propertyCards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.transform = "scale(1.05)";
        card.style.transition = "0.3s";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "scale(1)";
    });
});

// Contact Form
const forms = document.querySelectorAll("form");

if (forms.length > 1) {
    forms[1].addEventListener("submit", (e) => {
        e.preventDefault();

        const name = forms[1].querySelector(
            'input[type="text"]'
        ).value;

        alert(`Thank you ${name}! We will contact you soon.`);
    });
}

// Welcome Message
window.addEventListener("load", () => {
    console.log("100Acres Clone Loaded Successfully!");
});