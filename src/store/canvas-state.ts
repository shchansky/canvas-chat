import { makeAutoObservable } from "mobx";

class CanvasState {
  public canvas: HTMLCanvasElement | null = null;
  public undoList: string[] = [];
  public redoList: string[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  public setCanvas(canvasRef: HTMLCanvasElement | null) {
    this.canvas = canvasRef;
  }

  public pushToUndo(data: string) {
    this.undoList.push(data);
  }

  public pushToRedo(data: string) {
    this.undoList.push(data);
  }

  public undo() {
    if (!this.canvas) return;
    /** получаю контекст canvas */
    let ctx = this.canvas.getContext("2d");

    console.log("this.undoList", this.undoList)


    if (this.undoList.length > 0) {
      let dataUrl = this.undoList.pop();
      // this.redoList.push(dataUrl!);
      this.redoList.push(this.canvas.toDataURL());
      let img = new Image();
      img.src = dataUrl ?? "";
      /** реализация слушателя события onLoad, который отработает в тот момент когда изображение будет установлено */
      img.onload = () => {
        /** первочередно, очитска  canvas - в аргументы передаются параметры, которые будут очищаться (с самого верхнего левого угла по всей ширине и высоте canvas */
        ctx?.clearRect(0, 0, this.canvas!.width, this.canvas!.height);
        /** после рисется изображение, которое получили из массива */
        ctx?.drawImage(img, 0, 0, this.canvas!.width, this.canvas!.height);
      };
    } else {
      /** очитска  canvas - в аргументы передаются параметры, которые будут очищаться (с самого верхнего левого угла по всей ширине и высоте canvas */
      ctx?.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }

  public redo() {
    if (!this.canvas) return;
    /** получаю контекст canvas */
    let ctx = this.canvas.getContext("2d");


    console.log("this.redoList", this.redoList)

    if (this.redoList.length > 0) {
      let dataUrl = this.redoList.pop();
      this.undoList.push(this.canvas.toDataURL());
      let img = new Image();
      img.src = dataUrl ?? "";
      /** реализация слушателя события onLoad, который отработает в тот момент когда изображение будет установлено */
      img.onload = () => {
        /** первочередно, очитска  canvas - в аргументы передаются параметры, которые будут очищаться (с самого верхнего левого угла по всей ширине и высоте canvas */
        ctx?.clearRect(0, 0, this.canvas!.width, this.canvas!.height);
        /** после рисется изображение, которое получили из массива */
        ctx?.drawImage(img, 0, 0, this.canvas!.width, this.canvas!.height);
      };
    }
  }
}

// eslint-disable-next-line
export default new CanvasState();
