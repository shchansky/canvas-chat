import React from "react";
import { observer } from "mobx-react-lite";
import canvasState from "store/canvas-state";
import toolState from "store/tool-state";
import Brush from "tools/brush";
import * as Markup from "./canvas.styles";

export const Canvas = observer(() => {
  const canvasRef = React.useRef<null | HTMLCanvasElement>(null);

  React.useEffect(() => {
    if (canvasRef.current) {
      canvasState.setCanvas(canvasRef.current);
      toolState.setTools(new Brush(canvasRef.current));
    }
  }, []);



  const mouseDownHandler=()=>{
    if(!canvasRef.current) return
    const res = canvasRef.current.toDataURL()
    /** toDataURL() - делает снимок текущего canvas */
    canvasState.pushToUndo(canvasRef.current.toDataURL())
  }

  return (
    <Markup.Container>
      <canvas ref={canvasRef} width={600} height={600} onClick= {(e)=>{}}/>
    </Markup.Container>
  );
});
