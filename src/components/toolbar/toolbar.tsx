import React from "react";
import { Icons } from "assets";
import { Button } from "components/button";
import toolState from "store/tool-state";
import * as Markup from "./toolbar.styles";
import Brush from "tools/brush";
import Rect from "tools/rect";
import Circle from "tools/circle";
import Eraser from "tools/eraser";
import canvasState from "store/canvas-state";

export const Toolbar = () => {
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
        {/* <Button icon={<Icons.EraserIcon />} /> */}

        <Button
          icon={<Icons.EraserIcon />}
          onClick={() => {
            if (!canvasState.canvas) return;
            toolState.setTools(new Eraser(canvasState.canvas));
          }}
        />

        <Button icon={<Icons.LineIcon />} />
        <input type="color" />
      </Markup.Tools>
      <Markup.Menu>
        <Button icon={<Icons.UndoIcon />} />
        <Button icon={<Icons.RedoIcon />} />
        <Button icon={<Icons.SaveIcon />} />
      </Markup.Menu>
    </Markup.Container>
  );
};
