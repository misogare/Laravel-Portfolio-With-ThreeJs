import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export function initScene() {
    let scene = new THREE.Scene();
    let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    let renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    let raycaster = new THREE.Raycaster();
    let mouse = new THREE.Vector2();
	const arrowHelper = new THREE.ArrowHelper(new THREE.Vector3(), new THREE.Vector3(), 5, 0xff0000);
scene.add(arrowHelper);
    // Enhanced Lighting
    let directionalLight = new THREE.DirectionalLight(0xffffff, 1.5); // Increased intensity
    directionalLight.position.set(0, 1, 1);
    scene.add(directionalLight);

    let additionalLight = new THREE.DirectionalLight(0xffffff, 1.0);
    additionalLight.position.set(10, 10, -10); // Position it to light from a different angle
    scene.add(additionalLight);

    let ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Soft white light
    scene.add(ambientLight);

    // Camera position
    camera.position.set(10, 30, 40);
    camera.lookAt(new THREE.Vector3(0, 0, 0)); 
 // Background Plane
    const planeGeometry = new THREE.PlaneGeometry(10, 5); // Adjust size as needed
    const planeMaterial = new THREE.MeshBasicMaterial({ color: 0x1E90FF }); // Windows 7 blue color
    const plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.position.set(0, 8, -1.4); // Adjust position as needed
    scene.add(plane);
	  const iconGeometry = new THREE.PlaneGeometry(0.4, 0.4);
    const iconTexture = new THREE.TextureLoader().load('logo.png'); // Replace 'path/to/your/logo.png' with the actual path to your logo image
const iconMaterial = new THREE.MeshBasicMaterial({ map: iconTexture });
    const iconMesh = new THREE.Mesh(iconGeometry, iconMaterial);
    iconMesh.position.set(-4.5, 10, -1); // Adjust position as needed
    scene.add(iconMesh);

    // Loaders for models
    const loader = new GLTFLoader();
    loader.load('wooden-sitting/scene.gltf', function (gltf) {
        gltf.scene.scale.set(0.2, 0.2, 0.2);
        gltf.scene.position.set(-5, -11, 20);
        scene.add(gltf.scene);
    });

    const loader1 = new GLTFLoader();
    loader1.load('pack/scene.gltf', function (gltf) {
        gltf.scene.scale.set(0.011, 0.011, 0.011);
        gltf.scene.position.set(0, 8, -1.7);
        scene.add(gltf.scene);
    });

    const loader2 = new GLTFLoader();
    loader2.load('man-sitting/scene.gltf', function (gltf) {
        gltf.scene.scale.set(10, 10, 10);
        gltf.scene.position.set(-2, 1, 5);
        scene.add(gltf.scene);
    });
	   const loader3 = new GLTFLoader();
    loader3.load('desktop/scene.gltf', function (gltf) {
        gltf.scene.scale.set(0.2,0.2, 0.2);
        gltf.scene.position.set(-1, -15, 2);
		        gltf.scene.rotation.y = Math.PI / 2;

        scene.add(gltf.scene);
    });   // Event Listener for Mouse Click
    renderer.domElement.addEventListener('click', onDocumentMouseClick, false);

    function onDocumentMouseClick(event) {
        event.preventDefault();

     let rect = renderer.domElement.getBoundingClientRect();
    mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    console.log('Mouse coordinates:', mouse.x, mouse.y);

        raycaster.setFromCamera(mouse, camera);
arrowHelper.setDirection(raycaster.ray.direction);
    arrowHelper.position.copy(raycaster.ray.origin);
        const intersects = raycaster.intersectObjects([iconMesh]);

       console.log("Intersects count:", intersects.length);
	   
    if (intersects.length > 0) {
        console.log("Icon was clicked");
        // Open popup
        openPopup();
    } else {
        console.log("Click did not intersect with the icon");
    }
    }

    function openPopup() {
    console.log("Opening popup");

    const modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.width = '80%';
    modal.style.height = '80%';
    modal.style.top = '10%';
    modal.style.left = '10%';
    modal.style.background = 'white';
    modal.style.border = '2px solid black';
    modal.style.zIndex = '1000';
    
    // Replace "website-url" with the URL of the website you want to show
    modal.innerHTML = `<iframe src="https://mesvak.software" width="100%" height="100%"></iframe>`;
    
    document.body.appendChild(modal);

    // Close button
    const closeButton = document.createElement('button');
    closeButton.innerText = 'Close';
    closeButton.style.position = 'absolute';
    closeButton.style.top = '10px';
    closeButton.style.right = '10px';
    closeButton.onclick = function() {
        document.body.removeChild(modal);
        console.log("Popup closed");
    };
    modal.appendChild(closeButton);
}
    // Orbit Controls
    let controls = new OrbitControls(camera, renderer.domElement);

    function animate() {
        requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);
    }
    animate();
}
