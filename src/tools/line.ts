import Tool from "./tool";

export default class Line extends Tool {
  public isMouseDown: boolean = false;
  public name: string;
  public saved: string = "";

  constructor(canvas: HTMLCanvasElement) {
    super(canvas);
    this.listen();
    this.name = "Line";
  }

  listen() {
    if (!this.canvas) return;
    this.canvas.onmousedown = this.mouseDownHandler.bind(this);
    this.canvas.onmouseup = this.mouseUpHandler.bind(this);
    this.canvas.onmousemove = this.mouseMoveHandler.bind(this);
  }

  mouseDownHandler(e: MouseEvent) {
    if (!this.ctx && !this.canvas) return;
    this.isMouseDown = true;
    // @ts-ignore:next-line
    this.currentX = e.pageX - e.target.offsetLeft;
    // @ts-ignore:next-line
    this.currentY = e.pageY - e.target.offsetTop;
    // @ts-ignore:next-line
    this.ctx.beginPath();
    // @ts-ignore:next-line
    this.ctx.moveTo(this.currentX, this.currentY);
    // @ts-ignore:next-line
    this.saved = this.canvas.toDataURL();
  }

  mouseUpHandler(e: MouseEvent) {
    this.isMouseDown = false;
  }

  mouseMoveHandler(e: MouseEvent) {
    if (this.isMouseDown) {
      // @ts-ignore:next-line
      this.draw(e.pageX - e.target.offsetLeft, e.pageY - e.target.offsetTop);
    }
  }

  draw(x: number, y: number) {
    const img = new Image();
    img.src = this.saved;
    img.onload = async function () {
      // @ts-ignore:next-line
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      // @ts-ignore:next-line
      this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height);
      // @ts-ignore:next-line
      this.ctx.beginPath();
      // @ts-ignore:next-line
      this.ctx.moveTo(this.currentX, this.currentY);
      // @ts-ignore:next-line
      this.ctx.lineTo(x, y);
      // @ts-ignore:next-line
      this.ctx.stroke();
    }.bind(this);
  }
}
