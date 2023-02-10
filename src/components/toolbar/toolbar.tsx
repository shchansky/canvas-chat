// import React from "react";
// import { Icons } from "assets";
// import * as Markup from "./toolbar.styles";

// export const Toolbar = () => {
//   return (
//     <Markup.Container>
//       <Markup.Tools>
//         <Markup.Button>
//           <Icons.BrushIcon />
//         </Markup.Button>
//         <Markup.Button>
//           <Icons.RectIcon />
//         </Markup.Button>
//         <Markup.Button>
//           <Icons.CircleIcon />
//         </Markup.Button>
//         <Markup.Button>
//           <Icons.EraserIcon />
//         </Markup.Button>
//         <Markup.Button>
//           <Icons.LineIcon />
//         </Markup.Button>

//         <input type="color" />
//       </Markup.Tools>
//       <Markup.Menu>
//         <Markup.Button>
//           <Icons.UndoIcon />
//         </Markup.Button>
//         <Markup.Button>
//           <Icons.RedoIcon />
//         </Markup.Button>
//         <Markup.Button>
//           <Icons.SaveIcon />
//         </Markup.Button>
//       </Markup.Menu>
//     </Markup.Container>
//   );
// };

import React from "react";
import { Icons } from "assets";
import { Button } from "components/button";
import * as Markup from "./toolbar.styles";

export const Toolbar = () => {
  return (
    <Markup.Container>
      <Markup.Tools>
        <Button icon={<Icons.BrushIcon />} />
        <Button icon={<Icons.RectIcon />} />
        <Button icon={<Icons.CircleIcon />} />
        <Button icon={<Icons.EraserIcon />} />
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
