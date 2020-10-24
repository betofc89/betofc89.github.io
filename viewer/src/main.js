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
		const loader = new GLTFLoader();
		
		// Primeira leva
		// const modelo = './assets/models/prim_leva/e3041/E3041_004_GLTF_preto_3.gltf';
		// const modelo = './assets/models/prim_leva/e3041/e3041_amarelo.glb';
		// const modelo = './assets/models/prim_leva/p7020/P7020_005_BLACK_GLTF_1.glb';
		// const modelo = './assets/models/prim_leva/p7020/P7020_005_GLTF_1.glb';
		// const modelo = './assets/models/prim_leva/p7023/P7023_12_GLTF_1.glb';
		
		// Segunda leva
		// const modelo = './assets/models/seg_leva/d300/d300_001_3.gltf';
		// const modelo = './assets/models/seg_leva/e3010s/e3010s_001.gltf';
		// const modelo = './assets/models/seg_leva/e3064/e3064_001.gltf';
		// const modelo = './assets/models/seg_leva/m600/m600_001_i.gltf';
		const modelo = './assets/models/seg_leva/m600/m600_003_zg.gltf';
		document.getElementById("modelo_nome").innerHTML = modelo;
		loader.load(modelo, function(gltf){
		
			// loader.load('./assets/models/' + nomeArquivo, function(gltf){
				// var car_0 = gltf.scene.children[0];
				// car_0.position.y = 2;
				// var car_1 = gltf.scene.children[1];
				// car_1.position.y = 2;
				//car.scale.set(0.5,0.5,0.5);
			
			scene.add(gltf.scene);
			document.getElementById("testeA").innerHTML = scene.children.length;
			// window.alert(scene.children[3]);
			// window.alert(gltf.scene.children.length);
			// window.alert(gltf.scene.children[3].position.x);
			
			
			document.getElementById("botaoMudarXMais").addEventListener("click", function() {
				//document.getElementById("demo").innerHTML = "Hello World";
					const filho = document.getElementById("filhos").value;
					gltf.scene.children[filho].position.x += 1/10;
			});
			
			document.getElementById("botaoMudarXMenos").addEventListener("click", function() {
				//document.getElementById("demo").innerHTML = "Hello World";
					const filho = document.getElementById("filhos").value;
					gltf.scene.children[filho].position.x -= 1/10;
			});
			
			document.getElementById("filhos").min = 0;
			document.getElementById("filhos").max = gltf.scene.children.length-1;
			document.getElementById("filhos").value = gltf.scene.children.length-1;
			
			renderer.render(scene,camera);
			
			
			
			
			
			
			
			
			
			
			
			var select = document.getElementById('fruta');

			function logValue() {
				switch (this.value) {
					case 'm600':
						console.log('m600');
						
						// console.log(gltf.scene.name);
						
						// scene.remove(gltf.scene.children[0]);
						// scene.remove(scene.children[0]);
						
						// ESSE É O QUE DEU CERTO! ESSE CÓDIGO ABAIXO REMOVE A PRIMEIRA PEÇA (PEÇA ZERO). OU SEJA, TEM QUE ACESSAR USANDO O gltf.scene....
						// gltf.scene.remove(gltf.scene.children[0]);
						
						for (const item in gltf.scene.children) {
							// console.log(item.name);
							gltf.scene.remove(item);
						}
						
						
						
						break;
					case 'guava':
						console.log('option 2 selected');
						break;
					case 'lychee':
						console.log('You chose option 3, didn\'t you?');
						break;
				}
			}

			select.addEventListener('change', logValue, false); 
			
			
			
			
			
			
			
			
			
			
			
			
			
			
		
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
		
		// ----------------------- TESTE ( E X C E L E N T E )
		// renderer.toneMapping = THREE.ACESFilmicToneMapping
		// renderer.outputEncoding = THREE.sRGBEncoding
		// -----------------------
		
		// Esse aqui é ainda melhor:
		renderer.toneMapping = THREE.ReinhardToneMapping;
		
		// renderer.toneMapping = THREE.CineonToneMapping;
		// renderer.toneMapping = THREE.NoToneMapping;
		


		requestAnimationFrame(render);
		
		document.getElementById("camera_posX").innerHTML = camera.position.x.toFixed(2);
		document.getElementById("camera_posY").innerHTML = camera.position.y.toFixed(2);
		document.getElementById("camera_posZ").innerHTML = camera.position.z.toFixed(2);
		
		
	}

	requestAnimationFrame(render);
	
	
	
	

}
	
	
	
	
	
	
}

function teste(){
	window.alert("teste");
}




main();
