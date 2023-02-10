import { makeAutoObservable } from "mobx";

export class CanvasState {
  public canvas: any | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  public setCanvas(canvasRef: any| null) {

    this.canvas = canvasRef
  };
}

export default new CanvasState