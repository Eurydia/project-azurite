import ExpandLessRoundedIcon from "@mui/icons-material/ExpandLessRounded";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import { type FC, Fragment, type ReactNode } from "react";
import { useVisibleItems } from "#/hooks/use-visible-items";

export const BlogList: FC<{
  initialVisibleItems?: number;
  visibleItemIncrement?: number;
  variant: "stacked" | "bento";
  items: ReadonlyArray<() => ReactNode>;
}> = (props) => {
  const { canShowLess, canShowMore, showLess, showMore, visibleItems } =
    useVisibleItems(props.items);

  return props.variant === "stacked" ? (
    <Stack spacing={3}>
      {visibleItems.map((item, index) => (
        <Box
          key={`item-${index}`}
          sx={
            !item.visible
              ? { display: "none", visibility: "hidden" }
              : undefined
          }
        >
          {item.item()}
        </Box>
      ))}
      {(canShowMore || canShowLess) && (
        <Stack direction={"row"} spacing={1}>
          {canShowMore && (
            <Button
              startIcon={<ExpandMoreRoundedIcon />}
              variant="text"
              onClick={showMore}
            >
              Show more
            </Button>
          )}
          {canShowLess && (
            <Button
              startIcon={<ExpandLessRoundedIcon />}
              variant="text"
              onClick={showLess}
            >
              Show less
            </Button>
          )}
        </Stack>
      )}
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
