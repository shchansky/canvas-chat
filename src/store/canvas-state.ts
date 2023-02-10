import { makeAutoObservable } from "mobx";

class CanvasState {
  public canvas: HTMLCanvasElement | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  public setCanvas(canvasRef: HTMLCanvasElement | null) {
    this.canvas = canvasRef;
  }
}

// eslint-disable-next-line
export default new CanvasState();
