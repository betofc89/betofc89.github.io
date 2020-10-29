import * as THREE from '../vendor/three/build/three.module.js';
import {OrbitControls} from '../vendor/three/examples/jsm/controls/OrbitControls.js';
import {GLTFLoader} from '../vendor/three/examples/jsm/loaders/GLTFLoader.js';

function main(){
	
	// const path = './assets/models/seg_leva/e3010s/e3010s_004_019.gltf';
	const path = document.getElementById("caminho").innerText;
	console.log(path);
	
	const canvas = document.querySelector('#c');
	const renderer = new THREE.WebGLRenderer({antialias:true, canvas});
	
	const fov = 45;
	const aspect = 1;  // the canvas default
	const near = 0.1;
	const far = 100;
	const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
	camera.position.set(-3, 1, 3);
	  
	const controls = new OrbitControls(camera, canvas);
	controls.target.set(0, 0, 0);
	controls.update();

	const scene = new THREE.Scene();
	scene.background = new THREE.Color(0xa1a1a1);
	

	// Luzes da frente
	{const color = 0xffffff;		const intensity = 10;		const light = new THREE.DirectionalLight(color, intensity);		light.position.set(0, 4, 8);		light.castShadow = true;		light.target.position.set(0, 2, 0);		scene.add(light);		scene.add(light.target);}
	{const color = 0xffe6a6;		const intensity = 3;		const light = new THREE.DirectionalLight(color, intensity);		light.position.set(4, 6, 2);		light.castShadow = true;		light.target.position.set(0, 2, 0);		scene.add(light);		scene.add(light.target);}
	{const color = 0x99a5ff;		const intensity = 3;		const light = new THREE.DirectionalLight(color, intensity);		light.position.set(-4, 6, 2);		light.castShadow = true;		light.target.position.set(0, 2, 0);		scene.add(light);		scene.add(light.target);}
	{const pointLight = new THREE.PointLight(0x666666, 10, 100 );		pointLight.position.set( -4, 0, 3 );		pointLight.castShadow = true;		scene.add( pointLight );}
	
	// Luz de baixo
	{const pointLight = new THREE.PointLight(0x666666, 10, 100 );		pointLight.position.set( 0, -3, 0 ); pointLight.intensity = 7.5;		pointLight.castShadow = true;		scene.add( pointLight );}
	
	// Luzes de trás
	{const color = 0xffffff;		const intensity = 5;		const light = new THREE.DirectionalLight(color, intensity);		light.position.set(0, 4, -8);		light.castShadow = true;		light.target.position.set(0, 2, 0);		scene.add(light);		scene.add(light.target);}
	{const color = 0xffe6a6;		const intensity = 3;		const light = new THREE.DirectionalLight(color, intensity);		light.position.set(4, 6, -2);		light.castShadow = true;		light.target.position.set(0, 2, 0);		scene.add(light);		scene.add(light.target);}
	{const color = 0x99a5ff;		const intensity = 3;		const light = new THREE.DirectionalLight(color, intensity);		light.position.set(-4, 6, -2);		light.castShadow = true;		light.target.position.set(0, 2, 0);		scene.add(light);		scene.add(light.target);}
	{const pointLight = new THREE.PointLight(0x666666, 10, 100 );		pointLight.position.set( -4, 0, -3 );		pointLight.castShadow = true;		scene.add( pointLight );}
		
	
	const gltfloader = new GLTFLoader();

	gltfloader.load(path, (gltf) => {
		const root = gltf.scene;
		scene.add(root);
	});
		

	function resizeRendererToDisplaySize(renderer) {
		const canvas = renderer.domElement;
		const width = canvas.clientWidth;
		const height = canvas.clientHeight;
		const needResize = canvas.width !== width || canvas.height !== height;
		if (needResize) {
		  renderer.setSize(width, height, false);
		}
		return needResize;
	}

	function render() {
		if (resizeRendererToDisplaySize(renderer)) {
		  const canvas = renderer.domElement;
		  camera.aspect = canvas.clientWidth / canvas.clientHeight;
		  camera.updateProjectionMatrix();
		}

		renderer.render(scene, camera);
		renderer.toneMapping = THREE.ReinhardToneMapping;

		requestAnimationFrame(render);
	}
	requestAnimationFrame(render);
	
} // Fim da function main()


main();