import React from "react";
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
          max={10}
          style={{ margin: "0 10px" }}
        />
      </div>
    </Markup.Container>
  );
};
