import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import type { FC, ReactNode } from "react";

export const TutorNotebookFrame: FC<{ children: ReactNode }> = (props) => {
  return (
    <Box
      sx={(theme) => ({
        position: "relative",
        overflow: "clip",
        "::before": {
          content: '""',
          position: "absolute",
          insetBlock: 0,
          insetInlineStart: 0,
          inlineSize: theme.spacing(1.25),
          backgroundColor: theme.alpha(theme.palette.primary.main, 0.16),
          pointerEvents: "none",
        },
      })}
    >
      <Stack
        aria-hidden
        spacing={0}
        useFlexGap
        sx={(theme) => ({
          position: "absolute",
          insetBlock: theme.spacing(5),
          insetInlineStart: theme.spacing(0.25),
          zIndex: 2,
          justifyContent: "space-around",
          pointerEvents: "none",
        })}
      >
        {Array.from({ length: 12 }, (_, index) => (
          <Box
            key={index}
            sx={(theme) => ({
              inlineSize: theme.spacing(1.5),
              blockSize: theme.spacing(1.5),
              border: `2px solid ${theme.alpha(theme.palette.primary.main, 0.48)}`,
              borderRadius: "50%",
              backgroundColor: theme.palette.background.default,
            })}
          />
        ))}
      </Stack>
      {props.children}
    </Box>
  );
};
