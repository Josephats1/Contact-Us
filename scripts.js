 // Hero Section Typed.js Animation
const heroText = `
Got questions or feedback? Our dedicated team is just a message away and eager to connect with you.
Whether you need assistance or want to share your thoughts, we strive to provide timely responses to ensure your experience is seamless and enjoyable.
Fill out the form below and let’s start a dialogue that can help us serve you better!
`;

const options = {
    strings: [heroText],
    typeSpeed: 5,
    backSpeed: 10,
    loop: false,
};
new Typed("#hero-typed", options);

// Background Color Change on Click
document.body.addEventListener("click", function () {
    const colors = ["#1a1a1a", "#2b2b2b", "#003366", "#4caf50", "#ff5722"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});

// Form Submission
document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
        alert("Thank you for reaching out! We'll get back to you soon.");
        document.getElementById("contact-form").reset();
    } else {
        alert("Please fill out all fields.");
    }
});
// Form Submission Handler
document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevents default form submission

    const fullName = document.getElementById("full-name").value.trim();
    const phoneNumber = document.getElementById("phone-number").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (fullName && phoneNumber && email && message) {
        const successMessage = document.getElementById("success-message");
        successMessage.style.display = "block"; // Show success message
        setTimeout(() => {
            successMessage.style.display = "none"; // Hide success message after 3 seconds
        }, 3000);

        document.getElementById("contact-form").reset(); // Clear the form
    } else {
        alert("Please fill out all fields before submitting."); // Alert if any field is missing
    }
});
