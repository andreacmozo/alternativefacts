var player;
var playerImg;
var canvas;
var context;

function preload () {
	playerImg = loadImage('/assets/donaldthepig.png');
}

function setup() {
  canvas = document.getElementById("defaultCanvas");
  context = canvas.getContext('2d');
  
  player.addImage(playerImg);
  
}

function draw() {
 player.position.x = mouseX;
 player.position.y = mouseY;
 
}
