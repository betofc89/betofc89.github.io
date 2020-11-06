import * as THREE from '../vendor/three/build/three.module.js';
import {OrbitControls} from '../vendor/three/examples/jsm/controls/OrbitControls.js';
import {GLTFLoader} from '../vendor/three/examples/jsm/loaders/GLTFLoader.js';

var select = document.getElementById('modelo_fechadura');
select.addEventListener('change', main2, false); 
	

function main2(){
	
	const path = select.value;
	// window.alert(path);
	
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
	// Luzes de trás
	{const color = 0xffffff;		const intensity = 5;		const light = new THREE.DirectionalLight(color, intensity);		light.position.set(0, 4, -8);		light.castShadow = true;		light.target.position.set(0, 2, 0);		scene.add(light);		scene.add(light.target);}
	{const color = 0xffe6a6;		const intensity = 3;		const light = new THREE.DirectionalLight(color, intensity);		light.position.set(4, 6, -2);		light.castShadow = true;		light.target.position.set(0, 2, 0);		scene.add(light);		scene.add(light.target);}
	{const color = 0x99a5ff;		const intensity = 3;		const light = new THREE.DirectionalLight(color, intensity);		light.position.set(-4, 6, -2);		light.castShadow = true;		light.target.position.set(0, 2, 0);		scene.add(light);		scene.add(light.target);}
	{const pointLight = new THREE.PointLight(0x666666, 10, 100 );		pointLight.position.set( -4, 0, -33 );		pointLight.castShadow = true;		scene.add( pointLight );}
		
	
	const gltfloader = new GLTFLoader();

	gltfloader.load(path, (gltf) => {
		if(gltf.scene){
			// gltf.scene.parent.remove(gltf.scene);
			// console.log(gltf.scene.children.length);
		}
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
		
		// renderer.toneMapping = THREE.ACESFilmicToneMapping
		renderer.toneMapping = THREE.ReinhardToneMapping;
		// renderer.outputEncoding = THREE.sRGBEncoding

		requestAnimationFrame(render);
	}
	requestAnimationFrame(render);
	
} // Fim da function main()
























function main(){
	
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
	// Luzes de trás
	{const color = 0xffffff;		const intensity = 5;		const light = new THREE.DirectionalLight(color, intensity);		light.position.set(0, 4, -8);		light.castShadow = true;		light.target.position.set(0, 2, 0);		scene.add(light);		scene.add(light.target);}
	{const color = 0xffe6a6;		const intensity = 3;		const light = new THREE.DirectionalLight(color, intensity);		light.position.set(4, 6, -2);		light.castShadow = true;		light.target.position.set(0, 2, 0);		scene.add(light);		scene.add(light.target);}
	{const color = 0x99a5ff;		const intensity = 3;		const light = new THREE.DirectionalLight(color, intensity);		light.position.set(-4, 6, -2);		light.castShadow = true;		light.target.position.set(0, 2, 0);		scene.add(light);		scene.add(light.target);}
	{const pointLight = new THREE.PointLight(0x666666, 10, 100 );		pointLight.position.set( -4, 0, -33 );		pointLight.castShadow = true;		scene.add( pointLight );}
		
	
	const gltfloader = new GLTFLoader();
	
	gltfloader.load('../viewer/assets/models/seg_leva/m600/m600_004_h.gltf', (gltf) => {
		const root = gltf.scene;
		scene.add(root);
	});
		
	// var select = document.getElementById('modelo_fechadura');
	// select.addEventListener('change', mostrarModelo, false); 
	
	
	// function mostrarModelo() {
		// console.log(gltf.scene.children.length);
	// }
	
	// function mostrarModelo() {
		// // window.alert(this.value);
		// const path = this.value;
		// gltfloader.load(path, (gltf) => {
			// if(gltf.scene){
				// gltf.scene.parent.remove(gltf.scene);
			// }; 
			
			// // root = gltf.scene;
			// scene.add(gltf.scene);
		// });
	// }

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
		
		// renderer.toneMapping = THREE.ACESFilmicToneMapping
		renderer.toneMapping = THREE.ReinhardToneMapping;
		// renderer.outputEncoding = THREE.sRGBEncoding

		requestAnimationFrame(render);
	}
	requestAnimationFrame(render);
	
} // Fim da function main()

// main();
