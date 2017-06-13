var pig;
var pigImg;

function preload() {
pigImg = loadImage("images/donaldthepig.png");
}

function setup() {
  createCanvas(1000,400);

  pig = createSprite (200, 200, width/2, height/2);
  pig.addImage(pigImg)
}

function draw() {
  background(211,211,211);
  drawSprites();

  if (pig.overlapPixel(1300,200)){
   pig.position.x = 200;
   pig.position.y = 200;
   pig.setSpeed(0, 0);
    }
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
