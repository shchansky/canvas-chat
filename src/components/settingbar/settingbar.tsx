import React from "react";
import toolState from "store/tool-state";
import * as Markup from "./settingbar.styles";

export const Settingbar = () => {
  return (
    <Markup.Container>
      <div>
        <label htmlFor="line-width">Толщина линии</label>
        <input
          id="line-width"
          type="number"
          defaultValue={1}
          min={1}
          max={30}
          onChange={(ev) => toolState.setLineWidth(ev.target.value)}
          style={{ margin: "0 10px" }}
        />

        <label htmlFor="stroke-color">Цвет обводки фигуры</label>
        <input
          id="stroke-color"
          type="color"
          onChange={(ev) => toolState.setStrokeColor(ev.target.value)}
          style={{ margin: "0 10px" }}
        />
      </div>
    </Markup.Container>
  );
};
