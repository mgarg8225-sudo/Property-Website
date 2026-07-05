//contact submission
const contactForm = document.querySelector("form");

contactForm.addEventListener("submit", (e) => {

    const name = contactForm.querySelector("input[type='text']").value;
    const phone = contactForm.querySelector('input[type="tel"]').value;

    alert(`Thank you ${name}! We'll contact you at ${phone} soon.`);
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



// Welcome Message
window.addEventListener("load", () => {
    console.log("property guys estate Loaded Successfully!");
});