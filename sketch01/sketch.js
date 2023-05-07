//audio reactive program
//idea: sliders, pads, musical instrument, perlin noise controller.
//task: sliders (css them up)
//task: r refresh

let img01, img02, img03, img04, img05,img06;
let sound01, sound02, sound03, sound04, sound05, sound06;
let soundList = [];

let imgArray;
let imgs = [];

let soundArray;
let sounds = [];

let mic;

let xPos = 100;
let yPos = 100;
let xPos2 = 500;
let yPos2 = 700;
let speedX = 5;
let speedY = 3;

let h;

let spacingX, spacingY;
let repX = 6;
let repY = 8;

function preload() {
  img01 = loadImage("sketch01/alienpiece03.png");
  img02 = loadImage("sketch01/alienpiece01.png");
  img03 = loadImage("sketch01/Painting Collage 230221 oval.png");
  img04 = loadImage("sketch01/pixel fruit demon blur.png");
  img05 = loadImage("sketch01/mj_head_04.png");
  img06 = loadImage("sketch01/Subject02.png");

  sound01 = loadSound("sketch01/sound01.wav");
  sound02 = loadSound("sketch01/sound02.wav");
  sound03 = loadSound("sketch01/sound03.wav");
  sound04 = loadSound("sketch01/sound05.mp3");
  sound05 = loadSound("sketch01/sound06.mp3");
  sound06 = loadSound("sketch01/sound07.wav");
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  //textAlign(CENTER);
  colorMode(HSB,100);
  angleMode(DEGREES);
  frameRate(30);
  imgs = [img01, img02, img03, img04, img05, img06];
  imgArray = floor(random(0, 5));

  sounds = [sound01, sound02, sound03, sound04, sound05, sound06];
  soundArray = floor(random(0, 5));

  mic = new p5.AudioIn();
  mic.start();
  fft = new p5.FFT();
  fft.setInput(mic);
  
  spacingX = width / repX;
  spacingY = height / repY;
}

function draw() {
  //background(255,95);
  clear(50,50);
  h = random(0, 100);
  
  
  //TEXT - INSTRUCTION
  textSize(30);
  fill(h, 100, 100);
  text("Click! (To hear sounds)", width / 3, height * 0.9, 400);
  text("Make some noise/ Play some music", width / 10 - 100, height * 0.9, 400);

  //SET UP
  let level = mic.getLevel() * 10;
  let s = map(level, 0, 1, 100, windowHeight / 2);
  let r = map(level, 0, 1, -80, 60);
  let soundSpeed = map(level, 0, 1, 0.5, 8);
  let repMult = floor(map(level, 0, 2, 1, 10));
  let fr = floor(map(level, 0, 8, 1,140));//must adjust live
  let d = dist(xPos, yPos, mouseX, mouseY);
  
  //SPECTRUM
  let spectrum = fft.analyze();
  for (i = 0; i < spectrum.length; i+=35) {
    image(img01, i , map(spectrum[i], 0, 255, height, 0),100,100);
  }


   console.log(fr);
  //GRID
  let rand = map(level, 0, 1, -100, 100);
  //for(let i = 0; i < 8*s; i += s){
  for (let j = 0; j < repY; j ++) {
    for (let i = 0; i < repX; i ++) {
       push();
      blendMode(DIFFERENCE);
      translate(spacingX/2, spacingY/2);
      translate(i * spacingX, j * spacingY);
      rotate(r);
      //frameRate(20);
      //tint(random(30,80),70,100,90);
      image(img05, 0, 0, s * 0.5, s * 0.5);
      repY = repMult;
      //repX = repMult;
       pop();
    }
  }
  
  //   for (let j = 0; j < repY; j ++) {
  //   for (let i = 0; i < repX; i ++) {
  //      push();
  //     blendMode(DIFFERENCE);
  //     translate(spacingX/2, spacingY/2);
  //     translate(i * spacingX +random(rand), j * spacingY +random(rand));
  //     rotate(r+random(rand));
  //     tint(random(20,80),70,100,90);
  //     image(img05, 0, 0, s * 0.5, s * 0.5);
  //     repY = repMult;
  //     //repX = repMult;
  //      pop();
  //   }
  // }

  

  //BOUNCE
  let sizeRandomW = random(0.1, 5);
  let sizeRandomH = random(0.1, 5);
  let imgsRandom = random(imgs);
  push();
  translate(xPos, yPos);
  image(imgsRandom, 0, 0, s * sizeRandomW, s * sizeRandomH);
  //frameRate(fr);
  pop();
  
  xPos += speedX * soundSpeed;
  yPos += speedY * soundSpeed;

  if (xPos >= width - s / 2 || xPos <= s / 2) {
    speedX = -speedX;
  }
  if (yPos >= height - s / 2 || yPos <= s / 2) {
    speedY = -speedY;
  }
  
//   push();
//   translate(xPos2, yPos2);
//   image(imgsRandom, 0, 0, s * sizeRandomW/5, s * sizeRandomH/5);
  
//   xPos2 += speedX * soundSpeed;
//   yPos2 += speedY * soundSpeed;
  
//   if (xPos2 >= width - s / 2 || xPos2 <= s / 2) {
//     speedX = -speedX;
//   }
//   if (yPos2 >= height - s / 2 || yPos2 <= s / 2) {
//     speedY = -speedY;
//   }
//   pop();
  

  //CLICK + SOUND
  let soundsRandom = random(sounds);

  if (mouseIsPressed) {
    soundsRandom.play();
    tint(0, 100, 100);
    xPos = mouseX;
  yPos = mouseY;

  } else {
    soundsRandom.stop();
    noTint();
  }
}
