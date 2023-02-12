// import { throws } from "assert";
// import Tool from "./tool";

// export default class Rect extends Tool {
//   public isMouseDown: boolean = false;

//   constructor(canvas: HTMLCanvasElement) {
//     super(canvas);
//     this.listen();
//   }

//   public listen() {
//     if (!this.canvas) return;

//     this.canvas.onmousemove = this.mouseMoveHandler.bind(this);
//     this.canvas.onmousedown = this.mouseDownHandler.bind(this);
//     this.canvas.onmouseup = this.mouseUpHandler.bind(this);
//   }

//   public mouseUpHandler(ev: MouseEvent) {
//     this.isMouseDown = false;
//   }

//   public mouseDownHandler(ev: MouseEvent) {
//     if (!this.ctx) return;
//     this.isMouseDown = true;
//     /** beginPath() - метод вызывается у контекста canvas, который говрит о начале отрисовки новой фигуры  */
//     this.ctx.beginPath();
//     // @ts-ignore:next-line
//     this.startX = ev.pageX - ev.target.offsetLeft;
//     // @ts-ignore:next-line
//     this.startY = ev.pageY - ev.target.offsetTop;
//   }

//   public mouseMoveHandler(ev: MouseEvent) {
//     if (this.isMouseDown) {
//       // @ts-ignore:next-line
//       let currentX = ev.pageX - ev.target.offsetLeft;
//       // @ts-ignore:next-line
//       let currentY = ev.pageY - ev.target.offsetTop;
//       // @ts-ignore:next-line
//       let width = currentX - this.startX;
//       // @ts-ignore:next-line
//       let height = currentY - this.startY;

//       //@ts-ignore
//       this.draw(
//         // @ts-ignore:next-line
//         this.startX,
//         // @ts-ignore:next-line
//         this.startY,
//         width,
//         height
//       );
//     }
//   }

//   public draw(x: number, y: number, width: number, height: number) {
//     if (!this.ctx) return;

//     this.ctx.rect(x, y, width, height);
//     /** fill() - метод, отвечающий за заполнение фигуры цветом */
//     this.ctx.fill();
//     /** stroke() - метод, отвечающий за заполнение фигуры цветом */
//     this.ctx.stroke();
//   }
// }

import Tool from "./tool";

export default class Rect extends Tool {
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

  mouseUpHandler(e: MouseEvent) {
    this.isMouseDown = false;
  }
  mouseDownHandler(e: MouseEvent) {
    if (!this.ctx) return;

    this.isMouseDown = true;
    this.ctx.beginPath();
    // @ts-ignore:next-line
    this.startX = e.pageX - e.target.offsetLeft;
    // @ts-ignore:next-line
    this.startY = e.pageY - e.target.offsetTop;
    // @ts-ignore:next-line
    this.saved = this.canvas.toDataURL();
  }
  mouseMoveHandler(e: MouseEvent) {
    if (this.isMouseDown) {
      // @ts-ignore:next-line
      let currentX = e.pageX - e.target.offsetLeft;
      // @ts-ignore:next-line
      let currentY = e.pageY - e.target.offsetTop;
      // @ts-ignore:next-line
      this.width = currentX - this.startX;
      // @ts-ignore:next-line
      this.height = currentY - this.startY;
      // @ts-ignore:next-line
      this.draw(this.startX, this.startY, this.width, this.height);
    }
  }

  draw(x: number, y: number, w: number, h: number) {
    const img = new Image();
    img.src = this.saved;
    img.onload = () => {
      // @ts-ignore:next-line
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      // @ts-ignore:next-line
      this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height);
      // @ts-ignore:next-line
      this.ctx.beginPath();
      // @ts-ignore:next-line
      this.ctx.rect(x, y, w, h);
      // @ts-ignore:next-line
      this.ctx.fill();
      // @ts-ignore:next-line
      this.ctx.stroke();
    };
  }
}
