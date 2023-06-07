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
    .replace(/^(?:[^a-zA-Z]*([a-zA-Z]))/gm, (x) => x.toUpperCase());
};

let copy = replaceTags(t);

let h1, h, s1, b1, b, i, j, h2;
let p = 1;
let mv = 50;
let colmv = 2;
let alph = 5;
let maxVary;

function setup() {
  createCanvas(600, 600);
  colorMode(HSB, 360, 120, 100, 255);
  textFont("monospace");
  angleMode(DEGREES);

  /***************************************************** */
  // noStroke();
  // maxVary = 20; //random(5,15);
  // getColor();
  // numb = (width * height) / 25; //number of watercolor drawings needed based on square inches
  // background(h1, s1 - 10, b1 - 30);
  // //paperTexture();
  // fillBackground();
  // // second color and shorter random walk
  // getColor();
  // numb = (width * height) / 250;
  // fillBackground();

  // filter(BLUR, 0.5);
  // paperTexture();
  /***************************************************** */

  // noStroke();

  let cnv = createGraphics(width, height);
  let ctx = cnv.canvas.getContext("2d");

  ctx.filter = "blur(300px)";
  cnv.colorMode(HSB, 360, 120, 100, 255);
  cnv.background(62, 15, 95);
  cnv.fill(28, 90, 23);
  cnv.ellipse(0, 0, 1000, 500);
  cnv.fill(106, 64, 24);
  cnv.ellipse(0, 0, 400, 800);

  ctx.filter = "blur(0)";
  cnv.filter(OPAQUE);
  image(cnv, 0, 0);
  push();
  blendMode(SCREEN);
  paperTexture();
  pop();
  push();
  blendMode(HARD_LIGHT);
  backgroundText();
  pop();
  backgroundText2();
  paperTexture();

  textBlotch();
  paperStrip();
  paperStrip2();
  textStrips();
}

function paperStrip() {
  let noiseScale = 0.02;

  push();
  rectMode(CENTER);
  translate(0, height / 4);
  rotate(55);

  blendMode(DIFFERENCE);

  for (let x = 0; x < width + 300; x++) {
    let noiseVal = noise((mouseX + x) * noiseScale, noiseScale);
    stroke(255);
    line(x, noiseVal * 50, x, 500);
  }
  pop();
}

function paperStrip2() {
  let noiseScale = 0.02;

  push();
  rectMode(CENTER);
  translate(width, height / 3);
  rotate(230);
  blendMode(DIFFERENCE);

  for (let x = 0; x < width + 300; x++) {
    let noiseVal = noise((mouseX + x) * noiseScale, noiseScale);
    stroke(255);
    line(x, noiseVal * 50, x, 500);
  }
  pop();
}

function textBlotch() {
  function process(letters, yPos) {
    let x = -20,
      y = yPos;
    var stepSize = 5.0;
    var fontSizeMin = 3;
    var counter = 0;
    push();

    for (let i = 0; i < letters.length; i++) {
      let d = random(40, 80);
      textFont("monospace");
      textSize(fontSizeMin + d / 2);

      let newLetter = letters.charAt(counter);
      stepSize = textWidth(newLetter);

      if (d > stepSize) {
        push();
        translate(x, y);
        fill(255);
        blendMode(OVERLAY);
        text(newLetter, 0, 0);
        pop();

        counter++;
        x = x + stepSize;
        y = yPos;
      }
    }
    pop();
  }
  copy.split(/\n/).forEach((c, i) => process(c, 40 + i * 60));
}

function textStrips() {
  let copyWidth = 300;
  let copyX = 180;
  let copyY = 180;
  let fSize = 16;
  let leading = 16;

  textStyle(BOLD);
  fill(0);
  textSize(fSize);
  textLeading(leading);

  let border = 2;
  let pos = copyY;

  copy.split(/\n/).forEach((c, i) => {
    const tWidth = textWidth(c + "..");
    const multiple = Math.ceil(tWidth / copyWidth);
    const angle = random(-2, 2);

    let hh = fSize * multiple + border * 4;
    let ww = (multiple > 1 ? copyWidth : textWidth(c)) + border * 8;

    let rectX = copyX - border * 4 + angle;
    let rectY = pos - border * 2;

    push();
    noStroke();
    fill(108, 5, 83);
    rotate(angle);
    rect(rectX, rectY, ww, hh);
    fill(174, 28, 28);
    text(c, copyX + angle, pos, copyWidth, height);
    pop();

    pos += fSize * multiple + leading;
  });
}

function backgroundText() {
  let cnv2 = createGraphics(width, height);
  let ctx2 = cnv2.canvas.getContext("2d");

  ctx2.filter = "blur(20px)";
  cnv2.colorMode(HSB, 360, 120, 100, 255);
  cnv2.textSize(200);
  cnv2.textLeading(90);
  cnv2.fill(20, 90, 30);
  cnv2.translate(0, 0);
  cnv2.stroke(20, 90, 30);
  cnv2.strokeWeight(60);
  cnv2.textAlign(RIGHT, TOP);
  cnv2.text(copy, 60, 0, width, height);
  ctx2.filter = "blur(30px)";
  cnv2.fill(20, 90, 20);
  cnv2.stroke(20, 90, 10);
  cnv2.strokeWeight(12);
  cnv2.text(copy, 60, 0, width, height);
  ctx2.filter = "blur(0)";
  image(cnv2, 0, 0);
}

function backgroundText2() {
  let cnv3 = createGraphics(width, height);
  cnv3.colorMode(HSB, 360, 120, 100, 255);
  cnv3.textFont("monospace");
  cnv3.textSize(40);
  cnv3.textLeading(24);
  cnv3.noStroke();
  cnv3.fill(0, 0, 0, 150);
  cnv3.translate(0, 0);
  cnv3.scale(0.5, 1.3);
  cnv3.canvas.style.letterSpacing = "-2px";
  cnv3.textAlign(LEFT, CENTER);
  cnv3.text(copy, -40, 0, 400, height);
  cnv3.filter(BLUR, 2);
  cnv3.canvas.style.letterSpacing = "0px";
  image(cnv3, 0, 0);
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
    stroke(random(97, 106), random(38, 64), random(24, 64), 8);
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
