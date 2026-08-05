import type { IconButtonProps } from "@mui/material/IconButton";
import IconButton from "@mui/material/IconButton";
import type { FC, ReactNode } from "react";

export const ExternalLink: FC<{
  href: string;
  target?: string;
  rel?: string;
  color?: IconButtonProps["color"];
  children: ReactNode;
}> = (props) => {
  return (
    <IconButton
      disableTouchRipple
      component="a"
      href={props.href}
      target={props.target ?? "_blank"}
      rel={props.rel ?? "noreferrer"}
      color={props.color ?? "primary"}
    >
      {props.children}
    </IconButton>
  );
};
