// Height of wave
let amplitude = 75.0;

// Currenr angle of wave
let theta = 0.0;

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(0);
  noFill();
  stroke(252, 238, 33);
  strokeWeight(8);

  theta += 0.01;

  beginShape()

  let z = theta
  for (let x = 0; x < width + 1; x++) {
    let y = height / 2 + calcSine(theta + z, 200) * amplitude
    z += TWO_PI / width

    vertex(x, y);
  }

  endShape()
}

/**
 * Calcualting the sine function for the algorithm
 */
function calcSine(theta, n) {
  let result = 0

  for (let a = 1; a < n; a += 4) {
    result += sin(theta * a) / a
  }

  return result
}