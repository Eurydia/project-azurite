import Typography from "@mui/material/Typography";
import { type FC, type PropsWithChildren, useCallback } from "react";
import { useBlogContentNavigation } from "#/hooks/use-blog-content-navigation";

export const BlogContentNavigation: FC<
  PropsWithChildren<{
    triggerText: string;
  }>
> = (props) => {
  const { onNavigate } = useBlogContentNavigation();
  const handleNavigate = useCallback(() => {
    onNavigate(props.children);
  }, [onNavigate, props.children]);

  return (
    <Typography
      onClick={handleNavigate}
      color="primary"
      sx={{ cursor: "pointer" }}
    >
      {props.triggerText}
    </Typography>
  );
};
