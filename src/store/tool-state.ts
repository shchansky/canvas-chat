import { makeAutoObservable } from "mobx";

export class ToolState {
  public tool: any | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  public setTools(tool: any | null) {
    this.tool = tool;
  }

  /** цвет внутри линии */
  setFillColor(color: string) {
    this.tool.setFillColor(color);
  }

  /** цвет внутри обводки линии*/
  setStrokeColor(color: string) {
    this.tool.setStrokeColor(color);
  }

  /** цвет внутри обводки линии*/
  setLineWidth(width: string) {
    this.tool.setLineWidth(Number(width));
  }
}

// eslint-disable-next-line
export default new ToolState();
