/* globals requestAnimationFrame */

import * as Three from 'three'
import OrbitControls from 'three-orbitcontrols'
// import { GPUComputationRenderer } from 'gpucomputationrender-three'
import vertexShader from './shader/vertex-shader'
import fragmentShader from './shader/fragment-shader'
// import conputeVelocityShader from './shader/compute-velocity'
// import conputePositionShader from './shader/compute-position'

const SIZE = 500
const PARTICLES = SIZE * SIZE

const scene = new Three.Scene()
const camera = new Three.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
)

const renderer = new Three.WebGLRenderer({
  canvas: document.getElementById('app')
})
const controls = new OrbitControls(camera, renderer.domElement)
camera.position.z = 100

const shaderMaterial = new Three.ShaderMaterial({
  vertexShader,
  fragmentShader,
  blending: Three.AdditiveBlending,
  depthTest: false,
  transparent: true,
  vertexColors: true
})

const geometry = new Three.BufferGeometry()

