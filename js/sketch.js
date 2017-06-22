var pig;
var bg;
var leveltitle = "";

function preload() {

bg = loadImage("images/background.png");
}

function setup() {
  //Add all images
  //use console.log () to debug
  createCanvas(1000,400);

  pig = createSprite(110, 280, width/2, height/2);
  pig.addAnimation("normal", "images/sprite_0.png", "images/sprite_1.png", "images/sprite_2.png", "images/sprite_3.png", "images/sprite_4.png")
  pig.looping = false;
}

function draw() {
  background(bg);

  //anytime you want ot modify text, it has to go before text
  fill ("red");
  textSize (32);
  text("Alternative World", 10, 30);

  drawSprites ();

  animation(pig, 110, 280);

if (pig.position.x >= 1200){
  pig.position.x = 110;
  pig.position.y = 280;
  pig.setSpeed(0, 0);
 }
}

function keyPressed() {
 if (keyCode == RIGHT_ARROW) {
   pig.setSpeed(3.0, 0);
 }
 else if (keyCode == LEFT_ARROW) {
   pig.setSpeed(3.0, 180);
 }
 else if (key == ' ') {
   pig.setSpeed(0, 0);
 }
 return false;
 }

function level1 () {

}

function level2 () {

}
