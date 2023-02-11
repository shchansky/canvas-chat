import Tool from "./tool";

export default class Brush extends Tool {
  public isMouseDown: boolean = false;

  constructor(canvas: HTMLCanvasElement) {
    super(canvas);
    this.listen();
  }

  public listen() {
    if (!this.canvas) return;

    this.canvas.onmousemove = this.mouseMoveHandler.bind(this);
    this.canvas.onmousedown = this.mouseDownHandler.bind(this);
    this.canvas.onmouseup = this.mouseUpHandler.bind(this);
  }

  public mouseUpHandler(ev: MouseEvent) {
    this.isMouseDown = false;
  }

  public mouseDownHandler(ev: MouseEvent) {
    if (!this.ctx) return;
    this.isMouseDown = true;
    /** beginPath() - метод вызывается у контекста canvas, который говрит о том что начала отрисовываться новая линия  */
    this.ctx.beginPath();
    /** moveTo() - метод вызывается у контекста canvas, необходим для получения координат курсора мышки на canvas  */
    this.ctx.moveTo(
      // @ts-ignore:next-line
      ev.pageX - ev.target.offsetLeft,
      // @ts-ignore:next-line
      ev.pageY - ev.target.offsetTop
    );
  }

  public mouseMoveHandler(ev: MouseEvent) {
    if (this.isMouseDown) {
      //@ts-ignore
      this.draw(
        // @ts-ignore:next-line
        ev.pageX - ev.target.offsetLeft,
        // @ts-ignore:next-line
        ev.pageY - ev.target.offsetTop
      );
    }
  }

  public draw(x: number, y: number) {
    if (!this.ctx) return;

    this.ctx.lineTo(x, y);
    /** stroke() - метод, чтобы обводил линиюю canvas*/
    this.ctx.stroke();
  }
}
