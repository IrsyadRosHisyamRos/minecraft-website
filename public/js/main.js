const panoramaImage = new PANOLENS.ImagePanorama("./img/pano-image.png");
const imageContainer = document.querySelector(".pano-bg-container");
//infospot: https://pchen66.github.io/Panolens/examples/panorama_infospot.html
//try:      https://www.mapcore.org/topic/24535-online-tools-to-convert-cubemaps-to-panoramas-and-vice-versa/
//guide:    https://www.reddit.com/r/Minecraft/comments/sygn5/how_to_make_minecraft_panoramas_example_pics/
//datapack: https://www.planetminecraft.com/data-pack/panorama-maker/
//docu:     https://pchen66.github.io/Panolens/

const viewer = new PANOLENS.Viewer({
  container: imageContainer,
  cameraFov: 90,
  autoRotate: true,
  autoRotateSpeed: 0.3,
  viewIndicator: false,
  indicatorSize: 50,
  controlBar: false
});

viewer.add(panoramaImage);
viewer.OrbitControls.enabled = false;
viewer.tweenControlCenter( new THREE.Vector3(0, -1, 0), 0 );