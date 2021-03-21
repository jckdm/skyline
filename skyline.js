$(window).resize(() => setTimeout(() => location.reload(true), 1500) );

const w = $(window).width() - 17.5;
const h = $(window).height() - 17.5;

const bH = h / 1.75;
const bW = w / 5;

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

const buildings = [
  { 'start': 0 },
  { 'start': -150 },
  { 'start': -300 }
];

setup = () => {
  createCanvas(w, h);

  buildings[1]['start'] = w / -2.0;
  buildings[2]['start'] = -w;

  const d = new Date();
  const hr = d.getHours();

  bg = times[hr].split(',');
  bbg = times[(hr + 1) % 24].split(',');
  background(bg[0], bg[1], bg[2]);
}

draw = () => {
  for (b of buildings) {
    b['start'] = (b['start'] + 1) % w;
    triangle(b['start'] + 50, h - bH - 275, b['start'] + 45, h - bH - 162, b['start'] + 55, h - bH - 162);
    circle(b['start'] + 50, h - bH - 162.5, 15);
    circle(b['start'] + 50, h - bH - 145, 30);
    circle(b['start'] + 50, h - bH - 125, 45);
    circle(b['start'] + 50, h - bH - 100, 60);
    circle(b['start'] + 50, h - bH - 75, 75);
    rect(b['start'] + 12.5, h - bH - 75, 75, bH);
    rect(b['start'] + 25, h - bH - 50, 50, bH, 5, 5);
    rect(b['start'], h - bH, 100, bH, 20, 20, 0, 0);
  }
  fill(bbg[0], bbg[1], bbg[2]);
  stroke(bg[0], bg[1], bg[2]);
}
