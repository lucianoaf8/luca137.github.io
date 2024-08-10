// scripts/components/portfolio.js
export function initializePortfolio() {
    const projects = document.querySelectorAll('.project');
    const gpts = document.querySelectorAll('.gpt');

    function addHoverEffect(elements) {
        elements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                element.querySelector('.flipper').style.transform = 'rotateY(180deg)';
            });
            element.addEventListener('mouseleave', () => {
                element.querySelector('.flipper').style.transform = 'rotateY(0deg)';
            });
        });
    }

    addHoverEffect(projects);
    addHoverEffect(gpts);
}