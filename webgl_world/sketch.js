let jent01;
let ground;
let vid;

let camX, camY,camZ;
let camR;

function preload() {
  // Load model with normalise parameter set to true
  jent01 = loadModel('webgl_world/models/jentsworld_character01_mixamotest.obj', true);
  //ground = loadImage('webgl_world/assets/ground.jpeg');
  //ground = loadVideo('webgl_world/assets/interpolation.mp4');
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  vid = createVideo("webgl_world/assets/interpolation.mp4");
  vid.size(400, 400);
  vid.volume(0);
  vid.loop();
  vid.hide();
}

function draw() {
  background(10);
  orbitControl();
  pointLight(255,255,255,0,-200,200);

  //earthquake camera
  // camX = random(-10,10);
  // camY = random(-10,10);
  // camZ = random(-5,5);
  // camera(camX,camY,camZ +(height/2)/tan(PI/6), 0,0,0,0,1,0);
  // camera(camX,camY,camZ +(height/2)/tan(PI/6), camY,camY,camZ,0,1,0);
  //camR = sin 

  //camera(0,0,(height/2)/tan(PI/6), 0,0,0,0,1,0);


  let theVid = vid.get();
  push();
  
  
  translate(0,200);
  texture(theVid);
  plane(1200,2600);

  rotateX(HALF_PI);
  translate(0,200);
  plane(1200,2000);
  pop();

  //ambientMaterial(250);

  

  // push();
  // translate(0,-200);
  // rotateX(HALF_PI);
  // texture(theVid);
  // plane(1200,1200);
  // pop();

  //push();
  //clear();
  scale(0.9); // Scaled to make model fit into canvas
  //rotateX(frameCount * 0.01);
  rotateX(135);
  
  normalMaterial(); // For effect
  push();
  
  for (let i = 200; i < 500; i+=50){
    //rotateY(0.1);
    translate(i, 0, -i/2);

    push();
    //rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.02);
    model(jent01);
    pop();
  }
  pop();
  push();
  for (let j = -200; j > -500; j-=50){
    //rotateY(0.1);
    translate(j, 0, j/2);
    

    push();
    //rotateX(frameCount * 0.01);
    rotateY(frameCount * -0.02);
    
    model(jent01);
    pop();
  }

  pop();
  // push();
  
  // for (let k = 0; k < 500; k+=50){
  //   //rotateY(0.1);
  //   scale(1.2);
  //   translate(k, 0,-200);
  //   rotateZ(frameCount * -0.01);
  //   rotateX(frameCount * 0.01);
  //   rotateY(frameCount * 0.01);

  //   push();
  //   //rotateX(frameCount * 0.01);
  //   rotateY(frameCount * 0.02);
  //   model(jent01);
  //   pop();
  // }
  // pop();
  if (mouseIsPressed) {
    push();
  for (let k = 0; k < 300; k+=50){
    //rotateY(0.1);
    scale(1.5);
    translate(k, 0,-200);
    rotateZ(frameCount * -0.01);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);

    push();
    //rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.02);
    model(jent01);
    pop();
  }
  pop();
  }
}