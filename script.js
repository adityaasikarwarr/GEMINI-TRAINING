import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.160/build/three.module.js";

import { GLTFLoader } from "https://cdn.jsdelivr.net/npm/three@0.160/examples/jsm/loaders/GLTFLoader.js";

// Scene

const scene = new THREE.Scene();

scene.background = new THREE.Color("#bde0fe");

// Camera

const camera = new THREE.PerspectiveCamera(
  45,

  500 / 600,

  0.1,

  1000,
);

camera.position.z = 5;

// Renderer

const renderer = new THREE.WebGLRenderer({
  antialias: true,
});

renderer.setSize(500, 600);

document.getElementById("avatar").appendChild(renderer.domElement);


const light = new THREE.HemisphereLight(
  0xffffff,

  0x444444,

  3,
);

scene.add(light);

let character;

let mixer;

// Load 3D Avatar

const loader = new GLTFLoader();

loader.load(
  "avatar.glb",

  function (gltf) {
    character = gltf.scene;

    scene.add(character);

    character.position.y = -1;

    character.scale.set(
      1.5,

      1.5,

      1.5,
    );

    mixer = new THREE.AnimationMixer(character);
  },
);

// Animation loop

const clock = new THREE.Clock();

function animate() {
  requestAnimationFrame(animate);

  let delta = clock.getDelta();

  if (mixer) mixer.update(delta);

  if (character) {
    character.position.y = -1 + Math.sin(Date.now() * 0.002) * 0.05;

    character.rotation.y = Math.sin(Date.now() * 0.001) * 0.2;
  }

  renderer.render(
    scene,

    camera,
  );
}

animate();

// SIGN SYSTEM

const signs = {
  hello: "👋 Hello! Nice to meet you",

  thankyou: "🙏 Thank you",

  love: "❤️ I love helping you",
};

window.changeSign = function (type) {
  document.querySelector(".bubble").innerHTML = signs[type];

  if (character) {
    character.rotation.y += 0.5;
  }
};
const messages = {
  hello: "👋 Hello! Nice to meet you",

  thankyou: "🙏 Thank you!",

  love: "❤️ I love communicating",
};

function changeSign(type) {
  document.querySelector(".speech").innerHTML = messages[type];

  document.querySelector(".character").style.transform = "rotate(5deg)";

  setTimeout(() => {
    document.querySelector(".character").style.transform = "rotate(0deg)";
  }, 500);
}
