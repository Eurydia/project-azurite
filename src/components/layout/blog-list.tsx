import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import type { FC, ReactNode } from "react";
import { ShowMore } from "#/components/actions/show-more-button";
import { useVisibleItems } from "#/hooks/use-visible-items";

export const BlogList: FC<{
  initialVisibleItems?: number;
  visibleItemIncrement?: number;
  variant: "stacked" | "bento";
  items: ReadonlyArray<() => ReactNode>;
}> = (props) => {
  const { hiddenCount, nextVisibleCount, showMore, visibleItems } =
    useVisibleItems(props.items, {
      initialVisibleItems: props.initialVisibleItems,
      visibleItemIncrement: props.visibleItemIncrement,
    });

  return (
    <Stack spacing={3}>
      <Grid container spacing={3} columns={2}>
        {visibleItems.map((item, index) => (
          <Grid
            key={`item-${index}`}
            size={{ xs: 2, md: props.variant === "bento" && index < 2 ? 2 : 1 }}
          >
            {item()}
          </Grid>
        ))}
      </Grid>
      <ShowMore
        hiddenCount={hiddenCount}
        nextVisibleCount={nextVisibleCount}
        onClick={showMore}
      />
    </Stack>
  );
};
