import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import type { FC } from "react";

export const ExternalLinkAnchor: FC<{ children: string; href: string }> = (
  props,
) => {
  return (
    <Typography
      color="textSecondary"
      sx={{
        fontSize: "inherit",
        alignItems: "center",
        justifyContent: "center",
        display: "inline-flex",
        flexDirection: "row",
      }}
      component={Link}
      href={props.href}
      target="_blank"
      referrerPolicy="no-referrer"
    >
      {props.children} <OpenInNewRoundedIcon fontSize="inherit" />
    </Typography>
  );
};
