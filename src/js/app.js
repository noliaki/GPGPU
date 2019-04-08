import * as Three from 'three'

const scene = new Three.Scene()
const camera = new Three.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
)
camera.lookAt(scene.position)
camera.position.z = 100
// camera.position.x = -100

const renderer = new Three.WebGLRenderer()

const planeGeo = new Three.PlaneGeometry(50, 50)
const planeMaterial = new Three.MeshBasicMaterial({
  color: 0x00aaff
})

const plane = new Three.Mesh(planeGeo, planeMaterial)

plane.position.x = 15

scene.add(plane)

const sphereGo = new Three.SphereGeometry(4, 20, 20)
const sphereMaterial = new Three.MeshBasicMaterial({
  wireframe: true
})
const sphere = new Three.Mesh(sphereGo, sphereMaterial)

scene.add(sphere)

renderer.setClearColor(new Three.Color(0xcccccc))
renderer.setSize(window.innerWidth, window.innerHeight)
document.getElementById('app').appendChild(renderer.domElement)
renderer.render(scene, camera)
