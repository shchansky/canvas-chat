export default class Tool {
  public canvas: HTMLCanvasElement | null;
  public ctx: CanvasRenderingContext2D | null;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.destroyEvents();
  }

  /** цвет внутри линии */
  setFillColor(color: string) {
    if (!this.ctx) return;
    this.ctx.fillStyle = color;
  }

  /** цвет внутри обводки линии*/
  setStrokeColor(color: string) {
    if (!this.ctx) return;
    this.ctx.strokeStyle = color;
  }

  /** цвет внутри обводки линии*/
  setLineWidth(width: number) {
    if (!this.ctx) return;
    this.ctx.lineWidth = width;
  }

  public destroyEvents() {
    if (!this.canvas) return;

    this.canvas.onmousemove = null;
    this.canvas.onmousedown = null;
    this.canvas.onmouseup = null;
  }
}
