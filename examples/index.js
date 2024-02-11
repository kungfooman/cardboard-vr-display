import * as THREE from 'three';
import {VRControls} from '../third_party/three.js/VRControls.js';
import {VREffect} from '../third_party/three.js/VREffect.js';
import {CardboardVRDisplay} from '../src/cardboard-vr-display.js';
// Get config from URL
var config = (function() {
  var config = {};
  var q = window.location.search.substring(1);
  if (q === '') {
    return config;
  }
  var params = q.split('&');
  var param, name, value;
  for (var i = 0; i < params.length; i++) {
    param = params[i].split('=');
    name = param[0];
    value = param[1];
    // All config values are either boolean or float
    config[name] = value === 'true' ? true :
                   value === 'false' ? false :
                   parseFloat(value);
  }
  return config;
})();
// Mock VRFrameData for VRControls
function VRFrameData () {
  this.leftViewMatrix = new Float32Array(16);
  this.rightViewMatrix = new Float32Array(16);
  this.leftProjectionMatrix = new Float32Array(16);
  this.rightProjectionMatrix = new Float32Array(16);
  this.pose = null;
};
window.VRFrameData = VRFrameData;
console.log('creating CardboardVRDisplay with options', config);
var vrDisplay = new CardboardVRDisplay(config);
// If loading this inside of an iframe (see iframe.html),
// force using the `devicemotion` sensor fusion, rather than
// newer Generic Sensors due to an issue with sensors
// in iframes in Chrome < m69:
// https://bugs.chromium.org/p/chromium/issues/detail?id=849501
if (window.self !== window.top) {
  vrDisplay.poseSensor_.useDeviceMotion();
}
navigator.getVRDisplays = function () {
  return new Promise(function (resolve) {
    resolve([vrDisplay]);
  });
};
// Setup three.js WebGL renderer. Note: Antialiasing is a big performance hit.
// Only enable it if you actually need to.
var renderer = new THREE.WebGLRenderer({antialias: false});
renderer.setPixelRatio(Math.floor(window.devicePixelRatio));
// Append the canvas element created by the renderer to document body element.
document.body.appendChild(renderer.domElement);
// Create a three.js scene.
var scene = new THREE.Scene();
// Create a three.js camera.
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000);
// Create a reticle
var reticle = new THREE.Mesh(
  new THREE.RingBufferGeometry(0.005, 0.01, 15),
  new THREE.MeshBasicMaterial({ color: 0xffffff })
);
reticle.position.z = -0.5;
camera.add(reticle);
scene.add(camera);
// Apply VR headset positional data to camera.
var controls = new VRControls(camera);
// Apply VR stereo rendering to renderer.
var effect = new VREffect(renderer);
effect.setSize(window.innerWidth, window.innerHeight);
// Add a repeating grid as a skybox.
var boxWidth = 5;
var loader = new THREE.TextureLoader();
loader.load('img/box.png', onTextureLoaded);
// Kick off the render loop.
vrDisplay.requestAnimationFrame(animate);
function onTextureLoaded(texture) {
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(boxWidth, boxWidth);
  var geometry = new THREE.BoxGeometry(boxWidth, boxWidth, boxWidth);
  var material = new THREE.MeshBasicMaterial({
    map: texture,
    color: 0x01BE00,
    side: THREE.BackSide
  });
  var skybox = new THREE.Mesh(geometry, material);
  scene.add(skybox);
}
// Create 3D objects.
var geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
var material = new THREE.MeshNormalMaterial();
var cube = new THREE.Mesh(geometry, material);
// Position cube mesh
cube.position.z = -1;
// Add cube mesh to your three.js scene
scene.add(cube);
// Request animation frame loop function
var lastRender = 0;
function animate(timestamp) {
  var delta = Math.min(timestamp - lastRender, 500);
  lastRender = timestamp;
  // Apply rotation to cube mesh
  cube.rotation.y += delta * 0.0006;
  // Update VR headset position and apply to camera.
  controls.update();
  // Render the scene.
  effect.render(scene, camera);
  // Keep looping.
  vrDisplay.requestAnimationFrame(animate);
}
function onResize() {
  console.log('Resizing to %s x %s.', window.innerWidth, window.innerHeight);
  effect.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
}
function onVRDisplayPresentChange() {
  console.log('onVRDisplayPresentChange');
  onResize();
}
// Resize the WebGL canvas when we resize and also when we change modes.
window.addEventListener('resize', onResize);
window.addEventListener('vrdisplaypresentchange', onVRDisplayPresentChange);
// Button click handlers.
document.querySelector('button#fullscreen').addEventListener('click', function() {
  enterFullscreen(renderer.domElement);
});
document.querySelector('button#vr').addEventListener('click', function() {
  vrDisplay.requestPresent([{source: renderer.domElement}]);
});
document.querySelector('button#reset').addEventListener('click', function() {
  vrDisplay.resetPose();
});
function enterFullscreen (el) {
  if (el.requestFullscreen) {
    el.requestFullscreen();
  } else if (el.mozRequestFullScreen) {
    el.mozRequestFullScreen();
  } else if (el.webkitRequestFullscreen) {
    el.webkitRequestFullscreen();
  } else if (el.msRequestFullscreen) {
    el.msRequestFullscreen();
  }
}
