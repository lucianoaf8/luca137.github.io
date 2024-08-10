// scripts/components/resume.js
export function initializeResume() {
    const toggleResumeButton = document.querySelector('.toggle-resume');
    const resumeContent = document.querySelector('.resume-content');
    const downloadResumeButton = document.querySelector('.download-resume');
    const dropdownContent = document.querySelector('.dropdown-content');

    toggleResumeButton.addEventListener('click', () => {
        resumeContent.classList.toggle('visible');
        if (resumeContent.classList.contains('visible')) {
            toggleResumeButton.textContent = 'Hide Resume';
            setTimeout(() => {
                resumeContent.style.transform = 'scale(1.02)';
                resumeContent.style.boxShadow = '0 0 30px #4CE5D8';
            }, 100);
        } else {
            toggleResumeButton.textContent = 'Show Resume';
            resumeContent.style.transform = 'none';
            resumeContent.style.boxShadow = 'none';
        }
    });

    downloadResumeButton.addEventListener('click', () => {
        dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
    });

    document.querySelectorAll('.format-option').forEach(button => {
        button.addEventListener('click', () => {
            const format = button.getAttribute('data-format');
            downloadResume(format);
            dropdownContent.style.display = 'none';
        });
    });

    window.addEventListener('click', (event) => {
        if (!event.target.matches('.download-resume')) {
            dropdownContent.style.display = 'none';
        }
    });
}

function downloadResume(format) {
    const resumeContent = document.querySelector('.resume-content').innerHTML;
    let blob;
    let filename = 'resume';
    let mimeType;

    switch (format) {
        case 'pdf':
            mimeType = 'application/pdf';
            filename += '.pdf';
            const doc = new jsPDF();
            doc.fromHTML(resumeContent, 10, 10);
            blob = doc.output('blob');
            break;
        case 'docx':
            mimeType = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
            filename += '.docx';
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
    URL.revokeObjectURL(link.href);
}