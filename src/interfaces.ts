// Initializations
export interface NavbarProps {
  clear: boolean;
  setClear: Function;
}

export interface BurgerProps {
  active: boolean;
  setActive: Function;
}

export interface LinksProps {
  active: boolean;
  setActive: Function;
  clear: boolean;
  setClear: Function;
}

export interface P5Props {
  clear: boolean;
}

export interface P {
  mouseX: number;
  mouseY: number;
  preload: Function;
  loadImage: Function;
  setup: Function;
  draw: Function;
  mousePressed: Function;
  pixelDensity: Function;
  createCanvas: Function;
  frameRate: Function;
  image: Function;
  loadPixels: Function;
  smooth: Function;
  noFill: Function;
  stroke: Function;
  strokeWeight: Function;
  beginShape: Function;
  curveVertex: Function;
  endShape: Function;
  ellipse: Function;
  noStroke: Function;
  fill: Function;
  myCustomRedrawAccordingToNewPropsHandler: Function;
}

export interface Image {
  width: number;
  height: number;
  pixels: object;
  loadPixels: Function;
}

export interface Coordinate {
  x: number | null;
  y: number | null;
}
