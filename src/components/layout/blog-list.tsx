import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Stack from "@mui/material/Stack";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import type { FC, ReactNode } from "react";

export const BlogList: FC<{
  initialVisibleItems?: number;
  visibleItemIncrement?: number;
  variant: "stacked" | "bento";
  items: ReadonlyArray<() => ReactNode>;
}> = (props) => {
  const t = useTheme();
  const isXS = useMediaQuery(t.breakpoints.down("sm"));
  return props.variant === "stacked" ? (
    <Stack spacing={3} sx={{ paddingX: 1 }}>
      {props.items.map((item, index) => (
        <ImageListItem key={`item-${index}`}>{item()}</ImageListItem>
      ))}
    </Stack>
  ) : (
    <ImageList
      cols={isXS ? 1 : 2}
      variant="masonry"
      gap={24}
      sx={{ paddingX: 1 }}
    >
      {props.items.map((item, index) => (
        <ImageListItem key={`item-${index}`}>{item()}</ImageListItem>
      ))}
    </ImageList>
  );
};
