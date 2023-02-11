import { throws } from "assert";
import Tool from "./tool";

export default class Rect extends Tool {
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
    /** beginPath() - метод вызывается у контекста canvas, который говрит о начале отрисовки новой фигуры  */
    this.ctx.beginPath();
    // @ts-ignore:next-line
    this.startX = ev.pageX - ev.target.offsetLeft;
    // @ts-ignore:next-line
    this.startY = ev.pageY - ev.target.offsetTop;
  }

  public mouseMoveHandler(ev: MouseEvent) {
    if (this.isMouseDown) {
      // @ts-ignore:next-line
      let currentX = ev.pageX - ev.target.offsetLeft;
      // @ts-ignore:next-line
      let currentY = ev.pageY - ev.target.offsetTop;
      // @ts-ignore:next-line
      let width = currentX - this.startX;
      // @ts-ignore:next-line
      let height = currentY - this.startY;

      //@ts-ignore
      this.draw(
        // @ts-ignore:next-line
        this.startX,
        // @ts-ignore:next-line
        this.startY,
        width,
        height
      );
    }
  }

  public draw(x: number, y: number, width: number, height: number) {
    if (!this.ctx) return;

    this.ctx.rect(x, y, width, height);
    /** fill() - метод, отвечающий за заполнение фигуры цветом */
    this.ctx.fill();
    /** stroke() - метод, отвечающий за заполнение фигуры цветом */
    this.ctx.stroke();
  }
}
