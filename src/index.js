import {WebGLRenderer,
        Mesh,
        MeshBasicMaterial,
        PerspectiveCamera,
        Scene,
        CubeGeometry,
        SphereGeometry,
        ConeGeometry,
        Vector3,
        Matrix4} from '../lib/three/three.modules';

var renderer, camera, scene;
var geometry,material,mesh,mesh2;

function init(){
  document.body.style.margin = 0;

  renderer = new WebGLRenderer({antialias:true});
  renderer.setSize(innerWidth,innerHeight);
  document.body.appendChild(renderer.domElement);

  scene = new Scene();

  camera = new PerspectiveCamera(75, innerWidth/innerHeight,0.01,1000);
  scene.add(camera);

  geometry = new CubeGeometry( 10, 10, 10 );
  material = new MeshBasicMaterial( { color: 0xff0000, wireframe: true} );

  mesh = new Mesh( geometry, material );
  mesh.position.set(0,0,-20)
  scene.add( mesh );

  geometry = new CubeGeometry( 1, 1, 1 );
  material = new MeshBasicMaterial( { color: 0x0000ff, wireframe: true} );

  var mesh2 = new Mesh( geometry, material );

  mesh2.position.set(1,-1,-3);
  camera.add( mesh2 );

  geometry = new SphereGeometry( .5, 8, 8 );
  material = new MeshBasicMaterial( { color: 0x0000ff, wireframe: true} );

  var mesh3 = new Mesh( geometry, material );

  mesh3.position.set(-1,-1,-3);
  camera.add( mesh3 );

  geometry = new ConeGeometry( .5, 1, 8 );
  material = new MeshBasicMaterial( { color: 0x0000ff, wireframe: true} );

  var mesh4 = new Mesh( geometry, material );

  mesh4.position.set(0,-1,-3);
  camera.add( mesh4 );

  //clue
  var xAxis = new Vector3(1,0,0)
  var yAxis = new Vector3(0,1,0)
  var zAxis = new Vector3(0,0,0)

  var newMatrix = new Matrix4().makeBasis ( xAxis, yAxis, zAxis );

  mesh2.geometry.applyMatrix(  newMatrix  );
  mesh3.geometry.applyMatrix(  newMatrix  );
  mesh4.geometry.applyMatrix(  newMatrix  );

}

function render(){
  requestAnimationFrame( render );
  renderer.render(scene, camera);
}

init();
render();
