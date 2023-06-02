let R = new Random();
let t = templates[Math.floor(R.random_dec() * templates.length)];

let replaceTags = (str) => {
  let rx = /\^\w+\b/g;
  let g1 = R.random_bool(0.5);
  let g2 = R.random_bool(0.5);
  let g3 = R.random_bool(0.5);
  g2 = g1 && g2 ? !g2 : g2;

  return str
    .replaceAll(rx, (s) => {
      let t = s.replace("^", "");
      if (/^g\d/.test(t)) return s;
      return tags[t][Math.floor(R.random_dec() * tags[t].length)];
    })
    .replaceAll(
      rx,
      (s) => genders[/o/.test(s) ? +g2 : +g1][s.slice(2, 3) - 1][+g3]
    )
    .split("\n")
    .map((l) => l.charAt(0).toUpperCase() + l.slice(1))
    .join("\n");
};

let copy = replaceTags(t);

let h1, h, s1, b1, b, i, j, h2;
let p = 1;
let mv = 50;
let colmv = 2;
let alph = 5;
let maxVary;

function setup() {
  createCanvas(500, 500);
  colorMode(HSB, 360, 120, 100, 255);
  noStroke();
  maxVary = 20; //random(5,15);
  getColor();
  numb = (width * height) / 25; //number of watercolor drawings needed based on square inches
  background(h1, s1 - 10, b1 - 30);
  fillBackground();
  // second color and shorter random walk
  getColor();
  numb = (width * height) / 250;
  fillBackground();

  filter(BLUR, 0.5);
  paperTexture();

  // text
  textSize(16);
  textFont("courier new");
  textAlign(LEFT, CENTER);
  textStyle(BOLD);

  textLeading(random(10, 30));

  fill(0);

  translate(0, 0);
  rotate(PI / -19);
  text(copy, 0, 0, width - 80, height - 10); // Text wraps within text box
}

function getColor() {
  h1 = h = random(360);
  hMax = h1 + maxVary;
  hMin = h1 - maxVary;
  s1 = s = 90;
  sMax = 100;
  sMin = 40;
  b1 = b = 70;
  bMax = 70;
  bMin = 30;
  i = random(width);
  j = random(height);
}

function fillBackground() {
  for (q = 0; q < numb; q++) {
    i = i + random(-mv, mv);
    j = j + random(-mv, mv);
    h = h + random(-colmv, colmv);
    s = s + random(-colmv * 2, colmv * 2);
    b = b + random(-colmv * 2, colmv * 2);
    if (i < 0) {
      i = width;
    } else if (i > width) {
      i = 0;
    }
    if (j < 0) {
      j = height;
    } else if (j > height) {
      j = 0;
    }
    if (h > hMax) {
      h = hMax;
    } else if (h < hMin) {
      h = hMin;
    }
    h2 = h;
    if (h > 360) {
      h2 = h - 360;
    } else if (h < 0) {
      h2 = h + 360;
    }
    if (s > sMax) {
      s = sMax;
    }
    if (s < sMin) {
      s = sMin;
    }
    if (b > bMax) {
      b = bMax;
    } else if (b < bMin) {
      b = bMin;
    }
    fill(h2, s, b, alph);
    push();
    translate(i, j);
    rotate(random(PI * 2));
    beginShape();
    for (m = 0; m < PI * 2; m += 1) {
      r = random(20, 50);
      let x = cos(m) * r;
      let y = sin(m) * r;
      vertex(x, y);
    }
    endShape(CLOSE);
    pop();
  }
}

function paperTexture() {
  noFill();
  textureNum = (width * height) / 50;
  for (i = 0; i < textureNum; i++) {
    stroke(random(100, 150), random(100, 150), random(100, 150), 6);
    x = random(-width * 0.2, width * 1.2);
    y = random(-height * 0.2, height * 1.2);
    push();
    translate(x, y);
    strokeWeight(3);
    point(0, 0);
    strokeWeight(1);
    rotate(random(PI * 2));
    curve(
      random(60, 220),
      0,
      0,
      random(-50, 50),
      random(-50, 50),
      random(60, 120),
      random(60, 120),
      random(60, 220)
    );
    pop();
  }
}
