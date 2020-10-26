import * as THREE from '../vendor/three/build/three.module.js';
import {OrbitControls} from '../vendor/three/examples/jsm/controls/OrbitControls.js';
import {GLTFLoader} from '../vendor/three/examples/jsm/loaders/GLTFLoader.js';

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
	

	// Configuração mais interessante até agora:
	
	// Luzes da frente
	{
		const color = 0xffffff;
		const intensity = 10;
		const light = new THREE.DirectionalLight(color, intensity);
		light.position.set(0, 4, 8);
		light.castShadow = true;
		light.target.position.set(0, 2, 0);
		scene.add(light);
		scene.add(light.target);
	}
	
	{
		const color = 0xffe6a6;
		const intensity = 3;
		const light = new THREE.DirectionalLight(color, intensity);
		light.position.set(4, 6, 2);
		light.castShadow = true;
		light.target.position.set(0, 2, 0);
		scene.add(light);
		scene.add(light.target);
	}
	
	{
		const color = 0x99a5ff;
		const intensity = 3;
		const light = new THREE.DirectionalLight(color, intensity);
		light.position.set(-4, 6, 2);
		light.castShadow = true;
		light.target.position.set(0, 2, 0);
		scene.add(light);
		scene.add(light.target);
	}
	
	{
		const pointLight = new THREE.PointLight(0x666666, 10, 100 );
		pointLight.position.set( -4, 0, 3 );
		pointLight.castShadow = true;
		scene.add( pointLight );

	}
	
	
	
	// Luzes de trás
	{
		const color = 0xffffff;
		const intensity = 5;
		const light = new THREE.DirectionalLight(color, intensity);
		light.position.set(0, 4, -8);
		light.castShadow = true;
		light.target.position.set(0, 2, 0);
		scene.add(light);
		scene.add(light.target);
	}

	{
		const color = 0xffe6a6;
		const intensity = 3;
		const light = new THREE.DirectionalLight(color, intensity);
		light.position.set(4, 6, -2);
		light.castShadow = true;
		light.target.position.set(0, 2, 0);
		scene.add(light);
		scene.add(light.target);
	}
	
	{
		const color = 0x99a5ff;
		const intensity = 3;
		const light = new THREE.DirectionalLight(color, intensity);
		light.position.set(-4, 6, -2);
		light.castShadow = true;
		light.target.position.set(0, 2, 0);
		scene.add(light);
		scene.add(light.target);
	}
	
	{
		const pointLight = new THREE.PointLight(0x666666, 10, 100 );
		pointLight.position.set( -4, 0, -33 );
		pointLight.castShadow = true;
		scene.add( pointLight );

	}
	
	{
		// const loader = new GLTFLoader();
		
		// Concluídas
		// const modelo = './assets/models/seg_leva/m600/m600_003_zk.gltf'; 
		// const modelo = './assets/models/seg_leva/e3010s/e3010s_004_018.gltf';
		// const modelo = './assets/models/seg_leva/e3064/e3064_003_004.gltf';
		
		// loader.load(modelo, function(gltf){
			
			// scene.add(gltf.scene);
			
			// {
				// var select = document.getElementById('fruta');

				// function mostrarModelo() {
					
					// switch (this.value) {
						// case 'm600':
							// while(gltf.scene.children.length > 0) {
								// gltf.scene.remove(gltf.scene.children[gltf.scene.children.length-1]);
							// }

							// // const modelo = './assets/models/seg_leva/m600/m600_003_zk.gltf'; 
							// console.log("m600");
							// loader.load('./assets/models/seg_leva/m600/m600_003_zk.gltf', function(gltf){			
								// scene.add(gltf.scene);
							// });
							
							// break;
						// case 'e3010s':
							// while(gltf.scene.children.length > 0) {
								// gltf.scene.remove(gltf.scene.children[gltf.scene.children.length-1]);
							// }

							// loader.load('./assets/models/seg_leva/e3010s/e3010s_004_018.gltf', function(gltf){			
								// scene.add(gltf.scene);
							// });
							// break;
						
						// case 'e3064':
							// while(gltf.scene.children.length > 0) {
								// gltf.scene.remove(gltf.scene.children[gltf.scene.children.length-1]);
							// }

							// loader.load('./assets/models/seg_leva/e3064/e3064_003_004.gltf', function(gltf){			
								// scene.add(gltf.scene);
							// });
							// break;
					// }
				// }
				
				// select.addEventListener('change', mostrarModelo, false); 
			// }
			
			// renderer.render(scene,camera);
		// });
		
		// --------------------------------------------------------
		
		// const loader = new GLTFLoader();
		
		// const modelo = './assets/models/seg_leva/e3064/e3064_003_004.gltf';
		
		// loader.load(modelo, function(gltf){
			// scene.add(gltf.scene);
		// });

		// {
			// var select = document.getElementById('modelo_fechadura');

			// function mostrarModelo() {

				// switch (this.value) {
					// case 'm600':
						// while(gltf.scene.children.length > 0) {
							// gltf.scene.remove(gltf.scene.children[gltf.scene.children.length-1]);
						// }

						// const modelo = './assets/models/seg_leva/m600/m600_003_zk.gltf'; 
						// console.log("m600");
						// loader.load('./assets/models/seg_leva/m600/m600_003_zk.gltf', function(gltf){			
							// scene.add(gltf.scene);
						// });
						
						// break;
					// case 'e3010s':
						// while(gltf.scene.children.length > 0) {
							// gltf.scene.remove(gltf.scene.children[gltf.scene.children.length-1]);
						// }

						// loader.load('./assets/models/seg_leva/e3010s/e3010s_004_018.gltf', function(gltf){			
							// scene.add(gltf.scene);
						// });
						// break;
					
					// case 'e3064':
						// while(gltf.scene.children.length > 0) {
							// gltf.scene.remove(gltf.scene.children[gltf.scene.children.length-1]);
						// }

						// loader.load('./assets/models/seg_leva/e3064/e3064_003_004.gltf', function(gltf){			
							// scene.add(gltf.scene);
						// });
						// break;
				// }
			// }
			
			// select.addEventListener('change', mostrarModelo, false); 
		// }


		// ---------------------------
		
		
		const gltfloader = new GLTFLoader();
		const url = './assets/models/seg_leva/e3064/e3064_003_005.gltf';
		// const url = './assets/models/seg_leva/e3010s/e3010s_004_019.gltf';
		// const url = './assets/models/seg_leva/m600/m600_004_h.gltf';
		// const url = './assets/models/seg_leva/d300/d300_001_3.gltf';
		gltfloader.load(url, (gltf) => {
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
	}
} // Fim da function main()

main();
