// Smooth scrolling for links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Example form validation (if you have a form)
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', (e) => {
            const emailInput = form.querySelector('input[type="email"]');
            if (emailInput && !validateEmail(emailInput.value)) {
                e.preventDefault();
                alert('Please enter a valid email address!');
            }
        });
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

// Get elements
const ctaButton = document.querySelector('.cta-button'); // "Get Started" button
const signUpButton = document.querySelector('.cta-section .cta-button'); // "Sign Up Now" button
const popup = document.getElementById('email-popup');
const closeButton = document.querySelector('.close-button');

// Show the pop-up when either CTA button is clicked
ctaButton.addEventListener('click', () => {
    popup.style.display = 'flex';
});

signUpButton.addEventListener('click', () => {
    popup.style.display = 'flex';
});

// Close the pop-up when the close button is clicked
closeButton.addEventListener('click', () => {
    popup.style.display = 'none';
});

// Close the pop-up when clicking outside the content
window.addEventListener('click', (e) => {
    if (e.target === popup) {
        popup.style.display = 'none';
    }
});

// Handle form submission (optional)
const popupForm = document.getElementById('popup-form');
popupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = popupForm.querySelector('input[type="email"]').value;
    alert(`Thank you for signing up, ${email}!`);
    popup.style.display = 'none';
});
