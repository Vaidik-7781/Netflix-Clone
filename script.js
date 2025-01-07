// DOM Elements
const languageBtn = document.querySelector('.btn');
const faqBoxes = document.querySelectorAll('.faqbox');
const emailInput = document.querySelector('.hero-buttons input');
const getStartedBtn = document.querySelector('.btn-red');

// Language Button Toggle
languageBtn.addEventListener('click', () => {
    alert('Language options will be available soon!');
});

// FAQ Accordion Functionality
faqBoxes.forEach(box => {
    box.addEventListener('click', () => {
        box.classList.toggle('active');
        const svgIcon = box.querySelector('svg');
        if (box.classList.contains('active')) {
            box.style.backgroundColor = '#4b4b4b';
            svgIcon.style.transform = 'rotate(45deg)';
        } else {
            box.style.backgroundColor = '#2d2d2d';
            svgIcon.style.transform = 'rotate(0deg)';
        }
    });
});

// Email Validation
getStartedBtn.addEventListener('click', () => {
    const emailValue = emailInput.value.trim();
    if (emailValue === '') {
        alert('Please enter a valid email address.');
    } else if (!validateEmail(emailValue)) {
        alert('Invalid email format. Please try again.');
    } else {
        alert('Thank you for joining! Your subscription process will start soon.');
    }
});

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Navbar Toggling for Smaller Screens (Optional Enhancement)
const navToggle = document.createElement('div');
navToggle.innerHTML = `
    <span class="hamburger">&#9776;</span>
`;
document.querySelector('nav').appendChild(navToggle);

navToggle.addEventListener('click', () => {
    document.querySelector('nav div').classList.toggle('show');
});

// Smooth Scroll for FAQ Section
document.querySelectorAll('.faqbox').forEach(box => {
    box.addEventListener('click', () => {
        box.scrollIntoView({ behavior: 'smooth' });
    });
});

