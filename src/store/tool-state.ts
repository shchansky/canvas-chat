import { makeAutoObservable } from "mobx";

export class ToolState {
  public tool: any | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  public setTools(tool: any | null) {
    this.tool = tool;
  }
}

// eslint-disable-next-line
export default new ToolState();
