// Smooth scrolling to sections when clicking nav links
document.querySelectorAll('.nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Sticky header on scroll
window.onscroll = function () {
    const header = document.getElementById("header");
    const sticky = header.offsetTop;

    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
};

// Simple form validation for the contact form
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    if (!name || !email || !message) {
        alert('Please fill in all fields.');
    } else {
        alert('Message submitted successfully!');
        this.reset();
    }
});
