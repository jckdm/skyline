$(window).resize(() => setTimeout(() => location.reload(true), 1500) );

const w = $(window).width() - 17.5;
const h = $(window).height() - 17.5;

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
  { 'start': null },
  { 'start': null }
];

setup = () => {
  createCanvas(w, h);

  buildings[0]['start'] = -130;
  buildings[1]['start'] = (w / -2.0) - 130;

  const d = new Date();
  const hr = d.getHours();

  bg = times[hr].split(',');
  bbg = times[(hr + 1) % 24].split(',');
  background(bg[0], bg[1], bg[2]);
}

const bH = h / 1.75;
const bW = w / 5;

draw = () => {

  const h5 = h * 0.5;
  const h25 = h5 / 2.0;
  const h125 = h25 / 2.0;
  const h0625 = h125 / 2.0;
  const h03125 = h0625 / 2.0;

  const w25 = w * 0.25;
  const w125 = w25 / 2.0;
  const w0625 = w125 / 2.0;
  const w03125 = w0625 / 2.0;
  const w015625 = w03125 / 2.0;

  for (b of buildings) {

    b['start'] = (b['start'] + 1 >= w) ? -130 : (b['start'] + 1) % w;

    triangle(b['start'] + w125, h0625, b['start'] + w125 - w015625, h - h5 - h125 - (h03125 * 4), b['start'] + w125 + w015625, h - h5 - h125 - (h03125 * 4));

    circle(b['start'] + w125, h - h5 - h125 - (h03125 * 4), w25 - w0625 - (w03125 * 4));
    circle(b['start'] + w125, h - h5 - h125 - (h03125 * 3), w25 - w0625 - (w03125 * 3));
    circle(b['start'] + w125, h - h5 - h125 - (h03125 * 2), w25 - w0625 - (w03125 * 2));
    circle(b['start'] + w125, h - h5 - h125 - h03125, w25 - w0625 - w03125);
    circle(b['start'] + w125, h - h5 - h125, w25 - w0625);

    rect(b['start'] + w03125, h - h5 - h125, w25 - w0625, h5 - h125, 5, 5, 0, 0);
    rect(b['start'] + w0625, h5 - h0625, w125, h5 - h125);
    rect(b['start'], h5, w25, h5, 20, 20, 0, 0);
  }
  fill(bbg[0], bbg[1], bbg[2]);
  stroke(bg[0], bg[1], bg[2]);
}
