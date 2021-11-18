var box;

function setup() {
  createCanvas(400,400);
  box = createSprite (200, 200, 20, 20);
}

function draw() 
{
  background(30);

  drawSprites ();

  if (keyIsDown(RIGHT_ARROW)) {
    background("red");
  } 

  if (keyIsDown(LEFT_ARROW)) {
    background("blue");
  } 

  if (keyIsDown(UP_ARROW)) {
    background("purple");
  } 

  if (keyIsDown(DOWN_ARROW)) {
    background("green");
  } 

}