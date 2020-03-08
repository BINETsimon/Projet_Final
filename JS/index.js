import * as THREE from '../node_modules/three/build/three.module.js';
import { THREEx } from '../node_modules/three/examples/js/controls/THREEx.KeyboardState.js';

var camera, scene, renderer;
var cylindre;
var keyboard = new THREEx.KeyboardState();

init();
animate();


function init() {
    var container = document.createElement( 'div' );
    document.body.appendChild( container );

    //camera
    camera = new THREE.PerspectiveCamera( 30, window.innerWidth / window.innerHeight, 1, 10000 );
    camera.position.set( 0, 0, 0 );
    camera.rotation.set(0,0,0);

    renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );
    container.appendChild( renderer.domElement );
    renderer.outputEncoding = THREE.sRGBEncoding;

    scene = new THREE.Scene();
    scene.background = new THREE.Color( 0xcce0ff );

    var ambientLight = new THREE.AmbientLight( 0xcccccc, 1 );
    scene.add( ambientLight );

    var pointLight = new THREE.PointLight( 0xffffff, 0.2 );
    camera.add( pointLight );
    scene.add( camera );
    
    var map = new THREE.TextureLoader().load( 'img/mountain.jpg' );
    map.wrapS = map.wrapT = THREE.RepeatWrapping;
    map.anisotropy = 16;

    var material = new THREE.MeshPhongMaterial( { map: map, side: THREE.DoubleSide } );
    cylindre = new THREE.Mesh( new THREE.CylinderBufferGeometry( 80, 80, 50, 40, 5 ), material );
    //cylindre.rotation.x = Math.PI /2;
    scene.add(cylindre);

}


function animate() {
    if (keyboard.pressed("left")) {// up arrow
        camera.rotation.y += 0.5;
    }
    else if (keyboard.pressed("right")) {// down arrow
        camera.rotation.y -= 0.5;
    }
    renderer.render( scene, camera );
    requestAnimationFrame(function(){ animate(); });
}
