import React from "react";
import { Icons } from "assets";
import { Button } from "components/button";
import toolState from "store/tool-state";
import * as Markup from "./toolbar.styles";
import Brush from "tools/brush";
import Rect from "tools/rect";
import Circle from "tools/circle";
import Eraser from "tools/eraser";
import Line from "tools/line";
import canvasState from "store/canvas-state";

export const Toolbar = () => {
  const handleChangeColor = (ev: React.ChangeEvent<HTMLInputElement>) => {
    toolState.setFillColor(ev.target.value);
    toolState.setStrokeColor(ev.target.value);
  };

  return (
    <Markup.Container>
      <Markup.Tools>
        <Button
          icon={<Icons.BrushIcon />}
          onClick={() => {
            if (!canvasState.canvas) return;
            toolState.setTools(new Brush(canvasState.canvas));
          }}
        />
        <Button
          icon={<Icons.RectIcon />}
          onClick={() => {
            if (!canvasState.canvas) return;
            toolState.setTools(new Rect(canvasState.canvas));
          }}
        />
        <Button
          icon={<Icons.CircleIcon />}
          onClick={() => {
            if (!canvasState.canvas) return;
            toolState.setTools(new Circle(canvasState.canvas));
          }}
        />
        <Button
          icon={<Icons.EraserIcon />}
          onClick={() => {
            if (!canvasState.canvas) return;
            toolState.setTools(new Eraser(canvasState.canvas));
          }}
        />
        <Button
          icon={<Icons.LineIcon />}
          onClick={() => {
            if (!canvasState.canvas) return;
            toolState.setTools(new Line(canvasState.canvas));
          }}
        />
        <input type="color" onChange={handleChangeColor} />
      </Markup.Tools>
      <Markup.Menu>
        <Button icon={<Icons.UndoIcon />} onClick={() => canvasState.undo()} />
        <Button icon={<Icons.RedoIcon />} onClick={() => canvasState.redo()}/>
        <Button icon={<Icons.SaveIcon />} />
      </Markup.Menu>
    </Markup.Container>
  );
};
