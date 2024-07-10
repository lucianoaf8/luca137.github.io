// script.js

document.addEventListener("DOMContentLoaded", function () {
    if (window.innerWidth <= 768) {
        // Apply only on mobile view
        const menu = document.querySelector(".menu");
        menu.classList.add("collapsed"); // Add collapsed class to hide menu items by default
    }
});

// Toggle menu items visibility on mobile
document
    .getElementById("hamburger-menu")
    .addEventListener("click", function () {
        const menu = document.querySelector(".menu");
        if (menu.classList.contains("collapsed")) {
            menu.classList.remove("collapsed");
            menu.classList.add("expanded");
        } else {
            menu.classList.remove("expanded");
            menu.classList.add("collapsed");
        }
    });

// Handle download resume button click
document
    .querySelector(".download-resume")
    .addEventListener("click", function () {
        const dropdownContent = document.querySelector(".dropdown-content");
        dropdownContent.style.display =
            dropdownContent.style.display === "block" ? "none" : "block";
    });

// Handle resume format option click
document.querySelectorAll(".format-option").forEach(function (button) {
    button.addEventListener("click", function () {
        const format = this.getAttribute("data-format");
        downloadResume(format);
        document.querySelector(".dropdown-content").style.display = "none"; // Hide dropdown after selection
    });
});

function downloadResume(format) {
    const resumeContent = document.querySelector(".resume-content").innerHTML;
    let blob;
    let filename = "resume";
    let mimeType;

    switch (format) {
        case "pdf":
            mimeType = "application/pdf";
            filename += ".pdf";
            const doc = new jsPDF();
            doc.fromHTML(resumeContent, 10, 10);
            blob = doc.output("blob");
            break;
        case "docx":
            mimeType =
                "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
            filename += ".docx";
            const docxContent = `
                <html>
                    <head><meta charset="utf-8"></head>
                    <body>${resumeContent}</body>
                </html>`;
            blob = new Blob([docxContent], { type: mimeType });
            break;
        case "txt":
            mimeType = "text/plain";
            filename += ".txt";
            const textContent = resumeContent.replace(/<[^>]*>/g, "");
            blob = new Blob([textContent], { type: mimeType });
            break;
        case "html":
        default:
            mimeType = "text/html";
            filename += ".html";
            blob = new Blob([resumeContent], { type: mimeType });
            break;
    }

    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
    URL.revokeObjectURL(link.href); // Clean up URL.createObjectURL
}

// Toggle resume visibility and apply hover effect dynamically
document.querySelector(".toggle-resume").addEventListener("click", function () {
    const resumeContent = document.querySelector(".resume-content");
    resumeContent.classList.toggle("visible");
    if (resumeContent.classList.contains("visible")) {
        this.textContent = "Hide Resume";
        setTimeout(() => {
            resumeContent.style.transform = "scale(1.02)";
            resumeContent.style.boxShadow = "0 0 30px #4CE5D8";
        }, 100); // Add a small delay to allow the element to be fully visible before applying the shadow
    } else {
        this.textContent = "Show Resume";
        resumeContent.style.transform = "none";
        resumeContent.style.boxShadow = "none";
    }
});

// Close the dropdown if the user clicks outside of it
window.addEventListener("click", function (event) {
    if (!event.target.matches(".download-resume")) {
        const dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.style.display === "block") {
                openDropdown.style.display = "none";
            }
        }
    }
});

// Call the function when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", populateSkillTree);

// Simple Markov chain text generator
class MarkovChain {
    constructor() {
        this.chain = {};
    }

    train(text) {
        const words = text.split(" ");
        for (let i = 0; i < words.length - 1; i++) {
            const currentWord = words[i];
            const nextWord = words[i + 1];
            if (!this.chain[currentWord]) {
                this.chain[currentWord] = [];
            }
            this.chain[currentWord].push(nextWord);
        }
    }

    generate(startWord, length) {
        let currentWord = startWord;
        let result = currentWord;
        for (let i = 0; i < length; i++) {
            const nextWords = this.chain[currentWord];
            if (!nextWords) break;
            const nextWord =
                nextWords[Math.floor(Math.random() * nextWords.length)];
            result += " " + nextWord;
            currentWord = nextWord;
        }
        return result;
    }
}

const markov = new MarkovChain();
markov.train(
    "AI is revolutionizing industries across the globe. Machine learning algorithms are becoming more sophisticated, enabling computers to perform tasks that were once thought to be exclusively human. Natural language processing is improving rapidly, allowing for more natural interactions between humans and machines. Computer vision systems are now capable of recognizing and interpreting visual data with incredible accuracy.",
);

document.getElementById("generate-btn").addEventListener("click", () => {
    const prompt = document.getElementById("prompt").value;
    const generatedText = markov.generate(prompt.split(" ")[0], 30);
    document.getElementById("generated-text").textContent = generatedText;
});
