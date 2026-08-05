import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { FC, ReactNode } from "react";
import { RouterLink } from "../router/router-link";

export const PageSection: FC<{
  id: string;
  title: string;
  anchorText: string;
  body?: string;
  count: number;
  children: ReactNode;
}> = (props) => {
  return (
    <Stack spacing={4}>
      <Stack
        direction={{
          xs: "column",
          sm: "row",
        }}
        spacing={{
          xs: 1,
          sm: 2,
        }}
        sx={{
          alignItems: {
            xs: "flex-start",
            sm: "baseline",
          },
          justifyContent: "space-between",
        }}
      >
        <Stack
          id={props.id}
          direction="row"
          spacing={0.75}
          sx={(theme) => ({
            alignItems: "baseline",
            scrollMarginBlockStart: theme.spacing(3),
          })}
        >
          <RouterLink
            to={"."}
            hash={() => props.id}
            color="textSecondary"
            variant="h4"
            sx={(theme) => ({
              transition: theme.transitions.create(["color"]),
              fontWeight: 700,
              ":hover": {
                color: theme.palette.primary.main,
              },
            })}
          >
            {props.anchorText}
          </RouterLink>
          <Typography
            variant={"h4"}
            color={"textPrimary"}
            sx={{ fontWeight: 700 }}
          >
            {props.title}
          </Typography>
        </Stack>
        {props.count !== undefined && (
          <Typography variant="caption" color="textDisabled">
            {`${String(props.count).padStart(2, "0")} ${props.count === 1 ? "entry" : "entries"}`}
          </Typography>
        )}
      </Stack>
      {props.body && (
        <Typography variant="subtitle1" color="textSecondary">
          {props.body}
        </Typography>
      )}
      {props.children}
    </Stack>
  );
};
