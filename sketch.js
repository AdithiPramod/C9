var box;
function setup() {
  createCanvas(400,400);
  box=createSprite(200,200,20,20);
}

function draw() 
{
  background(30);

  if (keyDown("right")){
    box.x += 2;
  }

  if (keyDown("up")){
    box.y -= 2;
  }

  if (keyDown("left")){
    box.x -= 2;
  }

  if (keyDown("down")){
    box.y += 2;
  }
  

  drawSprites();
}




