// scripts/main.js
import { loadComponent } from './utils/componentLoader.js';
import { initializeHeader } from './components/header.js';
import { initializeHero } from './components/hero.js';
import { initializeSkills } from './components/skills.js';
import { initializePortfolio } from './components/portfolio.js';
import { initializeResume } from './components/resume.js';
import { initializeContact } from './components/contact.js';
import { initializeParticles } from './components/particles.js';
import { initializeTextGenerator } from './components/textGenerator.js';

async function initializeApp() {
    await Promise.all([
        loadComponent('header', initializeHeader),
        loadComponent('hero', initializeHero),
        loadComponent('skills', initializeSkills),
        loadComponent('portfolio', initializePortfolio),
        loadComponent('resume', initializeResume),
        loadComponent('contact', initializeContact)
    ]);
    
    initializeParticles();
    initializeTextGenerator();
}

initializeApp();