let bird;
let bird2;
let pipes;

let parallax = 0.8;
let score = 0;
let maxScore = 0;

let birdSprite;
let pipeBodySprite;
let pipePeakSprite;
let myFont;
let backgroundImg;
let poster;

let backgroundX;
let gameOverFrame = 0;

let MENU = 0;

let touched = false;
let isOver = false;

let prevTouched = touched;

function preload() 
{
  pipeBodySprite = loadImage('./Assets/pipe.png');
  pipePeakSprite = loadImage('./Assets/pipe.png');
  birdSprite = loadImage('./Assets/flappybird.png');
  backgroundImg = loadImage('./Assets/city.png');
  myFont = loadFont('./Assets/flappy-font.ttf');
  poster = loadImage('./Assets/poster.png');
}

function setup() 
{
  createCanvas(800,600);
  reset();
}
function draw()
{
  menuScreen();
}
function playSinglePlayer()
{
  background(123,196,208);

  image(backgroundImg, backgroundX, 0, backgroundImg.width, height);
  backgroundX -= pipes[0].speed * parallax;

  if (backgroundX <= -backgroundImg.width + width) 
  {
    image(backgroundImg, backgroundX + backgroundImg.width, 0, backgroundImg.width, height);
    if (backgroundX <= -backgroundImg.width) 
    {
      backgroundX = 0;
    }
  }

  for (let i = pipes.length - 1; i >= 0; i--)
  {
    pipes[i].update();
    pipes[i].show();

    if (pipes[i].pass(bird)) 
    {
      score++;
    }

    if (pipes[i].hits(bird)) 
    {
      gameOver();
    }

    if (pipes[i].offscreen()) 
    {
      pipes.splice(i, 1);
    }
  }

  bird.update();
  bird.show();
  showScores();

  if ((frameCount - gameOverFrame) % 150 === 0)
  {
    pipes.push(new Pipe());
  }

  touched = (touches.length > 0);
  if (touched && !prevTouched) 
  {
    bird.up();
  }
  prevTouched = touched;
}

function playCoOp()
{
  background(123,196,208);

  image(backgroundImg, backgroundX, 0, backgroundImg.width, height);
  backgroundX -= pipes[0].speed * parallax;

  if (backgroundX <= -backgroundImg.width + width) 
  {
    image(backgroundImg, backgroundX + backgroundImg.width, 0, backgroundImg.width, height);
    if (backgroundX <= -backgroundImg.width) 
    {
      backgroundX = 0;
    }
  }

  for (let i = pipes.length - 1; i >= 0; i--)
  {
    pipes[i].update();
    pipes[i].show();

    if (pipes[i].pass(bird)) 
    {
      score++;
    }

    if (pipes[i].hits(bird)) 
    {
      gameOver();
    }

    if (pipes[i].pass(bird2)) 
    {
      score++;
    }

    if (pipes[i].hits(bird2)) 
    {
      gameOver();
    }

    if (pipes[i].offscreen()) 
    {
      pipes.splice(i, 1);
    }
  }

  bird.update();
  bird.show();

  bird2.update();
  bird2.show();

  showScores();

  if ((frameCount - gameOverFrame) % 150 === 0)
  {
    pipes.push(new Pipe());
  }

  touched = (touches.length > 0);
  if (touched && !prevTouched) 
  {
    bird.up();
  }
  prevTouched = touched;
}

function showScores() 
{
  textFont(myFont);
  textSize(32);
  fill(204, 156, 0);
  text('Score: ' + score,1, 32);
  text('Record: ' + maxScore,1, 64);
}

function gameOver()
{
  textAlign(CENTER, CENTER);
  fill(204, 156, 0);
  text('GAME OVER', width / 2, height / 2);
  textAlign(LEFT, BASELINE);
  maxScore = max(score, maxScore);
  isOver = true;
  noLoop();
}

function reset() 
{
  isOver = false;
  score = 0;
  backgroundX = 0;
  pipes = [];
  bird = new Bird();
  bird2 = new Bird();
  pipes.push(new Pipe());
  gameOverFrame = frameCount - 1;
  loop();
}

function keyPressed() 
{
  if (key === 'z') 
  {
    bird.up();
  }
    if (key === 'x') 
  {
    bird2.up();
    if (isOver) reset();
  }
}

function touchStarted() 
{
  if (isOver) menuScreen();
}

function menuScreen()
{
  print(mouseX, mouseY);
  textFont(myFont);
  background(255);
  fill(204, 156, 0);
  rect(50, 50, 200, 75);
  fill(204, 156, 0);
  rect(50, 200, 200, 75);
  fill(204, 156, 0);
  rect(50, 350, 200, 75);
  textSize(50)
  fill(255);
  text('START', 70, 106);
  text('EXIT', 94, 406);
  textSize(50);
  text('CO-OP', 75, 255);
  image(poster, 250, 50, 500, 375);

  if (MENU === 1)
  {
    playSinglePlayer();
    textSize(20);
    text('Right Click to return to MENU', 470, 40);
    if (mouseButton === RIGHT)
    {
      MENU = 0;
      reset();
    }
  }
  if (MENU === 2)
  {
    playCoOp();
    textSize(20);
    text('Right Click to return to MENU', 470, 40);
    if (mouseButton === RIGHT)
    {
      MENU = 0;
    }
  }
  if (MENU === 3)
  {
    background(255, 0, 0);
    textSize(75);
    text('COME AGAIN SOON!', 25, height / 2);
  }
}

function mouseClicked() 
{
  if (MENU === 0)
  {
      if (mouseX < 200 && mouseX > 50) 
      {
          if (mouseY < 125 && mouseY > 50) 
          {
              MENU = 1;
          }
          if (mouseY < 275 && mouseY > 200) 
          {
              MENU = 2;
          }
          if (mouseY < 425 && mouseY > 350) 
          {
              MENU = 3;
          }
      }
  }
}
