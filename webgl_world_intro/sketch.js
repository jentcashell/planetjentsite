let pjlogo;
let logoTexture;

let camX, camY,camZ;
let camR;

function preload() {
  // Load model with normalise parameter set to true
  pjlogo = loadModel("webgl_world_intro/models/pjlogo_dec01.obj", true);
  logoTexture = loadImage("webgl_world_intro/assets/ground.jpeg")
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
 
}

function draw() {
  background(0);
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

  //ambientMaterial(250);

  

  // push();
  // translate(0,-200);
  // rotateX(HALF_PI);
  // texture(theVid);
  // plane(1200,1200);
  // pop();

  //push();
  //clear();
  scale(1); // Scaled to make model fit into canvas
  //rotateX(frameCount * 0.01);
  rotateX(135);
  
  
  normalMaterial(); // For effect
  //ambientMaterial();
  //texture(logoTexture)

  push();
    translate(0, 0, 0);

    push();
    rotateX(frameCount * 0.001);
    rotateY(frameCount * 0.02);
    rotateZ(frameCount * 0.001);
    scale(frameCount * 0.005);
    model(pjlogo);
    pop();

  pop();

  
 
  // if (mouseIsPressed) {
  //   push();
  // for (let k = 0; k < 300; k+=50){
  //   //rotateY(0.1);
  //   scale(1.5);
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
  // }
}