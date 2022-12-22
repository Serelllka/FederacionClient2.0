import * as THREE from 'three'
import {useEffect, useRef} from "react";
import {RoomEnvironment} from "three/addons/environments/RoomEnvironment";
import {DRACOLoader} from "three/addons/loaders/DRACOLoader";
import {GLTFLoader} from "three/addons/loaders/GLTFLoader";
import {OrbitControls} from "three/addons/controls/OrbitControls";

const AboutPage = ({setActive}) => {
    setActive(false)

    const container = useRef(null)

    const renderer = new THREE.WebGLRenderer( { antialias: true } )
    renderer.setPixelRatio( window.devicePixelRatio )
    renderer.setSize( window.innerWidth, window.innerHeight )
    renderer.outputEncoding = THREE.sRGBEncoding
    const pmremGenerator = new THREE.PMREMGenerator(renderer)

    const scene = new THREE.Scene()
    scene.background = new THREE.Color( 0xbfe3dd )
    scene.environment = pmremGenerator.fromScene( new RoomEnvironment(), 0.04 ).texture

    const camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 100 );
    camera.position.set( 5, 2, 8 );

    const controls = new OrbitControls( camera, renderer.domElement );
    controls.target.set( 0, 0.5, 0 );
    controls.update();
    controls.enablePan = false;
    controls.enableDamping = true;

    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath( 'js/libs/draco/gltf/' );

    const loader = new GLTFLoader();

    let mixer;
    loader.setDRACOLoader( dracoLoader );
    loader.load( './model/LittlestTokyo.glb', function ( gltf ) {

        const model = gltf.scene;
        model.position.set( 1, 1, 0 );
        model.scale.set( 0.01, 0.01, 0.01 );
        scene.add( model );

        mixer = new THREE.AnimationMixer( model );
        mixer.clipAction( gltf.animations[ 0 ] ).play();

        animate();

    }, undefined, function ( e ) {

        console.error( e );

    } );

    function animate() {

        requestAnimationFrame( animate );
        controls.update();

        renderer.render( scene, camera );

    }

    useEffect(() => {
        if (container) {
            container.current.appendChild(renderer.domElement)
        }
    }, [container])


    return (
        <div ref={container}>
        </div>
    )
}

export default AboutPage