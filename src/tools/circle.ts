import Tool from "./tool";

export default class Circle extends Tool {
  public isMouseDown: boolean = false;
  public startX: number = 0;
  public startY: number = 0;
  public saved: string = "";

  constructor(canvas: HTMLCanvasElement) {
    super(canvas);
    this.listen();
  }

  listen() {
    if (!this.canvas) return;

    this.canvas.onmousemove = this.mouseMoveHandler.bind(this);
    this.canvas.onmousedown = this.mouseDownHandler.bind(this);
    this.canvas.onmouseup = this.mouseUpHandler.bind(this);
  }

  mouseDownHandler(e: MouseEvent) {
    if (this.ctx && this.canvas) {
      this.isMouseDown = true;
      let canvasData = this.canvas.toDataURL();
      this.ctx.beginPath();
      // @ts-ignore:next-line
      this.startX = e.pageX - e.target.offsetLeft;
      // @ts-ignore:next-line
      this.startY = e.pageY - e.target.offsetTop;
      this.saved = canvasData;
    }
  }

  mouseUpHandler(e: MouseEvent) {
    this.isMouseDown = false;
  }

  mouseMoveHandler(e: MouseEvent) {
    if (this.isMouseDown) {
      // @ts-ignore:next-line
      let curentX = e.pageX - e.target.offsetLeft;
      // @ts-ignore:next-line
      let curentY = e.pageY - e.target.offsetTop;
      let width = curentX - this.startX;
      let height = curentY - this.startY;
      let r = Math.sqrt(width ** 2 + height ** 2);
      this.draw(this.startX, this.startY, r);
    }
  }

  draw(x: number, y: number, r: number) {
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
      this.ctx.arc(x, y, r, 0, 2 * Math.PI);
      // @ts-ignore:next-line
      this.ctx.fill();
      // @ts-ignore:next-line
      this.ctx.stroke();
    }.bind(this);
  }
}
