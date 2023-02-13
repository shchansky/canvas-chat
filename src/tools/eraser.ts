import Brush from "./brush";

export default class Eraser extends Brush {
  // eslint-disable-next-line
  constructor(canvas: HTMLCanvasElement) {
    super(canvas);
  }

  public draw(x: number, y: number) {
    if (!this.ctx) return;
    this.ctx.strokeStyle = "white";
    this.ctx.lineTo(x, y);
    this.ctx.stroke();
  }
}
