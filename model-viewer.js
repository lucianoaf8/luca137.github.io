// model-viewer.js
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, document.getElementById('model-viewer').clientWidth / 400, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(document.getElementById('model-viewer').clientWidth, 400);
document.getElementById('model-viewer').appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x4CE5D8, wireframe: true });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();

window.addEventListener('resize', () => {
  camera.aspect = document.getElementById('model-viewer').clientWidth / 400;
  camera.updateProjectionMatrix();
  renderer.setSize(document.getElementById('model-viewer').clientWidth, 400);
});