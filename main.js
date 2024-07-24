import * as THREE from 'three';
import { PCDLoader } from 'three/addons/loaders/PCDLoader.js';


document.addEventListener("DOMContentLoaded", function () {
  const scene = document.querySelector("a-scene");
  const entity = document.getElementById("point-cloud");

  scene.addEventListener("loaded", () => {
    document.querySelector(".arjs-loader").style.display = "none";
  });

  const loader = new PCDLoader();
  loader.load('https://aidenhammond.github.io/smallsat-point-clouds/exp-150.pcd', function (points) {
    points.geometry.center();
    points.scale.set(0.01, 0.01, 0.01); // Adjust scale as needed
    entity.object3D.add(points);
  });

  function animate() {
    requestAnimationFrame(animate);
  }
  animate();
});
