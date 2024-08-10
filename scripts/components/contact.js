// scripts/components/contact.js
export function initializeContact() {
    const contactForm = document.querySelector('.contact-box form');
    
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        // Add form submission logic here
        console.log('Form submitted');
    });
}