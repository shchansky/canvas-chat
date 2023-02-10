import React from "react";
import { observer } from "mobx-react-lite";
import canvasState from "store/canvas-state";
import * as Markup from "./canvas.styles";

export const Canvas = observer(() => {
  const canvasRef = React.useRef<null | HTMLCanvasElement>(null);

  React.useEffect(() => {
    canvasState.setCanvas(canvasRef.current);
  }, []);

  return (
    <Markup.Container>
      <canvas ref={canvasRef} width={600} height={600} />
    </Markup.Container>
  );
});
