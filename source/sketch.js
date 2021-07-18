// Height of wave
let amplitude = 75.0;

// Currenr angle of wave
let theta = 0.0;

// Basic slider
let mult = undefined;

function setup() {
  createCanvas(800, 800);

  mult = createSlider(1, 32, 1);
  mult.position(20, 20);
}

function draw() {
  // 42, 41, 62
  background(42, 41, 62);
  noFill();

  theta += 0.01;

  beginShape()

  let z = theta
  for (let x = 0; x < width + 1; x++) {
    let y = height / 2 + calcSine(theta + z, 1000) * amplitude
    z += TWO_PI / width

    strokeWeight(15)
    stroke(198, 81, 2);
    vertex(x, y);
  }

  endShape()
}

/**
 * Calcualting the sine function for the algorithm
 */
function calcSine(theta, n) {
  let result = 0
  let multiplier = mult.value()

  for (let a = 1; a < n; a += multiplier) {
    result += sin(theta * a) / a
  }

  return result
}