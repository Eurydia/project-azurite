import Grid from "@mui/material/Grid";
import ImageListItem from "@mui/material/ImageListItem";
import Stack from "@mui/material/Stack";
import { type FC, Fragment, type ReactNode } from "react";

export const BlogList: FC<{
  initialVisibleItems?: number;
  visibleItemIncrement?: number;
  variant: "stacked" | "bento";
  items: ReadonlyArray<() => ReactNode>;
}> = (props) => {
  return props.variant === "stacked" ? (
    <Stack spacing={3}>
      {props.items.map((item, index) => (
        <ImageListItem key={`item-${index}`}>{item()}</ImageListItem>
      ))}
    </Stack>
  ) : (
    <Grid container columns={{ xs: 1, md: 2 }} spacing={3}>
      <Grid size={1}>
        <Stack spacing={3}>
          {props.items
            .filter((_, i) => i % 2 === 0)
            .map((item, index) => (
              <Fragment key={`item-${index * 2}`}>{item()}</Fragment>
            ))}
        </Stack>
      </Grid>
      <Grid size={1}>
        <Stack spacing={3}>
          {props.items
            .filter((_, i) => i % 2 === 1)
            .map((item, index) => (
              <Fragment key={`item-${index * 2 + 1}`}>{item()}</Fragment>
            ))}
        </Stack>
      </Grid>
    </Grid>
  );
};
