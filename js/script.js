let hero;
let x = 0;
let dx = 5;
let y = 0;
let dy = -5;
let fx = 0;
let fy = 0;
let g = 100;
let s = 0;
let px = 0;
let py = 0;


function setup() {
  createCanvas(800, 800);
  fx = random(100, 700);
  fy = random(100, 700);
  px = random(100, 700);
  py = random(100, 700);
}

function draw() {

}

function preload() { // preload() runs once
    
  hero = loadImage("hero.png");
}


function draw() {

  background('#FFFFFF');
  fill('#FA0D0D');
  hero.resize(0, 200);
  image(hero, x, y);
  fill('#764747');
  fill(255, 0, 0);
  rect(px, py, 50, 50);
  ellipse(fx, fy, 50, 50);

  rect(width - 130, 30, g, 30);
  g = 100 - 5 * millis() / 1000 + s;
  //движение врага
  if (x > px) {
    px = px + 1;
  } else if (x < px) {
    px = px - 1;
  }

  if (y > py) {
    py = py + 1;
  } else if (y < py) {
    py = py - 1;
  }
  if (x > px - 50 && x < px + 10) {
    if (y > py - 10 && y < py + 50) {
      s = s - 6;
    }
  }


  //условия поражения
  if (g <= 0) {
    //g = 0;
    background(0);
    fill(255);
    textSize(50);
    text("конец", 30, 400);
  } else {
    //оставшиеся жизни
    fill('#7C5454');
    if (g < 20) {
      fill(250, 0, 0);
    }

  }



  if (x > fx - 100 && x < fx + 50) {
    if (y > fy - 180 && y < fy + 180) {
      fx = random(100, 700);
      fy = random(100, 700);
      s = s + 30;
    }
  }
}



function keyPressed() {
  if (keyCode == RIGHT_ARROW) {
    x = x + dx;
  } else if (keyCode == LEFT_ARROW) {
    x = x - dx;
  }
  if (keyCode == UP_ARROW) {
    y = y + dy;
  } else if (keyCode == DOWN_ARROW) {
    y = y - dy;
  }
}
