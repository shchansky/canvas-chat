export default class Tools {
  public canvas: HTMLCanvasElement | null;
  public ctx: CanvasRenderingContext2D | null 

  constructor(canvas: HTMLCanvasElement ) {
    this.canvas = canvas;
    this.ctx  = canvas.getContext("2d")
  }
}
