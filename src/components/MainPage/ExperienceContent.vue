<template>
  <div class="section" ref="containerThree">
  </div>
</template>

<script>
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

export default {
  name: "ExperienceContent",
  methods: {
    initThreeJs(){
      const canvas = this.$refs.containerThree;
      const scene = new THREE.Scene();
      const textureLoader = new THREE.TextureLoader();
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer();
      renderer.setSize(canvas.clientWidth, 800);
      renderer.setClearColor( 0x000000, 0 );
      canvas.appendChild(renderer.domElement);


      const geometry = new THREE.BoxGeometry( 12, 12, 12 );
      const material = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
      const cube = new THREE.Mesh( geometry, material );
      scene.add( cube )

      const controls = new OrbitControls( camera, renderer.domElement );
      camera.position.z = 12

      function animate(){
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
      }
      animate();
    },
  },
  mounted() {
     this.initThreeJs();
  }
}
</script>

<style scoped>
.section {
  min-height: 800px;
  width: 100%;
}

</style>
