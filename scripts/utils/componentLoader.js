// scripts/utils/componentLoader.js
export async function loadComponent(componentName, initializeFunction) {
    try {
        const response = await fetch(`./components/${componentName}.html`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const html = await response.text();
        const container = document.getElementById(`${componentName}-container`);
        if (!container) {
            throw new Error(`Container for ${componentName} not found`);
        }
        container.innerHTML = html;
        if (initializeFunction) {
            initializeFunction();
        }
    } catch (error) {
        console.error(`Error loading ${componentName} component:`, error);
    }
}