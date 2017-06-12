var pig;
var pigImg;

function preload() {
pigImg = loadImage("images/donaldthepig.png");
}

function setup() {
  createCanvas(1000,400);

  pig = createSprite (width/2, height/2);
  pig.addImage(pigImg)

}

function draw() {
  background(211,211,211);
  drawSprites();
  }

function keyPressed() {
  if (keyCode == RIGHT_ARROW) {
    pig.setSpeed(1.5, 0);
  }
  else if (keyCode == LEFT_ARROW) {
    pig.setSpeed(1.5, 180);
  }
  else if (key == ' ') {
    pig.setSpeed(0, 0);
  }
  return false;
}
