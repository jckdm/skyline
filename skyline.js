$(window).resize(() => setTimeout(() => location.reload(true), 1500) );

times = {
  '0': '63.75, 63.75, 63.75',
  '1': '42.5, 42.5, 42.5',
  '2': '21.25, 21.25, 21.25',
  '3': '0, 0, 0',
  '4': '21.25, 21.25, 21.25',
  '5': '42.5, 42.5, 42.5',
  '6': '63.75, 63.75, 63.75',
  '7': '85, 85, 85',
  '8': '106.25, 106.25, 106.25',
  '9': '127.5, 127.5, 127.5',
  '10': '148.75, 148.75, 148.75',
  '11': '170, 170, 170',
  '12': '191.25, 191.25, 191.25',
  '13': '212.5, 212.5, 212.5',
  '14': '233.75, 233.75, 233.75',
  '15': '255, 255, 255',
  '16': '233.75, 233.75, 233.75',
  '17': '212.5, 212.5, 212.5',
  '18': '191.25, 191.25, 191.25',
  '19': '170, 170, 170',
  '20': '148.75, 148.75, 148.75',
  '21': '127.5, 127.5, 127.5',
  '22': '106.25, 106.25, 106.25',
  '23': '85, 85, 85'
}

let bg;
let bbg;

const w = $(window).width() - 22;
const h = $(window).height() - 22;

const neW = 100 + Math.sqrt(w) * 20;

const hs = [h * 0.5];
const ws = [neW * 0.25];

let buildings = [];
let b;

setup = () => {
  createCanvas(w, h);

  const d = new Date();
  const hr = d.getHours();

  bg = times[hr].split(',');
  bbg = times[(hr + 1) % 24].split(',');
  background(bg[0], bg[1], bg[2]);

  $('#drop')[0].attributes.style.value = 'background-color: rgb(' + times[hr] + '); color: rgb(' + times[(hr + 3) % 24] + ');';

  for (let i = 0; i < 4; i++) {
    hs.push(hs[i] / 2.0);
    ws.push(ws[i] / 2.0);
  }

  buildings = [
    { 'start': null, 'id': 'c', 'w': ws[0] },
    { 'start': null, 'id': 'e', 'w': ws[0] * 2 },
    { 'start': null, 'id': 'm', 'w': ws[0] + ws[1] },
    { 'start': null, 'id': 'f', 'w': ws[1] + ws[2] + ws[1]}
  ];

  buildings = shuffle(buildings);
  pickNext();
}

let i = 0;

pickNext = () => {
  if (i < 4) {
    b = buildings[i];
    b.start = -b.w;
    i++;
  }
  else {
    buildings = shuffle(buildings);
    i = 0;
  }
}

let step = 0.75;
speed = (v) => step = +v

draw = () => {

  if (b.start + step >= w) { pickNext(); }
  else { b.start = (b.start + step) % w; }

  if (b.id == 'c') {
    triangle(b.start + ws[1], hs[3], b.start + ws[1] - ws[4], h - hs[0] - hs[2] - (hs[4] * 4), b.start + ws[1] + ws[4], h - hs[0] - hs[2] - (hs[4] * 4));

    circle(b.start + ws[1], h - hs[0] - hs[2] - (hs[4] * 4), ws[0] - ws[2] - (ws[3] * 4));
    circle(b.start + ws[1], h - hs[0] - hs[2] - (hs[4] * 3), ws[0] - ws[2] - (ws[3] * 3));
    circle(b.start + ws[1], h - hs[0] - hs[2] - (hs[4] * 2), ws[0] - ws[2] - (ws[3] * 2));
    circle(b.start + ws[1], h - hs[0] - hs[2] - hs[4], ws[0] - ws[2] - ws[3]);
    circle(b.start + ws[1], h - hs[0] - hs[2], ws[0] - ws[2]);

    rect(b.start + ws[3], h - hs[0] - hs[2], ws[0] - ws[2], hs[0] - hs[2], 5, 5, 0, 0);
    rect(b.start, hs[0], ws[0], hs[0], 20, 20, 0, 0);

    rect(b.start + ws[2], h - (hs[0] + hs[2] + hs[4]), ws[1], hs[0] + hs[2] + hs[4], 30, 30, 0, 0);
    rect(b.start + ws[2] + ws[3], h - (hs[0] + hs[2]), ws[2], hs[0] + hs[2], 20, 20, 0, 0);

    rect(b.start + ws[1] + ws[3], hs[0] + hs[4], ws[2], hs[0] + hs[3], 0, 15, 0, 0);
    rect(b.start + ws[3], hs[0] + hs[4], ws[2], hs[0] + hs[3], 15, 0, 0, 0);
  }
  else if (b.id == 'e') {
    triangle(b.start + ws[0], hs[4], b.start + ws[0] - ws[4], h - hs[0] - hs[1] - hs[4], b.start + ws[0] + ws[4], h - hs[0] - hs[1] - hs[4]);

    rect(b.start + ws[1] + ws[3], h - hs[0] - hs[1] - hs[4], ws[1] + ws[2], hs[4]);

    rect(b.start + ws[1] + ws[4], h - hs[0] - hs[1], ws[0] - ws[4] * 2, hs[0] - hs[1]);
    rect(b.start + ws[1] + ws[4], h - hs[0] - hs[1], ws[1] - ws[2], hs[0] - hs[1]);
    rect(b.start + ws[0] + ws[3] + ws[4], h - hs[0] - hs[1], ws[1] - ws[2], hs[0] - hs[1]);

    rect(b.start + ws[1], h - hs[0], ws[0], hs[0], 5, 5, 0, 0);
    rect(b.start + ws[2], h - hs[2], ws[0] * 1.5, hs[2], 5, 5, 0, 0);
    rect(b.start, h - hs[3], ws[0] * 2, hs[3], 10, 10, 0, 0);

    rect(b.start + ws[1], h - hs[0], ws[2], hs[0] - hs[2]);
    rect(b.start + ws[0] + ws[1] - ws[2], h - hs[0], ws[2], hs[0] - hs[2]);
  }
  else if (b.id == 'm') {

    rect(b.start + ws[0] - ws[2] - (ws[2] / 4.0), h - hs[0] - hs[1] - hs[2] - hs[3], ws[3], hs[3], 20, 20, 0, 0);
    rect(b.start + ws[0] - ws[2] - (ws[2] / 2.0), h - hs[0] - hs[1] - hs[2], ws[2], hs[3] + hs[4], 20, 20, 0, 0);

    arc(b.start + ws[1] + ws[2], h - hs[0] - hs[1], ws[0], hs[2] * 1.25, PI, 0);

    rect(b.start + ws[0] - ws[2] - (ws[4] / 2.0), h - hs[0] - hs[1], ws[4], hs[1]);

    rect(b.start + ws[0] - ws[2] - ws[2] - (ws[4] / 2.0), h - hs[0] - hs[1], ws[4], hs[1]);
    rect(b.start + ws[0] - (ws[4] / 2.0), h - hs[0] - hs[1], ws[4], hs[1]);

    rect(b.start + ws[2], h - (hs[0] * 1.25), ws[0], hs[1]);

    rect(b.start + ws[2], h - hs[0] - hs[1], ws[4], hs[1]);
    rect(b.start + ws[0] + ws[2] - ws[4], h - hs[0] - hs[1], ws[4], hs[1]);

    rect(b.start + ws[2], h - hs[0] + hs[4], ws[0], hs[0] - hs[4]);

    rect(b.start, h - hs[1], ws[0] + ws[1], hs[1]);

    triangle(b.start + ws[0], h - hs[0], b.start + ws[0] + ws[2], h - hs[0] - hs[4], b.start + ws[0] + ws[1], h - hs[0]);
    rect(b.start + ws[0], h - hs[0], ws[1], hs[0]);
    triangle(b.start, h - hs[0], b.start + ws[2], h - hs[0] - hs[4], b.start + ws[1], h - hs[0]);
    rect(b.start, h - hs[0], ws[1], hs[0]);
  }
  else if (b.id == 'f') {
    rect(b.start + ws[3] + ws[1] - 2.5, h - hs[0] - hs[1] - 2.5, ws[3] + 5, hs[0] + hs[1] + 5, 20, 20, 0, 0);

    arc(b.start + ws[3], h - hs[0] - hs[3], ws[3], hs[3], HALF_PI, PI);
    arc(b.start + ws[3] + ws[1] + ws[3] + ws[1], h - hs[0] - hs[3], ws[3], hs[3], 0, PI);

    quad(b.start + ws[3], h, b.start + ws[3], h - hs[0] - hs[3], b.start + ws[3] + ws[1], h - hs[0] - hs[1], b.start + ws[3] + ws[1], h);
    quad(b.start + ws[3], h, b.start + ws[3], h - hs[0] - hs[3] + hs[4], b.start + ws[3] + ws[1], h - hs[0] - hs[2] - hs[3], b.start + ws[3] + ws[1], h);
    quad(b.start + ws[3], h, b.start + ws[3], h - (hs[0] - hs[2]), b.start + ws[3] + ws[1], h - hs[0], b.start + ws[3] + ws[1], h);
    quad(b.start + ws[3], h, b.start + ws[3], h - hs[1], b.start + ws[3] + ws[1], h - hs[1] - hs[3], b.start + ws[3] + ws[1], h);
    quad(b.start + ws[3], h, b.start + ws[3], h - hs[2], b.start + ws[3] + ws[1], h - hs[2] - hs[4], b.start + ws[3] + ws[1], h);

    quad(b.start + ws[3] + ws[1] + ws[3], h - hs[0] - hs[1], b.start + ws[3] + ws[1] + ws[3], h, b.start + ws[3] + ws[1] + ws[3] + ws[1], h, b.start + ws[3] + ws[1] + ws[3] + ws[1], h - hs[0] - hs[3]);
    quad(b.start + ws[3] + ws[1] + ws[3], h - hs[0] - hs[2] - hs[3], b.start + ws[3] + ws[1] + ws[3], h, b.start + ws[3] + ws[1] + ws[3] + ws[1], h, b.start + ws[3] + ws[1] + ws[3] + ws[1], h - hs[0] - hs[3] + hs[4]);
    quad(b.start + ws[3] + ws[1] + ws[3], h - hs[0], b.start + ws[3] + ws[1] + ws[3], h, b.start + ws[3] + ws[1] + ws[3] + ws[1], h, b.start + ws[3] + ws[1] + ws[3] + ws[1], h - (hs[0] - hs[2]));
    quad(b.start + ws[3] + ws[1] + ws[3], h - hs[1] - hs[3], b.start + ws[3] + ws[1] + ws[3], h, b.start + ws[3] + ws[1] + ws[3] + ws[1], h, b.start + ws[3] + ws[1] + ws[3] + ws[1], h - hs[1]);
    quad(b.start + ws[3] + ws[1] + ws[3], h - hs[2] - hs[4], b.start + ws[3] + ws[1] + ws[3], h, b.start + ws[3] + ws[1] + ws[3] + ws[1], h, b.start + ws[3] + ws[1] + ws[3] + ws[1], h - hs[2]);
  }

  fill(bbg[0], bbg[1], bbg[2]);
  stroke(bg[0], bg[1], bg[2]);
}
