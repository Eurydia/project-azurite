import Box from "@mui/material/Box";
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
          spacing={1}
          sx={{
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              borderTopColor: (t) => t.palette.divider,
              borderTopStyle: "solid",
              borderTopWidth: 1,
              flex: 1,
            }}
          />
          <Typography
            variant="caption"
            color="textDisabled"
            sx={{ textAlign: "right" }}
          >
            {props.labelSecondary ?? ""}
          </Typography>
        </Stack>
        {props.children}
      </Stack>
    </Paper>
  );
};
