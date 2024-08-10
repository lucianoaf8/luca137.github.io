// scripts/components/textGenerator.js
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
            const nextWord = nextWords[Math.floor(Math.random() * nextWords.length)];
            result += " " + nextWord;
            currentWord = nextWord;
        }
        return result;
    }
}

export function initializeTextGenerator() {
    const markov = new MarkovChain();
    markov.train(
        "AI is revolutionizing industries across the globe. Machine learning algorithms are becoming more sophisticated, enabling computers to perform tasks that were once thought to be exclusively human. Natural language processing is improving rapidly, allowing for more natural interactions between humans and machines. Computer vision systems are now capable of recognizing and interpreting visual data with incredible accuracy."
    );

    const generateBtn = document.getElementById("generate-btn");
    const promptInput = document.getElementById("prompt");
    const generatedText = document.getElementById("generated-text");

    generateBtn.addEventListener("click", () => {
        const prompt = promptInput.value;
        const generatedContent = markov.generate(prompt.split(" ")[0], 30);
        generatedText.textContent = generatedContent;
    });
}