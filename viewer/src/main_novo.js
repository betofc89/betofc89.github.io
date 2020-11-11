import * as THREE from '../vendor/three/build/three.module.js';
import {OrbitControls} from '../vendor/three/examples/jsm/controls/OrbitControls.js';
import {GLTFLoader} from '../vendor/three/examples/jsm/loaders/GLTFLoader.js';
import {RGBELoader} from '../vendor/three/examples/jsm/loaders/RGBELoader.js';

function main(){
	
	const scene = new THREE.Scene();
	scene.background = new THREE.Color(0x707070);
	scene.fog = new THREE.Fog( 0x707070, 5, 30);
	
	const fov = 45;
	const aspect = 1;  // the canvas default
	const near = 0.1;
	const far = 100;
	const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
	//camera.position.set(-3, 1.5, 3);
	camera.position.set(-1.763529205990095,-0.729447718847349,4.075275544682625);
	
	// camera.position.set(3, 2, 3);
	
	const canvas = document.querySelector('#c');
	
	const renderer = new THREE.WebGLRenderer({antialias:true, canvas});
	// renderer.toneMapping = THREE.ReinhardToneMapping;
	
	// const renderer = new THREE.WebGLRenderer( { antialias: true } );
	renderer.setPixelRatio( window.devicePixelRatio );
	// renderer.setSize(window.innerWidth, window.innerHeight);
	renderer.setSize(canvas.clientWidth, canvas.clientHeight);
	renderer.toneMapping = THREE.ACESFilmicToneMapping;
	renderer.outputEncoding = THREE.sRGBEncoding;
	renderer.shadowMap.enabled = true;
	renderer.shadowMap.type = THREE.PCFSoftShadowMap;

	const pmremGenerator = new THREE.PMREMGenerator( renderer );
	pmremGenerator.compileEquirectangularShader();

	// window.addEventListener( 'resize', function () {

	// const width = window.innerWidth;
	// const height = window.innerHeight;
	// renderer.setSize( width, height );
	// camera.aspect = width / height;
	// camera.updateProjectionMatrix();

	// } );

	const controls = new OrbitControls(camera, canvas);
	controls.target.set(0, 0, 0);
	controls.update();
	
	
	const hlight_intens = parseInt(document.getElementById("hlight_intensity").innerHTML);
	const hlight = new THREE.AmbientLight( 0x404040, hlight_intens );
	scene.add( hlight );
	
	document.getElementById("botaoMaisLight").addEventListener("click", function() {
		hlight.intensity += 1;
		console.log("hlight.intensity: " + hlight.intensity);
		document.getElementById("hlight_intensity").innerHTML = hlight.intensity;
	});
	document.getElementById("botaoMenosLight").addEventListener("click", function() {
		if (hlight.intensity > 0) {
			hlight.intensity -= 1;
		}
			
		console.log("hlight.intensity: " + hlight.intensity);
		document.getElementById("hlight_intensity").innerHTML = hlight.intensity;
	});

	const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.55 );
	directionalLight.castShadow = false;
	// directionalLight.shadow.radius = 100;
	directionalLight.shadow.camera.top = 4;
	directionalLight.shadow.camera.bottom = - 4;
	directionalLight.shadow.camera.left = - 4;
	directionalLight.shadow.camera.right = 4;
	directionalLight.shadow.camera.near = 0.1;
	directionalLight.shadow.camera.far = 40;
	// directionalLight.shadow.camera.far = 40;
	directionalLight.shadow.bias = - 0.002;
	directionalLight.position.set( 10, 20, -20 );
	scene.add( directionalLight );
	
	// ground
	const mesh = new THREE.Mesh( new THREE.PlaneBufferGeometry( 100, 100 ), new THREE.MeshPhongMaterial( { color: 0x525252, depthWrite: false } ) );
	mesh.rotation.x = - Math.PI / 2;
	mesh.position.y = -1.9;
	mesh.receiveShadow = true;
	scene.add( mesh );
	
	// const nomeHDR = '../hdr/pedestrian_overpass_1k.hdr';
	// const nomeHDR = '../hdr/quarry_01_1k.hdr';
	// const nomeHDR = '../hdr/royal_esplanade_1k.hdr';
	// const nomeHDR = '../hdr/spot1Lux.hdr';
	// const nomeHDR = '../hdr/venice_sunset_1k.hdr';
	const nomeHDR = document.getElementById("nomeHDR").innerText;
	console.log(nomeHDR);

	const path = document.getElementById("caminho").innerText;
	console.log(path);

	document.getElementById("linkDownload").href = path;

	new RGBELoader()
		.setDataType( THREE.UnsignedByteType )
		.setPath( 'img/' )

		.load( nomeHDR, function ( texture ) {
			const envMap = pmremGenerator.fromEquirectangular( texture ).texture;
			scene.environment = envMap;
			texture.dispose();
			pmremGenerator.dispose();
			var loader = new GLTFLoader();
			loader.load( path, handle_load );
		} );
	
	let model;
	
	function handle_load( gltf ) {
		model = gltf.scene;
		// model.position.y = 1.1;
		model.traverse( function ( child ) {
			if ( child.isMesh ) {
				child.castShadow = true;
				child.receiveShadow = true;
			}
		} );
		scene.add( model );
		animate();
	}
	
	
	const animate = function () {
		requestAnimationFrame( animate );
		renderer.render( scene, camera );
		//console.log("x: " + camera.position.x + ", y: " + camera.position.y + ", z: " + camera.position.z);
	};
	
} // Fim da function main()


main();