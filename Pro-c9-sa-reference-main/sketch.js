// Create a box, on clicking the box the background of the screen should change





var box 
function prelaod(){
  
}

function setup(){
createCanvas(500, 700);
box = createSprite(200, 200, 30, 30); 
}

function draw(){
  background("black");

  if(keyDown("right")){
    background("blue"); 
    }
    
    if(keyDown("left")){
    background("red"); 
      }
      
    if(keyDown("up")){
    background("green"); 
        }
    if(keyDown("DOWN_ARROW")){
      background("yellow"); 
          }
    
          
    /* Control the box with the keys, and change it's position everytime by 5 */
    if(keyDown("w")){
      box.position.y = box.position.y - 5; 
    }

    if(keyDown("s")){
      box.position.y = box.position.y + 5; 
    }

if(keyDown("d")){
box.position.x = box.position.x + 5; 
}

if(keyDown("a")){
  box.position.x = box.position.x - 5; 
  }


  drawSprites();
}