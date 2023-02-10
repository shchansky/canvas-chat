import React from "react";
import { Icons } from "assets";
import * as Markup from "./toolbar.styles";

export const Toolbar = () => {
  return (
    <Markup.Container>
      <Markup.Tools>
        <Markup.Button>
          <Icons.BrushIcon />
        </Markup.Button>
        <Markup.Button>
          <Icons.RectIcon />
        </Markup.Button>
        <Markup.Button>
          <Icons.CircleIcon />
        </Markup.Button>
        <Markup.Button>
          <Icons.EraserIcon />
        </Markup.Button>
        <Markup.Button>
          <Icons.LineIcon />
        </Markup.Button>
        <Markup.Button>
          <Icons.PaletteIcon />
        </Markup.Button>
      </Markup.Tools>
      <Markup.Menu>
        <Markup.Button>
          <Icons.UndoIcon />
        </Markup.Button>
        <Markup.Button>
          <Icons.RedoIcon />
        </Markup.Button>
        <Markup.Button>
          <Icons.SaveIcon />
        </Markup.Button>
      </Markup.Menu>
    </Markup.Container>
  );
};
