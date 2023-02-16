export default class Tool {
  public canvas: HTMLCanvasElement | null;
  public ctx: CanvasRenderingContext2D | null;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.destroyEvents();
  }

  /** цвет внутри линии */
  fillColor(color: string) {
    if (!this.ctx) return;
    this.ctx.fillStyle =  color;
  }

  /** цвет внутри обводки линии*/
  fillStyle(color: string) {
    if (!this.ctx) return;
    this.ctx.strokeStyle =  color;
  }

  public destroyEvents() {
    if (!this.canvas) return;

    this.canvas.onmousemove = null;
    this.canvas.onmousedown = null;
    this.canvas.onmouseup = null;
  }
}
