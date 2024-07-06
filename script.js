// script.js

document.addEventListener('DOMContentLoaded', function() {
    if (window.innerWidth <= 768) { // Apply only on mobile view
        const menu = document.querySelector('.menu');
        menu.classList.add('collapsed'); // Add collapsed class to hide menu items by default
    }
});

// Toggle menu items visibility on mobile
document.getElementById('hamburger-menu').addEventListener('click', function() {
    const menu = document.querySelector('.menu');
    if (menu.classList.contains('collapsed')) {
        menu.classList.remove('collapsed');
        menu.classList.add('expanded');
    } else {
        menu.classList.remove('expanded');
        menu.classList.add('collapsed');
    }
});

// Close the dropdown if the user clicks outside of it
window.addEventListener('click', function(event) {
    if (!event.target.matches('.download-resume')) {
        const dropdowns = document.getElementsByClassName('dropdown-content');
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.style.display === 'block') {
                openDropdown.style.display = 'none';
            }
        }
    }
});

// Ensure menu items are hidden by default on mobile
document.querySelector('.toggle-resume').textContent = 'Show Resume';

document.querySelector('.toggle-resume').addEventListener('click', function() {
    const resumeContent = document.querySelector('.resume-content');
    resumeContent.classList.toggle('visible');
    if (resumeContent.classList.contains('visible')) {
        this.textContent = 'Hide Resume';
    } else {
        this.textContent = 'Show Resume';
    }
});

document.querySelector('.download-resume').addEventListener('click', function() {
    const dropdownContent = document.querySelector('.dropdown-content');
    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
});

document.querySelectorAll('.format-option').forEach(function(button) {
    button.addEventListener('click', function() {
        const format = this.getAttribute('data-format');
        downloadResume(format);
        document.querySelector('.dropdown-content').style.display = 'none'; // Hide dropdown after selection
    });
});

function downloadResume(format) {
    const resumeContent = document.querySelector('.resume-content').innerHTML;
    let blob;
    let filename = 'resume';
    let mimeType;

    switch (format) {
        case 'pdf':
            mimeType = 'application/pdf';
            filename += '.pdf';
            // Use jsPDF library to generate PDF
            const doc = new jsPDF();
            doc.fromHTML(resumeContent, 10, 10);
            blob = doc.output('blob');
            break;
        case 'docx':
            mimeType = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
            filename += '.docx';
            // Use docxtemplater library to generate DOCX
            const docxContent = `
                <html>
                    <head><meta charset="utf-8"></head>
                    <body>${resumeContent}</body>
                </html>`;
            blob = new Blob([docxContent], { type: mimeType });
            break;
        case 'txt':
            mimeType = 'text/plain';
            filename += '.txt';
            // Convert HTML to plain text
            const textContent = resumeContent.replace(/<[^>]*>/g, '');
            blob = new Blob([textContent], { type: mimeType });
            break;
        case 'html':
        default:
            mimeType = 'text/html';
            filename += '.html';
            blob = new Blob([resumeContent], { type: mimeType });
            break;
    }

    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
    URL.revokeObjectURL(link.href); // Clean up URL.createObjectURL
}
