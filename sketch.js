var wall1,wall2,wall3,wall4;
var enemy1;
var fightbttn,switchbttn,itembttn
var eHealth = 100;
var pHealth = 100;



function preload(){
  direWolf = loadImage("dire Wolf.png")
  fight = ("fight.png")
  item = ("item.png")
  potion = loadImage("potion.png")
  switch1 = ("switchbttn.png") 
  knight = loadImage("hero.png")
  knightW = loadImage("heroW.png")
}

function setup(){
  createCanvas(900,500);
  wall1 = createSprite(300,300,4,70);
  wall2 = createSprite(600,300,4,70);
  wall3 = createSprite(450,265,305,4);
  wall4 = createSprite(450,335,305,4);
  sbox1 = createSprite(445,340,800,4);
  sbox2 = createSprite(445,450,800,4);
  sbox3 = createSprite(847,395,4,114);
  sbox4 = createSprite(45,395,4,114);
  enemy1 = createSprite(450,163,50,50);
  hero1 = createSprite(200,405,50,50);
  hero1.addImage(knightW)
  enemy1.addImage(direWolf)
  enemy1.scale = 0.5
  hero1.scale = 0.8
  wall1.shapeColor = "red"
  wall2.shapeColor = "red"
  wall3.shapeColor = "red"
  wall4.shapeColor = "red"
  sbox1.shapeColor = "green"
  sbox2.shapeColor = "green"
  sbox3.shapeColor = "green"
  sbox4.shapeColor = "green"
  fightbttn = createImg(fight)
  switchbttn = createImg(switch1)
  itembttn = createImg(item)
  switchbttn.position(404,233)
  fightbttn.position(306,270)
  itembttn.position(500,245)
  fightbttn.size(90,60)
  switchbttn.size(90,155)
  itembttn.size(94,130) 
}

function draw() {
  background(0);
  handleControls()
  
  drawSprites();

  push();
  fill("gray");
  rect(550,  150, 100, 20);
  fill("red");
  rect(550,  150, eHealth, 20);
  noStroke();
  pop();

  push();
  fill("red");
  rect(60,390,100,20);
  fill("lime");
  rect(60,390,pHealth,20)
  pop();
}

function handleControls(){
  fightbttn.mouseClicked(
    ()=>{
      box = createSprite(700,395,300,110)
      box.shapeColor = "black"
      bt1 = createImg("lttack.png")
      bt1.size(150,100)
      bt1.position(550,340)
      bt2 = createImg("httack.png")
      bt2.size(150,100)
      bt2.position(700,340)
      bt3 = createImg("parry.png")
      bt3.size(150,100)
      bt3.position(550,400)
      bt4 = createImg("expo.png")
      bt4.size(150,100)
      bt4.position(700,400)
    }
  )
}
