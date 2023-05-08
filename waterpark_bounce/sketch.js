var x = [];
var y = [];
var v_x = [];
var v_y = [];
var n_balles = 6;
let img;

function preload(){
  img = loadImage('images/mj_head_03.png');
}


function setup(){
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  for(var i = 0; i < n_balles ; i = i + 1){
    x.push(random(0, width));
    y.push(random(0, height));
    v_x.push(random(-5, 5));
    v_y.push(random(-5, 5));
  }
}

function draw(){
  //background(255,10);
  clear();
  for (var i = 0; i < x.length ; i = i + 1){
    x[i] = x[i] + v_x[i];
    y[i] = y[i] + v_y[i];
  

    image(img,x[i], y[i], 80, 80);
  
    if (x[i] >= width || x[i] <= 0){
       v_x[i] = -v_x[i]; 
    }   
  
    if (y[i] >= height || y[i] <= 0){
      v_y[i] = -v_y[i]; 
    } 
    v_y[i] = v_y[i] + 0.5;
  }
}

function mousePressed(){  
  x.push(mouseX);
  y.push(mouseY);
  v_x.push(random(-5, 5));
  v_y.push(random(-5, 5));
}