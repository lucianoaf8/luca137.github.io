// scripts/components/particles.js
import * as THREE from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.module.js';

export function initializeParticles() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById("particle-container").appendChild(renderer.domElement);

    const particleCount = 5000;
    const particles = new THREE.BufferGeometry();
    const posArray = new Float32Array(particleCount * 3);
    const velocityArray = new Float32Array(particleCount * 3);
    const colorArray = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
        posArray[i] = (Math.random() - 0.5) * 5;
        posArray[i + 1] = (Math.random() - 0.5) * 5;
        posArray[i + 2] = (Math.random() - 0.5) * 5;

        velocityArray[i] = (Math.random() - 0.5) * 0.0002;
        velocityArray[i + 1] = (Math.random() - 0.5) * 0.002;
        velocityArray[i + 2] = (Math.random() - 0.5) * 0.002;

        colorArray[i] = Math.random();
        colorArray[i + 1] = Math.random();
        colorArray[i + 2] = Math.random();
    }

    particles.setAttribute("position", new THREE.BufferAttribute(posArray, 3));
    particles.setAttribute("color", new THREE.BufferAttribute(colorArray, 3));

    const material = new THREE.PointsMaterial({
        size: 0.01,
        vertexColors: true,
    });

    const particlesMesh = new THREE.Points(particles, material);
    scene.add(particlesMesh);

    const linesMaterial = new THREE.LineBasicMaterial({
        color: 0xffffff,
        opacity: 0.1,
        transparent: true,
    });
    const linesGeometry = new THREE.BufferGeometry();
    const linesPositions = new Float32Array(particleCount * 6);
    linesGeometry.setAttribute("position", new THREE.BufferAttribute(linesPositions, 3));
    const linesMesh = new THREE.LineSegments(linesGeometry, linesMaterial);
    scene.add(linesMesh);

    camera.position.z = 2;

    let mouseX = 0, mouseY = 0;

    function animate() {
        requestAnimationFrame(animate);

        const positions = particles.attributes.position.array;
        for (let i = 0; i < positions.length; i += 3) {
            positions[i] += velocityArray[i];
            positions[i + 1] += velocityArray[i + 1];
            positions[i + 2] += velocityArray[i + 2];

            if (Math.abs(positions[i]) > 2.5) velocityArray[i] *= -1;
            if (Math.abs(positions[i + 1]) > 2.5) velocityArray[i + 1] *= -1;
            if (Math.abs(positions[i + 2]) > 2.5) velocityArray[i + 2] *= -1;
        }
        particles.attributes.position.needsUpdate = true;

        let lineIndex = 0;
        for (let i = 0; i < positions.length; i += 3) {
            for (let j = i + 3; j < positions.length; j += 3) {
                const distance = Math.sqrt(
                    Math.pow(positions[i] - positions[j], 2) +
                    Math.pow(positions[i + 1] - positions[j + 1], 2) +
                    Math.pow(positions[i + 2] - positions[j + 2], 2)
                );
                if (distance < 0.5) {
                    linesPositions[lineIndex++] = positions[i];
                    linesPositions[lineIndex++] = positions[i + 1];
                    linesPositions[lineIndex++] = positions[i + 2];
                    linesPositions[lineIndex++] = positions[j];
                    linesPositions[lineIndex++] = positions[j + 1];
                    linesPositions[lineIndex++] = positions[j + 2];
                }
                if (lineIndex >= linesPositions.length) break;
            }
            if (lineIndex >= linesPositions.length) break;
        }
        linesMesh.geometry.attributes.position.needsUpdate = true;

        particlesMesh.rotation.x += mouseY * 0.000001;
        particlesMesh.rotation.y += mouseX * 0.000001;

        renderer.render(scene, camera);
    }
    animate();

    window.addEventListener("resize", () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });

    document.addEventListener("mousemove", (event) => {
        mouseX = event.clientX - window.innerWidth / 2;
        mouseY = event.clientY - window.innerHeight / 2;
    });

    document.getElementById("particle-container").style.zIndex = "-1";
    document.getElementById("particle-container").style.position = "fixed";
    document.getElementById("particle-container").style.top = "0";
    document.getElementById("particle-container").style.left = "0";

}