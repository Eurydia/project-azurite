import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { FC, PropsWithChildren } from "react";

export const BlogCard: FC<
  PropsWithChildren<{
    labelSecondary?: string;
    labelPrimary?: string;
  }>
> = (props) => {
  return (
    <Paper
      variant="outlined"
      sx={(theme) => ({
        position: "relative",
        overflow: "visible",
        padding: theme.spacing(3),
        borderColor: theme.palette.divider,
        transition: theme.transitions.create(["border-color", "box-shadow"]),
        ":hover": {
          borderColor: theme.alpha(theme.palette.primary.main, 0.72),
          boxShadow: `${theme.spacing(1)} ${theme.spacing(1)} 0 ${theme.palette.primary.main}`,
        },
      })}
    >
      <Stack spacing={3}>
        <Stack
          direction="row"
          sx={{
            alignItems: "flex-start",
            justifyContent: "flex-end",
          }}
        >
          <Stack spacing={0.5}>
            <Typography
              variant="caption"
              color="textDisabled"
              sx={{ textAlign: "right" }}
            >
              {props.labelSecondary}
            </Typography>
            <Typography
              variant="caption"
              color="textDisabled"
              sx={{ textAlign: "right" }}
            >
              {props.labelPrimary}
            </Typography>
          </Stack>
        </Stack>
        {props.children}
      </Stack>
    </Paper>
  );
};
