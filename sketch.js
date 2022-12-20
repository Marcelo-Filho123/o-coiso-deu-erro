var cutscene;


function setup() {
  createCanvas(600, 400);
  cutscene = new Cutscene();
}

function draw() {
  background(220);
  cutscene.showCutscene();
}