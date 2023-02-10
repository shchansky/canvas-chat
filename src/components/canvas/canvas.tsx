import React from "react";
import * as Markup from "./canvas.styles";

export const Canvas = () => {
  return (
    <Markup.Container>
      <canvas width={600} height={600} />
    </Markup.Container>
  );
};
