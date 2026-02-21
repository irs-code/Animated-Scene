// <-- Prep Sprites -->

// Characters
var peng = createSprite(425,360);
var person1 = createSprite(200, 200);
var person2 = createSprite(200, 200);

// Sun
var sun = createSprite(330, 55);
var sunRotate = randomNumber(-2,10);

// Cloud
var cloud = createSprite(130, 57);
var cloudX = randomNumber(-2,6);

// <-- Draw Function -->
function draw() {
  
  // Updated Variables
  sunRotate = sunRotate + 0.1; 
  cloudX = cloudX + randomNumber(-0.2, 0.2); 

  // <- Background ->
  fill("white");
  rect(-2,-2,500,500);
  
  // Ground
  fill("grey");
  rect(0,300, 400,1);
  
  // Snowball
  fill("white");
  ellipse(140,289,10,10);
  ellipse(135,298,10,10);
  ellipse(145,298,10,10);
  
  // Water
  fill("aqua");
  rect(-2,301, 400,400);
 
  // <- Sprites -> 

  // Penguin
  peng.setAnimation("peng");
  peng.scale = 0.15;
  peng.rotation = 270;
  peng.x = peng.x - 5;

  // Person1
  person1.setAnimation("person1");
  person1.scale = 0.2;
  person1.x = 100;
  person1.y = 270;
  person1.rotation = randomNumber(-3,3);

  // Person 2
  person2.setAnimation("person2");
  person2.scale = 0.2;
  person2.x = 250;
  person2.y = 270;
  person2.rotation = randomNumber(-3,3);
  
  // Sun
  sun.setAnimation("sun");
  sun.scale = 0.75;
  sun.rotation = sun.rotation - sunRotate;
  
  // Cloud
  cloud.setAnimation("cloud");
  cloud.scale = 0.5;
  cloud.x = cloud.x + cloudX;

  // <- Text ->
  fill("black");
  text("What do mathematicians do after a snowstorm?", 0,200); // Person1
  text("I don't know!", 220,230); // Person2
  text("Make snow angles!", peng.x - 5, 329); // Penguin

  // Draw
  drawSprites();
}
