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

        // Run the Whatsapp function instead of the older alert 
         sendToWhatsapp();
    });
}

// Welcome Message
window.addEventListener("load", () => {
    console.log("Property Guys Estate Clone Loaded Successfully!");
});

function sendToWhatsapp() {
    let name = document.getElementById('callbackName').value.trim();
    let phone = document.getElementById('callbackPhone').value.trim();
    
    if (name === "" || phone === "") {
        alert("Please enter both your name and phone number.");
        return;
    }

    let myWhatsAppNumber = "919518208840"; 
    let message = `Hi Property Guys Estate, I would like an instant callback.%0A%0A*Name:* ${encodeURIComponent(name)}%0A*Phone:* ${encodeURIComponent(phone)}`;
    let whatsappUrl = `https://wa.me/${myWhatsAppNumber}?text=${message}`;
    
    window.open(whatsappUrl, '_blank');
}