import Typography from "@mui/material/Typography";
import { type FC, type PropsWithChildren, useCallback } from "react";
import { useBlogContentNavigation } from "#/hooks/use-blog-content-navigation";

export const BlogContentNavigation: FC<
  PropsWithChildren<{
    triggerText: string;
  }>
> = (props) => {
  const { navigate } = useBlogContentNavigation();
  const handleNavigate = useCallback(() => {
    navigate(props.children);
  }, [navigate, props.children]);

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
