import React from "react";
import * as Markup from "./button.styles"

type Props = {
  icon: React.ReactNode;
  onClick?: (ev: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export const Button: React.FC<Props> = (props: Props) => {
  const { icon, onClick } = props;

  return <Markup.Button onClick={onClick}>{icon}</Markup.Button>;
};
