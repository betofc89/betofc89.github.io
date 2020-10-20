import * as THREE from '../vendor/three/build/three.module.js';
import {OrbitControls} from '../vendor/three/examples/jsm/controls/OrbitControls.js';
import {GLTFLoader} from '../vendor/three/examples/jsm/loaders/GLTFLoader.js';

// import {OBJLoader2} from '../vendor/three/examples/jsm/loaders/OBJLoader2.js';
// import {MTLLoader} from '../vendor/three/examples/jsm/loaders/MTLLoader.js';
// import {MtlObjBridge} from '../vendor/three/examples/jsm/loaders/obj2/bridge/MtlObjBridge.js';

 // document.getElementById("link_preto").addEventListener("click", myFunction("E3041_004_GLTF_preto_3.gltf"), false);
// document.getElementById("link_amarelo").addEventListener("click", myFunction("e3041_amarelo.glb"), false);

// document.getElementById("link_preto").addEventListener("click",testeFuncao("linkPreto"),false);

// function testeFuncao(nomeLink){
	// window.alert(nomeLink);
// }

// function myFunction(nomeArquivo) {
  // window.alert(nomeArquivo);
  // main(nomeArquivo);
// }


// function main(nomeArquivo){
function main(){

	const canvas = document.querySelector('#c');
	const renderer = new THREE.WebGLRenderer({canvas});
	
	const fov = 45;
	const aspect = 1;  // the canvas default
	const near = 0.1;
	const far = 100;
	const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
	camera.position.set(-3, 3, 3);
	  
	const controls = new OrbitControls(camera, canvas);
	controls.target.set(0, 2, 0);
	controls.update();

	const scene = new THREE.Scene();
	scene.background = new THREE.Color(0xa1a1a1);

	
	// --------------------------------------------------------------------------------------
	// --------------------------------------------------------------------------------------
	// Config_light_01
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
	
	
	// Fim da Config_light_01
	// --------------------------------------------------------------------------------------
	// --------------------------------------------------------------------------------------
	
	{
		const loader = new GLTFLoader();
		// loader.load('./assets/models/E3041_004_GLTF_preto_3.gltf', function(gltf){
		// loader.load('./assets/models/e3041_amarelo.glb', function(gltf){
		loader.load('./assets/models/P7020_005_BLACK_GLTF_1.glb', function(gltf){
		// loader.load('./assets/models/P7020_005_GLTF_1.glb', function(gltf){
		// loader.load('./assets/models/P7023_12_GLTF_1.glb', function(gltf){
		
		// loader.load('./assets/models/' + nomeArquivo, function(gltf){
			var car_0 = gltf.scene.children[0];
			car_0.position.y = 2;
			var car_1 = gltf.scene.children[1];
			car_1.position.y = 2;
			//car.scale.set(0.5,0.5,0.5);
		scene.add(gltf.scene);
		renderer.render(scene,camera);
	});
	}

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
	}

	requestAnimationFrame(render);
}

function teste(){
	window.alert("teste");
}

main();
