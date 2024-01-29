<template>
<div class="container page" id="work">
  <div class="page-title">
    <h2><span>03.</span>Навыки</h2>
  </div>
  <div class="content">
    <table class="skills" >
      <tbody>
        <tr v-for="skillTr in skills">
          <td v-for="skill in skillTr" >
            <div class="canvas-container" :id="skill.id"></div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
</template>

<script>
import * as THREE from "three";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";

const skillsArr = [
  {id: 'js', imgSrc: 'js.png'},
  {id: 'ts', imgSrc: 'ts.png'},
  {id: 'node', imgSrc: 'node.webp'},
  {id: 'react', imgSrc: 'react.png'},
  {id: 'vue', imgSrc: 'vue.png'},
  {id: 'rn', imgSrc: 'rn.png'},
  {id: 'dart', imgSrc: 'dart.png'},
  {id: 'flutter', imgSrc: 'flutter.png'},
  {id: 'angular', imgSrc: 'angular.png'},
]
export default {
  name: "Work",
  data() {
    return {
       renderers :{}
    }
  },
  computed: {
    skills() {
      const arr = skillsArr.reduce((acc, el, idx) => {
        if (!acc.length){
          const newArr = [el];
          acc.push(newArr);
        }else{
          if (acc[acc.length -1].length < 3){
            acc[acc.length -1].push(el)
          }else{
            const newArr = [el];
            acc.push(newArr);
          }
        }
        return acc;
      }, []);
      return arr
    }
  },
  methods: {
    initThreeJs() {
      const textureLoader = new THREE.TextureLoader();
      skillsArr.forEach(({id, imgSrc}) => {
        const container = document.getElementById(id);
        const scene = new THREE.Scene();
        const texture = textureLoader.load(`./src/assets/${imgSrc}`)
        const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(container.clientWidth, container.clientHeight);
        renderer.setClearColor( 0x000000, 0 );
        container.appendChild(renderer.domElement);

        const geometry = new THREE.BoxGeometry( 1, 1, 1 );
        const material = new THREE.MeshBasicMaterial( {map: texture, transparent: true} );
        const cube = new THREE.Mesh( geometry, material );
        scene.add( cube )
        const controls = new OrbitControls( camera, renderer.domElement );
        let isRotate = true;
        controls.addEventListener('start', function (e){
          isRotate = !isRotate
        })



        camera.position.z = 5
        function animate(){
          requestAnimationFrame(animate);
          controls.update()
          if(isRotate){
            cube.rotateZ(0.01)
            cube.rotateX(0.01)
            cube.rotateY(0.01)
          }else{
            cube.rotation.set(0,0,0)
          }
          renderer.render(scene, camera);
        }
        animate();

        this.renderers[id] = renderer;
      })
    },
    disposeRenderer(renderer, container) {
      const canvas = renderer.domElement;
      renderer.dispose();
      if (container && canvas.parentNode) {
        canvas.parentNode.removeChild(canvas);
      }
    }
  },
  beforeUnmount() {
    skillsArr.forEach(({ id }) => {
      const container = document.getElementById(id);
      const renderer = this.renderers[id];
      if (container && renderer) {
        this.disposeRenderer(renderer, container);
      }
    });
  },
  mounted() {
    this.initThreeJs();
  }
}
</script>

<style scoped>
.skills {
  overflow: scroll;
}
.canvas-container {
  width: 300px;
  height: 300px;
  margin: 0 auto;
}


@media (max-width: 1300px) {
  .canvas-container {
    width: 200px;
    height: 200px;
    margin: 0 auto;
  }
}
@media (max-width: 767px) {
  .canvas-container {
    width: 100px;
    height: 100px;
    margin: 0 auto;
  }
}
</style>


