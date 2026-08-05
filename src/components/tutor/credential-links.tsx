import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import type { ButtonProps } from "@mui/material/Button";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { FC } from "react";
import type { TutorSource } from "#/types/tutor";

export const CredentialLinks: FC<{
  sources: readonly TutorSource[];
  color?: ButtonProps["color"];
}> = (props) => {
  return (
    <Stack
      direction="row"
      spacing={1}
      useFlexGap
      sx={{ alignItems: "center", flexWrap: "wrap" }}
    >
      <Typography
        variant="siteMark"
        color={props.color === "inherit" ? "inherit" : "textSecondary"}
      >
        Credentials
      </Typography>
      {props.sources.map((source) => (
        <Button
          component="a"
          href={source.href}
          target="_blank"
          rel="noreferrer"
          variant="text"
          size="small"
          color={props.color ?? "primary"}
          endIcon={<OpenInNewIcon />}
          key={source.href}
        >
          View {source.label}
        </Button>
      ))}
    </Stack>
  );
};
